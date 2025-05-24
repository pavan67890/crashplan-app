import React, { createContext, useState, useContext } from 'react';

const SavedItemsContext = createContext();

export const SavedItemsProvider = ({ children }) => {
  const [savedCourses, setSavedCourses] = useState([]);
  const [savedRoles, setSavedRoles] = useState([]);

  const addSavedCourse = (course) => {
    if (!savedCourses.some(saved => saved.id === course.id)) {
      setSavedCourses([...savedCourses, course]);
    }
  };

  const removeSavedCourse = (courseId) => {
    setSavedCourses(savedCourses.filter(course => course.id !== courseId));
  };

  const addSavedRole = (role) => {
    if (!savedRoles.some(saved => saved.id === role.id)) {
      setSavedRoles([...savedRoles, role]);
    }
  };

  const removeSavedRole = (roleId) => {
    setSavedRoles(savedRoles.filter(role => role.id !== roleId));
  };

  return (
    <SavedItemsContext.Provider 
      value={{
        savedCourses,
        savedRoles,
        addSavedCourse,
        removeSavedCourse,
        addSavedRole,
        removeSavedRole
      }}
    >
      {children}
    </SavedItemsContext.Provider>
  );
};

export const useSavedItems = () => {
  const context = useContext(SavedItemsContext);
  if (context === undefined) {
    throw new Error('useSavedItems must be used within a SavedItemsProvider');
  }
  return context;
};

export default SavedItemsContext;
