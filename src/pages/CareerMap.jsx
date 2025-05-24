import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../contexts/AuthContext';
import { incrementCourseView } from '../services/analyticsService';
import { saveCourse, isCourseSaved, removeSavedCourse } from '../services/savedCoursesService';
import '../styles/careerMap.css';

// Import career map data
const { engineeringDisciplines } = require('../data/careerMapData');

export default function CareerMap() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const { currentUser } = useAuth();
  const discipline = searchParams.get('discipline');
  const course = searchParams.get('course');
  const [isSaved, setIsSaved] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Track course view
  useEffect(() => {
    // Find the discipline by ID
    const foundDiscipline = engineeringDisciplines[discipline];
    console.log('Found discipline:', foundDiscipline);
    
    // Find course using the course name
    const foundCourse = foundDiscipline?.courses?.[course];
    console.log('Found course:', foundCourse);
    
    if (foundCourse) {
      incrementCourseView(foundCourse.name);
    }
  }, [discipline, course]);

  // Check if course is saved
  useEffect(() => {
    if (currentUser) {
      // Find the discipline by ID
      const foundDiscipline = engineeringDisciplines[discipline];
      console.log('Checking saved course - discipline:', foundDiscipline);
      
      // Find course using the course name
      const foundCourse = foundDiscipline?.courses?.[course];
      console.log('Checking saved course - course:', foundCourse);
      
      if (foundCourse) {
        isCourseSaved(currentUser.uid, foundCourse.id).then(setIsSaved);
      }
    }
  }, [currentUser, discipline, course]);

  // Find the discipline by ID
  const foundDiscipline = engineeringDisciplines[discipline];
  console.log('Final found discipline:', foundDiscipline);
  
  if (!discipline || !course) {
    console.error('Missing URL parameters');
    return (
      <div className="career-map-container">
        <h2>Invalid URL</h2>
        <p>Discipline and course parameters are required.</p>
      </div>
    );
  }

  if (!foundDiscipline) {
    console.error('Discipline not found:', discipline);
    return (
      <div className="career-map-container">
        <h2>Discipline Not Found</h2>
        <p>Could not find the selected discipline.</p>
      </div>
    );
  }

  // Helper function to normalize strings for comparison
  const normalizeString = (str) => {
    if (!str) return '';
    return String(str)
      .toLowerCase()
      .trim()
      .replace(/[\s-]+/g, ' ')
      .replace(/\s+/g, '-');
  };

  // Find course in the specified discipline
  const findCourseInDiscipline = (discId, courseToFind) => {
    const discData = engineeringDisciplines[discId];
    if (!discData?.courses) return null;

    const normalizedCourseName = normalizeString(courseToFind);
    
    // Try to find by exact match first
    for (const [key, courseData] of Object.entries(discData.courses)) {
      const fieldsToCheck = [
        courseData.id,
        courseData.name,
        courseData.title,
        key // The key in the courses object
      ].filter(Boolean);

      if (fieldsToCheck.some(field => 
        normalizeString(field) === normalizedCourseName
      )) {
        return { course: courseData, discipline: discId };
      }
    }
    
    return null;
  };

  // Try to find the course in the specified discipline
  let foundCourse = null;
  let actualDiscipline = discipline;
  
  if (discipline && engineeringDisciplines[discipline]) {
    const result = findCourseInDiscipline(discipline, course);
    if (result) {
      foundCourse = result.course;
    }
  }
  
  // If not found in specified discipline, search all disciplines
  if (!foundCourse) {
    console.log(`Course "${course}" not found in ${discipline} discipline, searching all disciplines...`);
    
    for (const [discId] of Object.entries(engineeringDisciplines)) {
      if (discId === discipline) continue; // Skip the one we already checked
      
      const result = findCourseInDiscipline(discId, course);
      if (result) {
        foundCourse = result.course;
        actualDiscipline = result.discipline;
        console.log(`Found course "${course}" in ${actualDiscipline} discipline`);
        
        // Update the URL to reflect the correct discipline
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('discipline', actualDiscipline);
        window.history.replaceState({}, '', newUrl);
        
        break;
      }
    }
  }
  
  if (!foundCourse) {
    console.error('Course not found:', course);
    
    // Get all available courses across all disciplines for the error message
    const allCourses = [];
    Object.entries(engineeringDisciplines).forEach(([discId, discData]) => {
      if (discData.courses) {
        Object.values(discData.courses).forEach(c => {
          if (c.name && !allCourses.some(ac => ac.name === c.name)) {
            allCourses.push({
              name: c.name,
              discipline: discId
            });
          }
        });
      }
    });
    
    console.error('Available courses:', allCourses.map(c => `${c.name} (${c.discipline})`));
    
    return (
      <div className="career-map-container">
        <h2>Course Not Found</h2>
        <p>Could not find the selected course: {course}</p>
        <div>
          <p>Available courses:</p>
          <ul>
            {allCourses.map((c, index) => (
              <li key={index}>
                <a 
                  href={`/career-map?discipline=${encodeURIComponent(c.discipline)}&course=${encodeURIComponent(c.name)}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/career-map?discipline=${encodeURIComponent(c.discipline)}&course=${encodeURIComponent(c.name)}`);
                  }}
                >
                  {c.name} ({c.discipline})
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  const handleSaveCourse = async () => {
    if (!currentUser) {
      // Redirect to login with current path or fallback to '/'
      const currentPath = window.location.pathname || '/';
      navigate('/login', { state: { from: currentPath } });
      return;
    }

    if (!foundCourse) {
      console.error('No course found to save');
      return;
    }

    // Disable the button to prevent double-clicks
    const saveButton = document.querySelector('.save-btn');
    if (saveButton) {
      saveButton.disabled = true;
      saveButton.textContent = 'Processing...';
    }

    try {
      console.log('Saving course:', foundCourse);
      
      if (isSaved) {
        // Remove from saved courses
        await removeSavedCourse(currentUser.uid, foundCourse.id);
        setIsSaved(false);
        setErrorMessage('');
        toast.success('Course removed from saved courses');
        console.log('Course removed from saved courses');
      } else {
        // Prepare course data
        const courseData = {
          id: foundCourse.id, // This will be used to generate a unique ID if needed
          name: foundCourse.name || 'Untitled Course',
          discipline: foundDiscipline?.name || 'General',
          description: foundCourse.description || '',
          learningTime: foundCourse.learningTime || 'Not specified',
          difficulty: typeof foundCourse.difficulty === 'number' ? foundCourse.difficulty : 0,
          logicalThinking: typeof foundCourse.logicalThinking === 'number' ? foundCourse.logicalThinking : 0,
          memoryBased: typeof foundCourse.memoryBased === 'number' ? foundCourse.memoryBased : 0,
          presentWorth: typeof foundCourse.presentWorth === 'number' ? foundCourse.presentWorth : 0,
          overallRating: typeof foundCourse.overallRating === 'number' ? foundCourse.overallRating : 0
        };

        console.log('Prepared course data:', courseData);

        // Save the course
        await saveCourse(currentUser.uid, courseData);
        setIsSaved(true);
        setErrorMessage('');
        toast.success('Course saved successfully');
        console.log('Course saved successfully');
      }
    } catch (error) {
      console.error('Error in handleSaveCourse:', error);
      // Display the error message to the user
      const errorMessage = error.message || 'An error occurred while saving the course.';
      toast.error(errorMessage);
      setErrorMessage(errorMessage);
      window.alert(errorMessage);
    } finally {
      // Re-enable the button
      if (saveButton) {
        saveButton.disabled = false;
        saveButton.textContent = isSaved ? 'Saved' : 'Save Course';
      }
    }
  };

  return (
    <div className="career-map-container">
      <h2>Career Path for {foundCourse.name} in {foundDiscipline.id}</h2>
      
      <div className="course-card">
        <h3>Course Details</h3>
        <div className="course-metrics">
          <div className="course-metric-item">
            <strong>Learning Time:</strong> {foundCourse.learningTime}
          </div>
          <div className="course-metric-item">
            <strong>Difficulty Level:</strong> {foundCourse.difficulty}/10
          </div>
          <div className="course-metric-item">
            <strong>Logical Thinking:</strong> {foundCourse.logicalThinking}/10
          </div>
          <div className="course-metric-item">
            <strong>Memory Based:</strong> {foundCourse.memoryBased}/10
          </div>
          <div className="course-metric-item">
            <strong>Present Worth:</strong> {foundCourse.presentWorth}/10
          </div>
          <div className="course-metric-item">
            <strong>Overall Rating:</strong> {foundCourse.overallRating}/10
          </div>
        </div>
      </div>

      <div className="course-card">
        <h3>Course Description</h3>
        <p>{foundCourse.description}</p>

        <div className="save-course-section">
          <div className="button-group">
            {currentUser && (
              <button 
                onClick={handleSaveCourse} 
                className={`save-btn ${isSaved ? 'saved' : ''}`}
                disabled={isSaved}
              >
                {isSaved ? 'Saved' : 'Save Course'}
              </button>
            )}
            

          </div>

          {errorMessage && (
            <div className="error-message-container">
              <div className="error-message-content">
                {errorMessage}
              </div>
            </div>
          )}
        </div>

        {!currentUser && (
          <p className="login-prompt">Please login to save courses</p>
        )}
      </div>

      <div className="course-card">
        <h3>Prerequisites</h3>
         {foundCourse.prerequisites && foundCourse.prerequisites.length > 0 && (
           <ul>
             {foundCourse.prerequisites.map((prereq, index) => (
               <li key={index}>{prereq}</li>
             ))}
           </ul>
         )}

        <h3>Key Topics</h3>
         {foundCourse.keyTopics && foundCourse.keyTopics.length > 0 && (
           <ul>
             {foundCourse.keyTopics.map((topic, index) => (
               <li key={index}>{topic}</li>
             ))}
           </ul>
         )}

        <h3>Top Open Sources</h3>
         {foundCourse.topOpenSources && foundCourse.topOpenSources.length > 0 && (
           <ul>
             {foundCourse.topOpenSources.map((source, index) => (
               <li key={index}>{source}</li>
             ))}
           </ul>
         )}

        <h3>Recommended Books</h3>
         {foundCourse.recommendedBooks && foundCourse.recommendedBooks.length > 0 && (
           <ul>
             {foundCourse.recommendedBooks.map((book, index) => (
               <li key={index}>{book}</li>
             ))}
           </ul>
         )}
      </div>

      <div className="course-card">
        <h3>Related Career Roles</h3>
        <div className="role-grid">
          {foundCourse.roles && foundCourse.roles.length > 0 && foundCourse.roles.map((role) => (
            <div key={role.id} className="role-card">
              <div className="role-header">
                <h4 className="role-title">{role.name}</h4>
                {foundCourse.difficulty && (
                  <span className="role-difficulty">
                    {foundCourse.difficulty}/10 Difficulty
                  </span>
                )}
              </div>
              
              {/* Salary Info Box */}
              <div className="info-box salary-box">
                <h5>💼 Current Salary</h5>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#2c3e50' }}>
                  {role.currentSalaryINR}
                </p>
              </div>

              {/* Key Responsibilities Box */}
              {role.keyResponsibilities && role.keyResponsibilities.length > 0 && (
                <div className="info-box responsibilities-box">
                  <h5>📋 Key Responsibilities</h5>
                  <ul className="responsibilities-list">
                    {role.keyResponsibilities.map((resp, index) => (
                      <li key={index} className="responsibility-item">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills Box */}
              {role.skills && role.skills.length > 0 && (
                <div className="info-box skills-box">
                  <h5>🛠️ Required Skills</h5>
                  <div className="skills-tags">
                    {role.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Salary Growth Box */}
              {role.averageSalaryGrowth && (
                <div className="info-box salary-growth-box">
                  <h5>📈 Salary Growth</h5>
                  <div className="salary-growth-item">
                    <span className="salary-year">1 Year</span>
                    <span className="salary-amount">{role.averageSalaryGrowth.year1}</span>
                  </div>
                  <div className="salary-growth-item">
                    <span className="salary-year">3 Years</span>
                    <span className="salary-amount">{role.averageSalaryGrowth.year3}</span>
                  </div>
                  <div className="salary-growth-item">
                    <span className="salary-year">5 Years</span>
                    <span className="salary-amount">{role.averageSalaryGrowth.year5}</span>
                  </div>
                </div>
              )}

              {/* Requirements Box */}
              {(role.educationRequirements || role.experienceRequirements) && (
                <div className="info-box requirements-box">
                  <h5>🎓 Requirements</h5>
                  {role.educationRequirements && (
                    <div className="requirement-item">
                      {role.educationRequirements}
                    </div>
                  )}
                  {role.experienceRequirements && (
                    <div className="requirement-item">
                      {role.experienceRequirements}
                    </div>
                  )}
                </div>
              )}

              {/* Tools & Technologies */}
              {role.toolsAndTechnologies && role.toolsAndTechnologies.length > 0 && (
                <div className="info-box tools-box">
                  <h5>🛠️ Tools & Technologies</h5>
                  <div className="skills-tags">
                    {role.toolsAndTechnologies.map((tool, index) => (
                      <span key={`tool-${index}`} className="skill-tag">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Growth Path */}
              {role.growthPath && role.growthPath.length > 0 && (
                <div className="info-box growth-path-box">
                  <h5>📈 Growth Path</h5>
                  <div className="growth-path">
                    {role.growthPath.map((step, index) => (
                      <div key={`step-${index}`} className="growth-step">
                        <div className="step-bullet">{index + 1}</div>
                        <div className="step-content">{step}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Roles */}
              {role.relatedRoles && role.relatedRoles.length > 0 && (
                <div className="info-box related-roles-box">
                  <h5>👥 Related Roles</h5>
                  <div className="related-roles">
                    {role.relatedRoles.map((relatedRole, index) => (
                      <span key={`related-${index}`} className="related-role-tag">
                        {relatedRole}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Certification Recommendations */}
              {role.certificationRecommendations && role.certificationRecommendations.length > 0 && (
                <div className="info-box certifications-box">
                  <h5>🏆 Recommended Certifications</h5>
                  <ul className="certifications-list">
                    {role.certificationRecommendations.map((cert, index) => (
                      <li key={`cert-${index}`} className="certification-item">
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
