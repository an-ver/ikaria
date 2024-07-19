import React from "react";
import res from "../assets/images/marymary.jpg";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import "@fortawesome/fontawesome-free/css/all.min.css";

function RestaurantCard(props) {
  return (
    <Card className="restaurant-card">
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        className="card-title"
      >
        {props.name}
      </Typography>
      <CardMedia
        className="image-card"
        component="img"
        image={props.image}
        alt={props.name}
      />
      <CardContent className="card-content">
        <Typography
          variant="body2"
          color="text.secondary"
          className="card-desctiption"
        >
          {props.description}
        </Typography>

        <div className="rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
        </div>
        <Link to={"/Details"}>
          <Button className="button">Details</Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default RestaurantCard;
