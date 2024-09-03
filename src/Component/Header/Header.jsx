import React from 'react';
import { Typography, Box, Grid, styled } from '@mui/material';
import Picture1 from '../dashboardsvg/dashboard.svg';
import Picture2 from '../dashboardsvg/blob-4-light-teal.svg';
import Picture3 from '../dashboardsvg/blob-5-blue.svg';
import Picture4 from '../dashboardsvg/blob-4-safrron.svg';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const HeaderContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  position: 'relative',
  boxShadow: '0 8px 8px -4px rgba(0, 0, 0, 0.2)',
  borderRadius: '16px',
  backgroundColor: 'white',

  
  height: '168px', 
  [theme.breakpoints.down('sm')]: {
    height: '120px', 
  },
}));

const StyledImage1 = styled('img')(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2.5),
  top: theme.spacing(1.25),
  height: '160px',
  maxWidth: '100%',
}));

const StyledImage2 = styled('img')(({ theme }) => ({
  position: 'relative',
  left: theme.spacing(65.5),
  bottom: theme.spacing(35.25),
  height: '60px',
  maxWidth: '100%',
  zIndex: 0,
}));

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <HeaderContainer sx={{ mt: 5 }}>
      <Grid container direction="row" alignItems="center" justifyContent="space-between">
        <Grid item>
          <Box sx={{ ml: matches ? 2 : 15 }}>
            <Box>
              <Typography 
                variant="body2" 
                sx={{ 
                  mb: matches ? 2 : 15, 
                  color: 'black', 
                  fontWeight: 500, 
                  fontSize: matches ? '0.75rem' : '1rem' 
                }}
              >
                September 4, 2024
              </Typography>
            </Box>
            <Box>
              <Typography 
                variant={matches ? 'h6' : 'h4'}
                sx={{ 
                  fontSize: matches ? '1.5rem' : '2rem', 
                }}
              >
                Welcome back, <Box component="span" sx={{ color: theme.palette.primary.main, fontWeight: 500 }}>Jose Herman!</Box>
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: theme.palette.text.secondary, 
                  fontSize: matches ? '0.875rem' : '1rem' 
                }}
              >
                Unlock your potential and track your progress to success!
              </Typography>
            </Box>
          </Box>

          {!matches && (
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <StyledImage2 src={Picture2} alt="Header Image 2" />
              </Grid>
              <Grid item xs={12} sm={4}>
                <StyledImage2 src={Picture3} alt="Header Image 2" />
              </Grid>
              <Grid item xs={12} sm={4}>
                <StyledImage2 src={Picture4} alt="Header Image 2" />
              </Grid>
            </Grid>
          )}
        </Grid>
        {!matches && (
          <Grid item>
            <StyledImage1 src={Picture1} alt="Header Image 1" />
          </Grid>
        )}
      </Grid>
    </HeaderContainer>
  );
};

export default Header;
