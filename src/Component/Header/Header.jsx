import React from 'react';
import { Typography, Box, Grid,  styled } from '@mui/material';
import Picture1 from '../dashboardsvg/dashboard.svg';
import { useTheme } from '@mui/material/styles';

const HeaderContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  position: 'relative',
  height: '168px',
  boxShadow: '0 8px 8px -4px rgba(0, 0, 0, 0.2)', 
  borderRadius: '16px',
  backgroundColor: 'white', 
}));

const StyledImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2.5),
  top: theme.spacing(1.25),
  height: '160px',
  maxWidth: '100%',
}));

const Header = () => {
  const theme = useTheme();
  return (
  
      <HeaderContainer sx={{ mt: 12 }}>
        <Grid container direction="row" alignItems="center" justifyContent="space-between">
          <Grid item>
            <Box sx={{ ml: 15 }}>
              <Box>
                <Typography variant="body2" sx={{ mb: 15, color: 'black', fontWeight: 500 }}>
                  September 4, 2024
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4">
                  Welcome back, <Box component="span" sx={{ color: theme.palette.primary.main, fontWeight: 500 }}>Jose Herman!</Box>
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                  Unlock your potential and track your progress to success!
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <StyledImage src={Picture1} alt="Header Image" />
          </Grid>
        </Grid>
      </HeaderContainer>

  );
};

export default Header;
