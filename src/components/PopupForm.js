import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box
} from '@mui/material';

const PopupForm = ({ open, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formURL =
      'https://docs.google.com/forms/u/0/d/e/1FAIpQLScXWoZGqpvbuFirhLuhFRU6KqiCzOb4pzTSkwmAFyhBopMwtw/formResponse';

    const formBody = new URLSearchParams({
      'entry.1977728637': formData.name,
      'entry.1093727647': formData.phone,
      // If you have email entry in your form, add it:
      // 'entry.xxxxxx': formData.email
    });

    try {
      await fetch(formURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody.toString()
      });

      setFormData({ name: '', email: '', phone: '' });
      onSubmit();  // 👈 triggers brochure download from parent
    } catch (err) {
      console.error('Submission likely successful (no-cors):', err);
      onSubmit();  // 👈 still trigger download
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Get Brochure</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="error">Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">Submit & Download</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopupForm;
