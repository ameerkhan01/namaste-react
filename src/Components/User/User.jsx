import React from "react";
import './User.css'

const User = (props) => {

    const {details} = props;
    return (
        <div className="user-card">
            <h2>name: {details.name}</h2>
            <h2>location: {details.location}</h2>
            <h2>contact: {details.contact}</h2>
        </div>
    )
}

export default User;