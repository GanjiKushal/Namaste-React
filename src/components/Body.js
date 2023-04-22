import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //let arr=useState(resList)
  //let [filteredRestaurants, setListOfRestaurants] = arr
  /*-------------------------or-------------------------------------*/
  let [allRestaurants, setAllRestaurants]=useState([])
  let [filteredRestaurants, setFilteredRestaurants] = useState([]);
  let [searchText, setSearchTest] = useState("");

  const filterData = (searchText, resList) => {
    return resList.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
  };
  
  useEffect(()=>{
    getRestaurants()
  },[])

  async function getRestaurants(){
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING")
    const json=await data.json()
    console.log(json)
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)

  }
   
  if(!allRestaurants) return null
  if(filteredRestaurants.length==0) return <h1>No Restaurant match your Filter</h1>


  return (allRestaurants?.length==0) ? <Shimmer/> :(
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
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
     
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filterdList = filteredRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setFilteredRestaurants(filterdList);
          }}
        >
          Get Top Restaurants
        </button>
      </div>
      
      <div className="resto-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
