import React from "react";
import "../styles/Restaurants.css";
import RestaurantCard from "./RestaurantCard";

function Restaurants() {
  return (
    <div className="restaurant-container">
      <h1>Τα Εστιατόρια</h1>
      <RestaurantCard />
    </div>
  );
}

export default Restaurants;
