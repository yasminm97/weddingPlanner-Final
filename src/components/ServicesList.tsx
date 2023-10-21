import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import providers from '../api/providers.json'
import { bgLightColor, primaryFontColor } from '../assets/custom/colors'
import FavoriteIcon from './FavoriteIcon';
import { Provider } from '../entities/Providers'

export default function ServicesList({provider}) {


  const [data,setData] = React.useState<Provider[]>([]);

  React.useEffect(()=>{
    setData(providers);
  })

  return (

    <div className="package-details">
      <Typography variant="caption" fontWeight={'bold'} fontSize={'14pt'} color={primaryFontColor} textAlign={'left'}>
        
      </Typography>
      <List sx={{ bgcolor: 'background.paper',minWidth:'90vw' }} style={{margin:'auto'}}>
      { 
        data.map((data,i)=>(
        //   ( data.role ==  ) &&
          <div key={i}>
          <ListItem
            alignItems="flex-start"
            style={{ width:'100%', backgroundColor: bgLightColor, padding: '10px', borderRadius: '8px', alignItems: 'center',  marginBottom:'1.5rem', color:primaryFontColor }}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={data.image} />
          </ListItemAvatar>
          <ListItemText
              primary={data.username}
              color={primaryFontColor}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color={primaryFontColor}
                  >
                    Price Range: 
                  </Typography>{data.priceRange}
                </React.Fragment>
              }
            />
            <FavoriteIcon provider={data}/>
          </ListItem>
        </div>
        ))
      }
      </List>
    </div>
  );
}