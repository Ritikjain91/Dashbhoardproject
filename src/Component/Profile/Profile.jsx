import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
} from '@mui/material';

const Profile = () => {
  return (
    <Box
      sx={{
        width: '100%',
        ml: 5,
        px: { xs: 2,lg:'0',xl:'0',md:'0' },
        Width: { xs: '99%', sm: '1000px', md: '100%',  },
        margin: { xs: 'auto', md: '0' },
      }}
    >
      <Grid
        container
        spacing={2.5}
        direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'row' }} 
      >
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              display: 'flex',
              justifyContent:'space-evenly',
          
              flexDirection: { xs: 'row', sm: 'row', md: 'row', lg: 'column' }, 
            }}
          >
            <CardMedia
              component="img"
              image="https://via.placeholder.com/150"
              alt="Profile"
              sx={{
                borderRadius: '8px',
                width: { xs: '150px', sm: '200px', md: '200px', lg: '300px' }, 
                height: { xs: '150px', sm: '150px', md: '151px', lg: '165px' },
                margin: { lg: '20px auto', xs: '10px' },
              }}
            />
            <CardContent sx={{ textAlign: { xs: 'left', sm: 'left', lg: 'center' }, mt: 2 }}>
              <Typography variant="h5" component="div">
                Jose Herman
              </Typography>
              <Typography variant="body2" color="textSecondary">
                username-here
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ marginTop: '15px' }}
              >
                Kimberly Light
                <br />
                Apt. 634
                <br />
                Buckinghamshire
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card sx={{ mb: 2.5 }}>
            <CardContent sx={{ mb: 4 }}>
              <Typography variant="h6" component="div" gutterBottom>
                Bio
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Assumenda deleniti facere. Placeat dolorem officiis quis atque
                pariatur vel sequi quisquam officiis. Libero similique natus
                voluptas reiciendis voluptatem omnis est. Mollitia neque odit
                aspernatur neque neque. Necessitatibus labore inventore
                consequuntur ipsum saepe ab id qui. Numquam saepe rerum
                quibusdam.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ mb: 5 }}>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                Personal
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First name"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last name"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone / Mobile"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Address Line 1"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Address Line 2"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="City"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="State"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Country"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', mt: 3 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ width: { xs: '100%', sm: '50%', lg: '30%' } }} // Full width on mobile/tablet, smaller on large screens
                  >
                    Update Profile
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
