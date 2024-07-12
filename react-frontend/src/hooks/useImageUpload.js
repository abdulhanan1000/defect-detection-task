import { useState } from 'react';
import { handleFileChange } from '../utils/handleFileChange';

const useImageUpload = () => {
  const [imagePreview, setImagePreview] = useState('');
  const [result, setResult] = useState('');
  const [alert, setAlert] = useState({ open: false, message: '' });

  const handleFileUpload = async (acceptedFiles) => {
    if (acceptedFiles.length === 0) {
      setAlert({ open: true, message: 'No Suitable File Selected!' });
      return;
    }
    
    const { preview, classification } = await handleFileChange(acceptedFiles);
    setImagePreview(preview);
    setResult(classification);
  };

  const handleCloseAlert = () => {
    setAlert({ open: false, message: '' });
  };

  return { imagePreview, result, handleFileUpload, alert, handleCloseAlert };
};

export default useImageUpload;
