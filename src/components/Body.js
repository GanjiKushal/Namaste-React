import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //let arr=useState(resList)
  //let [listOfRestaurants, setListOfRestaurants] = arr
  /*-------------------------or-------------------------------------*/
  let [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filterdList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filterdList);
          }}
        >
          Get Top Restaurants
        </button>
      </div>
      <div className="resto-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
