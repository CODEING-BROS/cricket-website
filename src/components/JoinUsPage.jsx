import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';


const JoinUsPage = () => {
  useEffect(() => {
    gsap.fromTo(
      '.join-heading',
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      '.join-image-section',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.5 }
    );
    gsap.fromTo(
      '.join-text-section',
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.5 }
    );
    gsap.fromTo(
      '.join-button',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 1 }
    );
  }, []);

  return (
    <div className="join-us-page">
      <h1 className="join-heading">Join Us</h1>
      <div className="join-content">
        <div className="join-image-section">
          <img 
            src="https://plus.unsplash.com/premium_photo-1721963697116-7deda773f6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGluZGlhbiUyMGNyaWNrZXR8ZW58MHx8MHx8fDA%3D" 
            alt="Join Us"
          />
        </div>
        <div className="join-text-section">
          <p>
          Ready to be part of the action? Whether you're a player, fan, or enthusiast, there's a place for you in our cricket community. Join us and stay updated with the latest tournaments, news, and exclusive offers.
          </p>
          <Link to="/Form" className="join-button">Join Now</Link>
        </div>
      </div>
    </div>
  );
};

export default JoinUsPage;
