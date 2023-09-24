import React from 'react'
import './User.css';
import { useState } from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:44
        }
    }

    componentDidMount() {
        console.log('component mounted');
    }
    
    render() {
        const {name, location, contact} = this.props.details;
        const {count} = this.state;

        return (
            <div className="user-card">
                <h1  style={{color:'red'}}>Class Component</h1>
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Contact: {contact}</h2>
                <h3>useState value: {count}</h3>
                <button 
                    className="state-btn" 
                    onClick={()=> {
                        this.setState({count: this.state.count+1})
                    }}>
                        increase
                </button>
            </div>
        )
    }
}

console.log(new UserClass());

export default UserClass;