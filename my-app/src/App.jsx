import React, { useState } from 'react';
import Header from './Header';
import Banner from './Banner';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Teachers from './Teachers';
import Footer from './Footer';
import Auth from './Auth';
import EnrollForm from './EnrollForm';  // NEW: Import the enroll form component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showEnroll, setShowEnroll] = useState(false);  // NEW: State for enroll form visibility

  return (
    <div className="app">
      <Header 
        isAuthenticated={isAuthenticated} 
        setIsAuthenticated={setIsAuthenticated} 
        setShowAuth={setShowAuth} 
      />
      {showAuth && (
        <Auth 
          setIsAuthenticated={setIsAuthenticated} 
          setShowAuth={setShowAuth} 
        />
      )}
      {showEnroll && (  // NEW: Conditionally render the enroll form
        <EnrollForm setShowEnroll={setShowEnroll} />
      )}
      <Banner setShowEnroll={setShowEnroll} /> 
      <AboutUs />
      <ContactUs />
      <Teachers />
      <Footer />
    </div>
  );
}

export default App;