import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentYear] = useState(new Date().getFullYear());
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.2, 0.8, 0.2, 1]
      }
    }
  };

  const hoverVariants = {
    hover: { 
      y: -2,
      transition: { 
        type: 'spring',
        stiffness: 400,
        damping: 10
      } 
    },
    tap: { 
      scale: 0.98,
      transition: { 
        type: 'spring',
        stiffness: 500,
        damping: 15
      } 
    }
  };

  return (
    <motion.footer 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700 mt-16 pt-12 pb-8 overflow-hidden shadow-inner"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          className="text-center"
        >
          {/* Logo/Brand */}
          <motion.div 
            variants={itemVariants}
            className="mb-6"
          >
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              CrashPlan
            </h2>
          </motion.div>
          
          {/* Admin Contact Card */}
          <motion.div 
            variants={itemVariants}
            className="w-full max-w-md mx-auto mb-8"
          >
            <motion.div 
              className="w-full bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
              whileHover="hover"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                <motion.div 
                  className="flex-shrink-0 w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-2xl"
                  animate={isHovered ? { rotate: 10 } : { rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                >
                  👨‍💼
                </motion.div>
                <div className="w-full min-w-0 text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white truncate">Sai</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Administrator</p>
                  <div className="relative w-full">
                    <motion.a 
                      href="mailto:admincrashplan@gmail.com" 
                      className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium group w-full"
                      variants={hoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <span className="truncate block">admincrashplan@gmail.com</span>
                      <motion.span
                        className="flex-shrink-0 ml-1"
                        animate={isHovered ? { x: 3 } : { x: 0 }}
                        transition={{ type: 'spring', stiffness: 500 }}
                      >
                        →
                      </motion.span>
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 dark:bg-indigo-500"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ 
                          scaleX: isHovered ? 1 : 0,
                          opacity: isHovered ? 1 : 0.8
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Copyright */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {currentYear} CrashPlan. All rights reserved.
            </p>
            <motion.p 
              className="mt-2 text-xs text-gray-400 dark:text-gray-500"
              initial={{ opacity: 0.7 }}
              animate={{ 
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: 'easeInOut' 
              }}
            >
              Made with ❤️ for the community
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
