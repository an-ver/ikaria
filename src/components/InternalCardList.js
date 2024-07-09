import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import { CardContent } from '@mui/joy';

function intCardList(props){
    return(
        <Card
            variant="plain"
            sx={{width: 330, bgcolor: 'white',p: 0, 
            border : "1px solid #ccc", borderRadius: 20,  boxShadow:" 0 2px 4px rgba(0,0,0,0.6)"}}>
        
      
        <Box >
          <AspectRatio ratio="3/2">
            <figure>
              <img src={props.image} alt={props.name} />
             
            </figure>
          </AspectRatio>
           <CardContent sx={{padding:0}}>
                {props.description}
              </CardContent>
          
        
        

        <CardCover
          className="gradient-cover"
          sx={{'&:hover, &:focus-within': {opacity: 1,},
            opacity: 0,
            p: 2,
            transition: '0.2s ease-in',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            
    </CardCover>
  </Box>
      
  </Card>
      
  );
}
export default intCardList;