import React, { Component } from 'react';
import './App.css';

// Components
import Home from './components/home'
import Projects from './components/projects'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Home/>
        <Projects/>

      </div>
    );
  }
}

export default App;