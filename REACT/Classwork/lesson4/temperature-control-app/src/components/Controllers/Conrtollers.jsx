import React from "react";
import Button from "../Button/Button";
export default class Conrtollers extends React.Component{
    render() {
        const {decrease,increase, openModal}= this.props;
        return(
            <div className="widget-controllers">
                <div className="button-container">
                    <Button classNames="button--primary" click={decrease} data-decrise='decrise'>Cold</Button>
                    <Button classNames="button--secondary" click={increase} data-incrise='incrise'>Hot</Button>
                    <Button click={openModal}>Modal</Button>
                </div>
            </div>
        )
    }
}