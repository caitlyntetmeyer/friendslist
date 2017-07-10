import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Tell React to render any component that's nested inside of the App component in index.js: */}
        {this.props.children}
      </div>
    );
  }
}

export default App;
