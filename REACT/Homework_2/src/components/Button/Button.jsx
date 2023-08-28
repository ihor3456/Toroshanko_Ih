import React from "react";
import PropTypes from 'prop-types';
import './Button.scss'

export default class Button extends React.Component{
    render() {
        const {text, onClick = () => {}} = this.props
        return(
            <button className='btn' onClick={onClick}>{text}</button>
        )
    }
}
Button.propsTypes={
    text: PropTypes.string,
    onClick: PropTypes.func
}