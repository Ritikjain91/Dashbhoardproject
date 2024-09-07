import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const pages = ['My Course', 'Results', 'Purchase History', 'Profile'];

function NavBar() {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: { xs: 'transparent', md: 'white' },
        color: 'black', 
        borderRadius: '10px',
        my: {
          lg: '10px',
          md: '10px',

          sm: '10px', 
          xs:'1px'
        },
        
        boxShadow: { xs: 'none', lg: '0px 4px 12px rgba(0, 0, 0, 0.3)',md: '0px 4px 12px rgba(0, 0, 0, 0.3)',sm: '0px 4px 12px rgba(0, 0, 0, 0.3)' }  
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ borderRadius: '10px' }}>
          
       
          <Box sx={{ flexGrow: 1, display: 'flex',justifyContent: { xl: 'flex-start',lg:'flex-start', md: 'center', sm: 'center', xs: 'center' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={NavLink}
                to={`/${page.toLowerCase().replace(' ', '-')}`}
                sx={{ my: 2, color: 'black', display: 'block' }}
                style={({ isActive }) => ({
                  color: isActive ? 'blue' : 'black',
                  textDecoration: 'none',
                })}
              >
                {page}
              </Button>
            ))}
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
