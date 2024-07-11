import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link,
  CardActions,
  Button,
} from "@mui/material";
import "../styles/MapCard.css";

function MapCard(props) {
  return (
    <Card className="map-card">
      <CardMedia className="map-card-media" image={props.image} />
      <CardContent className="map-card-content">
        <Typography
          className="map-card-title"
          gutterBottom
          variant="h5"
          component="div"
          textAlign={"center"}
        >
          {props.name}
        </Typography>

        <CardActions className="map-card-actions">
          <Button className="map-card-button">Πληροφορίες</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default MapCard;
