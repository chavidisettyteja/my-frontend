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
    <Box sx={{ width: '100%', maxWidth: '1375px', margin: 'auto', padding: 4 }}>
     <Swiper
             modules={[Navigation, Autoplay]}
             spaceBetween={30}
             slidesPerView={1}
            //  navigation
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

      <PopupForm
        open={formOpen}
        onClose={handleFormClose}
        onSubmit={handleFormSubmit}
      />
    </Box>
  );
}

const ProjectCard = ({ project, onBrochureClick }) => (
  <Box sx={{
    width: '100%',
    height: '580px',
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: 3,
    backgroundColor: '#fff'
  }}>
    <img
      // src={`http://localhost:5000${project.imageUrl}`}
          src={`https://my-backend-omw2.onrender.com${project.imageUrl}`}
      alt="Project"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />

    {/* Top Info Box */}
    <Box
      sx={{
        position: 'absolute',
        top: 16,
        left: 16,
        backgroundColor: '#ffffffcc',
        borderRadius: 2,
        p: 2,
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        zIndex: 1,
      }}
    >
      <InfoItem icon={<LocationOnIcon sx={{ color: '#5a9df9' }} />} title="Location" value={project.location} />
      <InfoItem icon={<CurrencyRupeeIcon sx={{ color: '#5a9df9' }} />} title="Price" value="1.2 Cr onwards" />
      <InfoItem icon={<VpnKeyIcon sx={{ color: '#5a9df9' }} />} title="Possession" value={project.possession} />
      <InfoItem icon={<WarningAmberIcon sx={{ color: '#5a9df9' }} />} title="Status" value={project.status} />
    </Box>

    {/* Bottom Buttons */}
    <Box
      sx={{
        position: 'absolute',
        bottom: 16,
        right: 16,
        backgroundColor: '#ffffffcc',
        borderRadius: 2,
        p: 2,
        zIndex: 1,
        width: 'fit-content',
      }}
    >
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant="contained" color="error" sx={{ borderRadius: 5, textTransform: 'none' }}>
          View Project
        </Button>
        <Button
          variant="outlined"
          sx={{ borderRadius: 5, textTransform: 'none' }}
          endIcon={<DownloadIcon />}
          onClick={() => onBrochureClick(project.brochure)}
        >
          Download Brochure
        </Button>
      </Box>
    </Box>
  </Box>
);

const InfoItem = ({ icon, title, value }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: '140px' }}>
    {icon}
    <Box>
      <Typography fontSize="14px" fontWeight="bold">{title}</Typography>
      <Typography fontSize="14px">{value}</Typography>
    </Box>
  </Box>
);

export default Bigbrocher;
