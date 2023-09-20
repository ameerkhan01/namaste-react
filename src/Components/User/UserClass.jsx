import React from 'react'
import './User.css'

class UserClass extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user-card">
                <h2>Name: {this.props.name}</h2>
                <h2>Location: {this.props.location}</h2>
                <h2>Contact: {this.props.contact}</h2>
            </div>
        )
    }
}

export default UserClass;