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
    // axios.get('http://localhost:5000/admin/project')
    axios.get('https://my-backend-omw2.onrender.com/admin/project')
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
    // Download the brochure after successful form submission
    // if (selectedBrochure) {
    //   window.open(`http://localhost:5000${selectedBrochure}`, '_blank');
    // }
     if (selectedBrochure) {
      window.open(`https://my-backend-omw2.onrender.com${selectedBrochure}`, '_blank');
    }
    handleFormClose();
  };

  return (
    <Box sx={{ width: '90%', margin: 'auto', padding: 4 }}>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        // navigation
        loop
        autoplay={{ delay: 2500 }}
        style={{ paddingBottom: '40px' }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard project={project} onBrochureClick={handleBrochureClick} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Form popup with handler */}
      <PopupForm
        open={formOpen}
        onClose={handleFormClose}
        onSubmit={handleFormSubmit}
      />
    </Box>
  );
};

const ProjectCard = ({ project, onBrochureClick }) => (
  <Box
    sx={{
      height: "72vh",
      borderRadius: '16px',
      overflow: 'hidden',
      backgroundColor: '#fff',
      boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
      fontFamily: 'Arial',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
  >
    {/* Image */}
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
      <img
        // src={`http://localhost:5000${project.imageUrl}`}
         src={`https://my-backend-omw2.onrender.com${project.imageUrl}`}
        alt={project.name}
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          borderRadius: "12px"
        }}
      />
    </Box>

    {/* Details */}
    <Box sx={{ px: 3, pb: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
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

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
        <Button variant="contained" color="error" sx={{ borderRadius: '24px', textTransform: 'none' }}>
          View Project
        </Button>
        <Button
          variant="outlined"
          sx={{ borderRadius: '24px', textTransform: 'none' }}
          endIcon={<DownloadIcon />}
          onClick={() => onBrochureClick(project.brochureUrl)}
        >
          Brochure
        </Button>
      </Box>
    </Box>
  </Box>
);

const Detail = ({ icon, label, value }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
    <Avatar
      sx={{
        bgcolor: '#e3f2fd',
        color: '#1976d2',
        width: 28,
        height: 28,
        fontSize: 16,
      }}
    >
      {icon}
    </Avatar>
    <Box>
      <Typography fontSize="13px" fontWeight="bold">{label}</Typography>
      <Typography fontSize="13px">{value}</Typography>
    </Box>
  </Box>
);

export default Brochers;
