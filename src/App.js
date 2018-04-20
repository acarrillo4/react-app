import React, { Component } from 'react';
import Board from './components/board';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory React</h1>
        </header>
        <Board />
      </div>
    );
  }
}