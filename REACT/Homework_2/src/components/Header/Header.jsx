import React from "react";
import PropTypes from 'prop-types';
import {ReactComponent as Star2} from "./icons/star2.svg";
import {ReactComponent as Basket} from "./icons/basket.svg";
import './Header.scss';

export default class Header extends React.Component{
    render(){
        const {countOfFavorites, countOfItems} = this.props
        return(
            <header className='header'>
                <div className="header-box">
                <span className="star2">
                    <span className="count">{countOfFavorites}</span>
                    <Star2/>
                </span>
                <span className="basket">
                <span className="count">{countOfItems}</span>
                    <Basket/>
                </span>
                </div>
            </header>
        )
    }
}
Header.propTypes = {
    countOfFavorites: PropTypes.number,
    countOfItems: PropTypes.number
  };