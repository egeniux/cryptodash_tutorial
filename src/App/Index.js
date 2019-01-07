import React, { Component } from 'react';
import './App.css';
import Welcome from './WelcomeMessage';


class App extends Component {
  render() {
    return (
      <Welcome name={"CryptoDash"}/>
    );
  }
}

export default App;
