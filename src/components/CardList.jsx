import React from "react";
import { Card, CardContent, CardMedia, Typography, Link } from "@mui/material";

function CardList(props) {
  return (
    <Card
      className="card-list"
      //   style={{ border: "1px solid hsl(0, 0%, 80%)", borderRadius: "20px" }}
      //
    >
      <CardMedia className="card-list-media " image={props.image} />
      <CardContent className=".card-list-content">
        <Link className="card-list-link" href={props.path}>
            {props.name}
          </Typography>
        </Link>

        <Typography className="card-list-title">{props.description}</Typography>
      </CardContent>
    </Card>
  );
}
export default CardList;
