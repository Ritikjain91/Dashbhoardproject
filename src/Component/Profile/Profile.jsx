import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  TextField,
  Button,
} from '@mui/material';

const Profile = () => {


  return (
    <Grid container spacing={4} style={{ maxWidth: '1150px', margin: '40px auto' }}>
      
      <Grid item xs={12} md={4}>
        <Card>
          <CardMedia
            component="img"
            height="220" 
            image="https://via.placeholder.com/150" 
            alt="Profile"
            style={{
              borderRadius: '50%',
              width: '165px', 
              height: '165px', 
              margin: '20px auto',
            }}
          />
          <CardContent style={{ textAlign: 'center' }}>
            <Typography variant="h5" component="div">
              Jose Herman
            </Typography>
            <Typography variant="body2" color="text.secondary">
              @username-here
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ marginTop: '15px' }}>
              📍 Kimberly Light
              <br />
              Apt. 634
              <br />
              Buckinghamshire
            </Typography>
          </CardContent>
        </Card>
      </Grid>

  
      <Grid item xs={12} md={8}>
      
        <Card style={{ marginBottom: '20px' }}>
          <CardContent>
            <Typography variant="h6" component="div" gutterBottom>
              Bio
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Assumenda deleniti facere. Placeat dolorem officiis quis atque pariatur vel sequi
              quisquam officiis. Libero similique natus voluptas reiciendis voluptatem omnis est.
              Mollitia neque odit aspernatur neque neque. Necessitatibus labore inventore
              consequuntur ipsum saepe ab id qui. Numquam saepe rerum quibusdam.
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
                <TextField fullWidth label="First name" variant="outlined" inputProps={{ style: { width: '110%' } }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Last name" variant="outlined" inputProps={{ style: { width: '110%' } }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Email Address" variant="outlined" inputProps={{ style: { width: '110%' } }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Phone / Mobile" variant="outlined" inputProps={{ style: { width: '110%' } }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Address Line 1" variant="outlined" inputProps={{ style: { width: '110%' } }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Address Line 2" variant="outlined" inputProps={{ style: { width: '110%' } }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="City" variant="outlined" inputProps={{ style: { width: '110%' } }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="State" variant="outlined" inputProps={{ style: { width: '110%' } }} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Country" variant="outlined" inputProps={{ style: { width: '110%' } }} />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ width: '30%' }} 
                >
                  Update Profile
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Profile;
