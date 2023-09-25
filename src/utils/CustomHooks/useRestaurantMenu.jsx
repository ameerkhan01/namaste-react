import React from "react";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {

    const[resInfo, setResInfo] = useState(null);

    useEffect(()=> {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`); //14096
        const json = await data.json();
        setResInfo(json);
    }

    return resInfo;
}

export default useRestaurantMenu;