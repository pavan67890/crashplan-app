import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bar, Line } from 'react-chartjs-2';
import { 
  collection, 
  getDocs, 
  query, 
  orderBy, 
  limit, 
  where, 
  Timestamp, 
  doc, 
  setDoc, 
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { getTopViewedCourses } from '../../services/courseViewService';
import { FiUsers, FiEye, FiBook, FiActivity, FiClock, FiSearch } from 'react-icons/fi';

// Chart.js setup
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
);

// Chart options
const activityOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#6B7280',
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(0, 0, 0, 0.05)',
      },
      ticks: {
        color: '#6B7280',
        precision: 0,
      },
    },
  },
};

const topCoursesOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#6B7280',
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(0, 0, 0, 0.05)',
      },
      ticks: {
        color: '#6B7280',
        precision: 0,
      },
    },
  },
};

const DashboardPage = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalViews: 0,
    totalCourses: 0,
    activeUsers: 0,
  });
  const [loading, setLoading] = useState(true);
  const [recentActivities, setRecentActivities] = useState([]);
  const [activityData, setActivityData] = useState({
    labels: [],
    datasets: [],
  });
  const [topCourses, setTopCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Format timestamp to relative time
  const formatTimeAgo = (timestamp) => {
    if (!timestamp) return 'Just now';
    
    // Handle both Firestore Timestamp and Date objects
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const seconds = Math.floor((new Date() - date) / 1000);
    
    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1
    };
    
    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
      const interval = Math.floor(seconds / secondsInUnit);
      if (interval >= 1) {
        return interval === 1 
          ? `${interval} ${unit} ago`
          : `${interval} ${unit}s ago`;
      }
    }
    
    return 'Just now';
  };
  
  // Add sample activity data
  const addSampleActivities = async () => {
    try {
      console.log('Adding sample activity data...');
      const sampleActivities = [
        {
          action: 'view_course',
          userId: 'sample-user-1',
          userEmail: 'demo1@example.com',
          details: { courseName: 'Introduction to Programming' },
          timestamp: new Date()
        },
        {
          action: 'enroll_course',
          userId: 'sample-user-2',
          userEmail: 'demo2@example.com',
          details: { courseName: 'Web Development Basics' },
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2) // 2 hours ago
        },
        {
          action: 'complete_lesson',
          userId: 'sample-user-1',
          userEmail: 'demo1@example.com',
          details: { 
            courseName: 'Introduction to Programming',
            lesson: 'Variables and Data Types' 
          },
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24) // 1 day ago
        }
      ];
      
      const batch = [];
      const activityCollection = collection(db, 'activityLogs');
      
      sampleActivities.forEach(activity => {
        const docRef = doc(activityCollection);
        batch.push(setDoc(docRef, {
          ...activity,
          timestamp: serverTimestamp()
        }));
      });
      
      await Promise.all(batch);
      console.log('Added sample activity data.');
      
      // Refresh the page to show the new data
      window.location.reload();
      
    } catch (error) {
      console.error('Error adding sample data:', error);
      alert('Failed to add sample data. Check console for details.');
    }
  };

  // Fetch dashboard data
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        
        // Fetch top viewed courses
        const courses = await getTopViewedCourses(20);
        setTopCourses(courses);
        
        // Fetch recent activities from all users
        console.log('Fetching activity logs from Firestore...');
        let activities = [];
        
        try {
          // First, get all users
          const usersRef = collection(db, 'users');
          const usersSnapshot = await getDocs(usersRef);
          console.log(`Found ${usersSnapshot.size} users`);
          
          // Get activities from each user's activities subcollection
          for (const userDoc of usersSnapshot.docs) {
            const activitiesRef = collection(db, 'users', userDoc.id, 'activities');
            const activitiesQuery = query(
              activitiesRef,
              orderBy('timestamp', 'desc'),
              limit(50)
            );
            
            const activitiesSnapshot = await getDocs(activitiesQuery);
            console.log(`Found ${activitiesSnapshot.size} activities for user ${userDoc.id}`);
            
            activitiesSnapshot.forEach(doc => {
              try {
                const data = doc.data();
                if (!data.timestamp) {
                  console.warn('Activity log missing timestamp:', { id: doc.id, userId: userDoc.id, data });
                  return;
                }
                
                const activity = {
                  id: doc.id,
                  userId: userDoc.id,
                  ...data,
                  formattedTime: formatTimeAgo(data.timestamp)
                };
                
                console.log('Activity log:', activity);
                activities.push(activity);
              } catch (error) {
                console.error('Error processing activity log:', error, { id: doc.id, userId: userDoc.id });
              }
            });
          }
          
          // Sort all activities by timestamp (newest first)
          activities.sort((a, b) => {
            const timeA = a.timestamp?.toDate ? a.timestamp.toDate().getTime() : new Date(a.timestamp).getTime();
            const timeB = b.timestamp?.toDate ? b.timestamp.toDate().getTime() : new Date(b.timestamp).getTime();
            return timeB - timeA;
          });
          
          // Take only the 50 most recent
          activities = activities.slice(0, 50);
          
          // If no activities found, add sample data or log a message
          if (activities.length === 0) {
            console.log('No activity logs found in the database.');
            
            // Uncomment the following lines to add sample data for testing
            /*
            try {
              console.log('Adding sample activity data...');
              const sampleActivities = [
                {
                  action: 'view_course',
                  userId: 'sample-user-1',
                  userEmail: 'sample1@example.com',
                  details: { courseName: 'Introduction to Programming' },
                  timestamp: new Date()
                },
                {
                  action: 'enroll_course',
                  userId: 'sample-user-2',
                  userEmail: 'sample2@example.com',
                  details: { courseName: 'Web Development Basics' },
                  timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2) // 2 hours ago
                }
              ];
              
              const batch = [];
              const activityCollection = collection(db, 'activityLogs');
              
              sampleActivities.forEach(activity => {
                const docRef = doc(activityCollection);
                batch.push(setDoc(docRef, {
                  ...activity,
                  timestamp: serverTimestamp()
                }));
              });
              
              await Promise.all(batch);
              console.log('Added sample activity data.');
              
              // Refresh activities after adding sample data
              const newSnapshot = await getDocs(activitiesQuery);
              activities = [];
              newSnapshot.forEach(doc => {
                const data = doc.data();
                if (data.timestamp) {
                  activities.push({
                    id: doc.id,
                    ...data,
                    formattedTime: formatTimeAgo(data.timestamp)
                  });
                }
              });
            } catch (error) {
              console.error('Error adding sample data:', error);
            }
            */
          }
          
          setRecentActivities(activities);
        } catch (error) {
          console.error('Error fetching activity logs:', error);
          // Try to continue with empty activities
          setRecentActivities([]);
        }
        
        // Process activity data for the chart (last 30 days)
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        thirtyDaysAgo.setHours(0, 0, 0, 0);
        
        // Initialize activityByDay with zeros for all days
        const activityByDay = {};
        const labels = [];
        
        // Initialize all dates in the range with 0
        for (let i = 0; i <= 29; i++) {
          const date = new Date();
          date.setDate(date.getDate() - (28 - i));
          date.setHours(0, 0, 0, 0);
          const dateKey = date.toISOString().split('T')[0];
          const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
          activityByDay[dateKey] = 0;
          labels.push(formattedDate);
        }
        
        // Count activities per day
        activities.forEach(activity => {
          if (!activity.timestamp) return;
          
          const activityDate = activity.timestamp.toDate ? 
            activity.timestamp.toDate() : 
            new Date(activity.timestamp);
            
          if (activityDate >= thirtyDaysAgo) {
            const dateKey = activityDate.toISOString().split('T')[0];
            if (activityByDay.hasOwnProperty(dateKey)) {
              activityByDay[dateKey]++;
            }
          }
        });
        
        // Convert to data points in the correct order
        const dataPoints = [];
        for (let i = 0; i <= 29; i++) {
          const date = new Date();
          date.setDate(date.getDate() - (28 - i));
          date.setHours(0, 0, 0, 0);
          const dateKey = date.toISOString().split('T')[0];
          dataPoints.push(activityByDay[dateKey] || 0);
        }
        
        // Log if no activity data is found
        const totalActivities = dataPoints.reduce((sum, val) => sum + val, 0);
        if (totalActivities === 0) {
          console.log('No activity data found in the last 30 days');
        }
        
        setActivityData({
          labels,
          datasets: [
            {
              label: 'Daily Activities',
              data: dataPoints,
              borderColor: 'rgba(99, 102, 241, 1)',
              backgroundColor: (context) => {
                const bgColor = [
                  'rgba(99, 102, 241, 0.1)',
                  'rgba(99, 102, 241, 0.5)'
                ];
                if (!context.chart.chartArea) return;
                const { ctx, chartArea: { top, bottom } } = context.chart;
                const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                gradientBg.addColorStop(0, 'rgba(99, 102, 241, 0.3)');
                gradientBg.addColorStop(1, 'rgba(99, 102, 241, 0.05)');
                return gradientBg;
              },
              borderWidth: 2,
              pointBackgroundColor: 'rgba(99, 102, 241, 1)',
              pointBorderColor: '#fff',
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(99, 102, 241, 1)',
              pointHoverBorderColor: '#fff',
              pointHitRadius: 10,
              pointBorderWidth: 2,
              tension: 0.3,
              fill: true,
            },
          ],
        });
        
        // Fetch stats with error handling
        let totalUsers = 0;
        let totalCourses = 0;
        
        try {
          const usersQuery = query(collection(db, 'users'));
          const usersSnapshot = await getDocs(usersQuery);
          totalUsers = usersSnapshot.size;
        } catch (error) {
          console.error('Error fetching users:', error);
          totalUsers = 0;
        }
        
        try {
          const coursesQuery = query(collection(db, 'courses'));
          const coursesSnapshot = await getDocs(coursesQuery);
          totalCourses = coursesSnapshot.size;
        } catch (error) {
          console.error('Error fetching courses:', error);
          totalCourses = 0;
        }
        
        // Count active users (users active in the last 30 days)
        const activeUsers = activities
          .filter(activity => activity.timestamp && activity.timestamp.toDate() >= thirtyDaysAgo)
          .reduce((unique, activity) => {
            if (activity.userId && !unique.includes(activity.userId)) {
              unique.push(activity.userId);
            }
            return unique;
          }, []).length;
        
        const totalViews = activities.filter(a => a.action && a.action.includes('view')).length;
        
        console.log('Stats:', { totalUsers, totalCourses, activeUsers, totalViews });
        
        setStats({
          totalUsers,
          totalViews,
          totalCourses,
          activeUsers,
        });
        
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchDashboardData();
  }, []);

  // Chart options
  const activityOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          borderDash: [3, 3],
        },
      },
    },
  };

  const topCoursesOptions = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          borderDash: [3, 3],
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  const statsCards = [
    { 
      title: 'Total Users', 
      value: stats.totalUsers.toLocaleString(),
      icon: <FiUsers className="w-6 h-6" />,
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    },
    { 
      title: 'Total Views', 
      value: stats.totalViews.toLocaleString(),
      icon: <FiEye className="w-6 h-6" />,
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    },
    { 
      title: 'Total Courses', 
      value: stats.totalCourses,
      icon: <FiBook className="w-6 h-6" />,
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    },
    { 
      title: 'Active Users', 
      value: stats.activeUsers.toLocaleString(),
      icon: <FiActivity className="w-6 h-6" />,
      color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Welcome back! Here's what's happening with your platform.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200">
            Generate Report
          </button>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {statsCards.map((stat, index) => (
          <div 
            key={stat.title}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Activity Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Daily Activity</h3>
          <div className="h-80">
            <Line data={activityData} options={activityOptions} />
          </div>
        </motion.div>

        {/* Top Courses Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Top Viewed Courses</h3>
          <div className="h-80">
            <Bar 
              data={{
                labels: topCourses.map(course => course.name || course.id).slice(0, 10),
                datasets: [
                  {
                    label: 'Views',
                    data: topCourses.map(course => course.views || 0).slice(0, 10),
                    backgroundColor: 'rgba(99, 102, 241, 0.8)',
                    borderRadius: 4,
                  },
                ],
              }} 
              options={topCoursesOptions} 
            />
          </div>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Recent Activity</h3>
          <div className="mt-2 sm:mt-0 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search activities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  User
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Action
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Details
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  <div className="flex items-center">
                    <FiClock className="mr-1" />
                    <span>Time</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {recentActivities.length === 0 ? (
                <tr>
                  <td colSpan="4" className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">No activities yet</h3>
                      <p className="text-gray-500 dark:text-gray-400 max-w-md">
                        User activities will appear here when they interact with your platform.
                      </p>
                      <button
                        onClick={addSampleActivities}
                        className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Add Sample Data
                      </button>
                    </div>
                  </td>
                </tr>
              ) : (
                recentActivities
                  .filter(activity => {
                    if (!searchQuery) return true;
                    const searchLower = searchQuery.toLowerCase();
                    return (
                      (activity.userEmail && activity.userEmail.toLowerCase().includes(searchLower)) ||
                      (activity.action && activity.action.toLowerCase().includes(searchLower)) ||
                      (activity.details && JSON.stringify(activity.details).toLowerCase().includes(searchLower))
                    );
                  })
                  .slice(0, 10)
                  .map((activity) => {
                  // Format action for display
                  const formatAction = (action) => {
                    if (!action) return '';
                    return action
                      .split('_')
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(' ');
                  };

                  // Get course name from details if available
                  const getCourseName = (details) => {
                    if (!details) return 'N/A';
                    if (typeof details === 'string') return details;
                    if (details.courseName) return details.courseName;
                    if (details.courseId) return `Course ID: ${details.courseId}`;
                    if (details.title) return details.title;
                    return 'Course';
                  };

                  return (
                    <tr key={activity.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                            <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                              {activity.userEmail ? activity.userEmail.charAt(0).toUpperCase() : 'U'}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {activity.userEmail || 'Unknown User'}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {activity.userId ? `ID: ${activity.userId.substring(0, 8)}...` : ''}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200">
                          {formatAction(activity.action)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        {getCourseName(activity.details)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <FiClock className="mr-1 h-4 w-4 text-gray-400" />
                          <span title={activity.timestamp?.toDate().toLocaleString()}>
                            {activity.formattedTime || 'Just now'}
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                }))}
            </tbody>
          </table>
        </div>
        
        {recentActivities.length > 0 && (
          <div className="mt-4 text-right">
            <button 
              onClick={() => {
                // Implement view all functionality
                console.log('View all activities');
              }}
              className="text-sm font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              View all activities →
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default DashboardPage;
