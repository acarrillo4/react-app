import React, {Component} from "react";
import imageArr from "./imageArr.json";
import "./square.css";


export default class Square extends Component {
  render() {
    return (
      <div>
        {imageArr.map(image => (
          <img src={image.src} onClick={() => this.props.ClickImage(image.id)} />
        ))}
      </div>
    );
  }
}