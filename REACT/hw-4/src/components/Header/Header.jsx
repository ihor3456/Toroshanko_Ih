import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Star2 } from "./icons/star2.svg";
import { ReactComponent as Basket } from "./icons/basket.svg";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = ({ countOfFavorites, countOfItems }) => {
  return (
    <header className="header">
      <div className="header-box">
        <Link to="/" className="nav-link">Головна</Link>

        <Link to="/favorite" className="nav-link">
          <span className="star2">
            <span className="count">{countOfFavorites}</span>
            <Star2 />
          </span>
        </Link>
        <Link to="/basket" className="nav-link">
          <span className="basket">
            <span className="count">{countOfItems}</span>
            <Basket />
          </span>
        </Link>
      </div>
    </header>
  );
};

Header.propTypes = {
  countOfFavorites: PropTypes.number,
  countOfItems: PropTypes.number,
};

export default Header;
