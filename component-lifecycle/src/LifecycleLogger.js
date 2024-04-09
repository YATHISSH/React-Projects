import React, { Component } from 'react';

class LifecycleLogger extends Component {
  componentDidMount() {
    console.log('Component mounted');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    const loggerStyle = {
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '5px',
      textAlign: 'center',
      margin: '0 auto',
      marginTop: '50px', // Adjust the top margin as needed
      maxWidth: '400px', // Set maximum width to prevent it from taking full width
    };

    return (
      <div style={loggerStyle}>
        <div>Lifecycle Logger Component</div>
      </div>
    );
  }
}

export default LifecycleLogger;
