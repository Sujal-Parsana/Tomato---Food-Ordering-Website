import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list && food_list.length > 0 ? (
          food_list
            .filter((item) => category === "All" || category === item.category)
            .map((item) => (
              <FoodItem
                key={item._id} // Using _id instead of index for uniqueness
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))
        ) : (
          <p>Loading dishes...</p> // Fallback message if food_list is empty or undefined
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
