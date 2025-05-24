const { initializeApp } = require('firebase/app');
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');
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
const auth = getAuth(app);

async function getUserId(email, password) {
  try {
    console.log('Signing in...');
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    console.log('✅ Successfully signed in as:', user.email);
    console.log('Your User ID is:', user.uid);
    
    return user.uid;
  } catch (error) {
    console.error('❌ Error:', error.message);
    throw error;
  } finally {
    // Sign out
    await auth.signOut();
    console.log('✅ Signed out');
  }
}

// Get email and password from command line arguments
const [email, password] = process.argv.slice(2);

if (!email || !password) {
  console.error('❌ Please provide email and password as arguments');
  console.log('Usage: node scripts/getUserId.js your-email@example.com your-password');
  process.exit(1);
}

getUserId(email, password)
  .then(() => process.exit(0))
  .catch(() => process.exit(1));
