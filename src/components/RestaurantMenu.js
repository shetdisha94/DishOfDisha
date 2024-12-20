import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  //custom hook
  const restaurantInfo = useRestaurantMenu(restaurantId);

  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    restaurantInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  console.log(
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards[0].card?.info?.name
  );
  console.log(itemCards);

  return (
    <div className="menu-container">
      <div className="restaurant-info">
        <h3>{name}</h3>
        <p>{cuisines}</p>
      </div>
      <div className="menu-list">
        <h3>Menu</h3>
        <ul className="menu-info">
          {itemCards.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
