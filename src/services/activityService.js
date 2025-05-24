import { 
  db,
  doc, 
  setDoc, 
  serverTimestamp, 
  getDoc, 
  collection, 
  query, 
  orderBy, 
  limit, 
  getDocs
} from '../firebaseConfig';

export const updateUserActivity = async (userId, activity) => {
  try {
    console.log('updateUserActivity called with:', { userId, activity });
    
    if (!userId) {
      console.error('No user ID provided to updateUserActivity');
      return null;
    }

    const userRef = doc(db, 'users', userId);
    console.log('Getting user document...');
    const userDoc = await getDoc(userRef);
    
    // Create activity data without timestamp first
    const activityData = {
      ...activity,
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
    
    console.log('Prepared activity data:', activityData);

    if (userDoc.exists()) {
      console.log('User document exists, adding activity...');
      const activityRef = doc(db, 'users', userId, 'activities', activityData.id);
      const activityToSave = {
        ...activityData,
        timestamp: serverTimestamp()
      };
      console.log('Saving activity:', activityToSave);
      await setDoc(activityRef, activityToSave);
      console.log('Activity saved successfully');
    } else {
      console.log('User document does not exist, creating user and adding activity...');
      await setDoc(userRef, { 
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      const activityRef = doc(db, 'users', userId, 'activities', activityData.id);
      const activityToSave = {
        ...activityData,
        timestamp: serverTimestamp()
      };
      console.log('Saving activity for new user:', activityToSave);
      await setDoc(activityRef, activityToSave);
      console.log('User and activity created successfully');
    }

    console.log('Returning activity data:', activityData);
    return activityData;
  } catch (error) {
    console.error('Error updating user activity:', error, {
      message: error.message,
      stack: error.stack,
      activity: activity
    });
    throw error;
  }
};

export const getUserActivities = async (userId, limitCount = 1) => {
  try {
    console.log('Getting activities for user:', userId);
    if (!userId) {
      console.log('No user ID provided, returning empty array');
      return [];
    }

    console.log('Querying activities collection...');
    const activitiesRef = collection(db, 'users', userId, 'activities');
    const q = query(
      activitiesRef,
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );

    console.log('Executing Firestore query...');
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      console.log('No activities found for user:', userId);
      return [];
    }
    
    const activities = querySnapshot.docs.map(doc => {
      const data = doc.data();
      console.log('Retrieved activity:', {
        id: doc.id,
        type: data.type,
        courseName: data.courseName,
        timestamp: data.timestamp?.toDate?.() || data.timestamp
      });
      return {
        id: doc.id,
        ...data
      };
    });
    
    console.log(`Returning ${activities.length} activities`);
    return activities;
  } catch (error) {
    console.error('Error getting user activities:', error);
    return [];
  }
};
