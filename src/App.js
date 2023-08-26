import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import AcademicResume from './academic';
import JobResume from './job';
import './App.css';



const App = () => {
  const [showAcademicResume, setShowAcademicResume] = useState(false);
  const [showJobResume, setShowJobResume] = useState(false);

  const handleAcademicButtonClick = () => {
    setShowAcademicResume(true);
    setShowJobResume(false); // Hide job resume
  };

  const handleJobButtonClick = () => {
    setShowJobResume(true);
    setShowAcademicResume(false); // Hide academic resume
  };

  return (
    <>
      {(!showAcademicResume && !showJobResume) && (
        <div className="intro-container">
          <div className="intro-content">
            <button className='neon-button' onClick={handleAcademicButtonClick}>Academic Resume</button>
            <button className='neon-button' onClick={handleJobButtonClick}>Job Resume</button>
          </div>
        </div>
      )}

      <div>
        {showAcademicResume && <AcademicResume />}
        {showJobResume && <JobResume />}
      </div>
    </>

  );
};

export default App;
