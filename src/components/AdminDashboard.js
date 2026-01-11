import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup, Box, Typography } from '@mui/material';
import AdminPage from './AdminPage';
import PlotsInput from './PlotsInput';
import Resellinput from './Resellinput';

function AdminDashboard() {
  const [formType, setFormType] = useState('project');

  const handleToggle = (_, newType) => {
    if (newType !== null) setFormType(newType);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background:
          'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 4,
      }}
    >
      {/* ================= HEADER ================= */}
      <Box sx={{ mb: 3, textAlign: 'center', color: '#fff' }}>
        <Typography variant="h4" fontWeight={800}>
          Admin Dashboard
        </Typography>
        <Typography sx={{ opacity: 0.85 }}>
          Manage Projects, Plots & Resell Listings
        </Typography>
      </Box>

      {/* ================= TOGGLE ================= */}
      <Box
        sx={{
          mb: 4,
          p: 1,
          borderRadius: '30px',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <ToggleButtonGroup
          value={formType}
          exclusive
          onChange={handleToggle}
          aria-label="form toggle"
          sx={{
            '& .MuiToggleButton-root': {
              border: 'none',
              px: 4,
              py: 1.2,
              borderRadius: '30px',
              fontWeight: 600,
              color: '#fff',
            },
            '& .Mui-selected': {
              background:
                'linear-gradient(135deg, #f2c185, #e8a84d)',
              color: '#111 !important',
              boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
            },
          }}
        >
          <ToggleButton value="project">Projects</ToggleButton>
          <ToggleButton value="plot">Plots</ToggleButton>
          <ToggleButton value="resell">Resell</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* ================= FORM CONTAINER ================= */}
      <Box
        sx={{
          width: '100%',
          maxWidth: 1100,
          animation: 'fadeIn 0.4s ease',
        }}
      >
        {formType === 'project' && <AdminPage />}
        {formType === 'plot' && <PlotsInput />}
        {formType === 'resell' && <Resellinput />}
      </Box>

      {/* ================= ANIMATION ================= */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Box>
  );
}

export default AdminDashboard;
