import React from "react";
import './User.css'
import { useState } from "react";

const User = (props) => {

    const {details} = props;
    const [value, setValue] = useState(0);

    return (
        <div className="user-card">
            <h1 style={{color:'red'}} >Function Component</h1>
            <h2>name: {details.name}</h2>
            <h2>location: {details.location}</h2>
            <h2>contact: {details.contact}</h2>
            <h3>useState value: {value}</h3>
            <button onClick={() => setValue(value+1)} className="state-btn">increase</button>
        </div>
    )
}

export default User;