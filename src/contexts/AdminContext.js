import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  auth, 
  signInWithEmailAndPassword, 
  firebaseSignOut, 
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from '../firebaseConfig'; // Make sure these are exported from your firebaseConfig
import { isUserAdmin } from '../services/adminService';

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const checkAdminStatus = async (user) => {
    if (!user) {
      setIsAdmin(false);
      return false;
    }
    
    try {
      const adminStatus = await isUserAdmin(user.uid);
      setIsAdmin(adminStatus);
      return adminStatus;
    } catch (err) {
      console.error('Error checking admin status:', err);
      setIsAdmin(false);
      return false;
    }
  };

  const login = async (email, password) => {
    try {
      setError('');
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const isUserAdmin = await checkAdminStatus(userCredential.user);
      
      if (!isUserAdmin) {
        await firebaseSignOut(auth);
        throw new Error('You do not have admin access');
      }
      
      setCurrentUser(userCredential.user);
      return userCredential.user;
    } catch (err) {
      setError(err.message || 'Failed to log in');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await firebaseSignOut(auth);
      setCurrentUser(null);
      setIsAdmin(false);
    } catch (err) {
      console.error('Failed to log out', err);
      throw err;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await checkAdminStatus(user);
      } else {
        setIsAdmin(false);
      }
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const loginWithGoogle = async () => {
    try {
      setError('');
      setLoading(true);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const isUserAnAdmin = await checkAdminStatus(result.user);
      
      if (!isUserAnAdmin) {
        await firebaseSignOut(auth);
        throw new Error('You do not have admin access');
      }
      
      setCurrentUser(result.user);
      return { success: true };
    } catch (err) {
      const errorMessage = err.message || 'Failed to sign in with Google';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const value = {
    currentUser,
    isAuthenticated: !!currentUser && isAdmin,
    isAdmin,
    login,
    loginWithGoogle,
    logout,
    error,
    loading
  };

  return (
    <AdminContext.Provider value={value}>
      {!loading && children}
    </AdminContext.Provider>
  );
};
