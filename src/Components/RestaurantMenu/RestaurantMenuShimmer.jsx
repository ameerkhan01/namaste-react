import React from "react";

const RestaurantMenuShimmer = () => {
    return (
        <div className="res-menu-shimmer-ui">
            <div className="res-menu-shimmer-inner-0">
                <div className="res-menu-inner-0-shimmer-0"></div>
                <div className="res-menu-inner-0-shimmer-1"></div>
            </div>
            <div className="res-menu-shimmer-inner-1">
                <div className="res-menu-inner-1-shimmer-1"></div>
                <div className="res-menu-inner-1-shimmer-2"></div>
            </div>
            <div className="res-menu-shimmer-inner-2">
                <div style={{display:'flex',gap:'20px'}}>
                <div className="res-menu-inner-2-shimmer-1"></div>
                <div className="res-menu-inner-2-shimmer-2"></div>
                </div>
                <div className="button-shimmer"></div>
                
            </div>
        </div>
)}

export default RestaurantMenuShimmer;