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
import FavoriteIcon from './FavoriteIcon';
import { Provider } from '../entities/Providers'

export default function SProviderInfo({provider}:{provider:Provider}) {
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
    <Works works={provider.works}/>
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
        <Grid2 xs={10}  md={10} display={'flex'} flexDirection={'row'} gap={2}>
          <ListItemAvatar>
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="Remy Sharp" src={provider.image}
            >
            </Avatar>
          </ListItemAvatar>
          <div>
          <Typography fontSize="md" fontWeight="lg">
            {provider.username}
          </Typography>
          <Typography level="body-sm" fontWeight="md" textColor="text.tertiary">
            {provider.role}
          </Typography>
        </div>
        </Grid2>
        <Grid2 xs={2}  md={2}>
        <FavoriteIcon provider={provider} />
        </Grid2>
        <div style={{marginTop:'2rem', alignItems: 'center',display:'flex', flexDirection:'row' }}>
        <Grid2 xs={10} md={10}>
        <Typography level="body-sm" fontWeight="none" textColor="text.tertiary" >
            Price Range: {provider.priceRange}
          </Typography>
        </Grid2>
        <Grid2 xs={2} md={2}>
        {
          provider.isAvailable ?
          (
            <Chip
            variant="outlined"
            size="sm"
            sx={{
              border: '2px solid '+'rgba(0,90,82,.5)',
              borderRadius: 'sm',
              color: primaryFontColor,
              bgcolor:bgLightColor,
              fontWeight:'bold',
              py: 0.5,
              px: 2.5,
            }}
          >
            Available 
          </Chip>
          ) : (
            <Chip
            variant="outlined"
            size="sm"
            sx={{
              border: '2px solid '+'rgba(192, 0, 0, 0.84)',
              borderRadius: 'sm',
              color: 'rgba(192, 0, 0, 0.84)',
              bgcolor:bgLightColor,
              fontWeight:'bold',
              py: 0.5,
              px: 2.5,
            }}
          >
            Not Available 
          </Chip>
          )
        }
        </Grid2>
        </div>
      </Grid2>
      </Box>
    </Sheet>
  </CardContent>
  <Reviews reviews={provider.reviews} rating={provider.rating}/>
  <CardActions sx={{flexDirection:'column'}}>
    <ContactBtn/>
    <AddReview />
  </CardActions>
</Card>
  );
}
