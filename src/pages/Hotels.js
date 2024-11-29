import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

export default function Hotels() {
  const hotels = useSelector((state) => state.hotels.list);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Hotels</Typography>
      <Grid container spacing={3}>
        {hotels.map((hotel) => (
          <Grid item xs={12} sm={6} md={4} key={hotel.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{hotel.name}</Typography>
                <Typography variant="body2">{hotel.address}</Typography>
                <Typography variant="body2">Price: {hotel.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
