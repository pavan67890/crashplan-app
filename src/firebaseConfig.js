// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut as firebaseSignOut, 
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword 
} from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  collection, 
  getDocs,
  query,
  orderBy,
  limit,
  serverTimestamp,
  increment,
  updateDoc,
  deleteDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0I7Jm6HrvQLljgjtrt6CM2fohFrVDlqY",
  authDomain: "crashplan-f6e2e.firebaseapp.com",
  projectId: "crashplan-f6e2e",
  storageBucket: "crashplan-f6e2e.firebasestorage.app",
  messagingSenderId: "719685268706",
  appId: "1:719685268706:web:2de1c9e8defea1c724dabb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { 
  // Auth exports
  auth, 
  signInWithEmailAndPassword, 
  firebaseSignOut, 
  onAuthStateChanged, 
  GoogleAuthProvider, 
  signInWithPopup, 
  createUserWithEmailAndPassword,
  
  // Firestore exports
  db,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  serverTimestamp,
  increment,
  updateDoc,
  deleteDoc
};
