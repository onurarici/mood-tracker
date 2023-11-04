import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { welcomeActions } from "../store/welcome-slice";

export default function Welcome(){
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(welcomeActions.logIn());
    }
    return(
        <div className = "welcome">
            <form onSubmit={handleSubmit}>
            <h1>Welcome To Mood Tracker App</h1><br/><br/>
            <h2>Definition of the app</h2>
            <h2>about two lines</h2>
            <button className="btn btn-primary" type="submit">Next</button>
            </form>
            

            
        </div>
    )
}