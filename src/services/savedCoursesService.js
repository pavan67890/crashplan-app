import { db } from '../firebaseConfig';
import { 
  doc, 
  setDoc, 
  getDoc, 
  collection, 
  query, 
  orderBy, 
  getDocs, 
  deleteDoc,
  runTransaction,
  serverTimestamp
} from 'firebase/firestore';
import { updateUserActivity } from './activityService';

export const saveCourse = async (userId, course) => {
  console.log('Starting saveCourse with:', { userId, course });
  
  if (!userId || !course) {
    const error = new Error('Invalid user ID or course data');
    console.error('Validation error:', error);
    throw error;
  }

  try {
    // Generate a unique ID for the course if not provided
    const courseId = course.id || `${course.name?.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`;
    console.log('Using courseId:', courseId);

    // First, check if the course is already saved (without transaction for simplicity)
    const courseRef = doc(db, 'users', userId, 'savedCourses', courseId);
    const existingCourse = await getDoc(courseRef);
    
    if (existingCourse.exists()) {
      const error = new Error('This course is already in your saved courses.');
      console.log('Course already exists:', error.message);
      throw error;
    }

    // Check the current number of saved courses
    const savedCoursesRef = collection(db, 'users', userId, 'savedCourses');
    const savedCoursesSnapshot = await getDocs(query(savedCoursesRef));
    
    const maxSavedCourses = 5;
    if (savedCoursesSnapshot.size >= maxSavedCourses) {
      const savedCourses = [];
      savedCoursesSnapshot.forEach(doc => {
        const data = doc.data();
        savedCourses.push({
          id: doc.id,
          name: data.name || 'Untitled Course',
          discipline: data.discipline || 'Unknown'
        });
      });
      
      const coursesList = savedCourses
        .map(c => `- ${c.name} (${c.discipline})`)
        .join('\n');
        
      const error = new Error(
        `You can only save up to ${maxSavedCourses} courses. ` +
        `Please remove one of your existing courses before saving more.\n\n` +
        `Your saved courses (${savedCourses.length}/${maxSavedCourses}):\n${coursesList}`
      );
      console.log('Max courses limit reached:', error.message);
      throw error;
    }

    // Prepare course data
    const courseData = {
      id: courseId, // Use the generated ID
      name: course.name || 'Untitled Course',
      discipline: course.discipline || 'Unknown',
      savedAt: serverTimestamp(),
      description: course.description || '',
      learningTime: course.learningTime || '',
      difficulty: course.difficulty || 0,
      logicalThinking: course.logicalThinking || 0,
      memoryBased: course.memoryBased || 0,
      presentWorth: course.presentWorth || 0,
      overallRating: course.overallRating || 0
    };

    console.log('Saving course data:', courseData);
    
    // Save the course
    await setDoc(courseRef, courseData);
    console.log('Course saved successfully');

    // Log activity after successful save
    try {
      await updateUserActivity(userId, {
        type: 'course_save',
        courseId: courseId,
        courseName: course.name,
        discipline: course.discipline,
        timestamp: serverTimestamp()
      });
      console.log('Activity logged successfully');
    } catch (activityError) {
      console.error('Error logging activity (non-critical):', activityError);
      // Don't fail the whole operation if activity logging fails
    }

    return true;
  } catch (error) {
    console.error('Error in saveCourse:', error);
    throw error; // Re-throw to be caught by the calling function
  }
};

export const getSavedCourses = async (userId) => {
  try {
    console.log('Getting saved courses for user:', userId);
    const savedCoursesRef = collection(db, 'users', userId, 'savedCourses');
    const q = query(savedCoursesRef, orderBy('savedAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const courses = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    console.log(`Retrieved ${courses.length} saved courses:`, courses);
    return courses;
  } catch (error) {
    console.error('Error getting saved courses:', error);
    return [];
  }
};

export const isCourseSaved = async (userId, courseId) => {
  try {
    const savedCoursesRef = doc(db, 'users', userId, 'savedCourses', courseId);
    const docSnap = await getDoc(savedCoursesRef);
    return docSnap.exists();
  } catch (error) {
    console.error('Error checking saved course:', error);
    return false;
  }
};

// Debug function to clear all saved courses
export const clearAllSavedCourses = async (userId) => {
  try {
    const savedCoursesRef = collection(db, 'users', userId, 'savedCourses');
    const querySnapshot = await getDocs(savedCoursesRef);
    
    const deletePromises = [];
    querySnapshot.forEach((doc) => {
      deletePromises.push(deleteDoc(doc.ref));
    });
    
    await Promise.all(deletePromises);
    console.log('All saved courses cleared successfully');
    return { success: true, count: deletePromises.length };
  } catch (error) {
    console.error('Error clearing saved courses:', error);
    throw error;
  }
};

export const removeSavedCourse = async (userId, courseId) => {
  try {
    const courseRef = doc(db, 'users', userId, 'savedCourses', courseId);
    
    // Get course data before deleting for the activity log
    const courseDoc = await getDoc(courseRef);
    if (!courseDoc.exists()) {
      throw new Error('Course not found in saved courses');
    }
    
    const courseData = courseDoc.data();
    
    // Delete the course
    await deleteDoc(courseRef);
    
    // Log the removal activity
    try {
      console.log('Logging course removal activity:', {
        userId,
        courseId,
        courseName: courseData.name
      });
      
      await updateUserActivity(userId, {
        type: 'course_remove',
        courseId: courseId,
        courseName: courseData.name,
        discipline: courseData.discipline,
        timestamp: new Date().toISOString()
      });
      
      console.log('Successfully logged course removal activity');
    } catch (error) {
      console.error('Error logging activity:', error, {
        message: error.message,
        stack: error.stack
      });
      // Continue even if activity logging fails
    }
    
    // Dispatch event to notify about course removal
    const event = new CustomEvent('courseRemoved', {
      detail: { courseId, userId }
    });
    window.dispatchEvent(event);
    
    return true;
  } catch (error) {
    console.error('Error removing saved course:', error);
    return false;
  }
};
