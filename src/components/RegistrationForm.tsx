import { Button, TextField, Container } from '@mui/material';
import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface RegistrationFormProps {
  onSubmit: (data: { name: string; phone: string; role: string }) => void;
}

const customColor = 'rgba(0, 90, 52, 51%)';
const RegistrationForm: FC<RegistrationFormProps> = ({ onSubmit }) => {
  
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('normal');
  const tag = 'palnner';
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name, phone, role });
    navigate('/home');
  };

  return (
    <Container
      style={{
        width:'100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor:'#F9F9F9'
      }}
    >
      <form
       onSubmit={handleSubmit}
       style={{
        border: '1px solid rgba(0,0,0,8%)',
        borderRadius: '10px',
        padding: '2rem',
        width: '100%', 
        maxWidth: '400px', 
        backgroundColor:'white'
      }}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          margin="normal"
          variant="outlined"
          size='small'
          fullWidth
        />
        <TextField
          label="Phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          margin="normal"
          variant="outlined"
          size='small'
          fullWidth
        />
        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: customColor,
            boxShadow: 'none',
            marginTop: '16px',
            '&:hover': {
              boxShadow: 'none',
              border: '1px solid ' + customColor,
              bgcolor: 'transparent',
              color: customColor,
            },
            '&:focus': {
              boxShadow: 'none',
              border: '1px solid ' + customColor,
              bgcolor: 'transparent',
              color: customColor,
            },
          }}
          type="submit"
        >
          Register
        </Button>
      </form>
      <div style={{ position: 'fixed', bottom: '3vh', textAlign: 'center' }}>
        <Button
        variant='text'
        component={Link}
        to={`/profile?tag=${tag}`}
        style={{ color: customColor }}
        >
        Be a Planner
        </Button>
      </div>
    </Container>
  );
};

export default RegistrationForm;
