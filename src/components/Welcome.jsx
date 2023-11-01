import React, { useState } from "react";





export default function Welcome(){

    const [isSubmitted,setIsSubmitted] = useState(false);

    function submit(){
        setIsSubmitted = true
    };

    return(
        <div className = "welcome">
            <div className = 'message-box'>
            <h1>Welcome To Mood Tracker App</h1><br/><br/>
            <h2>Definition of the app</h2>
            <h2>about two lines</h2>
            <input placeholder="Your name"></input><br/>
            <button className="btn btn-primary" onClick={submit} type="submit">Next</button>
           
            

            </div>
        </div>
    )
}