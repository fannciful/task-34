import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ p: 4, maxWidth: 1000, mx: 'auto', mt: 4 }}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
        Hello, I'm Yuliia!
      </Typography>

      <Typography variant="body1" gutterBottom sx={{ fontSize: 18 }}>
      Hello! My name is Yuliia, I'm 19 and based in Lviv, Ukraine. A highly motivated programmer 
      with a passion for solving complex problems through code. Proficient in multiple programming languages.
      Experienced in front-end and back-end technologies. Dedicated to staying up-to-date with industry trends 
      and continuously improving coding skills. Excited to apply my programming expertise to create innovative
      solutions and contribute to project success. Ready to learn and gain new experience and skills.

      </Typography>

      {/* Skills Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#3f51b5' }} gutterBottom>
          Skills:
        </Typography>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React.js (Hooks, Context API, etc.)</li>
          <li>HTML5 & CSS3</li>
          <li>Material-UI, Ant Design</li>
          <li>Version control (Git, GitHub)</li>
          <li>Responsive Design & CSS Frameworks</li>
        </ul>
      </Box>

      {/* Education Section */}
      <Paper sx={{ p: 3, mb: 4, boxShadow: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#3f51b5' }} gutterBottom>
          Education:
        </Typography>
        <Typography variant="h6" gutterBottom>
          Bachelor of Science in Computer Science | LNU
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Graduated: June 2026
        </Typography>
        <Typography variant="h6" gutterBottom>
          Hillel IT School
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Graduated: November 2024
        </Typography>
      </Paper>

      {/* Contact Section */}
      <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#3f51b5' }} gutterBottom>
        Contact Information:
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Email:</strong> juliya992@gmail.com
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Phone:</strong> +380971098141
      </Typography>
      <Typography variant="body1">
        <strong>LinkedIn:</strong> linkedin.com/in/yuliia-hotsii-898919281
      </Typography>
    </Box>
  );
}
