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
    height: '150px',
  },
}));

const StyledImage1 = styled('img')(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2.5),
  top: theme.spacing(0.25),
  height: '160px',
  maxWidth: '100%',
  zIndex: 1,
}));

const StyledImage2 = styled('img')(({ theme }) => ({
  position: 'absolute',
  height: '60px',
  maxWidth: '100%',
  zIndex: 0,
}));

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <HeaderContainer sx={{ mt: 3, mx: { lg: 0, md: 0, sm: 0, xs: 2 } }}>
      <Grid container direction="row" alignItems="center" justifyContent="space-between">
        <Grid item>
          <Box sx={{ ml: matches ? 4 : 15 }}>
            <Box>
              <Typography
                variant="body2"
                sx={{
                  mb: matches ? "4vh" : 15,
                  color: 'black',
                  fontWeight: 500,
                  fontSize: matches ? '0.75rem' : '1rem',
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
                  fontSize: matches ? '0.875rem' : '1rem',
                }}
              >
                Unlock your potential and track your progress to success!
              </Typography>
            </Box>
          </Box>

          {!matches && (
           <Box sx={{ position: 'relative', mt: 2 }}>
           <StyledImage2
             src={Picture2}
             alt="Header Image 2"
             sx={{
               position: 'absolute',
               left: {
                 xs: '20%', // For extra-small screens
                 sm: '30%', // For small screens
                 md: '35%', // For medium screens (tablet-sized)
                 lg: '30%', // For large screens
                 xl: '28%', // For extra-large screens
               },
               bottom: {
                 xs: '30px', // For extra-small screens
                 sm: '50px', // For small screens
                 md: '60px', // For medium screens (tablet-sized)
                 lg: '60px', // For large screens
                 xl: '70px', // For extra-large screens
               },
             }}
           />
           <StyledImage2
             src={Picture3}
             alt="Header Image 3"
             sx={{
               position: 'absolute',
               left: {
                 xs: '40%', // For extra-small screens
                 sm: '45%', // For small screens
                 md: '70%', // For medium screens
                 lg: '90%', // For large screens
                 xl: '48%', // For extra-large screens
               },
               bottom: {
                 xs: '50px', // For extra-small screens
                 sm: '70px', // For small screens
                 md: '85px', // For medium screens
                 lg: '85px', // For large screens
                 xl: '90px', // For extra-large screens
               },
             }}
           />
           <StyledImage2
             src={Picture4}
             alt="Header Image 4"
             sx={{
               position: 'absolute',
               left: {
                 xs: '50%', // For extra-small screens
                 sm: '55%', // For small screens
                 md: '90%', // For medium screens
                 lg: '150%', // For large screens
                 xl: '62%', // For extra-large screens
               },
               bottom: {
                 xs: '40px', // For extra-small screens
                 sm: '45px', // For small screens
                 md: '50px', // For medium screens
                 lg: '50px', // For large screens
                 xl: '55px', // For extra-large screens
               },
             }}
           />
         </Box>
         
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
