import React, { useEffect, useState, useCallback, useContext } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/dashboard.css';
import '../styles/saveCourse.css';
import { engineeringDisciplines } from '../data/careerMapData';
import { getTopCourses, getTopSearches, getUserProgress } from '../services/analyticsService';
import { getSavedCourses, removeSavedCourse } from '../services/savedCoursesService';
import { getUserActivities } from '../services/activityService';
import { db, doc, deleteDoc } from '../firebaseConfig';

const calculateTimeAgo = (date) => {
  const now = new Date();
  const diff = now - date;
  
  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;

  if (diff < minute) return 'just now';
  if (diff < hour) return Math.floor(diff / minute) + ' minutes ago';
  if (diff < day) return Math.floor(diff / hour) + ' hours ago';
  if (diff < month) return Math.floor(diff / day) + ' days ago';
  if (diff < year) return Math.floor(diff / month) + ' months ago';
  return Math.floor(diff / year) + ' years ago';
};

export default function Dashboard() {
  const { currentUser } = useAuth();
  const { isDarkMode } = useTheme();

  const [loading, setLoading] = useState(true);
  const [searchedCourses, setSearchedCourses] = useState([]);
  const [mostViewedCourses, setMostViewedCourses] = useState([]);
  const [userProgress, setUserProgress] = useState({
    completedCourses: 0,
    totalCourses: 0,
    completionRate: 0,
    activeDays: 0,
    courses: []
  });
  const [recentActivity, setRecentActivity] = useState([]);
  const [savedCourses, setSavedCourses] = useState([]);
  const [lastActivity, setLastActivity] = useState(null);
  const [loadingActivity, setLoadingActivity] = useState(true);

  const fetchUserActivities = useCallback(async () => {
    console.log('fetchUserActivities called');
    
    if (!currentUser?.uid) {
      console.log('No current user, skipping fetchUserActivities');
      setLoadingActivity(false);
      setLastActivity(null);
      setRecentActivity([]);
      return [];
    }
    
    // Force a fresh fetch by bypassing any caching
    const timestamp = new Date().getTime();
    console.log('Fetching activities with timestamp:', timestamp);

    try {
      console.log('Fetching user activities for user:', currentUser.uid);
      setLoadingActivity(true);
      
      // Get the most recent activity
      const activities = await getUserActivities(currentUser.uid, 1);
      console.log('Raw activities from service:', activities);
      
      if (activities && activities.length > 0) {
        console.log('Processing most recent activity');
        
        // Format the activity for display
        const activity = activities[0];
        console.log('Processing activity:', activity);
        
        // Handle different timestamp formats
        let activityDate = new Date(); // Default to current date
        
        try {
          if (activity.timestamp === null || activity.timestamp === undefined) {
            console.log('Timestamp is null or undefined');
          } else if (typeof activity.timestamp === 'string') {
            console.log('Timestamp is a string');
            activityDate = new Date(activity.timestamp);
          } else if (activity.timestamp && typeof activity.timestamp.toDate === 'function') {
            console.log('Timestamp has toDate method');
            activityDate = activity.timestamp.toDate();
          } else if (activity.timestamp && typeof activity.timestamp === 'object' && 'seconds' in activity.timestamp) {
            console.log('Timestamp has seconds property');
            activityDate = new Date(activity.timestamp.seconds * 1000);
          } else if (activity.timestamp instanceof Date) {
            console.log('Timestamp is a Date object');
            activityDate = activity.timestamp;
          } else {
            console.warn('Unknown timestamp format, using current date');
          }
        } catch (error) {
          console.error('Error processing timestamp:', error);
        }
        
        // Ensure we have a valid date
        if (isNaN(activityDate.getTime())) {
          console.warn('Invalid date, using current date instead');
          activityDate = new Date();
        }
        
        const formattedActivity = {
          ...activity,
          type: activity.type === 'course_view' ? 'in_progress' : 
                activity.type === 'course_save' ? 'course_save' : 'course',
          name: activity.courseName || 'Unknown Course',
          time: calculateTimeAgo(activityDate),
          timestamp: activityDate,
          rawType: activity.type,
          rawData: activity,
          _formattedTimestamp: activityDate.toISOString()
        };
        
        console.log('Formatted activity:', formattedActivity);
        
        // Set the most recent activity for the top card
        setLastActivity({
          type: formattedActivity.type,
          name: formattedActivity.name,
          time: formattedActivity.time,
          timestamp: formattedActivity.timestamp
        });
        
        // Set recent activities (just one)
        setRecentActivity([formattedActivity]);
        return [formattedActivity];
      } else {
        console.log('No activities found for user');
        setLastActivity(null);
        setRecentActivity([]);
        return [];
      }
    } catch (error) {
      console.error('Error fetching user activities:', error);
      setLastActivity(null);
      setRecentActivity([]);
      return [];
    } finally {
      setLoadingActivity(false);
    }
  }, [currentUser?.uid]);

  const fetchData = useCallback(async () => {
    try {
      // Fetch saved courses
      console.log('Fetching saved courses for user:', currentUser.uid);
      const savedCoursesData = await getSavedCourses(currentUser.uid);
      console.log('Saved courses data received:', savedCoursesData);
      setSavedCourses(savedCoursesData || []);
      
      // Fetch analytics data
      const [topSearches, topCourses] = await Promise.all([
        getTopSearches(),
        getTopCourses()
      ]);
      
      console.log('Top searches data:', topSearches);
      console.log('Top courses data:', topCourses);
      
      setSearchedCourses(topSearches || []);
      setMostViewedCourses(topCourses || []);

      // Fetch user progress
      const userProgressData = await getUserProgress(currentUser.uid);
      console.log('User progress data:', userProgressData);
      
      if (userProgressData) {
        setUserProgress(userProgressData);
      }
      
      // We'll use activities from fetchUserActivities instead of userProgress
      console.log('Using activities from fetchUserActivities');
      
      return { success: true };
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setSavedCourses([]);
      setSearchedCourses([]);
      setMostViewedCourses([]);
      setRecentActivity([]);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  }, [currentUser?.uid]);

  useEffect(() => {
    console.log('Dashboard useEffect triggered - currentUser:', currentUser);
    if (currentUser) {
      const loadAllData = async () => {
        try {
          setLoading(true);
          setLoadingActivity(true);
          
          // Fetch user activities first
          console.log('Fetching user activities...');
          const activities = await fetchUserActivities();
          console.log('Activities from fetchUserActivities:', activities);
          
          // If no activities were found, ensure we have an empty array
          if (!activities || activities.length === 0) {
            console.log('No activities found, setting empty arrays');
            setRecentActivity([]);
            setLastActivity(null);
          }
          
          // Then fetch the rest of the data
          console.log('Fetching other dashboard data...');
          await fetchData();
          
          console.log('All data loaded successfully');
        } catch (error) {
          console.error('Error loading dashboard data:', error);
          // Ensure we don't show loading states on error
          setRecentActivity([]);
          setLastActivity(null);
        } finally {
          setLoading(false);
          setLoadingActivity(false);
        }
      };
      
      loadAllData();
    } else {
      console.log('No current user, resetting states');
      setLoading(false);
      setLoadingActivity(false);
      setRecentActivity([]);
      setLastActivity(null);
    }
  }, [currentUser, fetchUserActivities, fetchData]);

  // Function to refresh activities
  const refreshActivities = useCallback(() => {
    if (currentUser?.uid) {
      console.log('Refreshing activities...');
      fetchUserActivities();
    }
  }, [currentUser, fetchUserActivities]);

  // Listen for course removal events and initial fetch
  useEffect(() => {
    const handleCourseRemoved = () => {
      console.log('Course removed, refreshing activities...');
      refreshActivities();
    };

    // Add event listener for course removal
    window.addEventListener('courseRemoved', handleCourseRemoved);
    
    // Initial data fetch
    if (currentUser) {
      fetchData();
    } else {
      setLoading(false);
      setLoadingActivity(false);
    }

    // Cleanup
    return () => {
      window.removeEventListener('courseRemoved', handleCourseRemoved);
    };
  }, [currentUser, fetchData, refreshActivities]);

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Function to format activity message
  const formatActivityMessage = (activity) => {
    if (!activity) return '';
    
    const courseName = activity.name || 'a course';
    const timeAgo = activity.time || 'recently';
    
    switch(activity.rawType) {
      case 'course_view':
        return `Viewed ${courseName} ${timeAgo}`;
      case 'course_save':
        return `Saved ${courseName} to your list ${timeAgo}`;
      case 'course_remove':
        return `Removed ${courseName} from your list ${timeAgo}`;
      case 'course_complete':
        return `Completed ${courseName} ${timeAgo}`;
      default:
        return `Performed an activity ${timeAgo}`;
    }
  };

  if (!currentUser || loading) {
    return (
      <div className="dashboard-content">
        <div className="main-content">
          <div className="welcome-message mb-4">
            <h2>Welcome to CrashPlan</h2>
            <p className="lead">Please login to view your dashboard</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-content">
      <div className="main-content">
        <div className="welcome-message mb-4">
          <h2>Welcome to CrashPlan</h2>
          <p className="lead">Start exploring your career path today</p>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Your Progress</h5>
                <div className="progress-stats">
                  <div className="stat-item">
                    <span className="stat-number">{userProgress.completedCourses}</span>
                    <span className="stat-label">Courses Completed</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">{userProgress.totalCourses}</span>
                    <span className="stat-label">Total Courses</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">{userProgress.completionRate}%</span>
                    <span className="stat-label">Completion Rate</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">{userProgress.activeDays}</span>
                    <span className="stat-label">Active Days</span>
                  </div>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${userProgress.completionRate}%` }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Saved Courses</h5>
                <div className="refresh-section mb-3">
                  <button className="btn btn-outline-secondary btn-sm" onClick={() => {
                    setSavedCourses([]);
                    fetchData();
                  }}>Refresh</button>
                </div>
                {savedCourses && Array.isArray(savedCourses) && savedCourses.length > 0 ? (
                  <div className="saved-courses-container">
                    {savedCourses.slice(0, 5).map((course) => (
                      <div key={course.id} className="saved-course-card">
                        <div className="card-header">
                          <h6 className="card-title">{course.name}</h6>
                          <small className="text-muted">{course.discipline}</small>
                        </div>
                        <div className="card-body">
                          <small className="text-muted">Saved on {formatDate(course.savedAt)}</small>
                          <div className="course-metrics">
                            <div className="metric-item">
                              <strong>Learning Time:</strong> {course.learningTime}
                            </div>
                            <div className="metric-item">
                              <strong>Difficulty:</strong> {course.difficulty}/10
                            </div>
                            <div className="metric-item">
                              <strong>Present Worth:</strong> {course.presentWorth}/10
                            </div>
                          </div>
                        </div>
                        <div className="card-footer">
                          <button 
                            className="remove-course-btn" 
                            onClick={async () => {
                              try {
                                console.log('Removing course:', course.id);
                                const success = await removeSavedCourse(currentUser.uid, course.id);
                                if (success) {
                                  console.log('Course removed, updating UI...');
                                  // Update local state
                                  setSavedCourses(prev => {
                                    const updated = prev.filter(c => c.id !== course.id);
                                    console.log('Updated saved courses:', updated);
                                    return updated;
                                  });
                                  
                                  // Force a refresh of activities after a short delay
                                  setTimeout(() => {
                                    console.log('Refreshing activities...');
                                    fetchUserActivities().then(activities => {
                                      console.log('Refreshed activities:', activities);
                                    });
                                  }, 500);
                                }
                              } catch (error) {
                                console.error('Error removing course:', error, {
                                  message: error.message,
                                  stack: error.stack
                                });
                              }
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted">No saved courses yet.</p>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Recent Activity</h5>
                {loadingActivity ? (
                  <div className="text-center py-4">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : recentActivity.length > 0 ? (
                  <div className="activity-feed">
                    {recentActivity.map((activity, index) => (
                        <div key={index} className={`activity-item p-3 mb-2 rounded ${isDarkMode ? 'dark' : ''}`}>
                          <div className="d-flex align-items-start">
                            <div className="activity-icon me-3 mt-1">
                              {activity.rawType === 'course_save' ? (
                                <i className="fas fa-bookmark text-success"></i>
                              ) : activity.rawType === 'course_view' ? (
                                <i className="fas fa-eye text-info"></i>
                              ) : activity.rawType === 'course_complete' ? (
                                <i className="fas fa-check-circle text-primary"></i>
                              ) : (
                                <i className="fas fa-circle text-muted"></i>
                              )}
                            </div>
                            <div className="activity-details flex-grow-1">
                              <p className="mb-1 fw-medium">
                                {activity.courseName || 'Course activity'}
                              </p>
                              <p className="mb-1 small">
                                {formatActivityMessage(activity)}
                              </p>
                              <small className="text-muted">
                                <i className="far fa-clock me-1"></i>
                                {activity.time || 'Just now'}
                              </small>
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <i className="fas fa-history fa-3x text-muted mb-3"></i>
                    <h6>No recent activity</h6>
                    <p className="text-muted small mb-0">Your course views and saves will appear here</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Removed Most Viewed Courses and Popular Searches sections as they will be moved to the home page */}
      </div>
    </div>
  );
}
