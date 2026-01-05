import React, { useState, useEffect } from 'react';
import {
  Box, Typography, Button, Avatar
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DownloadIcon from '@mui/icons-material/Download';

import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import PopupForm from './PopupForm';

const Brochers = () => {
  const [projects, setProjects] = useState([]);
  const [formOpen, setFormOpen] = useState(false);
  const [selectedBrochure, setSelectedBrochure] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/admin/project')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const handleBrochureClick = (brochureUrl) => {
    setSelectedBrochure(brochureUrl);
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
    setSelectedBrochure('');
  };

  const handleFormSubmit = () => {
    if (selectedBrochure) {
      window.open(`http://localhost:5000${selectedBrochure}`, '_blank');
    }
    handleFormClose();
  };

  return (
    <Box id="projects" sx={{ width: '90%', mx: 'auto', py: 4 }}>
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
        onClose={handleFormClose}
        onSubmit={handleFormSubmit}
      />
    </Box>
  );
};

/* ================= PROJECT CARD ================= */

const ProjectCard = ({ project, onBrochureClick }) => (
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
        src={`http://localhost:5000${project.imageUrl}`}
        alt={project.name}
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
        {project.name}
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 2,
        }}
      >
        <Detail icon={<HomeIcon />} label="Type" value={project.type} />
        <Detail icon={<VpnKeyIcon />} label="Possession" value={project.possession} />
        <Detail icon={<WarningAmberIcon />} label="Status" value={project.status} />
        <Detail icon={<LocationOnIcon />} label="Location" value={project.location} />
      </Box>

      {/* BUTTONS */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
        <Button
          sx={{
            borderRadius: '24px',
            textTransform: 'none',
            px: 3,
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
          View Project
        </Button>

        <Button
          variant="outlined"
          sx={{
            borderRadius: '24px',
            textTransform: 'none',
            borderColor: '#000',
            color: '#000',
            '&:hover': {
              borderColor: '#000',
              backgroundColor: '#f5f5f5',
            },
          }}
          endIcon={<DownloadIcon />}
          onClick={() => onBrochureClick(project.brochureUrl)}
        >
          Brochure
        </Button>
      </Box>
    </Box>
  </Box>
);

/* ================= DETAIL ROW (BLACK / GREY ICONS) ================= */

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

export default Brochers;
