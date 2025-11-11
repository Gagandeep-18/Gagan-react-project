import React, { useState } from 'react';

function Auth({ setIsAuthenticated, setShowAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy validation (replace with real API call)
    if (email === 'admin@example.com' && password === 'password') {
      setIsAuthenticated(true);
      setShowAuth(false);
      setError('');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="auth-modal">
      <div className="auth-form">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Sign In</button>
        </form>
        <button onClick={() => setShowAuth(false)} className="close-button">Close</button>
      </div>
    </div>
  );
}

export default Auth;