import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Button } from '@mui/material';

import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DownloadIcon from '@mui/icons-material/Download';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import PopupForm from './PopupForm';

function Bigbrocher() {
  const [projects, setProjects] = useState([]);
  const [formOpen, setFormOpen] = useState(false);
  const [selectedBrochure, setSelectedBrochure] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/admin/project')
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleBrochureClick = (url) => {
    setSelectedBrochure(url);
    setFormOpen(true);
  };

  const handleFormSubmit = () => {
    if (selectedBrochure) {
      window.open(`http://localhost:5000${selectedBrochure}`, '_blank');
    }
    setFormOpen(false);
    setSelectedBrochure('');
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '1750px', mx: 'auto', p: 4 }}>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay={{ delay: 2500 }}
        style={{ paddingBottom: '40px' }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard
              project={project}
              onBrochureClick={handleBrochureClick}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <PopupForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={handleFormSubmit}
      />
    </Box>
  );
}

/* ================= PROJECT CARD ================= */

const ProjectCard = ({ project, onBrochureClick }) => (
  <Box
    sx={{
      width: '100%',
      height: '680px',
      position: 'relative',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
      backgroundColor: '#000',
    }}
  >
    <img
      src={`http://localhost:5000${project.imageUrl}`}
      alt="Project"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'brightness(0.85)',
      }}
    />

    {/* TOP INFO */}
    <Box
      sx={{
        position: 'absolute',
        top: 16,
        left: 16,
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 2,
        p: 2,
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        zIndex: 1,
      }}
    >
      <InfoItem icon={<LocationOnIcon />} title="Location" value={project.location} />
      <InfoItem icon={<CurrencyRupeeIcon />} title="Price" value="1.2 Cr onwards" />
      <InfoItem icon={<VpnKeyIcon />} title="Possession" value={project.possession} />
      <InfoItem icon={<WarningAmberIcon />} title="Status" value={project.status} />
    </Box>

    {/* BOTTOM BUTTONS */}
    <Box
      sx={{
        position: 'absolute',
        bottom: 16,
        right: 16,
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 2,
        p: 2,
        zIndex: 1,
      }}
    >
      <Box sx={{ display: 'flex', gap: 2 }}>
        {/* BLACK GLOSSY BUTTON */}
        <Button
          sx={{
            borderRadius: '30px',
            textTransform: 'none',
            px: 4,
            py: 1,
            color: '#fff',
            fontWeight: 600,
            background: 'linear-gradient(145deg, #1a1a1a, #000)',
            boxShadow: `
              inset 0 1px 1px rgba(255,255,255,0.2),
              0 8px 18px rgba(0,0,0,0.6)
            `,
            '&:hover': {
              background: 'linear-gradient(145deg, #000, #1a1a1a)',
              transform: 'translateY(-1px)',
            },
          }}
        >
          View Project
        </Button>

        {/* OUTLINED BLACK BUTTON */}
        <Button
          variant="outlined"
          endIcon={<DownloadIcon />}
          sx={{
            borderRadius: '30px',
            textTransform: 'none',
            borderColor: '#000',
            color: '#000',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: '#f2f2f2',
              borderColor: '#000',
            },
          }}
          onClick={() => onBrochureClick(project.brochureUrl)}
        >
          Download Brochure
        </Button>
      </Box>
    </Box>
  </Box>
);

/* ================= INFO ITEM (BLACK ICONS) ================= */

const InfoItem = ({ icon, title, value }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: '140px' }}>
    {React.cloneElement(icon, { sx: { color: '#111' } })}

    <Box>
      <Typography fontSize="14px" fontWeight={600} color="#111">
        {title}
      </Typography>
      <Typography fontSize="14px" color="#444">
        {value}
      </Typography>
    </Box>
  </Box>
);

export default Bigbrocher;
