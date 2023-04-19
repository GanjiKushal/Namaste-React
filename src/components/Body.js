import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resto-container">
        {/* <RestaurantCard resName="Tgrill" cusine="Biryani, Arabian Mandi" />
          <RestaurantCard resName="KFC" cusine="Fried Chicken, Burgers" /> */}
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body