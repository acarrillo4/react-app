import React, {Component} from "react";
import "./square.css";

class Square extends Component {
    render() {
        let classes = this.props.label === 0 ? "square" : "square clicked";

        return (
            <div onClick={this.isClicked} className={classes}>
                {this.props.label}
            </div>
        );
    }
}
export default Square;