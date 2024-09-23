import React from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

import { useGSAP } from '@gsap/react';



const TournamentFormats = () => {
  const navigate = useNavigate(); 

  useGSAP(() => {
    gsap.fromTo(
      '#tournament-formats',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#tournament-formats',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '.format-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.formats-container',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const handleNavigate = () => {
    navigate('/tournaments'); 
  };

  return (
    <section id="tournament-formats">
      <h2>Formats We Offer</h2>
      <div className="formats-container">
        <div className="format-card">
          <img src="https://plus.unsplash.com/premium_photo-1661861204104-6a6dbf55ff6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwY3JpY2tldHxlbnwwfHwwfHx8MA%3D%3D" alt="T20 Format" className="format-image" />
          <h3>T20</h3>
          <p>T20 cricket offers a thrilling, fast-paced experience packed into 20 overs per side. This format emphasizes quick scoring, high-intensity fielding, and strategic play to secure a win in a limited amount of time.</p>
          <div className="overlay" onClick={handleNavigate}>
            Know More
          </div>
        </div>
        <div className="format-card">
          <img src="https://images.unsplash.com/photo-1512719994953-eabf50895df7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGluZGlhbiUyMGNyaWNrZXQlMjBvZGl8ZW58MHx8MHx8fDA%3D" alt="ODI Format" className="format-image" />
          <h3>ODI</h3>
          <p>ODI, or One Day International, is a 50-over format that blends strategy with endurance. Teams need to balance aggressive play with tactical planning to build a solid innings and restrict the opposition.</p>
          <div className="overlay" onClick={handleNavigate}>
            Know More
          </div>
        </div>
        <div className="format-card">
          <img src="https://plus.unsplash.com/premium_photo-1721963697056-1462195e408a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxpbmRpYW4lMjBjcmlja2V0fGVufDB8fDB8fHww" alt="Test Cricket Format" className="format-image" />
          <h3>Test Cricket</h3>
          <p>Test cricket is the pinnacle of the sport, played over five days. It challenges players' skills, stamina, and mental strength, offering a deep, tactical battle between bat and ball.</p>
          <div className="overlay" onClick={handleNavigate}>
            Know More
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentFormats;
