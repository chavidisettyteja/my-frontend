import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
  Box,
  Typography,
  Button,
  Avatar
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import StraightenIcon from '@mui/icons-material/Straighten';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

function Plots() {
  const [plots, setPlots] = useState([]);

  useEffect(() => {
    axios
      // .get('http://localhost:4000/admin/plot')
            .get('https://my-backend-omw2.onrender.com/admin/plot')
      .then(res => setPlots(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Box id="plots" sx={{ width: '90%', mx: 'auto', py: 4 }}>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 2500 }}
        // navigation
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {plots.map((plot, index) => (
          <SwiperSlide key={index}>
            <PlotCard plot={plot} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

/* ================= PLOT CARD ================= */

const PlotCard = ({ plot }) => (
  <Box
    sx={{
      borderRadius: '16px',
      // backgroundColor: '#fff',
      backgroundColor: 'rgba(255, 255, 255, 0.85)', // 85% opacity
      boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}
  >
    {/* IMAGE */}
    <Box sx={{ p: 2 }}>
      <img
        // src={`http://localhost:4000${plot.imageUrl}`}
                src={`https://my-backend-omw2.onrender.com${plot.imageUrl}`}
        alt="Plot"
        style={{
          width: '100%',
          height: '250px',
          objectFit: 'cover',
          borderRadius: '12px',
        }}
      />
    </Box>

    {/* CONTENT */}
    <Box sx={{ px: 3, pb: 3 }}>
      <Typography variant="h6" fontWeight={600} mb={2}>
        {plot.name} 
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 2,
        }}
      >
        <Detail icon={<HomeIcon />} label="Type" value={plot.type} />
        <Detail icon={<StraightenIcon />} label="Area" value={plot.area} />
        <Detail icon={<CurrencyRupeeIcon />} label="Price" value={plot.price} />
        <Detail icon={<LocationOnIcon />} label="Location" value={plot.location} />
      </Box>

      {/* BUTTON */}
      <Box sx={{ mt: 3 }}>
        <Button
  component="a"
  href="tel:+9198897334187"   // 📞 CHANGE TO YOUR NUMBER
  fullWidth
  sx={{
    borderRadius: '24px',
    textTransform: 'none',
    py: 1.2,
    color: '#fff',
    fontWeight: 600,
    background: 'linear-gradient(145deg, #1a1a1a, #000)',
    boxShadow: `
      inset 0 1px 1px rgba(255,255,255,0.2),
      0 6px 12px rgba(0,0,0,0.4)
    `,
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'linear-gradient(145deg, #000, #1a1a1a)',
      boxShadow: `
        inset 0 1px 1px rgba(255,255,255,0.25),
        0 8px 16px rgba(0,0,0,0.6)
      `,
      transform: 'translateY(-1px)',
    },
  }}
>
   Contact Now
</Button>

      </Box>
    </Box>
  </Box>
);

/* ================= DETAIL ROW ================= */

const Detail = ({ icon, label, value }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
    <Avatar
      sx={{
        bgcolor: '#f2f2f2',
        color: '#333',
        width: 28,
        height: 28,
      }}
    >
      {icon}
    </Avatar>

    <Box>
      <Typography fontSize="13px" fontWeight={600} color="#111">
        {label}
      </Typography>
      <Typography fontSize="13px" color="#666">
        {value}
      </Typography>
    </Box>
  </Box>
);

export default Plots;
