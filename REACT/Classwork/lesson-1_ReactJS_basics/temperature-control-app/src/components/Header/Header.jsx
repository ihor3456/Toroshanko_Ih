import React from "react";

export default class Header extends React.Component {
  render() {
    const daysArr = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const monthsArr = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const newDate = new Date();
    const day = newDate.getDate();
    const days = daysArr[newDate.getDay()];
    const month = monthsArr[newDate.getMonth()];
    return (
      <div class="header-wrapper">
        <div class="header">
          <div class="current-date">
            <p class="day">{days}</p>
            <p class="data">
              {day} {month}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
