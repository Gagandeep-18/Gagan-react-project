import React from 'react';

function Banner({ setShowEnroll }) {  // UPDATED: Accept setShowEnroll prop
  const images = [
    'https://images.pexels.com/photos/31258415/pexels-photo-31258415.jpeg'
  ];

  const handleEnrollClick = () => {  // NEW: Handler to open enroll form
    setShowEnroll(true);
  };

  return (
    <section id="banner" className="banner">
      <div className="banner-content">
        <h1>Welcome to Our Tuition Center</h1>
        <p>Empowering students to achieve their dreams through quality education.</p>
        <button className="cta-button" onClick={handleEnrollClick}>Enroll Now</button>  
      </div>
      <div className="banner-images">
        <img 
          src={images[0]} 
          alt="Friendly classroom interaction in Vietnam school - Photo by Teacher Ray You from Pexels" 
        />
      </div>
    </section>
  );
}

export default Banner;