import React, { Component } from "react";
import Square from "../square"
import "./board.css";
import imageArr from "../../imageArr.json";

class Board extends Component {
  constructor() {
    super();
    this.state = {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,
      h: 0,
      i: 0,
      j: 0,
      k: 0,
      l: 0,
      score: 0,
      imgArr: imageArr
    }
  }
  ClickImage = (id) => {
    this.SortImgs(this.state.imgArr);
    if (this.state[id] === 0 && this.state.score < this.state.imgArr.length) {
        this.setState({ [id]: this.state[id] + 1, score: this.state.score + 1 });
    } else {
        this.ResetFn();
    }
}
SortImgs = (array) => {
  var i = 0
      , j = 0
      , temp = null
  
    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    this.setState({imgArr: array});
  }
  ResetFn = () => {
    this.setState({
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,
      h: 0,
      i: 0,
      j: 0,
      k: 0,
      l: 0,
      score: 0,
      imgArr: imageArr
    })
  }
  render() {
    return (
        <div className="AppDiv">
          <p>Click on an image.  You can only click on an image once, or the game restarts and your score goes back to 0.</p>
          <h2>Score: {this.state.score}</h2>
          <Square imgArr={this.state.imgArr} onClick={this.ClickImage} />
        </div>
          
    );
  }
}
  export default Board;