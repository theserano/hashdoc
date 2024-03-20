import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "../../../styles/generics.scss";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [files, setFiles] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    console.log(files);
    handleClose();
  };

  return (
    <div>
      <Button size="small" onClick={handleOpen} sx={{ p: 0, margin: "0", fontWeight: 400, textTransform: "initial", minWidth: "40px" }} >here</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
          <div className="file_upload">
            <div className="file_upload_header"></div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
