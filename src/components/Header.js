import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

export default function Header() {
  return (
    <StyledAppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <StyledTypography variant="h6">
          My Portfolio
        </StyledTypography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <StyledButton component={Link} to="/">Home</StyledButton>
          <StyledButton component={Link} to="/todos">TODO</StyledButton>
          <StyledButton component={Link} to="/swapi">SWAPI</StyledButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}

const StyledAppBar = styled(AppBar)({
    backgroundColor: '#3f51b5',
    boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.1)',
  });
  
  const StyledButton = styled(Button)({
    color: 'white',
    marginLeft: '10px',
    '&:hover': {
      backgroundColor: '#6573c3',
    },
  });
  
  const StyledTypography = styled(Typography)({
    fontWeight: 'bold',
    fontSize: '1.5rem',
    letterSpacing: '1px',
  });
  