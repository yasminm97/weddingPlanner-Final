import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-regular-svg-icons';
import { primaryFontColor, secondayFontColor } from '../assets/custom/colors'
import { Button } from '@mui/material';

const FavoriteIcon: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div>
      <Button
       onClick={handleToggleFavorite}
       sx={{
        '&:hover': {
          border:'none',
          backgroundColor:'transparent'
        },
        '&:focus': {
          border:'none',
          backgroundColor:'transparent',
          outline: 'none'
        },
        '&:click': {
          border:'none',
          backgroundColor:'transparent',
          outline: 'none'
        },
      }}>
        <FontAwesomeIcon
         icon={isFavorite ? faHeartSolid : faHeartRegular}
         style={{ color:  secondayFontColor }}
         size='xl'
          />
      </Button>
    </div>
  );
};

export default FavoriteIcon;
