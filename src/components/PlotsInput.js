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
    name: '',
    area: '',
    location: '',
    price: '',
    type: '',
  });

  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.area || !formData.location || !formData.price || !formData.type || !image) {
      alert('Please fill all fields and upload an image.');
      return;
    }

    try {
      const data = new FormData();
      data.append('image', image);
      Object.entries(formData).forEach(([k, v]) => data.append(k, v));

      // await axios.post('http://localhost:4000/admin/plot', data);
            await axios.post('https://my-backend-omw2.onrender.com/admin/plot', data);

      alert('Plot saved successfully!');
      navigate('/');
    } catch (err) {
      alert('Error uploading plot');
      console.error(err);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        px: 2,
        py: 4,
      }}
    >
      {/* ================= FORM CARD ================= */}
      <Box
        sx={{
          width: '100%',
          maxWidth: 900,
          p: 4,
          borderRadius: 4,
          background: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 30px 80px rgba(0,0,0,0.35)',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          color: '#fff',
        }}
      >
        <Typography variant="h4" fontWeight={800} textAlign="center">
          Add Plot Details
        </Typography>

        <Typography textAlign="center" sx={{ opacity: 0.85, mb: 2 }}>
          Enter plot information
        </Typography>

        {/* IMAGE UPLOAD */}
        <Box>
          <Typography mb={1}>Upload Image</Typography>
          <Input type="file" onChange={handleImageChange} sx={{ color: '#fff' }} />
          {previewUrl && (
            <Box mt={2}>
              <img
                src={previewUrl}
                alt="Preview"
                style={{
                  width: '100%',
                  height: '260px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                }}
              />
            </Box>
          )}
        </Box>

        {/* TYPE */}
        <Box>
          <FormLabel sx={{ color: '#fff' }}>Type</FormLabel>
          <RadioGroup row name="type" value={formData.type} onChange={handleChange}>
            <FormControlLabel value="commercial" control={<Radio />} label="Commercial" />
            <FormControlLabel value="residential" control={<Radio />} label="Residential" />
          </RadioGroup>
        </Box>

        {/* INPUT GRID */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 2,
          }}
        >
          <TextField
            label="Plot Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="filled"
            InputProps={{ disableUnderline: true }}
            sx={{ background: 'rgba(255,255,255,0.95)', borderRadius: 1 }}
          />

          <TextField
            label="Area"
            name="area"
            value={formData.area}
            onChange={handleChange}
            variant="filled"
            InputProps={{ disableUnderline: true }}
            sx={{ background: 'rgba(255,255,255,0.95)', borderRadius: 1 }}
          />

          <TextField
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            variant="filled"
            InputProps={{ disableUnderline: true }}
            sx={{ background: 'rgba(255,255,255,0.95)', borderRadius: 1 }}
          />

          <TextField
            label="Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            variant="filled"
            InputProps={{ disableUnderline: true }}
            sx={{ background: 'rgba(255,255,255,0.95)', borderRadius: 1 }}
          />
        </Box>

        {/* ACTION BUTTONS */}
        <Button
          onClick={handleSubmit}
          sx={{
            mt: 3,
            py: 1.6,
            borderRadius: '30px',
            fontWeight: 700,
            fontSize: '16px',
            background: 'linear-gradient(135deg, #f2c185, #e8a84d)',
            color: '#111',
            boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
          }}
        >
          Submit Plot
        </Button>

        <Button
          variant="outlined"
          onClick={() => navigate('/')}
          sx={{
            borderRadius: '30px',
            color: '#fff',
            borderColor: 'rgba(255,255,255,0.5)',
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
}

export default PlotsInput;
