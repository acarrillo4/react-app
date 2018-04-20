import React, {Component} from "react";
import imageArr from "../../imageArr.json";
import "./square.css";


class Square extends Component {
  render() {
    return (
      <div>
        {imageArr.map(image => (
          <img src={image.src} alt="SpongeBob" onClick={()=>this.props.onClick(image.id)} />
        ))}
      </div>
    );
  }
}

export default Square