import React, { useState } from 'react';

// Add the new onSwitchToSignup prop
function LoginPage({ onLogin, onSwitchToSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    onLogin();
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Sign in to continue to MindWell Connect</p>
        
        <form onSubmit={handleLogin}>
          {/* Input fields are the same as before */}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
          </div>
          <button type="submit" className="login-button">Sign In</button>
        </form>

        <div className="login-footer">
          {/* This link now calls the function to switch pages */}
          <p>Don't have an account? <a href="#" onClick={onSwitchToSignup}>Sign Up</a></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;