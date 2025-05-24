import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiHome, 
  FiActivity, 
  FiSettings, 
  FiLogOut,
  FiMenu,
  FiX,
  FiUser,
  FiChevronDown,
  FiMoon,
  FiSun
} from 'react-icons/fi';
import { useAdmin } from '../../contexts/AdminContext';
import '../../styles/navbar.css';

const navItems = [
  { 
    name: 'Dashboard', 
    icon: <FiHome className="icon" />, 
    path: '/admin',
    exact: true
  },
  { 
    name: 'Activity Logs', 
    icon: <FiActivity className="icon" />, 
    path: '/admin/activity'
  },
  { 
    name: 'Settings', 
    icon: <FiSettings className="icon" />, 
    path: '/admin/settings'
  }
];

const AdminNavbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const { currentUser, logout } = useAdmin();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Initialize dark mode from local storage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Initialize dark mode from local storage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProfileOpen(false);
  }, [location.pathname]);

  // Check if a nav item is active
  const isActive = (path, exact = false) => {
    return exact 
      ? location.pathname === path 
      : location.pathname.startsWith(path);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <motion.div 
        className="navbar-brand" 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => navigate('/admin')}
      >
        <h1>CrashPlan Admin</h1>
      </motion.div>
      
      <motion.ul 
        className="nav-links"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {/* Navigation Items */}
        {navItems.map((item) => (
          <motion.li 
            key={item.path}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={item.path}
              className={`nav-button ${isActive(item.path, item.exact) ? 'active' : ''}`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </motion.li>
        ))}
        
        {/* Dark Mode Toggle */}
        <motion.li 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="theme-toggle"
        >
          <button
            onClick={toggleDarkMode}
            className="nav-button"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <FiSun className="icon" /> : <FiMoon className="icon" />}
          </button>
        </motion.li>
        
        {/* User Profile */}
        <motion.li 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
          ref={profileRef}
        >
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="profile-button"
            aria-label="User menu"
          >
            <div className="avatar">
              {(currentUser?.displayName || 'A').charAt(0).toUpperCase()}
            </div>
            <span className="username">
              {currentUser?.displayName || 'Admin'}
            </span>
            <FiChevronDown className={`dropdown-arrow ${isProfileOpen ? 'open' : ''}`} />
          </button>
          
          <AnimatePresence>
            {isProfileOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="profile-dropdown"
              >
                <div className="profile-info">
                  <div className="avatar large">
                    {(currentUser?.displayName || 'A').charAt(0).toUpperCase()}
                  </div>
                  <div className="user-details">
                    <h4>{currentUser?.displayName || 'Admin User'}</h4>
                    <p>{currentUser?.email || 'admin@example.com'}</p>
                  </div>
                </div>
                <div className="dropdown-divider" />
                <Link to="/admin/profile" className="dropdown-item">
                  <FiUser className="icon" /> Profile
                </Link>
                <Link to="/admin/settings" className="dropdown-item">
                  <FiSettings className="icon" /> Settings
                </Link>
                <div className="dropdown-divider" />
                <button 
                  onClick={handleLogout}
                  className="dropdown-item logout"
                >
                  <FiLogOut className="icon" /> Sign out
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.li>
      </motion.ul>
      
      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-button"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <FiX className="icon" /> : <FiMenu className="icon" />}
      </button>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
          >
            <div className="mobile-menu-header">
              <h3>Menu</h3>
              <button onClick={toggleMobileMenu} className="close-button">
                <FiX className="icon" />
              </button>
            </div>

            <nav className="mobile-nav">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`mobile-nav-item ${isActive(item.path, item.exact) ? 'active' : ''}`}
                  onClick={toggleMobileMenu}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
            <div className="mobile-footer">
              <button 
                onClick={toggleDarkMode}
                className="theme-toggle-button"
              >
                {darkMode ? (
                  <>
                    <FiSun className="icon" /> Light Mode
                  </>
                ) : (
                  <>
                    <FiMoon className="icon" /> Dark Mode
                  </>
                )}
              </button>
              <button 
                onClick={handleLogout}
                className="logout-button"
              >
                <FiLogOut className="icon" /> Sign Out
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Overlay */}
      {isMobileMenuOpen && (
        <motion.div 
          className="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleMobileMenu}
        />
      )}
    </nav>
  );
};

export default AdminNavbar;
