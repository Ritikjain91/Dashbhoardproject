import React from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import MyCourse from '../MyCourse/MyCourse';

function RootLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <Container disableGutters maxWidth="lg" sx={{
      px: { xs: 2, sm: 3, md: 4 },  
      width: { xs: '100%', sm: '100%', md: '90%', lg: '100%' },
    }}>
      <CssBaseline />

      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Header />
        <NavBar />

        {isHomePage && (
          <Box>
            <MyCourse />
          </Box>
        )}

        <Box flexGrow={1} display="flex" flexDirection="column" overflow="auto">
          <Container maxWidth={false} disableGutters sx={{ flexGrow: 1 }}>
            <Outlet />
          </Container>
        </Box>

      </Box>
    </Container>
  );
}

export default RootLayout;
