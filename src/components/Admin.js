import React, { useState } from 'react';
import { Box, Input, Tooltip, Typography, IconButton, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Admin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      // const response = await axios.post('http://localhost:4000/admin/login', {
            const response = await axios.post('https://my-backend-omw2.onrender.com/admin/login', {

        username,
        password,
      });

      if (response.status === 200) {
        alert('Login successful!');
        navigate('/adminPage');
      }
    } catch (error) {
      alert('Invalid credentials');
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background:
          'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* WATERMARK BACKGROUND */}
      <Box
        sx={{
          position: 'absolute',
          inset: '-50%',
          transform: 'rotate(-30deg)',
          opacity: 0.05,
          display: 'flex',
          flexWrap: 'wrap',
          pointerEvents: 'none',
          color: '#fff',
          fontSize: '48px',
          fontWeight: 900,
        }}
      >
        {Array.from({ length: 200 }).map((_, i) => (
          <Box key={i} sx={{ m: 4 }}>
            telangana landlord & builder deals
          </Box>
        ))}
      </Box>

      {/* LOGIN CARD */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 420,
            p: 4,
            borderRadius: 4,
            background:
              'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
            color: '#fff',
          }}
        >
          <Typography
            variant="h4"
            fontWeight={800}
            textAlign="center"
            mb={1}
          >
            Admin 
          </Typography>

          

          {/* USERNAME */}
          <Box sx={{ mb: 3 }}>
            <Typography mb={0.5}>Email</Typography>
            <Input
              fullWidth
              placeholder=""
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{
                color: '#fff',
                borderBottom: '2px solid rgba(255,255,255,0.4)',
                '&:before, &:after': { borderBottom: 'none' },
              }}
            />
          </Box>

          {/* PASSWORD */}
          <Box sx={{ mb: 4 }}>
            <Typography mb={0.5}>Password</Typography>
            <Input
              fullWidth
              placeholder=""
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                color: '#fff',
                borderBottom: '2px solid rgba(255,255,255,0.4)',
                '&:before, &:after': { borderBottom: 'none' },
              }}
            />
          </Box>

          {/* LOGIN BUTTON */}
          <button
            onClick={handleSubmit}
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '30px',
              border: 'none',
              fontWeight: 700,
              fontSize: '16px',
              cursor: 'pointer',
              color: '#111',
              background:
                'linear-gradient(135deg, #f2c185, #e8a84d)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
            }}
          >
            Login
          </button>
        </Box>
      </Box>

      {/* BACK BUTTON */}
      <Box sx={{ position: 'absolute', top: 20, right: 20, zIndex: 3 }}>
        <Tooltip title="Back to Home">
          <IconButton onClick={() => navigate('/')}>
            <Avatar />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default Admin;
