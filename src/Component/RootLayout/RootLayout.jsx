
import React from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header.jsx';


function RootLayout() {
  return (
    <Container>
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <CssBaseline /> 
      <Box>
      <Box>
        <Header />
        </Box>
        <Box>
        <NavBar />
        </Box>
       
        </Box>
     

      <Box flexGrow={1} display="flex" flexDirection="column" overflow="auto">
        <Container maxWidth={false} disableGutters sx={{ flexGrow: 1,  }}>
          <Box sx={{ flexGrow: 1,  }}>
            <Outlet />
          </Box>
        </Container>
      </Box>

      <Box>
        <Footer />
      </Box>
    </Box>
    </Container>
  );
}

export default RootLayout;
