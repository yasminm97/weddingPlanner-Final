import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import FavoriteIcon from './FavoriteIcon'; // Replace with your actual FavoriteIcon component
import providers from '../api/providers.json';
import { primaryFontColor, secondayFontColor, bgCardColor, bgLightColor } from '../assets/custom/colors';
import { Link } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';

interface Provider {
  username: string;
  role: string;
  priceRange: string;
  rating: number;
  reviews: string[];
  isAvailable: boolean;
  image:string;
}

export default function Search() {
  const [data, setData] = useState<Provider[]>([]);
  const [searchResults, setSearchResults] = useState<Provider[]>([]);
  
  useEffect(() => {
    setData(providers);
    setSearchResults(providers);
  }, []);

  const handleSearch = (query: string) => {
    const filteredResults = data.filter((provider) =>
      provider.username.toLowerCase().includes(query.toLowerCase()) ||
      provider.role.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
      <Stack spacing={2} sx={{ width: '90vw', marginTop:'12vh', display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center' }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={data.map((option) => option.username)}
        onInputChange={(event, newValue) => {
          handleSearch(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search ..."
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          
          />
        )}
      />

      {searchResults.map((result, index) => (
        <ListItem
        component={Link}
        to='/service-provider-info'
          key={index}
          alignItems="flex-start"
          style={{
            width: '90vw',
            backgroundColor: bgLightColor,
            padding: '10px',
            borderRadius: '8px',
            alignItems: 'center',
            height: 'auto',
            marginBottom: '10px',
            color:primaryFontColor
          }}
          >
          <ListItemAvatar>
            <Avatar alt="Provider Avatar" src={result.image} />
          </ListItemAvatar>
          <ListItemText
            primary={result.username}
            secondary={
              <React.Fragment>
                <Typography variant="subtitle2" color={secondayFontColor}>
                  {result.role}
                </Typography>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color={secondayFontColor}
                >
                  Price Range:
                </Typography> {result.priceRange}
              </React.Fragment>
            }
          />
          <FavoriteIcon />
        </ListItem>
        
          ))}
       </Stack>
      </Container>
    </React.Fragment>
  );
}
