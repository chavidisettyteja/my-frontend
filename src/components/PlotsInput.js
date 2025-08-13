import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Input,
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PlotsInput() {
  const [formData, setFormData] = useState({
    area: '',
    location: '',
    price: '',
    type: '',
  });
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (!formData.area || !formData.location || !formData.price || !formData.type || !image) {
      alert('Please fill all fields and upload an image.');
      return;
    }

    try {
      const data = new FormData();
      data.append('image', image);
      for (let key in formData) {
        data.append(key, formData[key]);
      }
      
      for (let pair of data.entries()) {
  console.log(pair[0] + ':', pair[1]);
}


      // await axios.post('http://localhost:5000/admin/plot', data);
       await axios.post('https://my-backend-omw2.onrender.com/admin/plot', data);
      alert('Plot saved successfully!');
      navigate('/dashboard'); // Replace with your route
    } catch (err) {
      alert('Error uploading plot');
      console.error(err);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f8d2dc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          borderRadius: 4,
          boxShadow: 3,
          p: 4,
          width: '100%',
          maxWidth: 500,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
          Add Plot Details
        </Typography>

        {/* Upload Image */}
        <Box>
          <Typography>Upload Image</Typography>
          <Input type="file" onChange={handleImageChange} />
          {previewUrl && (
            <Box mt={1}>
              <img
                src={previewUrl}
                alt="Preview"
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
              />
            </Box>
          )}
        </Box>

        {/* Radio for Type */}
        <Box>
          <FormLabel component="legend">Type</FormLabel>
          <RadioGroup row name="type" value={formData.type} onChange={handleChange}>
            <FormControlLabel value="commercial" control={<Radio />} label="Commercial" />
            <FormControlLabel value="residential" control={<Radio />} label="Residential" />
          </RadioGroup>
        </Box>

        <TextField
          label="Area"
          variant="outlined"
          name="area"
          value={formData.area}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Location"
          variant="outlined"
          name="location"
          value={formData.location}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Price"
          variant="outlined"
          name="price"
          value={formData.price}
          onChange={handleChange}
          fullWidth
        />

        {/* Buttons */}
        <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ borderRadius: '30px' }}>
          Submit
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => navigate('/')}
          sx={{ borderRadius: '30px' }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
}

export default PlotsInput;
