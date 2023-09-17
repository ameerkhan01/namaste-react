import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, deliveryTime, locality } = resData?.info;
  const { totalFee } = resData?.info?.feeDetails;
  return (
    <div className="res-card" style={{ backgroundColor: "#F0F0F0" }}>
      <img id="res-card-img" src={CDN_URL + resData.info.cloudinaryImageId} />
      <h3>{name}</h3>
      <div className="res-card-desc"> 
      
        <p>{locality}</p>
        <p>₹{totalFee / 10.0}</p>
      </div>

      <div className="res-card-footer">
        <p id="rating">
          {avgRating} <i class="fa-solid fa-star"></i>
        </p>
        <p id="res-card-time">{resData.info.sla.deliveryTime} Min</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
