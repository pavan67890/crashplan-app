import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SelectCourse from './pages/SelectCourse';
import CareerMap from './pages/CareerMap';
import Admin from './pages/Admin';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { engineeringDisciplines } from './data/careerMapData';
import '../styles/App.css';

// Ensure data is loaded before rendering
if (!engineeringDisciplines) {
  throw new Error('Engineering disciplines data not loaded');
}

console.log('Engineering disciplines loaded:', Object.keys(engineeringDisciplines));

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <div className="app">
            <Navbar />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/select-course"
                element={
                  <ProtectedRoute>
                    <SelectCourse />
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
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <Admin />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
