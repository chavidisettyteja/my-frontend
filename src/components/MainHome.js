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

function MainHome() {
  return (
    <>
      <Navbar />
      {/* <SubNavbar /> */}
      <Brochers />
      
      <Bigbrocher />
       <Plots/>
      <Builders />
     
      {/* <PlotsInput/> */}
      <LastPart/>
      <Whatsapp/>
    </>
  );
}

export default MainHome;
