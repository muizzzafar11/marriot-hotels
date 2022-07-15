import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import homeImage from '../assets/home-image.png'
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const details = props.roomInfo

  return (
    <div>
      <button className='btn btn-success' onClick={handleOpen}>Select</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={[style, {maxWidth: 450, minWidth: 250, maxHeight: 550, overflow: 'scroll'}]}>
            <img className="img-fluid" src={homeImage} alt="logo" />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {details.name}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ${details.price}/night
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {details.description}
          </Typography>
          <Link to='/Booking'>
            <button className='btn btn-success mt-3' onClick={proceedToNextStep(details)}>Next</button>
          </Link>
        </Box>
      </Modal>
    </div>
  );
}

function proceedToNextStep(details) {
    localStorage.setItem('selectedRoom', JSON.stringify(details));
    
}
