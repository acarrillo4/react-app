// Have not gotten to the sorting of images...but my idea was to loop through the image array of objects and set a new array for the arrangement....each time I loop through I set a random number between 0 and arr.length, the number chosen will be the index chosen to remove from the array and push into the new array...do this each time til the array has no more images and set the dispaly array to the new array of sorted images

import React, { Component } from "react";
import Square from "../square"
import "./board.css";

class Board extends Component {
  constructor() {
    super();
    this.state = {
      a: 0,
      b: 0,
      c: 0,
      score: 0,
    }
  }
  ClickImage = (id) => {
    console.log(this.state);
    switch (id) {
      case "a": {
        if (this.state.a === 0) {
        this.setState({ a: this.state.a + 1, score: this.state.score + 1 });
        } else {
          this.resetFn();
        } break;
      }
      case "b": {
        if (this.state.b === 0) {
          this.setState({ b: this.state.b + 1, score: this.state.score + 1 });
        } else {
          this.resetFn();
        } break;
      }
      case "c": {
        if (this.state.c === 0) {
          this.setState({ c: this.state.c + 1, score: this.state.score + 1 });
          break;
        } else {
          this.resetFn();
        } break;
      }
      default: {
        console.log(this.state);
      }
    }
  }
  resetFn = () => {
    this.setState({
      a: 0,
      b: 0,
      c: 0,
      score: 0
    })
  }

  render() {
    return (
        <div>
          {this.state.score}
          <Square onClick={this.ClickImage} />
        </div>
          
    );
  }
}
  export default Board;