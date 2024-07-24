import React from "react";
import { Card, CardContent } from "@mui/material";
import Rating from "./Rating";

function RestaurantCard(props) {
  return (
    <a href={props.tripAdvisorUrl}>
      <Card className="restaurant-card">
        <img className="image-card" src={props.image} alt={props.name} />
        <CardContent className="card-content">
          <p className="card-title">{props.name}</p>
          <div className="rating">
            <Rating value={props.rating}></Rating>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}

export default RestaurantCard;
