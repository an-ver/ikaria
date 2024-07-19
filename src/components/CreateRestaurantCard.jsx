import React from "react";
import RestaurantCard from "./RestaurantCard";

const CreatRestaurantCard = ({ data }) => {
  const ratingString = data.attributes.picture[0].title.split(":")[1].trim();
  const rating = parseFloat(ratingString.replace(",", "."));
  console.log("Rating:", rating);
  return (
    <RestaurantCard
      key={data.id}
      name={data.attributes.Name}
      image={
        "http://192.168.1.173:1337" +
        data.attributes.picture[0].image.data.attributes.url
      }
      backImage={
        "http://192.168.1.173:1337" +
        data.attributes.picture[1]?.image?.data?.attributes?.url
      }
      description={data.attributes.Description}
      rating={rating}
    />
  );
};
export default CreatRestaurantCard;
