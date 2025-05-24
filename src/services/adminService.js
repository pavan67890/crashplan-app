import { 
  db, 
  doc, 
  setDoc, 
  getDoc, 
  collection, 
  getDocs,
  serverTimestamp 
} from '../firebaseConfig';

const ADMINS_COLLECTION = 'admins';

/**
 * Grant admin privileges to a user
 * @param {string} userId - The Firebase Auth UID of the user
 * @param {string} email - The email of the user
 * @returns {Promise<void>}
 */
export const makeAdmin = async (userId, email) => {
  try {
    await setDoc(doc(db, ADMINS_COLLECTION, userId), {
      email,
      createdAt: serverTimestamp(),
      isAdmin: true
    });
    console.log(`User ${email} (${userId}) has been granted admin privileges`);
  } catch (error) {
    console.error('Error making user admin:', error);
    throw error;
  }
};

/**
 * Check if a user is an admin
 * @param {string} userId - The Firebase Auth UID of the user
 * @returns {Promise<boolean>}
 */
export const isUserAdmin = async (userId) => {
  try {
    if (!userId) return false;
    
    const adminDoc = await getDoc(doc(db, ADMINS_COLLECTION, userId));
    return adminDoc.exists() && adminDoc.data().isAdmin === true;
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
};

/**
 * Get all admin users
 * @returns {Promise<Array<{id: string, email: string, createdAt: Date}>>}
 */
export const getAllAdmins = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, ADMINS_COLLECTION));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      // Convert Firestore timestamp to JS Date
      createdAt: doc.data().createdAt?.toDate() || null
    }));
  } catch (error) {
    console.error('Error getting admins:', error);
    return [];
  }
};
