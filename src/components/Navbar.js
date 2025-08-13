// import * as React from 'react';
// import {
//   AppBar, Box, Toolbar, IconButton, Typography, Menu, Container,
//   Avatar, MenuItem
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import Logo from "../components/Pictures/logo.png";
// import { useNavigate } from 'react-router-dom';
// import Whatsapp from './Whatsapp';

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [submenuAnchor, setSubmenuAnchor] = React.useState(null);
//   const navigator = useNavigate();

//   const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
//   const handleCloseNavMenu = () => setAnchorElNav(null);
//   const handleOpenSubMenu = (event) => setSubmenuAnchor(event.currentTarget);
//   const handleCloseSubMenu = () => setSubmenuAnchor(null);

//   return (
//     <AppBar position="static" color="default" sx={{ backgroundColor: 'white', boxShadow: '0 4px 10px -2px rgba(0,0,0,0.1)' }}>
//       <Container maxWidth="xl">
//         <Whatsapp />
//         <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          
//           {/* ✅ Left: Logo */}
//           <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
//             <img src={Logo} alt="Logo" style={{ maxHeight: 40 }} />
//           </Box>

//           {/* ✅ Center: Havenly Homes Title (Bigger, Prominent) */}
//           <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
//             <Typography
//               variant="h4"
//               noWrap
//               component="a"
//               href="/"
//               sx={{
//                 fontFamily: 'monospace',
//                 fontWeight: 900,
//                 fontSize: { xs: '22px', md: '34px' },
//                 color: 'black',
//                 textDecoration: 'none',
//                 letterSpacing: '.2rem',
//               }}
//             >
//               Plots/Properties
//             </Typography>
//           </Box>

//           {/* ✅ Right: Hamburger (Mobile) + Avatar */}
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             {/* Hamburger for Mobile */}
//             <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }}>
//               <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 anchorEl={anchorElNav}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//                 transformOrigin={{ vertical: 'top', horizontal: 'left' }}
//               >
//                 <MenuItem onClick={handleOpenSubMenu}>Prices</MenuItem>
//                 <Menu
//                   anchorEl={submenuAnchor}
//                   open={Boolean(submenuAnchor)}
//                   onClose={handleCloseSubMenu}
//                   anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//                   transformOrigin={{ vertical: 'top', horizontal: 'left' }}
//                 >
//                   <MenuItem onClick={handleCloseNavMenu}>0 - 50L</MenuItem>
//                   <MenuItem onClick={handleCloseNavMenu}>50L - 1Cr</MenuItem>
//                   <MenuItem onClick={handleCloseNavMenu}>1Cr - 2Cr</MenuItem>
//                   <MenuItem onClick={handleCloseNavMenu}>2Cr and more</MenuItem>
//                 </Menu>

//                 {/* More Menu Options */}
//                 <MenuItem onClick={handleCloseNavMenu}>1 BHK</MenuItem>
//                 <MenuItem onClick={handleCloseNavMenu}>2 BHK</MenuItem>
//                 <MenuItem onClick={handleCloseNavMenu}>3 BHK</MenuItem>
//                 <MenuItem onClick={handleCloseNavMenu}>Kukatpally</MenuItem>
//                 <MenuItem onClick={handleCloseNavMenu}>Narsingi</MenuItem>
//                 <MenuItem onClick={handleCloseNavMenu}>Kokapet</MenuItem>
//               </Menu>
//             </Box>

//             {/* Avatar */}
//             <IconButton onClick={() => navigator('/admin')} sx={{ p: 0 }}>
//               <Avatar alt="A" src="/static/images/avatar/2.jpg" />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;
import React, { useState } from 'react';
import picslogo from "./Pictures/picslogo.jpg";
import {
  AppBar, Toolbar, Typography, Button, Box, IconButton, Avatar
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NavHover from './NavHover';
import axios from 'axios';

export default function HeaderBar() {
  const [navHoverData, setNavHoverData] = useState([]);
  const [showHover, setShowHover] = useState(false);
  const [hoverCategory, setHoverCategory] = useState("");

  const navigator = useNavigate();

  const handleCategoryClick = async (category) => {
    try {
      // const res = await axios.get(`http://localhost:5000/admin/project/${category}`);
       const res = await axios.get(`https://my-backend-omw2.onrender.com/admin/project/${category}`);
      setNavHoverData(res.data);
      setHoverCategory(category);
      setShowHover(true);
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${picslogo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottomLeftRadius: '30px',
          borderBottomRightRadius: '30px',
          overflow: 'hidden',
          minHeight: '130px',
          pb: 4
        }}
      >
        <AppBar
          position="static"
          sx={{
            backgroundColor: 'rgba(255,255,255,0.8)',
            color: '#000',
            boxShadow: 'none',
            backdropFilter: 'blur(0.5px)'
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            {/* Left: Logo + Location */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 800, mr: 1, color: '#1976d2' }}>
                Plots & Properties
              </Typography>
              <Button sx={{ color: '#333', textTransform: 'none', fontWeight: 500 }}>
                Hyderabad
              </Button>
            </Box>

            {/* Center: Categories */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
              {['Buy', 'New Launch', 'Commercial', 'Plots/Land', 'Projects'].map((item) => (
                <Button
                  key={item}
                  sx={{ color: '#000', fontWeight: 600 }}
                  onClick={() => handleCategoryClick(item)}
                >
                  {item}
                </Button>
              ))}
            </Box>

            {/* Right: Admin */}
            <IconButton onClick={() => navigator('/admin')} sx={{ p: 0 }}>
              <Avatar alt="A" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Render NavHover only if showHover is true */}
      {showHover && (
        <NavHover
          data={navHoverData}
          category={hoverCategory}
          onClose={() => setShowHover(false)}
        />
      )}
    </>
  );
}


