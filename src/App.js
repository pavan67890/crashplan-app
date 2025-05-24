import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { SavedItemsProvider } from './context/SavedItemsContext';
import { AdminProvider } from './contexts/AdminContext';
import './styles.css';
import './components/ToastContainer';
import Navbar from './components/Navbar.js';
import ProtectedRoute from './components/ProtectedRoute.js';
import LoginNew from './pages/LoginNew.jsx';
import Signup from './pages/Signup.js';
import Home from './pages/Home.js';
import SelectCourseNew from './pages/SelectCourseNew.js';
import Dashboard from './pages/Dashboard.jsx';
import CareerMap from './pages/CareerMap.jsx';
import { engineeringDisciplines } from './data/careerMapData.js';
import { Toast } from './components/ToastContainer';
import AdminRoutes from './pages/admin/AdminRoutes';
import Footer from './components/Footer';

// Ensure data is loaded before rendering
if (!Object.keys(engineeringDisciplines).length) {
  throw new Error('Engineering disciplines data not loaded');
}

console.log('Engineering disciplines loaded:', Object.keys(engineeringDisciplines));

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <SavedItemsProvider>
          <Router>
            <div className="app">
              <Toast />
              <Navbar />
              <main className="min-h-[calc(100vh-140px)]">
                <Routes>
                  <Route path="/admin/*" element={
                    <AdminProvider>
                      <AdminRoutes />
                    </AdminProvider>
                  } />
                  <Route path="*" element={<h1>404 Not Found</h1>} />
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<LoginNew />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route
                    path="/dashboard"
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/select-course"
                    element={
                      <ProtectedRoute>
                        <SelectCourseNew />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/career-map"
                    element={
                      <ProtectedRoute>
                        <CareerMap />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </SavedItemsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
