import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import providers from '../api/providers.json'
import PackageModal from './PackageModal'
import { Button } from '@mui/material';
import { primaryFontColor, secondayFontColor, bgCardColor } from '../assets/custom/colors'
import FavoriteIcon from './FavoriteIcon';
import { Link } from 'react-router-dom';


interface Provider{
  username: string,
  role: string,
  priceRange: string,
  rating: number,
  reviews: string[],
  isAvailable: boolean,
  image:string
}

export default function PackageDetails() {

  const [data,setData] = React.useState<Provider[]>([]);
  const [open,setOpen] = React.useState<boolean>(false);

  React.useEffect(()=>{
    setData(providers);
  })

  return (
  <>
    <div className="package-details" style={{ textAlign:'left',width:'100vw' }}>
      <Typography variant="caption" fontWeight={'bold'} fontSize={'14pt'} color={primaryFontColor} p={'.5rem'}>
        Enjoy our plan to your special day 
      </Typography>
      <List sx={{ bgcolor: 'background.paper',minWidth:'90vw' }} style={{margin:'auto'}}>
      {
        data.map((data,i)=>(
          <div key={i}>
          <Typography variant="subtitle2" color={secondayFontColor}>{data.role}</Typography>
          <ListItem
          component={Link}
          to="/service-provider-info"
           alignItems="flex-start"
            style={{ color:primaryFontColor, width:'100%', backgroundColor: 'rgba(230, 245, 243, 0.5)', padding: '10px', borderRadius: '8px', alignItems: 'center',  marginBottom:'1.5rem' }}>
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
                    color={secondayFontColor}
                  >
                    Price Range: 
                  </Typography>{data.priceRange}
                </React.Fragment>
              }
            />
            <FavoriteIcon />
          </ListItem>
        </div>
        ))
      }
      <Button
          fullWidth
          onClick={()=> setOpen(true)}
          variant="contained"
          sx={{
            height: '40px', 
            mt: 2,
            bgcolor: primaryFontColor,
            '&:hover':{
              bgcolor: bgCardColor,
              color:'white'
            },
            '&:focus': {
              bgcolor: bgCardColor,
              color:'white'
            },
          }}
          disableElevation
          type="submit"
        >
          Select Package
        </Button>
      </List>
      {
        open && <PackageModal open={open} handleClose={()=> setOpen(false)}/>
      }
    </div>
  </>
  );
}