import React from "react";

const ShimmerCard = () => {
    return (
        <>
        {Array.from({ length: 20 }).map((_, index) => (
            <div className="shimmer-card" key={index}>
                <div className="shimmer-card-img"></div>
                <p id="shimmer-p-tag"></p>
                <div className="shimmer-p-tags">
                    <p id="shimmer-p-tag-1"></p>
                    <p id="shimmer-p-tag-1"></p>
                </div>
                <div className="shimmer-p-tags">
                    <p id="shimmer-p-tag-1" style={{height:'30px', width:'50px',marginTop:'10px'}}></p>
                    <p id="shimmer-p-tag-1" style={{height:'30px', width:'50px',marginTop:'10px'}}></p>
                </div>
            </div>
        ))} 
        </>
    )
}

const Shimmer = () => {
    return (
        <>
         <div className="top-rated-container">
            <button
            id="top-rated-btn"
            onClick={() => {
                const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
                );
                setListOfRestaurants(filteredList);
            }}
            >
            Filter Top Rated Restaurant
            <i class="fa-solid fa-filter"></i>
            </button>
        </div>
        <h2 id="top-rated-h2">Top Rated Restaurants in Chennai</h2>
            <div className="shimmer-container">
                <div className="shimmer-cards">
                <ShimmerCard />
                </div>
            </div>
        </>
    );
}

export default Shimmer;