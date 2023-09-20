import React from "react";
import Header from "../Header";
import User from "../User/User";
import './About.css';
import UserClass from "../User/UserClass";

const About = () => {
    const details = {
        name: 'Ameer khan B',
        location: 'Sathy',
        contact: '@itisameerkhan'
    }
    return (
        <div className="about">
            <h1>About</h1>
            <h2>This is about page</h2>
            <User details={details} />
            <UserClass details={details} />
        </div>
    )
}

export default About;