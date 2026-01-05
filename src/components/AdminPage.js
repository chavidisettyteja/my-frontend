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

function AdminPage() {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    possession: '',
    status: '',
    location: '',
  });

  const [image, setImage] = useState(null);
  const [brochure, setBrochure] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const navigate = useNavigate();

  // Handle text field change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image upload & preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  // Handle brochure upload
  const handleBrochureChange = (e) => {
    setBrochure(e.target.files[0]);
  };

  // Submit form
  const handleSubmit = async () => {
    if (!formData.name || !formData.type || !formData.possession || !formData.status || !formData.location || !image || !brochure) {
      alert('Please fill all fields and upload both files.');
      return;
    }

    try {
      const data = new FormData();
      data.append('image', image);
      data.append('brochure', brochure);

      for (let key in formData) {
        data.append(key, formData[key]);
      }

      await axios.post('http://localhost:5000/admin/project', data);
      // await axios.post('https://my-backend-omw2.onrender.com/admin/project', data);

      alert('Project saved successfully!');
      navigate('/dashboard'); // adjust route
    } catch (err) {
      alert('Error uploading project');
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
          maxWidth: 600,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
          Add Project Details
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
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            </Box>
          )}
        </Box>

        {/* Upload Brochure */}
        <Box>
          <Typography>Upload Brochure</Typography>
          <Input type="file" onChange={handleBrochureChange} />
        </Box>

        {/* Radio for Type */}
        <Box>
          <FormLabel component="legend">Type</FormLabel>
          <RadioGroup row name="type" value={formData.type} onChange={handleChange}>
            <FormControlLabel value="commercial" control={<Radio />} label="Commercial" />
            <FormControlLabel value="residential" control={<Radio />} label="Residential" />
          </RadioGroup>
        </Box>

        {/* Text Fields */}
        <TextField
          label="Project Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Possession"
          variant="outlined"
          name="possession"
          value={formData.possession}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Status"
          variant="outlined"
          name="status"
          value={formData.status}
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

        {/* Buttons */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ borderRadius: '30px' }}
        >
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

export default AdminPage;
