import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { Chip } from '@mui/joy';
import { Avatar, Box, CardActions, ListItemAvatar } from '@mui/material';
import AddReview from "./AddReview";
import ContactBtn from "./ContactBtn";
import Reviews from './Reviews';
import { bgLightColor, primaryFontColor } from '../assets/custom/colors';
import Works from './Works';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export default function SProviderInfo() {
  return (
    <Card
      orientation="vertical"
      sx={{
        width: '100%',
        flexWrap: 'wrap',
        overflow: 'auto',
        resize: 'vertical',
        border: 'none', 
        mt:'10vh',
        p:0,
      }}
    >
      {/* <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}> */}
        {/* <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
          srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
          style={{
            border: 'none', 
            padding: 0, 
          }}
        /> */}
        <Works />
      {/* </AspectRatio> */}
      <CardContent>
        <Sheet
          sx={{
            my: 1.5,
            display: 'flex',
            gap: 2,
            '& > div': { flex: 1 },
            px:2,
          }}
        >
           <Box sx={{ flexGrow: 1, alignItems:'center' }}>
            <Grid2 container spacing={2}>
              <Grid2 xs={2}  md={2}>
                <ListItemAvatar>
                <Avatar
                 sx={{ width: 56, height: 56 }}
                 alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT45Un1AWu4niK76mA7vAbznyJ1ekb3940qv-VrITQEWwT5DCX57dA9BJ6FNQvzkP-j_Q&usqp=CAU" />
                </ListItemAvatar>
              </Grid2>
              <Grid2 xs={10}  md={10}>
              <div>
                <Typography fontSize="md" fontWeight="lg">
                  Jessica Morrison
                </Typography>
                <Typography level="body-sm" fontWeight="md" textColor="text.tertiary">
                  Photographer
                </Typography>
              </div>
              </Grid2>
              <div style={{marginTop:'2rem', alignItems: 'center',display:'flex', flexDirection:'row' }}>
              <Grid2 xs={10} md={8}>
              <Typography level="body-sm" fontWeight="none" textColor="text.tertiary" >
                  Price Range: $250 - $500
                </Typography>
              </Grid2>
              <Grid2 xs={2} md={4}>
              <Chip
                  variant="outlined"
                  size="sm"
                  sx={{
                    border: '2px solid '+'rgba(0,90,82,.5)',
                    borderRadius: 'sm',
                    color: primaryFontColor,
                    bgcolor:bgLightColor,
                    py: 0.5,
                    px: 2.5,
                  }}
                >
                   Availabe 
                </Chip>
              </Grid2>
              </div>
            </Grid2>
            </Box>
        </Sheet>
      </CardContent>
      <Reviews />
      <CardActions sx={{flexDirection:'column'}}>
        <ContactBtn/>
        <AddReview />
      </CardActions>
    </Card>
  );
}
