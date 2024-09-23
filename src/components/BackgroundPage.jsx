import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const BackgroundPage = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.content-overlay h1',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 }
    );
    gsap.fromTo(
      '.content-overlay p',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
    );
    gsap.fromTo(
      '.video-container',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 1 }
    );
  }, []);

  return (
    <div className="background-page">
      <div className="content-overlay">
        <p>Every cricket story holds a special place in our hearts and that’s why</p>
        <h1>Your Cricket Matters</h1>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/RAe11irS-1g" 
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BackgroundPage;
