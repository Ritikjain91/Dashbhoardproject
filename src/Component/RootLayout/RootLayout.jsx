import React from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MyCourse from '../MyCourse/MyCourse';

function RootLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <Container disableGutters maxWidth="lg">
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

        {/* <Footer /> */}
      </Box>
    </Container>
  );
}

export default RootLayout;
