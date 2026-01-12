import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import {
  Box,
  Typography,
  IconButton,
  Divider,
  Stack,
} from '@mui/material';

function LastPart() {
  return (
    <Box id="about"
      sx={{
        background: 'linear-gradient(145deg, #0b0b0b, #000)',
        color: '#fff',
        py: 8,
        px: 2,
        mt: 10,
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* TITLE */}
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{
          letterSpacing: '1px',
          textTransform: 'uppercase',
        }}
      >
        Get in Touch
      </Typography>

      <Typography
        variant="body1"
        sx={{ color: '#aaa', mb: 4, maxWidth: 500, mx: 'auto' }}
      >
        We’re here to help you find your perfect property.  
        Reach out to us anytime.
      </Typography>

      {/* CONTACT INFO */}
      <Stack spacing={2} sx={{ mb: 5, alignItems: 'center' }}>
        <ContactRow icon={<PhoneInTalkIcon />} text="+91 7569905524" />
        <ContactRow icon={<EmailIcon />} text="Telanganalandlordbuilderdeals@gmail.com" />
        <ContactRow icon={<AccessTimeIcon />} text="Sun - Sat | 9:30 AM – 6:30 PM" />
      </Stack>

      <Divider
        sx={{
          backgroundColor: '#333',
          my: 4,
          width: '60%',
          mx: 'auto',
        }}
      />

      {/* SOCIAL */}
      <Typography
        variant="h6"
        fontWeight={600}
        gutterBottom
        sx={{ letterSpacing: '0.5px' }}
      >
        Connect With Us
      </Typography>

      <IconButton
        sx={{
          mt: 2,
          color: '#fff',
          background:
            'linear-gradient(145deg, #1a1a1a, #000)',
          boxShadow: `
            inset 0 1px 1px rgba(255,255,255,0.2),
            0 6px 14px rgba(0,0,0,0.6)
          `,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.1)',
            background:
              'linear-gradient(145deg, #000, #1a1a1a)',
            boxShadow: `
              inset 0 1px 1px rgba(255,255,255,0.3),
              0 10px 20px rgba(0,0,0,0.9)
            `,
          },
        }}
        href="https://www.instagram.com/telanaganalandlordbuilderdeals?igsh=YnVlb3JpMWU1Zjht&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <InstagramIcon fontSize="large" />
      </IconButton>

      {/* COPYRIGHT */}
      <Typography
        variant="caption"
        display="block"
        sx={{ mt: 6, color: '#777' }}
      >
        © {new Date().getFullYear()} Telangana landlords and Builder deals. All rights reserved.
        <br />
        Designed for premium real estate experiences.
      </Typography>
    </Box>
  );
}

/* ================= CONTACT ROW ================= */

const ContactRow = ({ icon, text }) => (
  <Stack direction="row" spacing={1.5} alignItems="center">
    <Box
      sx={{
        color: '#999',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {icon}
    </Box>
    <Typography variant="body1" sx={{ color: '#ddd' }}>
      {text}
    </Typography>
  </Stack>
);

export default LastPart;
