import React from "react";
import { useDropzone } from "react-dropzone";
import { Button, Box } from "@mui/material";
import UploadIcon from '@mui/icons-material/Upload';

const ImageUpload = ({ handleFileChange }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFiles => handleFileChange(acceptedFiles),
    accept: {
      'image/jpeg': [],
      'image/png': []
    },
    maxFiles: 1
  });

  return (
    <Box>
      <Button
        {...getRootProps()}
        variant="outlined"
        fullWidth
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <input {...getInputProps()} hidden />
        <UploadIcon /> Drag 'n' drop an image here, or click to select one
      </Button>
    </Box>
  );
};

export default ImageUpload;
