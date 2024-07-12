import axios from 'axios';

export const handleFileChange = async (acceptedFiles) => {
  if (acceptedFiles.length === 0) {
    console.log("No Suitable File Selected!");
    return { preview: '', classification: '' };
  }
  
  const selectedFile = acceptedFiles[0];
  const preview = URL.createObjectURL(selectedFile);

  const formData = new FormData();
  formData.append('file', selectedFile);

  try {
    const response = await axios.post('http://127.0.0.1:8000/upload-image/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const classification = response.data.classification;
    return { preview, classification };
  } catch (error) {
    console.error('Error uploading file:', error);
    return { preview, classification: '' };
  }
};
