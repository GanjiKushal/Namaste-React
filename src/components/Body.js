import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  //let arr=useState(resList)
  //let [listOfRestaurants, setListOfRestaurants] = arr
  /*-------------------------or-------------------------------------*/
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  let [searchText, setSearchTest] = useState("");

  const filterData = (searchText, resList) => {
    return resList.filter((restaurant) =>
      restaurant.data.name.includes(searchText)
    );
  };
  
  useEffect(()=>{
    getRestaurants()
  },[])

  async function getRestaurants(){
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING")
    const json=await data.json()
    console.log(json)
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards)
  }

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
            const data = filterData(searchText, resList);
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
