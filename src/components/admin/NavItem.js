import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronRight, FiCircle } from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react';

const NavItem = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const hasChildren = item.children && item.children.length > 0;
  const itemRef = useRef(null);
  const dropdownRef = useRef(null);

  // Check if any child is active
  const isActive = item.path 
    ? location.pathname.startsWith(item.path)
    : item.children?.some(child => location.pathname.startsWith(child.path));

  // Auto-open the dropdown if a child is active
  useEffect(() => {
    if (hasChildren && isActive) {
      setIsOpen(true);
    }
  }, [location.pathname, hasChildren, isActive]);

  // Handle click on the parent item
  const handleClick = (e) => {
    if (hasChildren) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  // Animation variants for the dropdown
  const dropdownVariants = {
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        height: { duration: 0.3, ease: 'easeInOut' },
        opacity: { duration: 0.2, delay: 0.1 }
      }
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.2, ease: 'easeInOut' },
        opacity: { duration: 0.1 }
      }
    }
  };

  // Animation for the parent item
  const parentVariants = {
    initial: { opacity: 0, x: -10 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.3,
        ease: 'easeOut',
        delay: index * 0.05
      }
    },
    hover: {
      backgroundColor: 'rgba(99, 102, 241, 0.1)',
      transition: { duration: 0.2 }
    }
  };

  // Animation for the child items
  const childVariants = {
    initial: { opacity: 0, x: -10 },
    animate: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + (i * 0.05),
        duration: 0.2
      }
    })
  };

  return (
    <motion.div 
      className="relative"
      variants={parentVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      ref={itemRef}
    >
      {item.path && !hasChildren ? (
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 group ${
              isActive
                ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-md shadow-blue-500/20'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700/50'
            }`
          }
        >
          {item.icon && (
            <span className={`mr-3 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-600 dark:group-hover:text-white'}`}>
              {item.icon}
            </span>
          )}
          <span className="flex-1">{item.name}</span>
          {item.badge && (
            <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
              isActive 
                ? 'bg-white/20 text-white' 
                : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
            }`}>
              {item.badge}
            </span>
          )}
        </NavLink>
      ) : (
        <button
          onClick={handleClick}
          className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
            isActive
              ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-md shadow-blue-500/20'
              : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700/50'
          }`}
        >
          <div className="flex items-center">
            {item.icon && (
              <span className={`mr-3 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-600 dark:group-hover:text-white'}`}>
                {item.icon}
              </span>
            )}
            <span className="text-left">{item.name}</span>
          </div>
          <div className="flex items-center">
            {item.badge && (
              <span className={`mr-2 px-2 py-0.5 text-xs rounded-full ${
                isActive 
                  ? 'bg-white/20 text-white' 
                  : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
              }`}>
                {item.badge}
              </span>
            )}
            {hasChildren && (
              <motion.span 
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-gray-400"
              >
                <FiChevronDown className="w-4 h-4" />
              </motion.span>
            )}
          </div>
        </button>
      )}

      {/* Dropdown menu */}
      {hasChildren && (
        <AnimatePresence>
          <motion.div
            ref={dropdownRef}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            variants={dropdownVariants}
            className="overflow-hidden"
          >
            <div className="pl-4 pt-1 space-y-1">
              {item.children.map((child, i) => (
                <NavLink
                  key={i}
                  to={child.path}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2.5 text-sm rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 font-medium'
                        : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700/30'
                    }`
                  }
                >
                  <motion.span 
                    className="w-1.5 h-1.5 rounded-full bg-current opacity-70 mr-3"
                    variants={childVariants}
                    custom={i}
                    initial="initial"
                    animate="animate"
                  />
                  <span className="truncate">{child.name}</span>
                  {child.badge && (
                    <span className="ml-auto px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                      {child.badge}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default NavItem;
