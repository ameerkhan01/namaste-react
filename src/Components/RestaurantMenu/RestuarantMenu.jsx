import React from "react";
import { useEffect, useState } from "react";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";
import Recommended from "./Recommended";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/CustomHooks/useRestaurantMenu";


const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <RestaurantMenuShimmer /> 

    const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const {name, city, cuisines, areaName, avgRating, totalRatingsString, costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info;
    const {lastMileTravel, deliveryTime} = resInfo?.data?.cards[0]?.card?.card?.info?.sla;
    const {message} = resInfo?.data?.cards[0]?.card?.card?.info?.feeDetails;

    return (
        <div className="menu">
            <div className="upper-menu-container-1">
                <p>Home / {city}  / {name}</p>
                <div className="icons">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <div className="menu-container-main">
                <div className="menu-container-main-left">
                  <h2>{name}</h2>
                  <p>{cuisines.join(", ")}</p>
                  <p>{areaName}, {lastMileTravel} km</p>
                  <p style={{fontSize:'18px'}}>
                  <i class="fa-solid fa-bicycle" style={{paddingRight:'8px'}}></i>
                  {message}
                  </p>
                </div>
                <div className="menu-container-main-right">
                    <div className="another-main-right"> 
                    
                    <p className="main-right-p">
                        <i class="fa-solid fa-star"></i>
                        {avgRating}
                    </p>
                    <p>{totalRatingsString}</p>
                    </div>
                </div>
            </div>
            <div className="time-container">
                    <div className="time-container-left">
                    <p>
                    <i class="fa-solid fa-clock" style={{paddingRight:'4px'}}></i>
                    {deliveryTime} Mins
                    </p>
                    <p>
                    {costForTwoMessage}                
                    </p>
                    </div>
                    <div className="timer-container-right">
                        <button className="order-btn">Order now</button>
                    </div>
            </div>
            <div className="recommended-container">
                <h2>Recommended</h2>
                {itemCards.map((itemCard) => {
                    return ( <Recommended key={itemCard?.card?.info?.id} itemCardValue={itemCard} /> )
                })}
            </div>
        </div>
    )
}

export default RestaurantMenu;