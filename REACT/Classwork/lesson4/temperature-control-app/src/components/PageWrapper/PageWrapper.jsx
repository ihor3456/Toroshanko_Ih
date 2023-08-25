import React from "react";

export default class PageWrapper extends React.Component{
    createBg = () =>{
        const temp = this.props.temperature
        const statusClass = ["widget-container"]
        if(temp > 20){
            statusClass.push("hot")
        }else if(temp < 10){
            statusClass.push("cold")
        }else {
            statusClass.push("neutral")
        }
        return statusClass.join(" ")
    }
    render() {
        const {children} = this.props;
        const getBg = this.createBg();
        return(
            <div className={getBg}>
                {children}
            </div>
        )
    }
}