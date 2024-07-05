import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';

function CardList(props){
    return(
        <Card 
            variant="plain"
            sx={{width: 250, bgcolor: 'initial',p: 0, 
            border : "1px solid #ccc", borderRadius: 20,  boxShadow:" 0 2px 4px rgba(0,0,0,0.5)"}}>
        
      
        <Box sx={{ position: 'relative' }}>
          <AspectRatio ratio="4/2.7">
            <figure>
              <img src={props.image} alt={props.name} />
            </figure>
          </AspectRatio>
        
        <Box sx={{ p: 2} }>
          <Typography level="body-sm" sx={{ color: 'text.primary', textAlign: 'center' }}>
            {props.description}
          </Typography>
        </Box>

        <CardCover
          className="gradient-cover"
          sx={{'&:hover, &:focus-within': {opacity: 1,},
            opacity: 0,
            transition: '0.1s ease-in',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            
        <div>
            <Box
              sx={{
                p: 2,
                textAlign: 'center',
                maxWidth: '100%',
              }}
            >
              <Typography level="h2" noWrap sx={{ fontSize: 'lg' }}>
                <Link
                  href="#dribbble-shot"
                  overlay
                  underline="none"
                  sx={{
                    color: '#fff',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    display: 'block',
                  }}
                >
                  {props.name}
                </Link>
              </Typography>
            </Box>
        </div>
    </CardCover>
  </Box>
      
  </Card>
      
  );
}
export default CardList;