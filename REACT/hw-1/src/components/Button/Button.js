import React, { Component } from "react";
import "./button.scss";

class Button extends Component {
  render() {
    const { text, onClick, backgroundColor } = this.props;
    return (
      <>
        <button
          type="button"
          className="btn"
          style={{ backgroundColor }}
          onClick={onClick}
        >
          {text}
        </button>
      </>
    );
  }
}

export default Button;
