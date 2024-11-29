import React from 'react';
import { Box, Typography } from '@mui/material';
import BookingForm from '../components/BookingForm';

export default function Main() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Welcome to Booking App</Typography>
      <BookingForm />
    </Box>
  );
}
