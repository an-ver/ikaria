import React from "react";
import "../styles/Restaurants.css";
import CreateRestaurantCard from "./CreateRestaurantCard";
import FetchData from "./FetchData.jsx";

function Restaurants() {
  const { data, isLoading } = FetchData();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="restaurant-container">
      <h1 className="title">
        Δοκίμασε τα εστιατόρια στην Ικαρία με φαγητό που θα σου μείνει αξέχαστο
      </h1>
      <dl className="restaurant-cards">
        {data &&
          data
            .filter((item) => item.id >= 45 && item.id <= 54)
            .map((item) => <CreateRestaurantCard key={item.id} data={item} />)}
      </dl>
    </div>
  );
}

export default Restaurants;
