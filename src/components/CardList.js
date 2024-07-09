import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';

function CardList(props){
    function getLinkUrl(id) {
      switch (id) {
        case '1':
          return '/xwria';
        case '2':
          return '/paralies';
        case '3':
          return '/panigiria';
        case '4':
          return '/estiatoria';
        default:
          return '/localhost:3000/'; 
      }
    }

    return(
        <Card
            variant="plain"
            sx={{width: 320, bgcolor: 'initial',p: 0, 
            border : "1px solid #ccc", borderRadius: 20,  boxShadow:" 0 2px 4px rgba(0,0,0,0.6)"}}>
        
      
        <Box sx={{ position: 'absolut' }}>
          <AspectRatio ratio="4/2.8">
            <figure>
              <img src={props.image} alt={props.name} />
            </figure>
          </AspectRatio>
        
        <Box sx={{ p: 6, bgcolor: 'white', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5%' }}>
          <Typography level="body-sm" sx={{ color: 'text.primary', textAlign: 'center', width: '100%' }}>
            {props.description}
          </Typography>
        </Box>

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
                  href={getLinkUrl(props.id)} 
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