import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  useEffect(() => {
    gsap.fromTo(
      '.footer-content',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      '.footer-menu ul li a',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 }
    );
    gsap.fromTo(
      '.footer-copyright',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1 }
    );
  }, []);

  return (
    <>
      
      <div className="footer-message">
        <p>
          Discover the Full Spectrum of Cricket: Track Current Tournaments, Explore Upcoming Events, and Relive the Highlights of Past Matches with Us!
        </p>
      </div>

      <footer>
        <div className="footer-content">
          <div className="footer-menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/tournaments">Tournaments</Link></li>
            </ul>
          </div>

          <div className="footer-line"></div>

          <div className="footer-copyright">
            <p>&copy; 2024 Your Cricket Organization. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
