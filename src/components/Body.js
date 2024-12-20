import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { FOOD_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  console.log("hi");
  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(FOOD_API_URL);
    const restaurantData = await response.json();
    setRestaurantInfo(
      restaurantData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );
    setFilteredRestaurants(
      restaurantData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);
  if (onlineStatus == false)
    return (
      <div className="online-status">
        <h2>Something went wrong. Please check your internet connetion !!!!</h2>
      </div>
    );
    

  return restaurantInfo.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter-container">
        <div className="search">
          <input
            className="search-input"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="btn-search"
            onClick={() => {
              const filteredRestaurants = restaurantInfo.filter(
                (res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                // console.log(res.info.name.toLowerCase());
                // console.log(searchText.toLowerCase());
              );
              setFilteredRestaurants(filteredRestaurants);
              console.log(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="btn-filter"
          onClick={() => {
            const filterRestaurantInfo = restaurantInfo.filter(
              (res) => res.info.avgRating > 4.5
            );
            setRestaurantInfo(filterRestaurantInfo);
            // filterRestaurantInfo = restaurantObj.filter(
            //   (res) => res.info.avgRating > 4.6
            // );
            console.log(filterRestaurantInfo);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="food-container">
        {/* {ResCard(resObj[0].info)} */}
        {/* <ResCard className="test" resData={resObj[0]} /> */}
        {filteredRestaurants.map((restaurantInfo) => (
          <Link
            key={restaurantInfo.info.id}
            to={"/restaurants/" + restaurantInfo.info.id}
          >
            <RestaurantCard restaurantList={restaurantInfo} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
