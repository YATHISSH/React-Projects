import React from 'react';

function Person(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

function App() {
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
        <h1>People</h1>
        <Person name="Yathissh" age={19} />
        <Person name="Rishi" age={19} />
        <Person name="Sachin" age={19} />
        <Person name="Meenakshi" age={19} />
        <Person name="Atchayaa" age={18} />
        <Person name="Kavya" age={19} />
        <Person name="Yalancy" age={18} />
        <Person name="Jashvarthini" age={18} />
      </div>
    </div>
  );
}

export default App;
