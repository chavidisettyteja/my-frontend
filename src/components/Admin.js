import React, { useState } from 'react';
import { Box, Input, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

function Admin() {
  const navigate = useNavigate();
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      // const response = await axios.post('http://localhost:5000/admin/login', {
       const response = await axios.post('https://my-backend-omw2.onrender.com/admin/login', {
        username,
        password,
      });

      if (response.status === 200) {
        alert('Login successful!');
        navigate('/adminPage');
      }
    } catch (error) {
      alert('Login failed');
      console.error(error);
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', backgroundColor: '#fff' }}>
      
      {/* Watermark-style repeated background text */}
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          transform: 'rotate(-30deg)',
          zIndex: 0,
          display: 'flex',
          flexWrap: 'wrap',
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#000',
          opacity: 0.05,
          lineHeight: 1,
          pointerEvents: 'none',
        }}
      >
        {Array.from({ length: 300 }).map((_, i) => (
          <span key={i} style={{ margin: '1.5rem' }}>
            Plots & Properties        </span>
        ))}
      </div>

      {/* Foreground content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '20px',
          padding: '20px',
        }}
      >
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="username" className="col-form-label">Username</label>
          </div>
          <div className="col-auto">
            <Input
              type="email"
              id="username"
              placeholder="Enter your email"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
        </div>

        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="password" className="col-form-label">Password</label>
          </div>
          <div className="col-auto">
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button
          type="button"
          className="btn btn-primary"
          style={{
            backgroundColor: '#007bff',
            borderRadius: '30px',
            padding: '10px 20px',
            border: 'none',
            fontWeight: 'bold',
            fontSize: '16px',
          }}
          onClick={handleSubmit}
        >
          Login
        </button>

        <Box sx={{ position: 'absolute', top: 20, right: 20 }}>
          <Tooltip title="BACK">
            <IconButton onClick={() => navigate('/')} sx={{ p: 0 }}>
              <Avatar alt="Back" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
        </Box>
      </div>
    </div>
  );
}

export default Admin;
