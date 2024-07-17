import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

function MapCard(props) {
  return (
    <>
      <Card className="map-card">
        <CardMedia className="map-card-media" image={props.image} />
        <CardContent className="map-card-content">
          <Typography className="map-card-title">{props.name}</Typography>
          <CardActions className="map-card-actions">
            <NavLink to={"/Info"}>
              <Button className="map-card-button">Πληροφορίες</Button>
            </NavLink>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
}

export default MapCard;
