import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import About from './pages/About';
import Hotels from './pages/Hotels';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ flex: 1, p: 2 }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/hotels" element={<Hotels />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
