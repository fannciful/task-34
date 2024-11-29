import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import axios from 'axios';

export default function Swapi() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then((response) => setPeople(response.data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Star Wars Characters</Typography>
      <Grid container spacing={3}>
        {people.map((person, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ minHeight: 200 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>{person.name}</Typography>
                <Typography variant="body2">
                  <strong>Height:</strong> {person.height} cm
                </Typography>
                <Typography variant="body2">
                  <strong>Mass:</strong> {person.mass} kg
                </Typography>
                <Typography variant="body2">
                  <strong>Gender:</strong> {person.gender}
                </Typography>
                <Typography variant="body2">
                  <strong>Birth Year:</strong> {person.birth_year}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={person.url} target="_blank" rel="noopener noreferrer">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
