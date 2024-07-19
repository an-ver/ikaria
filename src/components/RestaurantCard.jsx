import React from "react";
// import { Link } from "react-router-dom";
import { Card, CardContent } from "@mui/material";
import Rating from "./Rating";

function RestaurantCard(props) {
  return (
    <Card className="restaurant-card">
      <img className="image-card" src={props.image} alt={props.name} />
      <CardContent className="card-content">
        <p className="card-title">{props.name}</p>
        {/* <p className="card-description">{props.description}</p> */}
        <div className="rating">
          {/* <p className="rating-title">Βαθμολογίες</p> */}
          <Rating value={props.rating}></Rating>
        </div>
      </CardContent>
    </Card>
  );
}

export default RestaurantCard;
