import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Grid, Paper, Button, Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import StraightenIcon from '@mui/icons-material/Straighten';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Plots() {
  const [plots, setPlots] = useState([]);

  useEffect(() => {
    const fetchPlots = async () => {
      try {
        // const res = await axios.get('http://localhost:5000/admin/plot');
        const res = await axios.get('https://my-backend-omw2.onrender.com/admin/plot');
        console.log("📦 Plot Data:", res.data);
        setPlots(res.data);
      } catch (error) {
        console.error("❌ Error fetching plots:", error);
      }
    };
    fetchPlots();
  }, []);

  return (
    <Box sx={{ bgcolor: '#white', py: 6 }}>
      {/* <Typography variant="h4" align="center" gutterBottom>
        Available Plots
      </Typography> */}

      <Grid container spacing={4} justifyContent="center" px={3}>
        {plots.map((plot, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PlotCard plot={plot} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const PlotCard = ({ plot }) => {
  return (
    <Paper
      elevation={6}
      sx={{
        p: 2,
        borderRadius: 4,
        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
        height: '100%',
        bgcolor: 'white',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <img
        // src={`http://localhost:5000${plot.imageUrl}`}
        src={`https://my-backend-omw2.onrender.com{plot.imageUrl}`}
        alt="Plot"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '12px',
        }}
      />

      <Typography variant="h6" sx={{ mt: 2 }}>
        {plot.type.charAt(0).toUpperCase() + plot.type.slice(1)} Plot
      </Typography>

      <Box
        sx={{
          mt: 2,
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

      <Button variant="contained" sx={{ mt: 3, borderRadius: 4 }}>
        Contact Now
      </Button>
    </Paper>
  );
};

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
      <Typography fontSize="13px" fontWeight="bold">
        {label}
      </Typography>
      <Typography fontSize="13px">{value}</Typography>
    </Box>
  </Box>
);

export default Plots;
