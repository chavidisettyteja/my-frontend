import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Avatar
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  /* 🔥 ONLY NEW CODE */
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  /* 🔥 MAP MENU → SECTION */
  const handleNavClick = (item) => {
    const map = {
      'Buy': 'projects',
      'New Launch': 'bigbrocher',
      'Commercial': 'projects',
      'Plots/Land': 'plots',
      'Projects': 'projects',
      'Resell': 'resell',
      'About Us': 'about'
    };

    if (map[item]) {
      scrollToSection(map[item]);
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'rgba(255,255,255,0.8)',
        color: '#000',
        boxShadow: 'none',
        backdropFilter: 'blur(0.5px)'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* LEFT */}
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Telangana landlord & Builder deals
        </Typography>

        {/* CENTER (UI SAME) */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          {[
            'Buy',
            'New Launch',
            'Commercial',
            'Plots/Land',
            'Projects',
            'Resell',
            'About Us'
          ].map((item) => (
            <Button
              key={item}
              sx={{ color: '#000', fontWeight: 600 }}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </Button>
          ))}
        </Box>

        {/* RIGHT */}
        <IconButton onClick={() => navigate('/admin')} sx={{ p: 0 }}>
          <Avatar />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
