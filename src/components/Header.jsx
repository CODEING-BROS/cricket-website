import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    gsap.fromTo(".navbar", 
      { y: -100, opacity: 0 }, 
      { duration: 1, y: 0, opacity: 1, ease: "power3.out" }
    );
    
    gsap.fromTo(".logo img", 
      { y: -50, opacity: 0 }, 
      { duration: 1, delay: 0.5, y: 0, opacity: 1, ease: "back.out(1.7)" }
    );
    
    gsap.fromTo(".nav-menu ul li", 
      { y: -30, opacity: 0 }, 
      { duration: 1, delay: 0.8, y: 0, opacity: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, [location]); 

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="https://cdn.pixabay.com/photo/2013/07/13/09/46/cricket-155965_640.png" alt="Logo" />
          <p>Your Cricket Matters</p>
        </Link>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li> 
          <li><Link to="/tournaments">Tournament</Link></li> 
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
