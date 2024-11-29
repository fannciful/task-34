import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        p: 2,
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
        mt: 'auto', // Відсунення футера вниз
        width: '100%',
      }}
    >
      <Typography variant="body2">
        © 2024 My Portfolio | Contact: email@example.com
      </Typography>
    </Box>
  );
}
