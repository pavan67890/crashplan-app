import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { FaGoogle } from 'react-icons/fa';

const LoginModal = ({ show, onHide, onLoginSuccess }) => {
  const { signInWithGoogle } = useAuth();
  const [error, setError] = useState('');

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      onLoginSuccess();
      onHide();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Sign In to Save Course</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Sign in to save this course to your dashboard.</p>
        <div className="text-center mt-3">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-primary w-100"
            style={{
              backgroundColor: '#4285F4',
              borderColor: '#4285F4'
            }}
          >
            <FaGoogle style={{ marginRight: '8px' }} />
            Sign in with Google
          </button>
        </div>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
