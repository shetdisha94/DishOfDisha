import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurantList }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } =
    restaurantList?.info;
  return (
    <div className="card">
      <img
        src={CDN_URL + "/" + cloudinaryImageId}
        alt={name}
        className="img-rescard"
      />
      <h2>{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      <span>{avgRating} stars</span>
      <span>{sla.deliveryTime} minutes</span>
    </div>
  );
};

export default RestaurantCard;
