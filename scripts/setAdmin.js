const { initializeApp } = require('firebase/app');
const { getAuth, signInWithEmailAndPassword, signOut } = require('firebase/auth');
const { getFirestore, doc, setDoc, getDoc } = require('firebase/firestore');
require('dotenv').config();

// Your Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Function to make a user an admin
async function makeAdmin(email, password) {
  try {
    // Sign in the user
    console.log('Signing in...');
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    console.log(`✅ Successfully signed in as ${user.email}`);
    
    // Add user to admins collection
    const adminRef = doc(db, 'admins', user.uid);
    await setDoc(adminRef, {
      email: user.email,
      createdAt: new Date(),
      isAdmin: true
    }, { merge: true });
    
    console.log('✅ Successfully granted admin privileges to:', user.email);
    console.log('User ID:', user.uid);
    
    // Verify the admin was added
    const adminDoc = await getDoc(adminRef);
    if (adminDoc.exists()) {
      console.log('✅ Admin record verified:', adminDoc.data());
    } else {
      console.log('❌ Failed to verify admin record');
    }
    
    return user.uid;
  } catch (error) {
    console.error('❌ Error making user admin:', error);
    throw error;
  } finally {
    // Sign out
    if (auth.currentUser) {
      await signOut(auth);
      console.log('✅ Signed out');
    }
  }
}

// Get email and password from command line arguments
const [email, password] = process.argv.slice(2);

if (!email || !password) {
  console.error('❌ Please provide email and password as arguments');
  console.log('Usage: node scripts/setAdmin.js your-email@example.com your-password');
  process.exit(1);
}

// Run the function
console.log('Starting admin setup...');
makeAdmin(email, password)
  .then(() => {
    console.log('✅ Script completed successfully');
    process.exit(0);
  })
  .catch(error => {
    console.error('❌ Script failed:', error);
    process.exit(1);
  });
