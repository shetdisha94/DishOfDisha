import { useState, useEffect } from "react";
import { MENU_URL } from "./constants.js";

const useRestaurantMenu = (restaurantId) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + restaurantId);
    const json = await data.json();
    setRestaurantMenu(json.data);
  };
  return restaurantMenu;
};

export default useRestaurantMenu;
