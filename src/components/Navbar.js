import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSearch, FaHome, FaTachometerAlt, FaBook, FaSignInAlt, FaUserPlus, FaSignOutAlt, FaMoon, FaSun } from 'react-icons/fa';
import '../styles/navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const { currentUser, logout } = auth || {};
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && 
          !event.target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };
  const [showSearchResults, setShowSearchResults] = useState(false);
  
  // Available courses with their full names and disciplines
  const availableCourses = [
    // CSE Courses
    'Data Structures and Algorithms (CSE)',
    'Web Development (CSE)',
    'Operating Systems (CSE)',
    'Database Management (CSE)',
    'Software Testing (CSE)',
    'Cloud Computing (CSE)',
    
    // ECE Courses
    'Digital Signal Processing (ECE)',
    'Embedded Systems (ECE)',
    'Control Systems (ECE)',
    'Telecommunications (ECE)',
    'Microelectronics (ECE)',
    
    // ME Courses
    'Thermodynamics (ME)',
    'Fluid Mechanics (ME)',
    'Machine Design (ME)',
    'Manufacturing Processes (ME)',
    'Robotics (ME)',
    
    // CE Courses
    'Ceramic Materials (CE)',
    'Ceramic Processing (CE)',
    'Ceramic Engineering Design (CE)',
    'Ceramic Manufacturing (CE)',
    
    // CHE Courses
    'Process Engineering (CHE)',
    'Biochemical Engineering (CHE)',
    'Chemical Reaction Engineering (CHE)',
    'Separation Processes (CHE)',
    
    // AE Courses
    'Avionics Systems (AE)',
    'Aircraft Design (AE)',
    'Propulsion Systems (AE)',
    'Aircraft Systems (AE)',
    
    // IT Courses
    'Database Management Systems (IT)',
    'Network Security (IT)',
    'Software Development (IT)',
    'Data Science (IT)',
    'Cyber Security (IT)',
    
    // DS Courses
    'Machine Learning (DS)',
    'Big Data Technologies (DS)',
    'Artificial Intelligence (DS)',
    'Natural Language Processing (DS)',
    'Computer Vision (DS)',
    
    // AI Courses
    'AI Fundamentals (AI)',
    'Robotics Fundamentals (AI)',
    'AI Ethics (AI)'
  ];
  
  // Function to get course name without discipline
  const getCourseName = (fullCourseName) => {
    return fullCourseName.split(' (')[0];
  };
  
  // Function to get discipline from full course name
  const getDiscipline = (fullCourseName) => {
    const match = fullCourseName.match(/\(([^)]+)\)/);
    return match ? match[1] : 'CSE'; // Default to CSE if no discipline found
  };
  
  // Function to format course for display (shows only course name)
  const formatCourseForDisplay = (fullCourseName) => {
    return getCourseName(fullCourseName);
  };
  
  // Filter and prepare courses for display and navigation
  const filteredCourses = availableCourses
    .map(course => ({
      displayName: formatCourseForDisplay(course),
      fullName: course,
      courseName: getCourseName(course),
      discipline: getDiscipline(course)
    }))
    .filter(({ courseName }) => {
      // Ensure searchQuery is a string before calling toLowerCase
      const query = String(searchQuery || '').toLowerCase().trim();
      return courseName.toLowerCase().includes(query);
    })
    .sort((a, b) => {
      // Sort exact matches to the top
      const query = searchQuery.toLowerCase();
      const aName = a.courseName.toLowerCase();
      const bName = b.courseName.toLowerCase();
      
      if (aName === query) return -1;
      if (bName === query) return 1;
      if (aName.startsWith(query) && !bName.startsWith(query)) return -1;
      if (!aName.startsWith(query) && bName.startsWith(query)) return 1;
      return aName.localeCompare(bName);
    })
    .slice(0, 5); // Show only first 5 matches

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navigateToCourse = (courseData) => {
    const courseParam = encodeURIComponent(courseData.courseName);
    navigate(`/career-map?discipline=${courseData.discipline}&course=${courseParam}`);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Ensure searchQuery is a string before calling trim
    const query = String(searchQuery || '').trim();
    if (query === '') return;
    
    // If there are filtered courses and the user presses enter, select the first one
    if (filteredCourses.length > 0) {
      navigateToCourse(filteredCourses[0]);
      setSearchQuery('');
      setShowSearchResults(false);
      return;
    }
    
    // No matches found
    alert('The course you searched is currently unavailable in our database. We will try our best to add it. Thank you!');
    setSearchQuery('');
    setShowSearchResults(false);
  };
  
  const handleCourseSelect = (course) => {
    // Set the display name in the search input
    setSearchQuery(course.courseName);
    navigateToCourse(course);
    setShowSearchResults(false);
  };

  // Navigation items
  const navItems = [
    { path: '/', icon: <FaHome />, label: 'Home' },
    { path: '/dashboard', icon: <FaTachometerAlt />, label: 'Dashboard' },
    { path: '/select-course', icon: <FaBook />, label: 'Courses' },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button" 
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          {/* Logo/Brand */}
          <motion.div 
            className="navbar-brand" 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/')}
          >
            <h1>CrashPlan</h1>
          </motion.div>
      <motion.ul 
        className="nav-links"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {/* Search Course Section */}
        <motion.li 
          className="search-container"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSearchSubmit} className="search-form">
            <div className={`search-input-container ${isSearchFocused ? 'focused' : ''}`}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => {
                  setIsSearchFocused(true);
                  setShowSearchResults(true);
                }}
                onBlur={() => {
                  setTimeout(() => setShowSearchResults(false), 200);
                }}
                placeholder="Search for a course..."
                className="search-input"
                aria-label="Search courses"
              />
              <motion.button 
                type="submit"
                className="search-submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Search"
              >
                <i className="fas fa-search" />
              </motion.button>
            </div>
            <AnimatePresence>
              {showSearchResults && searchQuery && (
                <motion.div 
                  className="search-results"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {filteredCourses.length > 0 ? (
                    filteredCourses.map((course, index) => (
                      <motion.div
                        key={index}
                        className="search-result-item"
                        onClick={() => handleCourseSelect(course)}
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <i className="fas fa-book" />
                        <span>{course.displayName}</span>
                      </motion.div>
                    ))
                  ) : (
                    <div className="no-results">
                      <i className="fas fa-search" />
                      <span>No courses found. Try a different search term.</span>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.li>
        <motion.li 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={() => navigate('/')}
            className={`nav-button ${isActive('/') ? 'active' : ''}`}
          >
            <motion.i className="fas fa-home" whileHover={{ rotate: 45 }} />
            <span>Home</span>
          </button>
        </motion.li>
        <motion.li 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={() => navigate('/dashboard')}
            className={`nav-button ${isActive('/dashboard') ? 'active' : ''}`}
          >
            <motion.i className="fas fa-tachometer-alt" whileHover={{ rotate: 45 }} />
            <span>Dashboard</span>
          </button>
        </motion.li>
        <motion.li 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={() => navigate('/select-course')}
            className={`nav-button ${isActive('/select-course') ? 'active' : ''}`}
          >
            <motion.i className="fas fa-book" whileHover={{ rotate: 45 }} />
            <span>Select Course</span>
          </button>
        </motion.li>
      </motion.ul>
      <motion.div 
        className="auth-section"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
          {currentUser ? (
            <motion.div 
              className="user-info"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="user-avatar"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {currentUser.photoURL ? (
                  <img src={currentUser.photoURL} alt="Profile" className="avatar-img" />
                ) : (
                  <motion.span 
                    className="avatar-initials"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {currentUser.displayName ? currentUser.displayName[0].toUpperCase() : 'U'}
                  </motion.span>
                )}
              </motion.div>
              <div className="user-details">
                <motion.span 
                  className="user-name"
                  whileHover={{ scale: 1.05 }}
                >
                  {currentUser.displayName || currentUser.email}
                </motion.span>
                <motion.button
                  onClick={handleLogout}
                  className="nav-button logout-btn centered"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.i 
                    className="fas fa-sign-out-alt"
                    whileHover={{ rotate: 45 }}
                  />
                  <span>Logout</span>
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              className="auth-buttons"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.button 
                onClick={() => navigate('/login')} 
                className="nav-button secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.i 
                  className="fas fa-sign-in-alt"
                  whileHover={{ rotate: 45 }}
                />
                <span>Login</span>
              </motion.button>
              <motion.button 
                onClick={() => navigate('/signup')} 
                className="nav-button primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.i 
                  className="fas fa-user-plus"
                  whileHover={{ rotate: 45 }}
                />
                <span>Signup</span>
              </motion.button>
            </motion.div>
          )}
          
          {/* Theme Toggle Button - Desktop */}
          <motion.button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </motion.button>
        </motion.div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMobileMenu}
            />
            
            {/* Mobile Menu Content */}
            <motion.div
              ref={mobileMenuRef}
              className="mobile-menu-content"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="mobile-menu-header">
                <h3>Menu</h3>
                <button 
                  className="mobile-menu-close"
                  onClick={toggleMobileMenu}
                  aria-label="Close menu"
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="mobile-menu-body">
                {/* User Info */}
                {currentUser && (
                  <div className="mobile-user-info">
                    <div className="user-avatar">
                      {currentUser.photoURL ? (
                        <img src={currentUser.photoURL} alt={currentUser.displayName || 'User'} />
                      ) : (
                        <div className="user-initials">
                          {currentUser.displayName ? currentUser.displayName[0].toUpperCase() : 'U'}
                        </div>
                      )}
                    </div>
                    <div className="user-details">
                      <h4>{currentUser.displayName || 'User'}</h4>
                      <p>{currentUser.email}</p>
                    </div>
                  </div>
                )}
                
                {/* Mobile Search */}
                <div className="mobile-search-container">
                  <form onSubmit={handleSearchSubmit} className="mobile-search-form">
                    <div className={`search-input-container ${isSearchFocused ? 'focused' : ''}`}>
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => {
                          setIsSearchFocused(true);
                          setShowSearchResults(true);
                        }}
                        onBlur={() => {
                          setTimeout(() => setShowSearchResults(false), 200);
                        }}
                        placeholder="Search for a course..."
                        className="mobile-search-input"
                        aria-label="Search courses"
                      />
                      <button 
                        type="submit"
                        className="search-submit"
                        aria-label="Search"
                      >
                        <i className="fas fa-search" />
                      </button>
                    </div>
                    <AnimatePresence>
                      {showSearchResults && searchQuery && (
                        <motion.div 
                          className="mobile-search-results"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {filteredCourses.length > 0 ? (
                            filteredCourses.map((course, index) => (
                              <motion.div
                                key={index}
                                className="search-result-item"
                                onClick={() => handleCourseSelect(course)}
                                whileHover={{ x: 5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                              >
                                <i className="fas fa-book" />
                                <span>{course.displayName}</span>
                              </motion.div>
                            ))
                          ) : (
                            <div className="mobile-no-results">
                              <i className="fas fa-search" />
                              <span>No courses found. Try a different search term.</span>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </div>

                {/* Navigation Links */}
                <nav className="mobile-nav-links">
                  {navItems.map((item) => (
                    <button
                      key={item.path}
                      className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                      onClick={() => navigate(item.path)}
                    >
                      <span className="nav-icon">{item.icon}</span>
                      <span className="nav-label">{item.label}</span>
                    </button>
                  ))}
                </nav>
                
                {/* Theme Toggle */}
                <button 
                  className="mobile-theme-toggle"
                  onClick={toggleTheme}
                  aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                >
                  <span className="theme-icon">
                    {isDarkMode ? <FaSun /> : <FaMoon />}
                  </span>
                  <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
                
                {/* Auth Buttons */}
                <div className="mobile-auth-buttons">
                  {currentUser ? (
                    <button 
                      className="auth-button logout"
                      onClick={handleLogout}
                    >
                      <FaSignOutAlt />
                      <span>Logout</span>
                    </button>
                  ) : (
                    <>
                      <button 
                        className="auth-button login"
                        onClick={() => navigate('/login')}
                      >
                        <FaSignInAlt />
                        <span>Login</span>
                      </button>
                      <button 
                        className="auth-button signup"
                        onClick={() => navigate('/signup')}
                      >
                        <FaUserPlus />
                        <span>Sign Up</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
