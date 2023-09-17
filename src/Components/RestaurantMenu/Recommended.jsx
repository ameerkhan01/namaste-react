import React from "react";

const Recommended = (props) => {

    const {itemCardValue} = props;
    const {name} = itemCardValue?.card?.info;
    return (
        <p>{name}</p>
    )
}

export default Recommended;