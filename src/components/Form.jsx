import React, { useState } from 'react';
import gsap from 'gsap';

import { useGSAP } from '@gsap/react';



const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    teamName: '',
    format: '',
  });
  const [errors, setErrors] = useState({});

  const handleNextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateStep = (step) => {
    let valid = true;
    const newErrors = {};

    if (step === 1) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
        valid = false;
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
        valid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
        valid = false;
      }
    } else if (step === 2) {
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
        valid = false;
      } else if (!/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = 'Phone number must be 10 digits';
        valid = false;
      }
      if (!formData.teamName.trim()) {
        newErrors.teamName = 'Team name is required';
        valid = false;
      }
    } else if (step === 3) {
      if (!formData.format.trim()) {
        newErrors.format = 'Format is required';
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(step)) {
       window.location.href = '/'
      alert('Form submitted successfully!');
    }
  };

  useGSAP(() => {
    gsap.fromTo(
      'form',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: 'form',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  
  return (
    <div className="registration-page">
      <div className="registration-container">
        <h1>Cricket Tournament Registration</h1>
        
        
        <form
          action="/" 
          method="POST"
          onSubmit={handleSubmit}
        >
          {step === 1 && (
            <div className="form-step">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <p className="error">{errors.name}</p>}
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}
              <div className="form-navigation">
                <button type="button" className='next-button' onClick={handleNextStep}>
                  Next
                </button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="form-step">
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="\d{10}"
                title="Phone number must be 10 digits"
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
              <label>Team Name:</label>
              <input
                type="text"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                required
              />
              {errors.teamName && <p className="error">{errors.teamName}</p>}
              <div className="form-navigation">
                <button type="button" className="back-button" onClick={handlePreviousStep}>
                  Back
                </button>
                <button type="button" className="next-button" onClick={handleNextStep}>
                  Next
                </button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="form-step">
              <label>Format:</label>
              <select
                name="format"
                value={formData.format}
                onChange={handleChange}
                required
              >
                <option value="">Select format</option>
                <option value="T20">T20</option>
                <option value="ODI">ODI</option>
                <option value="Test">Test</option>
              </select>
              {errors.format && <p className="error">{errors.format}</p>}
              <div className="form-navigation">
                <button type="button" className="back-button" onClick={handlePreviousStep}>
                  Back
                </button>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
