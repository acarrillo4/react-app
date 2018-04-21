import React, {Component} from "react";
import "./square.css";


class Square extends Component {
  render() {
    return (
      <div>
        {this.props.imgArr.map(image => (
          <img key={image.id} src={image.src} alt="SpongeBob" onClick={()=>this.props.onClick(image.id)} />
        ))}
      </div>
    );
  }
}

export default Square