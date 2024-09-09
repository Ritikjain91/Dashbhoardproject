import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, LinearProgress, Box, Pagination, Stack } from '@mui/material';

const CourseCard = ({ title, instructors, progress }) => {
  return (
    <Card sx={{ 
      maxWidth: 345, 
      borderRadius: 2, 
      boxShadow: 3, // Add background shadow
      backgroundColor: 'white', 
      '&:hover': { 
        boxShadow: 6 // Optional: darker shadow on hover
      }
    }}>
      <CardMedia
        component="img"
        height="140"
        image="https://via.placeholder.com/150"
        alt="Digital Marketing"
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {instructors}
        </Typography>
        <Box sx={{ mt: 5 }}>
          <LinearProgress variant="determinate" value={progress} />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {progress}% Complete
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

const App = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  const courses = [
    {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 65,
    },
    {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 65,
    },
    {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 65,
    },
    {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 65,
    },
    {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 65,
    },
    {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 65,
    },
    {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 65,
    },
    {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 65,
    },
    {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 65,
    }, {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 65,
    },
    {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 65,
    },
    {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 65,
    },
    {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 65,
    },
    {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 65,
    },
    {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 65,
    },
    {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 65,
    },
    {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 65,
    },
    {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 65,
    }, {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 65,
    }, {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 65,
    }, {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 65,
    }, {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 65,
    },
   
  ];


  const count = Math.ceil(courses.length / itemsPerPage);
  const paginatedCourses = courses.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: 0,
        backgroundColor: 'white',  
       

      }}
    >
      <Grid container spacing={3} justifyContent="center" alignItems="center" sx={{ borderBottom: '1px solid #D3D3D3', pb: 5 }}
 >
        {paginatedCourses.map((course, index) => (
          <Grid
            item
            xs={12}         
            sm={6}           
            md={6}          
            lg={3}         
            key={index}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <CourseCard
              title={course.title}
              instructors={course.instructors}
              progress={course.progress}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ my: 5, display: 'flex', justifyContent: 'center', backgroundColor: 'white', padding: 2 }}>
        <Stack spacing={2}>
          <Pagination count={count} page={page} onChange={handleChange} />
        </Stack>
      </Box>
    </Box>
  );
};

export default App;
