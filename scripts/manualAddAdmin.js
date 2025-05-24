const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc } = require('firebase/firestore');
require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Your user ID from the previous step
const USER_ID = 'dFyCcX7FM7TiFFTE1gfu1qV0ihA2';
const USER_EMAIL = 'pavansaiteku2@gmail.com';

async function addAdmin() {
  try {
    console.log('Adding admin user...');
    
    await setDoc(doc(db, 'admins', USER_ID), {
      email: USER_EMAIL,
      createdAt: new Date(),
      isAdmin: true
    });
    
    console.log('✅ Successfully added admin user:', USER_EMAIL);
    console.log('User ID:', USER_ID);
    
    return true;
  } catch (error) {
    console.error('❌ Error adding admin user:', error);
    throw error;
  }
}

addAdmin()
  .then(() => process.exit(0))
  .catch(() => process.exit(1));
