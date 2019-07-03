import React, { Component } from 'react';
import './App.css';

import ShowStatus from './ShowStatus';
import UpdateStatus from './UpdateStatus';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ShowStatus />
      <UpdateStatus />
      </div>
    );
  }
}

export default App;
