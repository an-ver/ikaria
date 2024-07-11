import React from "react";
import { Card, CardContent, CardMedia, Typography, Link } from "@mui/material";
import "../styles/CardList.css";

function CardList(props) {
  return (
    <Card className="card-list">
      <CardMedia className="card-list-media " image={props.image} />
      <CardContent className=".card-list-content">
        <Link className="card-list-link" href={props.path}>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
        </Link>

        <Typography className="card-list-title">{props.description}</Typography>
      </CardContent>
    </Card>
  );
}
export default CardList;
