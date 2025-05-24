import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/home.css';
import '../styles/navbar.css';
import '../styles/mostViewedCourses.css';
import { initializeAnalytics } from '../services/analyticsService';
import { getTopViewedCourses } from '../services/courseViewService';
import { engineeringDisciplines } from '../data/careerMapData';

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser: user } = useAuth();
  const [mostViewedCourses, setMostViewedCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to find the correct discipline for a course
  const findDisciplineForCourse = (courseName) => {
    if (!courseName) return null;
    
    // Normalize the course name for comparison
    const normalizeString = (str) => 
      String(str || '').toLowerCase().trim().replace(/[\s-]+/g, ' ').replace(/\s+/g, '-');
    
    const normalizedCourseName = normalizeString(courseName);
    
    // Search through all disciplines
    for (const [disciplineId, discipline] of Object.entries(engineeringDisciplines)) {
      if (!discipline.courses) continue;
      
      // Check if any course in this discipline matches
      const matchingCourse = Object.values(discipline.courses).find(course => {
        return [course.id, course.name, course.title].some(
          field => field && normalizeString(field) === normalizedCourseName
        );
      });
      
      if (matchingCourse) {
        return disciplineId;
      }
    }
    
    console.warn('Could not find discipline for course:', courseName);
    return null;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Initialize analytics data if not exists
        await initializeAnalytics();
        
        // Fetch top viewed courses
        const topCourses = await getTopViewedCourses(3);
        setMostViewedCourses(topCourses);
      } catch (error) {
        console.error('Error initializing data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const scrollToCourses = () => {
    const coursesSection = document.querySelector('.searched-courses-section');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Find Your Perfect Career Path</h1>
        <p className="hero-subtitle">Discover your dream career with our comprehensive course and role guide</p>
        <button 
          onClick={(e) => {
            e.preventDefault();
            if (user) {
              navigate('/select-course');
            } else {
              navigate('/login', { state: { from: location?.pathname || '/' } });
            }
          }}
          className="get-started-btn"
          type="button"
        >
          Get Started
        </button>
      </div>

      <div className="most-viewed-courses-section">
        <h2>Most Viewed Courses</h2>
        {loading ? (
          <div className="most-viewed-courses-grid">
            {[1, 2, 3].map((i) => (
              <div key={i} className="viewed-course-card loading">
                <div className="loading-image"></div>
                <div className="loading-content">
                  <div className="loading-title"></div>
                  <div className="loading-discipline"></div>
                  <div className="loading-duration"></div>
                  <div className="loading-tag"></div>
                  <div className="loading-views"></div>
                  <div className="loading-button"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="most-viewed-courses-grid">
            {mostViewedCourses
              .sort((a, b) => (b.views || 0) - (a.views || 0))
              .slice(0, 3)
              .map((course) => (
                <div key={course.id} className="viewed-course-card">
                  <div className="viewed-course-content">
                    <h3 className="viewed-course-title">{course.name || course.id}</h3>
                    <div className="viewed-course-views">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                      </svg>
                      <span>{(course.views || 0).toLocaleString()} views</span>
                    </div>
                    <a 
                      href={`/career-map?discipline=${encodeURIComponent(course.discipline || findDisciplineForCourse(course.name))}&course=${encodeURIComponent(course.name)}`} 
                      className="explore-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        const discipline = course.discipline || findDisciplineForCourse(course.name);
                        if (!discipline) {
                          console.error('Could not determine discipline for course:', course.name);
                          return;
                        }
                        navigate(`/career-map?discipline=${encodeURIComponent(discipline)}&course=${encodeURIComponent(course.name)}`);
                      }}
                    >
                      View Details
                    </a>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
