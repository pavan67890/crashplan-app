import { 
  db,
  collection, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  increment, 
  query, 
  orderBy, 
  limit, 
  getDocs,
  serverTimestamp 
} from '../firebaseConfig';
import { mostViewedCourses } from '../data/mostViewedCourses';
import { engineeringDisciplines } from '../data/careerMapData';

const COURSE_VIEWS_COLLECTION = 'courseViews';

/**
 * Increment the view count for a course
 * @param {string} courseId - The ID of the course
 * @param {string} courseName - The name of the course
 */
export const trackCourseView = async (courseId, courseName) => {
  if (!courseId) return;
  
  try {
    const courseRef = doc(db, COURSE_VIEWS_COLLECTION, courseId);
    const courseSnap = await getDoc(courseRef);
    const timestamp = serverTimestamp();
    
    if (courseSnap.exists()) {
      // Update existing course view count
      await updateDoc(courseRef, {
        viewCount: increment(1),
        lastViewed: timestamp,
        updatedAt: timestamp
      });
    } else {
      // Create new course view entry
      await setDoc(courseRef, {
        id: courseId,
        name: courseName || courseId,
        discipline: 'CSE', // Default discipline
        viewCount: 1,
        lastViewed: timestamp,
        createdAt: timestamp,
        updatedAt: timestamp
      });
    }
  } catch (error) {
    console.error('Error tracking course view:', error);
  }
};

/**
 * Get the top N most viewed courses
 * @param {number} limit - Maximum number of courses to return
 * @returns {Promise<Array>} Array of top viewed courses
 */
export const getTopViewedCourses = async (limitCount = 3) => {
  try {
    const courseViewsRef = collection(db, 'courseViews');
    const q = query(
      courseViewsRef,
      orderBy('viewCount', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      console.log('No course views found in the database');
      return getMockTopViewedCourses().slice(0, limitCount);
    }
    
    // First, build a map of all courses from career map data for lookup
    const courseDisciplineMap = {};
    Object.entries(engineeringDisciplines).forEach(([disciplineCode, disciplineData]) => {
      if (disciplineData.courses) {
        Object.values(disciplineData.courses).forEach(course => {
          if (course.name && !courseDisciplineMap[course.name]) {
            courseDisciplineMap[course.name] = disciplineCode;
          }
        });
      }
    });

    // Map the documents to include the ID and data
    const courses = querySnapshot.docs.map(doc => {
      const data = doc.data();
      
      // Find the corresponding course in the static data
      const staticCourse = mostViewedCourses.find(c => 
        c.id.toString() === doc.id.toString() || 
        c.name === data.name
      );
      
      // Get the exact course name and initialize discipline
      let courseName = data.name || doc.id;
      let discipline = 'IT'; // Default to IT
      
      // Try to find the discipline from our map first
      if (courseDisciplineMap[courseName]) {
        discipline = courseDisciplineMap[courseName];
      } 
      // If not found in map but found in static data, use that
      else if (staticCourse) {
        courseName = staticCourse.name;
        discipline = staticCourse.discipline;
      }
      
      return {
        id: doc.id,
        name: courseName,
        discipline: discipline,
        tag: data.tag || staticCourse?.tag || '',
        duration: data.duration || staticCourse?.duration || '',
        image: data.image || staticCourse?.image || '',
        views: data.viewCount || 0,
        ...data
      };
    });
    
    console.log('Fetched top viewed courses:', courses);
    return courses;
  } catch (error) {
    console.error('Error fetching top viewed courses, using static data:', error);
    // Return static data if there's an error
    return mostViewedCourses.slice(0, limitCount).map(course => ({
      ...course,
      views: course.views || 0
    }));
  }
};

/**
 * Get mock data for development
 * @returns {Array} Mock data for development
 */
const getMockTopViewedCourses = () => {
  return [
    { id: 'computer-science', name: 'Computer Science', viewCount: 1245 },
    { id: 'data-science', name: 'Data Science', viewCount: 987 },
    { id: 'business', name: 'Business Administration', viewCount: 765 },
  ];
};

// For development - uncomment to use mock data
// export const getTopViewedCourses = async (limit = 3) => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(getMockTopViewedCourses().slice(0, limit));
//     }, 500);
//   });
// };
