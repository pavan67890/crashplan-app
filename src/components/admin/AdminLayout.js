import React, { useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAdmin } from '../../contexts/AdminContext';
import AdminNavbar from './AdminNavbar';

// Animation variants for page transitions
const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0, 
    y: -10,
    transition: { duration: 0.2, ease: 'easeIn' }
  }
};

const AdminLayout = () => {
  const { currentUser } = useAdmin();
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!currentUser) {
      navigate('/admin/login');
    }
  }, [currentUser, navigate]);

  // Add smooth page transitions
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  if (!currentUser) {
    return null; // Or a loading spinner while redirecting
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col transition-colors duration-200">
      {/* Admin Navigation */}
      <AdminNavbar />
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto relative">
        <motion.main 
          className="flex-1 relative z-0 overflow-y-auto min-h-full"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <Outlet />
            </div>
          </div>
        </motion.main>
        
        {/* Footer */}
        <footer className="border-t border-gray-100 dark:border-gray-800/50 bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                &copy; {new Date().getFullYear()} CrashPlan. All rights reserved.
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                <span>Admin: Sai</span>
                <span className="mx-2">|</span>
                <a 
                  href="mailto:admincrashplan@gmail.com" 
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  admincrashplan@gmail.com
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
