import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius:'5px',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({Modalbtn}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant='outlined' color='success' size='small' sx={{marginTop:'4px',marginBottom:'10px'}} onClick={handleOpen}>{Modalbtn}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <h4>Add Accounts</h4>
        <hr/>
        <TextField fullWidth id="filled-basic" size='small' sx={{marginBottom:'10px'}} label="Filled" variant="filled" />
      

        </Box>
      </Modal>
    </div>
  );
}