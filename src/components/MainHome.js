import React from 'react';
import Navbar from './Navbar';
import SubNavbar from './SubNavbar';
import Brochers from './Brochers';
import Bigbrocher from './Bigbrocher';
import Builders from './Builders';
import Plots from './Plots';
import PlotsInput from './PlotsInput';
import LastPart from './LastPart';
import Whatsapp from './Whatsapp';
import Resell from "./Resell";
import bg from "./Pictures/BG.jpg";
import Box from '@mui/material/Box';

function MainHome() {
  return (
    <Box
  sx={{
    minHeight: '100vh',
    backgroundImage: `url(${bg})`, 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: '#f5f7fb',
    minHeight:'370vh'
    // transition: 'transform 0.4s ease',
    // '&:hover': {
    //   transform: 'scale(1.03)',
    // },
  }}
>
      <Navbar />
      {/* <SubNavbar /> */}
      <Brochers />
      
      <Bigbrocher />
       <Plots/>
      {/* <Builders /> */}
      <Resell/>
     
      {/* <PlotsInput/> */}
      <LastPart/>
      <Whatsapp/>
    </Box>
  );
}

export default MainHome;