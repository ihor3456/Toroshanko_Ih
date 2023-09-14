import React from "react";
import PropTypes from 'prop-types';
import './Button.scss'

const Button = ({ text, onClick }) => {
  return (
    <button className='btn' onClick={onClick}>{text}</button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
