import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import providers from '../api/providers.json'
import { primaryFontColor, bgLightColor, bgCardColor } from '../assets/custom/colors'
import { Box, Grid, Rating, Typography } from '@mui/material';

interface Provider{
  username: string,
  role: string,
  priceRange: string,
  rating: number,
  reviews: string[],
  isAvailable: boolean
}

export default function Reviews() {

  const [data,setData] = React.useState<Provider[]>([]);

  React.useEffect(()=>{
    setData(providers);
  })

  return (

   <List sx={{ p:2 }}>
    {
      data.map((data,i)=>(
        <ListItem key={i} sx={{bgcolor:bgLightColor, mb:2, borderRadius:'8px'}}>
          <ListItemText>{data.username}</ListItemText>
          <Rating name="read-only" value={Math.random()*8} readOnly style={{color:bgCardColor}} />
        </ListItem>
      ))
    }
   </List>
  
  //   <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
  //   {data.map((data, i) => (
  //     <Box height={'50px'} sx={{ flexGrow: 1 }} key={i} textAlign={'center'} style={{ backgroundColor: bgLightColor, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 5 }}>
  //       <Grid container spacing={2} sx={{ height: '100%', alignItems: 'center' }}>
  //         <Grid xs={6}>
  //           <Typography color={primaryFontColor}>
  //             {data.username}
  //           </Typography>
  //         </Grid>
  //         <Grid xs={6}>
  //           <Rating name="read-only" value={5} readOnly />
  //         </Grid>
  //       </Grid>
  //     </Box>
  //   ))}
  // </List>  
  );
}