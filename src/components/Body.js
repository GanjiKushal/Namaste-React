import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //let arr=useState(resList)
  //let [listOfRestaurants, setListOfRestaurants] = arr
  /*-------------------------or-------------------------------------*/
  let [listOfRestaurants, setListOfRestaurants] = useState(resList);
  let [searchText, setSearchTest] = useState("");

  const filterData = (searchText, listOfRestaurants) => {
    return listOfRestaurants.filter((restaurant) =>
      restaurant.data.name.includes(searchText)
    );
  };

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchTest(e.target.value);
          }}
        />

        <button
          className="search-button"
          onClick={() => {
            const data = filterData(searchText, listOfRestaurants);
            setListOfRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
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
