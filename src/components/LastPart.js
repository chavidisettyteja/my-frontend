import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Typography, IconButton, Divider, Stack } from '@mui/material';

function LastPart() {
  return (
    <Box
      sx={{
        backgroundColor: '#001F3F',
        color: '#fff',
        py: 6,
        px: 2,
        mt: 8,
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Contact Section */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Get in Touch
      </Typography>

      <Stack spacing={1} sx={{ mb: 4 }}>
        <Typography variant="h6">📞 8897334187</Typography>
        <Typography variant="h6">📧 tejasunny0511@gmail.com</Typography>
        <Typography variant="body1">🕒 Mon - Sat | 9:30 AM - 6:30 PM</Typography>
      </Stack>

      <Divider sx={{ backgroundColor: '#4A90E2', my: 3, width: '60%', mx: 'auto' }} />

      {/* Social Media */}
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Connect With Us
      </Typography>

      <IconButton
        sx={{
          color: '#E1306C',
          backgroundColor: '#fff',
          '&:hover': {
            backgroundColor: '#ffe5ee',
          },
          transition: '0.3s ease',
          m: 1,
        }}
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <InstagramIcon fontSize="large" />
      </IconButton>

      <Typography variant="caption" display="block" sx={{ mt: 4, color: '#ccc' }}>
        © {new Date().getFullYear()} Havenly Homes. All rights reserved.
        <br />
        All trademarks are the property of their respective owners.
      </Typography>
    </Box>
  );
}

export default LastPart;
