import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { engineeringDisciplines } from '../data/careerMapData';
import { useAuth } from '../contexts/AuthContext';
import { updateUserActivity } from '../services/activityService';
import styled, { css } from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M50 0 L100 50 L50 100 L0 50 Z" fill="%23f1f2f6"/%3E%3C/svg%3E');
    opacity: 0.1;
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  color: #2c3e50;
  text-align: center;
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.5px;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Form = styled.form`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(52, 152, 219, 0.05) 100%);
    border-radius: 25px;
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #34495e;
  transition: color 0.3s ease;
  font-size: 1.1rem;

  &:hover {
    color: #2c3e50;
  }
`;

const Select = styled.select`
  padding: 1rem 1.5rem;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 1.1rem;
  background: white;
  transition: all 0.3s ease;
  cursor: pointer;
  width: 100%;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9L12 15L18 9' stroke='%236c757d' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.2rem;

  &:hover {
    border-color: #3498db;
  }

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    background: #f8f9fa;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
  color: white;
  padding: 1.25rem 2.5rem;
  border: none;
  border-radius: 12px;
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(52, 152, 219, 0.4);
  }

  &:hover::before {
    left: 100%;
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 768px) {
    padding: 1.25rem 2rem;
    font-size: 1.1rem;
  }
`;

export default function SelectCourseNew() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [selectedDiscipline, setSelectedDiscipline] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (selectedDiscipline) {
      const discipline = Object.values(engineeringDisciplines).find(d => d.id === selectedDiscipline);
      if (discipline && discipline.courses) {
        // Convert course object to array of course objects with proper IDs
        setCourses(Object.entries(discipline.courses).map(([name, course]) => ({
          id: name,
          name: course.name,
          ...course
        })));
      } else {
        setCourses([]);
      }
    } else {
      setCourses([]);
    }
  }, [selectedDiscipline]);

  const handleDisciplineChange = (e) => {
    const disciplineId = e.target.value;
    setSelectedDiscipline(disciplineId);
    setSelectedCourse('');
    
    if (disciplineId) {
      const discipline = Object.values(engineeringDisciplines).find(d => d.id === disciplineId);
      if (discipline && discipline.courses) {
        setCourses(Object.entries(discipline.courses).map(([name, course]) => ({
          id: name,
          name: course.name,
          ...course
        })));
      } else {
        setCourses([]);
      }
    } else {
      setCourses([]);
    }
  };

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedDiscipline && selectedCourse) {
      // Find the course object and ensure we use the exact name from the data
      const selectedCourseObj = courses.find(c => c.id === selectedCourse);
      if (selectedCourseObj) {
        try {
          // Track this activity if user is logged in
          if (currentUser?.uid) {
            await updateUserActivity(currentUser.uid, {
              type: 'course_viewed',
              courseId: selectedCourseObj.id,
              courseName: selectedCourseObj.name,
              disciplineId: selectedDiscipline,
              disciplineName: Object.values(engineeringDisciplines).find(d => d.id === selectedDiscipline)?.name || 'Unknown'
            });
          }
          // Navigate to the course
          navigate(`/career-map?discipline=${selectedDiscipline}&course=${encodeURIComponent(selectedCourseObj.name)}`);
        } catch (error) {
          console.error('Error tracking activity:', error);
          // Still navigate even if tracking fails
          navigate(`/career-map?discipline=${selectedDiscipline}&course=${encodeURIComponent(selectedCourseObj.name)}`);
        }
      }
    }
  };

  return (
    <Container>
      <Title>Select Your Course</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="discipline">Engineering Discipline:</Label>
          <Select
            id="discipline"
            value={selectedDiscipline}
            onChange={handleDisciplineChange}
            required
          >
            <option value="">Select a discipline</option>
            {Object.values(engineeringDisciplines).map((discipline) => (
              <option key={discipline.id} value={discipline.id}>
                {discipline.name}
              </option>
            ))}
          </Select>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="course">Course:</Label>
          <Select
            id="course"
            value={selectedCourse}
            onChange={handleCourseChange}
            required
            disabled={!selectedDiscipline}
          >
            <option value="">Select a course</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.name}
              </option>
            ))}
          </Select>
        </FormGroup>

        <Button type="submit">Continue</Button>
      </Form>
    </Container>
  );
};
