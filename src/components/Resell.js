import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box, Typography, Button, Avatar
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import StraightenIcon from '@mui/icons-material/Straighten';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

function Resell() {
  const [resellList, setResellList] = useState([]);

  useEffect(() => {
    axios
      // .get('http://localhost:4000/admin/resell')
            .get('https://my-backend-omw2.onrender.com/admin/resell')

      .then(res => setResellList(res.data))
      .catch(err => console.error('❌ Error fetching resell:', err));
  }, []);

  return (
    <Box sx={{ width: '90%', mx: 'auto', py: 4 }}>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 2500 }}
        style={{ paddingBottom: '40px' }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {resellList.map((resell, index) => (
          <SwiperSlide key={index}>
            <ResellCard resell={resell} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

/* ================= RESELL CARD ================= */

const ResellCard = ({ resell }) => (
  <Box id="resell"
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
        // src={`http://localhost:4000${resell.imageUrl}`}
                src={`https://my-backend-omw2.onrender.com${resell.imageUrl}`}

        alt="Resell"
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
        {resell?.type
          ? `${resell.type.charAt(0).toUpperCase() + resell.type.slice(1)} Resell`
          : 'Resell Property'}
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 2,
        }}
      >
        <Detail icon={<HomeIcon />} label="Type" value={resell.type} />
        <Detail icon={<StraightenIcon />} label="Area" value={resell.area} />
        <Detail icon={<CurrencyRupeeIcon />} label="Price" value={resell.price} />
        <Detail icon={<LocationOnIcon />} label="Location" value={resell.location} />
      </Box>

      {/* BUTTON */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Button
  component="a"
  href="tel:+918897334187"   // 🔥 CHANGE TO YOUR NUMBER
  sx={{
    borderRadius: '24px',
    textTransform: 'none',
    px: 4,
    py: 1,
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

/* ================= DETAIL (BLACK/GREY ICONS) ================= */

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

export default Resell;
