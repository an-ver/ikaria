import React from "react";
import res from "../assets/images/marymary-restaurant.jpg";
import { Card, CardContent, Typography } from "@mui/material";
import { CardMedia } from "@mui/material";

function RestaurantCard() {
  return (
    <Card className="restaurant-card">
      <CardMedia
        component="img"
        image={res}
        alt="Mary Mary Restaurant"
        className="card-media"
      />

      <CardContent>
        <Typography variant="h6" component="h3">
          Mary Mary Restaurant
        </Typography>
        <Typography variant="body2" component="p">
          Εστιατόριο με βεράντα και θέα το απέραντο γαλάζιο. Δημιουργική
          ελληνική κουζίνα που συνδυάζει σύγχρονες τεχνικές, παραδοσιακά
          προϊόντα και ντόπια υλικά όπως το ικαριώτικο κρέας
        </Typography>
      </CardContent>
    </Card>
  );
}
export default RestaurantCard;
