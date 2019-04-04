import React, { Component } from 'react';
import ClickCounter from './clickcounter';
import HoverCounter from './hovercounter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter/>
        <HoverCounter/>
      </div>
    );
  }
}

export default App;
