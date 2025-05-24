import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAdmin } from '../../contexts/AdminContext';
import { FaGoogle, FaLock, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import '../../styles/auth.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, loginWithGoogle } = useAdmin();
  const navigate = useNavigate();
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const result = await login(email, password);
      if (result.success) {
        navigate('/admin');
      } else {
        setError(result.error || 'Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setError('');
      setIsGoogleLoading(true);
      const result = await loginWithGoogle();
      if (result?.success) {
        navigate('/admin');
      } else {
        setError(result?.error || 'Failed to sign in with Google');
      }
    } catch (err) {
      setError('An error occurred during Google sign in');
    } finally {
      setIsGoogleLoading(false);
    }
  };

  if (isLoading || isGoogleLoading) {
    return (
      <div className="auth-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">CP</div>
          <h1 className="auth-title">Admin Portal</h1>
          <p className="auth-subtitle">Sign in to continue to CrashPlan Admin</p>
        </div>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <div className="social-buttons">
          <button 
            type="button" 
            className="social-button google"
            onClick={handleGoogleSignIn}
            disabled={isGoogleLoading}
          >
            <FaGoogle />
            <span>Continue with Google</span>
          </button>
        </div>
        
        <div className="auth-divider">or</div>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="form-input"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="form-label">Password</label>
              <Link to="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </Link>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="form-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="auth-button"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
          
          <div className="auth-footer">
            Need admin access?{' '}
            <Link to="/contact" className="auth-link">
              Contact support
            </Link>
          </div>
        </form>
      </div>
    </div>

  );
};

export default LoginPage;
