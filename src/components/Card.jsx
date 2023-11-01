import React from "react";

export default function Card (props) {
    return(
        <div className="card" id={props.io}>
            {props.id}
            <button onClick={props.nextCard}>next</button>
            
        </div>
    )
}

