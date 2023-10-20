import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { bgCardColor, primaryFontColor } from '../assets/custom/colors';

export default function ProfilePicture({ user }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
  };

  return (
    <div style={{width:'90vw', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      {
      selectedImage ? (
        <img src={selectedImage} alt="User's profile" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
      ) : (
        <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{
            backgroundColor: bgCardColor,
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
        }}
        />
      )}
      <Button
        variant="contained"
        fullWidth
        sx={{ bgcolor: primaryFontColor, boxShadow: 'none', outline: 'none', margin:'10px 0px' }}
        onClick={handleUpload}
        disabled={!selectedImage}
      >
        Upload
      </Button>
    </div>
  );
}
