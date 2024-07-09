import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link,
  CardActions,
  Button
  
} from "@mui/material";


function MapCard(props){
    return(
         
      <Card sx={{ 
        maxWidth: 300, 
        border:"1px solid hsl(0, 0%, 80%)",
        borderRadius:10,
        boxShadow: "5px 5px 5px hsla(0, 0%, 0%, 0.1)",
        display:"inline-block",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)"
        }

      }}>
      <CardMedia 
      sx={{ width:300,
         height: 300 }} 
        image={props.image} 
      />
      <CardContent>

        <Typography gutterBottom variant="h5" component="div" textAlign={"center"}>
          {props.name}
        </Typography>
    
        <CardActions>
            <Button size="small" 
            sx={{color:"black",}}
            >Learn More</Button>
        </CardActions>
      </CardContent>
         
    </Card>
    );
}

export default MapCard;