import React, { useState } from 'react';

// Props are passed from App.jsx to handle switching pages
function SignupPage({ onSignup, onSwitchToLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();
    // In a real app, you would register the user here.
    // We'll just call the onSignup function to switch to the login page.
    alert(`Signing up with Name: ${name}, Email: ${email}`); // This is the corrected line
    onSignup(); 
  };

  return (
    <div className="login-container"> {/* We can reuse the same CSS classes */}
      <div className="login-card">
        <h1 className="login-title">Create Account</h1>
        <p className="login-subtitle">Get started with MindWell Connect</p>
        
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Sign Up
          </button>
        </form>

        <div className="login-footer">
          <p>Already have an account? <a href="#" onClick={onSwitchToLogin}>Sign In</a></p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;