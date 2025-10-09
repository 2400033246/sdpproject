import React, { useState } from 'react';
import './App.css';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import SignupPage from './SignupPage'; // Import the new SignupPage component

function App() {
  // We now use a string to track the view state instead of a boolean
  const [view, setView] = useState('login'); // Can be 'login', 'signup', or 'loggedIn'

  // Function to handle successful login or signup
  const handleAuthSuccess = () => {
    setView('loggedIn');
  };

  // Function to handle logout
  const handleLogout = () => {
    setView('login');
  };

  // Render the correct component based on the 'view' state
  const renderView = () => {
    switch (view) {
      case 'signup':
        return <SignupPage onSignup={() => setView('login')} onSwitchToLogin={() => setView('login')} />;
      case 'loggedIn':
        return <HomePage onLogout={handleLogout} />;
      case 'login':
      default:
        return <LoginPage onLogin={handleAuthSuccess} onSwitchToSignup={() => setView('signup')} />;
    }
  };

  return (
    <div>
      {renderView()}
    </div>
  );
}

export default App;
