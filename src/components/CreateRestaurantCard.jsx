import React from "react";
import RestaurantCard from "./RestaurantCard";

const CreatRestaurantCard = ({ data }) => {
  return (
    <RestaurantCard
      key={data.id}
      name={data.attributes.Name}
      image={
        "http://192.168.1.173:1337" +
        data.attributes.picture[0].image.data.attributes.url
      }
      description={data.attributes.Description}
    />
  );
};
export default CreatRestaurantCard;
