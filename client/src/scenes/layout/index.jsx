import React, { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from '@mui/material';
import { useSelector } from 'react-redux';
import Navbar from 'components/Navbar';

function Layout() {
  return (
    <Box width='100%' height='100%'>
      <Box>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
