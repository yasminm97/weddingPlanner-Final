import Button from '@mui/material/Button';
import { primaryFontColor, bgCardColor } from '../assets/custom/colors'
import ReviewCard from './ReviewCard';
import { useState } from 'react';

export default function AddReview() {
  const[open,setOpen] = useState(false);

  return (
    <>
     <Button
    fullWidth
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
      onClick={()=>setOpen(true)}
    >
      Add Review
    </Button>
    {
      open && <ReviewCard user={'ahmed'} open={open} handleClose={()=>setOpen(false)} />
    }
    </>
  );
}