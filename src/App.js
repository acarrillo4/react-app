import React, { Component } from 'react';
import Square from './components/square';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    board: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]
  }
  getCurrentPlayer = () => {
    return this.state.player;
  }
  handlePlayerClick = (row, col) => {
    if (this.state.player === 1) {
      this.setState({player: 2})
    } else {
      this.setState({player: 1})
    }

    const newBoard = [...this.state.board];
    newBoard[row][col] = this.state.player;

    this.setState({
      board: newBoard
    })
  }

  render() {
    const boardComponents = [];
    render {
    // for (let row = 0; row < this.state.board.length; row++) {
    //   for (let col = 0; col < this.state.board[row].length; col++) {
    //     boardComponents.push(
    //       <Square label={this.state.board[row][col]} row={row} col={col} currentPlayer={this.state.player} handlePlayerClick={this.handlePlayerClick} />
    //     );
    //   }
    //   boardComponents.push(<p className="clearfix"></p>)
    // }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory React</h1>
          <h2>Score: {this.state.score}</h2>
        </header>
        <Board />
      </div>
    );
  }
}
}

export default App;
