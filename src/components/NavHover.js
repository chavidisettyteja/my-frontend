import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

export default function NavHover({ category }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // axios.get(`http://localhost:5000/api/plots?category=${category}`)
     axios.get(`https://my-backend-omw2.onrender.com/api/plots?category=${category}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [category]);

  return (
    <Box sx={{ p: 3, background: '#f9f9f9' }}>
      <Typography variant="h5" gutterBottom>
        {category.toUpperCase()} Projects
      </Typography>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid item xs={12} md={4} key={item._id}>
            <Card>
              <CardMedia component="img" height="150" image={item.image} alt={item.title} />
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2">{item.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
