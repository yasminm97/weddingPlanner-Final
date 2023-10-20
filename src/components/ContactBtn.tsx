import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { bgCardColor, primaryFontColor } from '../assets/custom/colors'
function WhatsappButton() {
  const number = '009647718613639';

  const getWhatsappLink = () => {
    const whatsappURL = `https://api.whatsapp.com/send?phone=${number}`;
    return whatsappURL;
  };

  return (
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
        },
      }}
      disableElevation
      component={Link}
      to={getWhatsappLink()}
      target="_blank"
    >
      Contact Now
    </Button>
  );
}

export default WhatsappButton;
