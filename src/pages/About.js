import React from 'react';
import { Box, Typography } from '@mui/material';

export default function About() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>About Booking App</Typography>
      <Typography variant="body1">
        This is a simple booking application that allows users to search for and book hotels based on their destination,
        check-in and check-out dates, and the number of guests.
      </Typography>
    </Box>
  );
}
