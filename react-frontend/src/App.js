import React from 'react';
import { CssBaseline, Container, Box, Typography, Snackbar, Alert } from '@mui/material';
import ImageUpload from './components/ImageUpload';
import ImagePreview from './components/ImagePreview';
import ResultSidebar from './components/ResultSidebar';
import useImageUpload from './hooks/useImageUpload';
import './styles.css';

function App() {
  const { imagePreview, result, handleFileUpload, alert, handleCloseAlert } = useImageUpload();

  return (
    <div className="App">
      <CssBaseline />
      <Container>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" width="calc(100% - 250px)">
          <Typography variant="h4" align='center' pb={2}>Defect Detection (Simulation)</Typography>
          <ImageUpload handleFileChange={handleFileUpload} />
          {imagePreview && <ImagePreview imagePreview={imagePreview} />}
        </Box>
      </Container>
      <ResultSidebar result={result} />
      <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="warning" sx={{ width: '100%' }}>
          {alert.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
