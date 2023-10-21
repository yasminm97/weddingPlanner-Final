import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-regular-svg-icons';
import { secondayFontColor } from '../assets/custom/colors'
import { Button } from '@mui/material';
import { Provider } from '../entities/Providers'


const FavoriteIcon: React.FC<{ provider: Provider }> = ({ provider }) => {
  const [isFavorite, setIsFavorite] = useState(provider.isFavorite);

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
         size='2xl'
          />
      </Button>
    </div>
  );
};
export default FavoriteIcon;