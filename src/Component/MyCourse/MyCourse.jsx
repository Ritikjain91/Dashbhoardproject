import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, LinearProgress, Box } from '@mui/material';

const CourseCard = ({ title, instructors, progress }) => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3 }}>
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
        <Box sx={{ mt: 2 }}>
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
  const courses = [
    {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 65,
    },
    {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 85,
    },
    {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 85,
    },
    {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 85,
    },
    {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 85,
    },
    {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 85,
    },
    {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 85,
    },
    {
      title: "Complete Digital Marketing Course: Zero to One",
      instructors: "John Doe, Angela Yu",
      progress: 85,
    },
    
   
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={3}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <CourseCard 
              title={course.title}
              instructors={course.instructors}
              progress={course.progress}
            />
          </Grid>
        ))}
      </Grid>
  
    </Box>
  );
};

export default App;
