import React, { useState } from 'react';

function AuthenticationStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(prevState => !prevState);
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', 
  };

  const contentStyle = {
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <button onClick={toggleLogin}>
          {isLoggedIn ? 'Log out' : 'Log in'}
        </button>
        <div>
          {isLoggedIn ? 'Logged in' : 'Logged out'}
        </div>
      </div>
    </div>
  );
}

export default AuthenticationStatus;
