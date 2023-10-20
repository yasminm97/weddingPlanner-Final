import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { bgCardColor, primaryFontColor } from '../assets/custom/colors';
import { TextField, Rating, Button } from '@mui/material';

interface ReviewCardProps {
  user: string;
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  color: primaryFontColor,
  borderRadius: '10px',
  boxShadow: 1,
  p: 4,
  textAlign: 'center'
};

export default function ReviewCard({ user, open, handleClose }: ReviewCardProps) {
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');

  const handleRatingChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    setRating(newValue);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    handleClose();
  };

  useEffect(()=>{
    open=true;
  },[]);
  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="subtitle1">
            How was your experience with {user}
          </Typography>
          <Rating
            name="rating"
            value={rating}
            onChange={handleRatingChange}
            size="large"
            color='primaryFontColor'
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            label="Comment..."
            sx={{ mt: 2, fontSize: '12pt' }}
            size="small"
            value={comment}
            onChange={handleCommentChange}
          />
          <Button
          fullWidth
            variant="contained"
            disableElevation
            onClick={handleSubmit}
            sx={{ mt: 2,  bgcolor: primaryFontColor,
            '&:hover':{
              bgcolor: bgCardColor,
            },
           }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
