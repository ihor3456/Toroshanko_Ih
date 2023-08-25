import React from "react";
import './Button.scss'
export default class Button extends React.Component{
    render() {
        const {classNames, type = 'button', click = () => {}, children,...restProps} = this.props;
        console.log(restProps)
        return(
            <button className={`button ${classNames}`} type={type} onClick={click} {...restProps}>{children}</button>
        )
    }
}