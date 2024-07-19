import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link,
  Box,
} from "@mui/material";
import { GiVillage } from "react-icons/gi";
import { BiSolidDrink } from "react-icons/bi";
import { TbBeach } from "react-icons/tb";
import { IoRestaurant } from "react-icons/io5";

function getIcon(name) {
  const iconStyle = {
    backgroundColor: "white",
    height: "40px",
    width: "auto",
    border: "1px solid black",
    borderRadius: "50px",
    boxSizing: "border-box",
    transform: "translateY(-100%)",
  };
  switch (name) {
    case "Χωριά":
      return <GiVillage style={{ ...iconStyle }} />;
    case "Πανηγύρια":
      return <BiSolidDrink style={{ ...iconStyle }} />;
    case "Παραλίες":
      return <TbBeach style={{ ...iconStyle }} />;
    case "Εστιατόρια":
      return <IoRestaurant style={{ ...iconStyle }} />;
    default:
      return null;
  }
}

function getPathByName(name) {
  switch (name) {
    case "Χωριά":
      return "/xwria";
    case "Πανηγύρια":
      return "/panigiria";
    case "Παραλίες":
      return "/paralies";
    case "Εστιατόρια":
      return "/estiatoria";
    default:
      return "/home";
  }
}

function CardList(props) {
  const path = getPathByName(props.name);
  return (
    <Card className="card-list">
      <CardMedia className="card-list-media " image={props.image} />
      <CardContent className="card-list-content">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box className="icon-box">{getIcon(props.name)}</Box>
          <Link className="card-list-link" href={path} underline="none">
            <Typography
              gutterBottom
              variant="h4"
              textAlign="center"
              sx={{ margin: "-20px" }}
            >
              {props.name}
            </Typography>
          </Link>
          <Typography
            variant="body2"
            color="text.primary"
            textAlign="center"
            sx={{
              margin: "20px",
            }}
          >
            {props.description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
export default CardList;
