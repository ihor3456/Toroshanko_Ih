import React from "react";
import Button from "../Button/Button";
import "./card.scss";

export default class Card extends React.Component {
  state = { colorIcon: "black" };
  changeColor = () => {
    const color = this.state.colorIcon;
    if (color === "black") {
      this.setState({ colorIcon: "yellow" });
    }
    if (color === "yellow") {
      this.setState({ colorIcon: "black" });
    }
  };
  render() {
    const { id, name, price, image, article, color, onClick } = this.props;
    return (
      <li id={id} className="card">
        <svg
          version="1.1"
          width="30px"
          height="30px"
          viewBox="0 0 535.5 535.5"
          fill={this.state.colorIcon}
          onClick={this.changeColor}
        >
          <g>
            <polygon
              points="535.5,210.375 344.25,210.375 267.75,19.125 191.25,210.375 0,210.375 172.125,325.125 95.625,516.375 
		267.75,401.625 439.875,516.375 363.375,325.125 	"
            />
          </g>
        </svg>
        <p className="card_name">{name}</p>
        <p className="card_price">{price}</p>
        <img src={image} className="card_img" />
        <p className="card_article">{article}</p>
        <p className="card_color">{color}</p>
        <Button text="Add to cart" onClick={onClick} backgroundColor="red" />
      </li>
    );
  }
}
