import React, { useState } from 'react';
import { Button, TextField, Stack, Typography, CssBaseline, Container, Box } from '@mui/material';
import { primaryFontColor, secondayFontColor, bgCardColor } from '../assets/custom/colors';

// Import your profile picture component here, e.g., ProfilePicture.
import ProfilePicture from './ProfilePicture';

export default function SProviderProfile({ user }) {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState('');
  const [service, setService] = useState('');
  const [price, setPrice] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    // Implement the logic to save the user's profile changes (e.g., make an API call).
    // You can update the state variables and display a success message.
  };

  const handleSignOut = () => {
    // Implement the logic to sign out the user (e.g., clear authentication tokens).
    // You can navigate to the login page or perform any other necessary actions.
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='sm' className='profile-container'>
        <Box sx={{ height: '100vh' }}>
          <Typography variant="caption" fontWeight="bold" fontSize="14pt" color={secondayFontColor}>
            Welcome {firstName} Planner
          </Typography>

          <ProfilePicture user={user} />

          <Stack spacing={2} style={{ width: '90vw', maxWidth: '400px' }}>
            <TextField
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              label="Servive to Provide"
              value={service}
              onChange={(e) => setService(e.target.value)}
            />
            <TextField
              label="Price Range"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              label="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
            variant="contained"
            sx={{
              height: '40px', 
              mt: 2,
              bgcolor: primaryFontColor,
              '&:hover':{
                bgcolor: bgCardColor,
                color:'white'
              }, }}
              disableElevation
              onClick={handleSave}>Save</Button>
              <Button
              variant="contained"
              sx={{
                height: '40px', 
                mt: 4,
                bgcolor: primaryFontColor,
                '&:hover':{
                  bgcolor: bgCardColor,
                  color:'white'
                }, }}
              disableElevation
              onClick={handleSignOut}>Sign Out</Button>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
    
  );
}
