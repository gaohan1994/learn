import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Test from './component/motion';
import Col from './component/test';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Test/>
        <Col/>
      </div>
    );
  }
}

export default App;
