import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link
  
} from "@mui/material";



function InternalCard(props){
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
        <Link 
        href={props.path}
        underline="none"
              sx={{
                color: "text.primary"
              }}
              >
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        </Link>
        
        <Typography variant="body2" color="text.secondary" textAlign = "center">
          {props.description}
        </Typography>
      </CardContent>
         
    </Card>
    );
      
  
}
export default InternalCard;