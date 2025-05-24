import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  collection, 
  query, 
  orderBy, 
  limit, 
  getDocs, 
  where, 
  Timestamp,
  getCountFromServer
} from 'firebase/firestore';
import { db, auth } from '../../firebaseConfig';
import { 
  FiSearch, 
  FiFilter, 
  FiDownload, 
  FiRefreshCw,
  FiUser,
  FiEye,
  FiSave,
  FiClock,
  FiCalendar,
  FiServer,
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
  FiAlertCircle
} from 'react-icons/fi';
import '../../styles/activity-logs.css';

// Helper function to format date as "Month Day, Year"
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Helper to get the start of the day for grouping
const getStartOfDay = (date) => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
};

// Mock activity types for the filter dropdown
const activityTypes = [
  { id: 'all', name: 'All Activities' },
  { id: 'login', name: 'User Logins' },
  { id: 'course_view', name: 'Course Views' },
  { id: 'course_save', name: 'Course Saves' },
  { id: 'search', name: 'Searches' },
];

const ActivityLogsPage = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [dateRange, setDateRange] = useState('7'); // 7 days by default

  // Fetch activities from Firestore
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        setLoading(true);
        
        // Get all users
        const usersRef = collection(db, 'users');
        const usersSnapshot = await getDocs(usersRef);
        
        if (usersSnapshot.empty) {
          setActivities([]);
          return;
        }
        
        // Calculate date range
        const daysAgo = parseInt(dateRange);
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - daysAgo);
        
        // Get activities from all users
        const allActivities = [];
        
        for (const userDoc of usersSnapshot.docs) {
          const activitiesRef = collection(db, 'users', userDoc.id, 'activities');
          let activitiesQuery = query(
            activitiesRef,
            where('timestamp', '>=', Timestamp.fromDate(startDate)),
            orderBy('timestamp', 'desc'),
            limit(100)
          );
          
          const activitiesSnapshot = await getDocs(activitiesQuery);
          
          activitiesSnapshot.forEach(doc => {
            const data = doc.data();
            allActivities.push({
              id: doc.id,
              userId: userDoc.id,
              userEmail: userDoc.data()?.email || 'Unknown User',
              ...data,
              timestamp: data.timestamp?.toDate?.() || data.timestamp || new Date()
            });
          });
        }
        
        // Sort all activities by timestamp (newest first)
        const sortedActivities = allActivities.sort((a, b) => 
          new Date(b.timestamp) - new Date(a.timestamp)
        );
        
        setActivities(sortedActivities);
      } catch (error) {
        console.error('Error fetching activities:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchActivities();
  }, [dateRange]);

  // Refresh activities
  const refreshActivities = async () => {
    const fetchActivities = async () => {
      try {
        setLoading(true);
        
        // Get all users
        const usersRef = collection(db, 'users');
        const usersSnapshot = await getDocs(usersRef);
        
        if (usersSnapshot.empty) {
          setActivities([]);
          return;
        }
        
        // Calculate date range
        const daysAgo = parseInt(dateRange);
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - daysAgo);
        
        // Get activities from all users
        const allActivities = [];
        
        for (const userDoc of usersSnapshot.docs) {
          const activitiesRef = collection(db, 'users', userDoc.id, 'activities');
          let activitiesQuery = query(
            activitiesRef,
            where('timestamp', '>=', Timestamp.fromDate(startDate)),
            orderBy('timestamp', 'desc'),
            limit(100)
          );
          
          const activitiesSnapshot = await getDocs(activitiesQuery);
          
          activitiesSnapshot.forEach(doc => {
            const data = doc.data();
            allActivities.push({
              id: doc.id,
              userId: userDoc.id,
              userEmail: userDoc.data()?.email || 'Unknown User',
              ...data,
              timestamp: data.timestamp?.toDate?.() || data.timestamp || new Date()
            });
          });
        }
        
        // Sort all activities by timestamp (newest first)
        const sortedActivities = allActivities.sort((a, b) => 
          new Date(b.timestamp) - new Date(a.timestamp)
        );
        
        setActivities(sortedActivities);
      } catch (error) {
        console.error('Error refreshing activities:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchActivities();
  };

  // Filter activities based on search query and selected type
  const filteredActivities = activities.filter(activity => {
    if (!activity) return false;
    
    const searchLower = searchQuery.toLowerCase();
    const userIdMatch = activity.userId?.toLowerCase().includes(searchLower) || false;
    const courseNameMatch = activity.details?.courseName?.toLowerCase().includes(searchLower) || false;
    const searchQueryMatch = activity.details?.searchQuery?.toLowerCase().includes(searchLower) || false;
    
    const matchesSearch = userIdMatch || courseNameMatch || searchQueryMatch;
    const matchesType = selectedType === 'all' || activity.type === selectedType;
    
    return matchesSearch && matchesType;
  });

  // Format timestamp with time
  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  // Format time ago
  const formatTimeAgo = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);
    
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) return `${interval} years ago`;
    if (interval === 1) return '1 year ago';
    
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return `${interval} months ago`;
    if (interval === 1) return '1 month ago';
    
    interval = Math.floor(seconds / 86400);
    if (interval > 1) return `${interval} days ago`;
    if (interval === 1) return '1 day ago';
    
    interval = Math.floor(seconds / 3600);
    if (interval > 1) return `${interval} hours ago`;
    if (interval === 1) return '1 hour ago';
    
    interval = Math.floor(seconds / 60);
    if (interval > 1) return `${interval} minutes ago`;
    if (interval === 1) return '1 minute ago';
    
    return 'Just now';
  };

  // Get activity icon component based on type
  const getActivityIcon = (type) => {
    const iconClass = 'w-5 h-5';
    if (!type) return <FiClock className={`${iconClass} text-gray-500`} />;
    
    // Normalize the type for comparison
    const normalizedType = type.toLowerCase().replace(/[ _-]/g, '');
    
    switch (normalizedType) {
      case 'login':
      case 'userlogin':
        return <FiUser className={`${iconClass} text-green-500`} />;
        
      case 'courseview':
      case 'course_view':
      case 'courseviewed':
        return <FiEye className={`${iconClass} text-blue-500`} />;
        
      case 'coursesave':
      case 'course_save':
      case 'coursesaved':
        return <FiSave className={`${iconClass} text-purple-500`} />;
        
      case 'courseremove':
      case 'course_remove':
      case 'courseremoved':
        return <FiSave className={`${iconClass} text-red-500`} />;
        
      case 'search':
      case 'searchperformed':
        return <FiSearch className={`${iconClass} text-yellow-500`} />;
        
      default:
        return <FiClock className={`${iconClass} text-gray-500`} />;
    }
  };

  // Get activity description
  const getActivityDescription = (activity) => {
    if (!activity) {
      console.log('No activity object provided');
      return 'performed an action';
    }
    
    console.log('Processing activity:', {
      id: activity.id,
      type: activity.type,
      hasDetails: !!activity.details,
      activityKeys: Object.keys(activity),
      detailsKeys: activity.details ? Object.keys(activity.details) : []
    });
    
    // Handle different activity type formats (camelCase, snake_case, or Title Case)
    const type = activity.type?.toLowerCase().replace(/[ _-]/g, '') || 'unknown';
    
    // Helper function to get course name from activity details
    const getCourseName = (details) => {
      if (!details) {
        console.log('No details object found in activity');
        return null;
      }
      
      // Log the details for debugging
      console.log('Activity details structure:', JSON.stringify(details, null, 2));
      
      // Check multiple possible fields where course name might be stored
      const possibleNames = {
        'courseName': details.courseName,
        'title': details.title,
        'courseTitle': details.courseTitle,
        'name': details.name,
        'course.name': details.course?.name,
        'course.title': details.course?.title,
        'courseData.title': details.courseData?.title,
        'courseData.name': details.courseData?.name,
        'data.title': details.data?.title,
        'data.name': details.data?.name
      };
      
      // Check for any string value in the details object
      if (!Object.values(possibleNames).some(val => val != null)) {
        // If no matches, try to find any string value in the details
        for (const [key, value] of Object.entries(details)) {
          if (typeof value === 'string' && value.trim() !== '') {
            console.log(`Found potential course name in ${key}:`, value);
            return value;
          }
        }
      }
      
      // Return the first non-null/undefined value from our known fields
      const name = Object.values(possibleNames).find(val => val != null);
      
      if (!name) {
        console.log('No course name found in activity details');
      }
      
      return name || null;
    };
    
    // Try to get course name from various possible locations
    const courseName = 
      getCourseName(activity.details || activity) || // Check details or root
      (activity.course?.title || activity.course?.name) || // Check course object
      activity.title || // Check root level title
      activity.name; // Check root level name
    
    // Create a more readable action description
    const actionMap = {
      // Login actions
      'login': () => 'signed in to the platform',
      'userlogin': () => 'signed in to the platform',
      
      // Course view actions
      'courseview': () => `viewed ${courseName || 'a course'}`,
      'course_view': () => `viewed ${courseName || 'a course'}`,
      'courseviewed': () => `viewed ${courseName || 'a course'}`,
      
      // Course save actions
      'coursesave': () => `saved ${courseName || 'a course'}`,
      'course_save': () => `saved ${courseName || 'a course'}`,
      'coursesaved': () => `saved ${courseName || 'a course'}`,
      
      // Course remove actions
      'courseremove': () => `removed ${courseName || 'a course'}`,
      'course_remove': () => `removed ${courseName || 'a course'}`,
      'courseremoved': () => `removed ${courseName || 'a course'}`,
      
      // Search actions
      'search': () => `searched for "${activity.details?.searchQuery || activity.searchQuery || '...'}"`,
      'searchperformed': () => `searched for "${activity.details?.searchQuery || activity.searchQuery || '...'}"`,
      
      // Default action
      'unknown': () => {
        // If we have a course name but unknown type, use a generic action
        if (courseName) {
          return `performed an action on ${courseName}`;
        }
        
        // Try to make a human-readable description from the type
        const action = activity.type
          ? activity.type
              .replace(/([A-Z])/g, ' $1')
              .replace(/_/g, ' ')
              .toLowerCase()
              .trim()
          : 'performed an action';
            
        // Add details if available
        if (activity.details && Object.keys(activity.details).length > 0) {
          return `${action}: ${JSON.stringify(activity.details)}`;
        }
        
        return action;
      }
    };
    
    // Execute the appropriate action or fall back to unknown
    return (actionMap[type] || actionMap.unknown)();
  };

  // Get activity type label
  const getActivityTypeLabel = (type) => {
    return type
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Group activities by date
  const activitiesByDate = useMemo(() => {
    return filteredActivities.reduce((groups, activity) => {
      const date = getStartOfDay(activity.timestamp);
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(activity);
      return groups;
    }, {});
  }, [filteredActivities]);

  // Get sorted dates
  const sortedDates = useMemo(() => {
    return Object.keys(activitiesByDate).sort((a, b) => b - a);
  }, [activitiesByDate]);

  return (
    <div className="activity-logs-container">
      {/* Header Section */}
      <header className="activity-header">
        <div>
          <h1>Activity Logs</h1>
          <p>Monitor user activities and system events in real-time</p>
        </div>
        <div className="activity-actions">
          <button className="export-btn">
            <FiDownload size={16} />
            <span>Export</span>
          </button>
          <button 
            className="refresh-btn" 
            onClick={refreshActivities}
            disabled={loading}
          >
            <FiRefreshCw size={16} className={loading ? 'spin' : ''} />
            <span>{loading ? 'Refreshing...' : 'Refresh'}</span>
          </button>
        </div>
      </header>

      {/* Filters Section */}
      <section className="filters-section">
        <div className="search-container">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search activities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="filter-options">
          <div className="filter-select">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {activityTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          
          <div className="filter-select">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option value="1">Last 24 hours</option>
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
              <option value="90">Last 3 months</option>
              <option value="365">Last year</option>
              <option value="">All time</option>
            </select>
          </div>
        </div>
      </section>

      {/* Activity Feed */}
      <div className="activity-feed">
        {loading ? (
          <div className="loading-state">
            <div className="loading-spinner"></div>
          </div>
        ) : sortedDates.length > 0 ? (
          <AnimatePresence>
            {sortedDates.map((date) => (
              <motion.div 
                key={date}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`activity-day ${selectedType !== 'all' ? selectedType : ''}`}
              >
                {/* Date Header */}
                <div className="day-header">
                  <h3>
                    <FiCalendar className="inline mr-2" />
                    {formatDate(Number(date))}
                  </h3>
                  <span className="activity-count">
                    {activitiesByDate[date].length} {activitiesByDate[date].length === 1 ? 'Activity' : 'Activities'}
                  </span>
                </div>
                
                {/* Activities for this date */}
                <ul className="activity-items">
                  {activitiesByDate[date].map((activity) => (
                    <motion.li 
                      key={activity.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className={`activity-item ${activity.type}`}
                    >
                      <div className="activity-content">
                        <div className="activity-icon" style={{
                          backgroundColor: 
                            activity.type === 'login' ? '#10b981' :
                            activity.type === 'course_view' ? '#3b82f6' :
                            activity.type === 'course_save' ? '#8b5cf6' : '#f59e0b'
                        }}>
                          {getActivityIcon(activity.type)}
                        </div>
                        <div className="activity-details">
                          <div className="activity-meta">
                            <span className="activity-user">
                              User <span className="font-bold">{activity.userId}</span>
                            </span>
                            <span className="activity-time">
                              <FiClock className="inline mr-1" />
                              {formatTime(activity.timestamp)}
                              <span className="hidden sm:inline"> • {formatTimeAgo(activity.timestamp)}</span>
                            </span>
                          </div>
                          <p className="activity-description">
                            {getActivityDescription(activity)}
                          </p>
                          <div className="activity-ip">
                            <FiServer className="inline mr-1" />
                            {activity.ipAddress}
                          </div>
                          <span className={`activity-type ${activity.type}`}>
                            {getActivityTypeLabel(activity.type)}
                          </span>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </AnimatePresence>
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">
              <FiSearch className="h-6 w-6" />
            </div>
            <h3>No activities found</h3>
            <p>
              {searchQuery || selectedType !== 'all' || dateRange !== '7' 
                ? 'Try adjusting your search or filter criteria.' 
                : 'No activities have been recorded yet.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityLogsPage;
