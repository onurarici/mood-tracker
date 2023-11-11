import React from "react";
import Row from "./Row";

let dayRow = [];

let months = ['J','F','M','A','M','J','J','A','S','O','N','D'];

let days = [];



    for (let i = 0; i<31; i++){

        dayRow.push([i+1,<Row/>])
    }

    console.log(dayRow);

export default function Calender(){
    return(
        <div className="calender">
        {months.map(val=>React.createElement("div",{className:"box monthsBar"},val))}
        {dayRow.map(val=>React.createElement("div",{className:"dayColumn"},val[0],val[1]))}
         </div>
    )
}

