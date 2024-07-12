import React from 'react';
import { Box } from '@mui/material';

const ImagePreview = ({ imagePreview }) => {
  return (
    <Box mt={4}>
      <img src={imagePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '400px' }} />
    </Box>
  );
};

export default ImagePreview;
