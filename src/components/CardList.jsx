import React from "react";
import { Card, CardContent, CardMedia, Typography, Link } from "@mui/material";
import { GiVillage } from "react-icons/gi";
import { BiSolidDrink } from "react-icons/bi";
import { TbBeach } from "react-icons/tb";
import { IoRestaurant } from "react-icons/io5";

function getIcon(name) {
  switch (name) {
    case "Χωριά":
      return <GiVillage style={{ marginLeft: "10px" }} />;
    case "Πανηγύρια":
      return <BiSolidDrink style={{ marginLeft: "10px" }} />;
    case "Παραλίες":
      return <TbBeach style={{ marginLeft: "10px" }} />;
    case "Εστιατόρια":
      return <IoRestaurant style={{ marginLeft: "10px" }} />;
  }
}
function CardList(props) {
  return (
    <Card className="card-list">
      <CardMedia className="card-list-media " image={props.image} />
      <CardContent className=".card-list-content">
        <Link className="card-list-link" href={props.path}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
          >
            {props.name}
            {getIcon(props.name)}
          </Typography>
        </Link>

        <Typography variant="body2" color="text.primary" textAlign="center">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default CardList;
