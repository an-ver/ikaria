import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

function MapCard(props) {
  const navigate = useNavigate();

  const handleInfoClick = () => {
    navigate(`/info/${props.id}`);
  };

  return (
    <>
      <Card className="map-card">
        <CardMedia className="map-card-media" image={props.image} />
        <CardContent className="map-card-content">
          <Typography className="map-card-title">{props.name}</Typography>
          <CardActions className="map-card-actions">
            <Button onClick={handleInfoClick} className="map-card-button">
              Πληροφορίες
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
}

export default MapCard;
