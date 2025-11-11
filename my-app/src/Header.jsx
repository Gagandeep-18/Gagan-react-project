import React from 'react';

function Header({ isAuthenticated, setIsAuthenticated, setShowAuth }) {  // Added props
  const handleAuthToggle = () => {
    if (isAuthenticated) {
      setIsAuthenticated(false);  // Sign out
    } else {
      setShowAuth(true);  // Show sign-in form
    }
  };

  return (
    <header className="header">
      <div className="logo">Gagan Tuition Center</div>
      <nav className="nav">
        <a href="#banner">Home</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
        <a href="#teachers">Teachers</a>
        <button onClick={handleAuthToggle} className="auth-button">
          {isAuthenticated ? 'Sign Out' : 'Sign In'}
        </button>
      </nav>
    </header>
  );
}

export default Header;