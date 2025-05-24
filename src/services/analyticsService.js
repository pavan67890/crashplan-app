import { 
  db,
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  increment, 
  query, 
  orderBy, 
  getDocs, 
  limit, 
  serverTimestamp 
} from '../firebaseConfig';
import { engineeringDisciplines } from '../data/careerMapData';
import { trackCourseView } from './courseViewService';

export const initializeAnalytics = async () => {
  try {
    // Initialize course views with default values
    const analyticsRef = collection(db, 'analytics');
    const courseViewsRef = collection(analyticsRef, 'courseViews');
    const courseSearchRef = collection(analyticsRef, 'searchCounts');
    const userProgressRef = collection(analyticsRef, 'userProgress');

    // Get all courses from engineering disciplines
    const allCourses = Object.values(engineeringDisciplines)
      .flatMap(discipline => Object.values(discipline.courses));

    // Initialize course views
    for (const course of allCourses) {
      const courseDocRef = doc(courseViewsRef, course.id);
      await setDoc(courseDocRef, {
        views: 0,
        name: course.name,
        discipline: course.discipline,
        duration: course.duration || 'N/A',
        tag: course.tag || 'Popular Course'
      }, { merge: true });
    }

    // Initialize search counts with some default values
    const defaultSearches = ['civil engineering', 'structural engineering', 'mechanical engineering', 'electrical engineering'];
    for (const search of defaultSearches) {
      const searchDocRef = doc(courseSearchRef, search);
      await setDoc(searchDocRef, {
        count: 0
      }, { merge: true });
    }

    // Initialize user progress collection
    await setDoc(doc(userProgressRef, 'schema'), {
      schema: {
        completedCourses: 0,
        totalCourses: allCourses.length,
        completionRate: 0,
        activeDays: 0,
        lastActivity: null,
        courses: allCourses.map(course => ({
          id: course.id,
          name: course.name,
          discipline: course.discipline,
          status: 'not_started',
          progress: 0,
          lastAccessed: null
        }))
      }
    }, { merge: true });

  } catch (error) {
    console.error('Error initializing analytics:', error);
  }
};

/**
 * Increment the view count for a course
 * @deprecated Use trackCourseView from courseViewService instead
 * @param {string} courseId - The ID of the course
 */
export const incrementCourseView = async (courseId) => {
  if (!courseId) return;
  
  try {
    // Use the new course view tracking service
    await trackCourseView(courseId);
    console.log(`View count tracked for course: ${courseId}`);
  } catch (error) {
    console.error('Error tracking course view:', error);
  }
};

export const updateUserProgress = async (userId, courseId, progress) => {
  if (!userId || !courseId) {
    console.warn('Missing userId or courseId in updateUserProgress');
    return null;
  }

  try {
    // Use the same document path as in getUserProgress
    const userDocRef = doc(db, 'userProgress', userId);
    const now = serverTimestamp();
    
    // First get the current document
    const userDoc = await getDoc(userDocRef);
    let userData = {};
    
    if (userDoc.exists()) {
      userData = userDoc.data();
    }
    
    // Update the courses map
    const courses = userData.courses || {};
    const currentCourse = courses[courseId] || { progress: 0 };
    
    // Only update if progress has increased
    if (progress > currentCourse.progress) {
      courses[courseId] = {
        status: progress >= 100 ? 'completed' : 'in_progress',
        progress: progress,
        lastAccessed: now
      };
      
      // Calculate completion stats
      const courseList = Object.values(courses);
      const completedCourses = courseList.filter(c => c.status === 'completed').length;
      const totalCourses = Math.max(courseList.length, 1); // Prevent division by zero
      
      // Update the document
      await setDoc(userDocRef, {
        ...userData,
        courses,
        completedCourses,
        totalCourses: courseList.length,
        completionRate: Math.round((completedCourses / totalCourses) * 100),
        lastActivity: now,
        lastUpdated: now
      }, { merge: true });
      
      console.log(`Updated progress for user ${userId} on course ${courseId}: ${progress}%`);
      return true;
    }
    
    return false; // No update was needed
  } catch (error) {
    console.error('Error updating user progress:', error);
    return false;
  }
};

export const getUserProgress = async (userId) => {
  try {
    // Use a subcollection for user progress to avoid document reference issues
    const userDocRef = doc(db, 'userProgress', userId);
    const userDoc = await getDoc(userDocRef);
    
    if (userDoc.exists()) {
      const data = userDoc.data();
      return {
        completedCourses: data.completedCourses || 0,
        totalCourses: data.totalCourses || 0,
        completionRate: data.completionRate || 0,
        activeDays: data.activeDays || 0,
        courses: data.courses || [],
        lastActivity: data.lastActivity
      };
    } else {
      // Initialize with default values if document doesn't exist
      const defaultData = {
        completedCourses: 0,
        totalCourses: 0,
        completionRate: 0,
        activeDays: 0,
        courses: [],
        lastActivity: null
      };
      await setDoc(userDocRef, defaultData);
      return defaultData;
    }
  } catch (error) {
    console.error('Error getting user progress:', error);
    // Return default values in case of error
    return {
      completedCourses: 0,
      totalCourses: 0,
      completionRate: 0,
      activeDays: 0,
      courses: [],
      lastActivity: null
    };
  }
};

/**
 * Get top viewed courses
 * @deprecated Use getTopViewedCourses from courseViewService instead
 * @param {number} limitCount - Maximum number of courses to return
 * @returns {Promise<Array>} Array of top viewed courses
 */
export const getTopCourses = async (limitCount = 6) => {
  try {
    const { getTopViewedCourses } = await import('./courseViewService');
    return await getTopViewedCourses(limitCount);
  } catch (error) {
    console.error('Error fetching top courses:', error);
    return [];
  }
};

export const incrementSearchCount = async (searchTerm) => {
  try {
    const searchDocRef = doc(db, 'searchCounts', searchTerm.toLowerCase());
    await setDoc(searchDocRef, { 
      count: increment(1),
      lastSearched: new Date().toISOString()
    }, { merge: true });
  } catch (error) {
    console.error('Error incrementing search count:', error);
  }
};

export const getTopSearches = async (resultLimit = 6) => {
  try {
    const searchRef = collection(db, 'searchCounts');
    const q = query(searchRef, orderBy('count', 'desc'), limit(resultLimit));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching top searches:', error);
    return [];
  }
};
