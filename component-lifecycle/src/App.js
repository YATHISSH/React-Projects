import React, { Component } from 'react';
import LifecycleLogger from './LifecycleLogger';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogger: true
    };
  }

  toggleLogger = () => {
    this.setState(prevState => ({
      showLogger: !prevState.showLogger
    }));
  };

  render() {
    return (
      <div>
        <button style={{  border: '1px solid #ccc',
      padding: '10px',
      justifyContent:'center',
      display:'flex',
      borderRadius: '5px',
      textAlign: 'center',
      margin: '0 auto',
      marginTop: '50px', // Adjust the top margin as needed
      maxWidth: '400px', // Set maximum width to prevent it from taking full width
    }}onClick={this.toggleLogger}>
          {this.state.showLogger ? 'Hide Logger' : 'Show Logger'}
        </button>
        {this.state.showLogger && <LifecycleLogger />}
      </div>
    );
  }
}

export default App;
