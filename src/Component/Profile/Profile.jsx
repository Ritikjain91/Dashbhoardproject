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
    <Box sx={{ Width: '1000px',   }}>
      <Grid container spacing={4} >
        <Grid item xs={12} md={4}  >
          <Card direction={{sm:"row",xs:"columns"}}> 
            <Grid container spacing={2} >
              <Grid item xs={12} sm={4} md={12}>
                <CardMedia
                  component="img"
                  image="https://via.placeholder.com/150"
                  alt="Profile"
                  sx={{
                    borderRadius: '8px',
                    width: { xs: '100%', md: '300px' },
                    height: '165px',
                    margin: { xs: '0 auto', md: '20px auto' },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={8} md={12}>
                <CardContent sx={{ textAlign: { xs: 'center', md: 'center' } }}>
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
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card sx={{ mb: 2 }}>
            <CardContent>
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

          <Card>
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
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ width: { xs: '100%', sm: '50%', md: '30%' } }}
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
