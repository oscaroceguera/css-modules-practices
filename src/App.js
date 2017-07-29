import React, { Component } from 'react';
import logo from './logo.svg';
import {
  AppContainer,
  header,
  logostyl,
  intro
} from './App.css';

import CompositionComponent from './CompositionComponent'
import DependenciesComponent from './DependenciesComponent'

class App extends Component {
  render() {
    return (
      <div className={AppContainer}>
        <div className={header}>
          <img src={logo} className={logostyl} alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className={intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CompositionComponent />
        <DependenciesComponent />
      </div>
    );
  }
}

export default App;
