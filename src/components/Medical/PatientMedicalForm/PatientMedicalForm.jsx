import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import "../../../styles/generics.scss";
import cloud from "../../../assets/cloud.svg"
import "./patientmedicalform.scss";
import { useState } from 'react';
import { FiUpload } from "react-icons/fi";
import axios from "axios"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  minWidth: "300px",
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [file, setFile] = useState({
    selectedFile: null
  });

  const [dragActive, setDragActive] = useState(false);
  const [msg, setMsg] = useState("");

  const checkFileType = (e, eventType) => {
    let extension;

    if (eventType === "drop") {
      extension = e.dataTransfer.files[0].name.match(/\.([^.]+)$/)[1];
    } else {
      extension = e.target.value.match(/\.([^.]+)$/)[1];
    }

    switch (extension) {
      case "jpg":
      case "jpeg":
      case "png":
      case "pdf":
        eventType !== "drop"
          ? setFile({ selectedFile: e.target.files[0] })
          : setFile({ selectedFile: e.dataTransfer.files[0] });
        setMsg("");
        break;
      default:
        setFile({ selectedFile: null });
        setMsg(`.${extension} format is not supported.`);
    }
  };

  const checkSize = (e, eventType) => {
    let size;
    if (eventType === "drop") {
      // console.log("size", e.dataTransfer.files[0]);
      size = e.dataTransfer.files[0].size / 8;
    } else {
      // console.log("size", e.target.files[0].size);
      size = e.target.files[0].size / 8;
    }
    // console.log("converted size", size);

    if (size <= 51200) {
      checkFileType(e, eventType);
    } else {
      setMsg("Size should be less than 50KB");
    }
  };

  const chooseFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      checkSize(e);
      // checkFileType(e);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      checkSize(e, "drop");
      // checkFileType(e, "drop");
    }
  };

  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file.selectedFile);
  
      // Replace with your actual backend URL
      const response = await axios.post('/your-backend-endpoint', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      // Handle successful response
      console.log(response.data);
      setFile({ selectedFile: null });
      setMsg("File uploaded successfully!");
    } catch (error) {
      // Handle error
      console.error(error);
      setMsg("An error occurred while uploading the file.");
    }
  };

  return (
    <div className='modal'>
      <Button size="small" onClick={handleOpen} sx={{ p: 0, margin: "0", fontWeight: 400, textTransform: "initial", minWidth: "40px" }} >here</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal" sx={style} onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
          <div className="file_upload">
            <div className="file_upload_header">
                <img src={cloud} alt="cloud" />
                <span>
                    <h4 className='heading_four'>Upload Files</h4>
                    <p className='paragraph_small'>select and upload your files</p>
                </span>
            </div>
            <form
                className="uploadBox"
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onSubmit={(e) => e.preventDefault()}
            >
                {file.selectedFile !== null ? (
                <p className="filename">{file.selectedFile.name}</p>
                ) : msg !== "" ? (
                msg
                ) : (
                <FiUpload className="upload-icon" />
                )}

                <div>
                <div className="drag">
                    Drop your file here or{" "}
                    <div className="browse">
                    <label
                        htmlFor="img"
                        className="file-label"
                        onClick={() => document.getElementById("getFile").click()}
                    >
                        Browse
                        <input
                        type="file"
                        data-max-size="2048"
                        id="getFile"
                        className="fileIcon"
                        onChange={chooseFile}
                        />
                    </label>
                    </div>
                </div>
                </div>

                <p className="info">Supported files: JPEG, PNG, PDF</p>
            </form>
            <Button style={{backgroundColor: "#1C274C", color: "#fff"}} variant="contained" onClick={handleFileUpload} disabled={file.selectedFile === null}>
            Upload File
            </Button>
        </div>
        </Box>
      </Modal>
    </div>
  );
}
