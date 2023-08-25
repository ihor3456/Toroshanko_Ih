import React from "react";

export  default class Header extends React.Component{
    render() {
        const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',];
        const monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const newDate = new Date();
        const day = newDate.getDate();
        const days = daysArr[newDate.getDay()];
        const months = monthsArr[newDate.getMonth()];
        return(
            <div className="header-wrapper">
                <div className="header">
                    <div className="current-date">
                        <p className="day">{days}</p>
                        <p className="data">{day} {months}</p>
                    </div>
                </div>
            </div>
        )
    }
}