import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { primaryFontColor, secondayFontColor } from '../assets/custom/colors';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  color: primaryFontColor,
  borderRadius:'10px',
  boxShadow: 1,
  p: 3,
};

export default function BasicModal({ open, handleClose }:{open:boolean, handleClose:()=>void}) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="subtitle1" component="blockquote">
            We will contact you soon for details.
          </Typography>
          <Typography id="modal-modal-description" variant="subtitle2" component="blockquote" sx={{ mt: 2 }} color={secondayFontColor}>
            Thanks for choosing us.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}