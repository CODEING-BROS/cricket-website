import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleRegistrationClick = () => {
    navigate('/Form'); 
  };

  return (
    <div className="home-container">
      <div className="video-wrapper">
        <video className="cricket-video" autoPlay muted loop>
          <source src="/assets/videoplayback.mp4" type="video/mp4" /> 
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <h1>Welcome to Your Cricket Matters</h1>
        <p>Get ready for exciting cricket matches in various formats!</p>
        <button className="register-button" onClick={handleRegistrationClick}>
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Home;
