// src/components/Header.js
import { Box, Typography } from '@mui/material';
import { Fade } from '@mui/material';
import { useEffect, useState } from 'react';
import backgroundImage from '../assets/image.png'; 

export default function Header() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500); // Delay for fade-in effect
  }, []);

  return (
    <Fade in={loaded} timeout={1000}>
      <Box
        sx={{
          height: '60vh',
          backgroundImage: `url(${backgroundImage})`, // Use the imported image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Dark Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay to increase contrast
            backdropFilter: 'blur(3px)', // Optional blur for background
            zIndex: 1,
          }}
        />

        {/* Heading Text */}
        <Typography
          variant="h2"
          sx={{
            zIndex: 2, // Ensure text is above the overlay
            fontWeight: 'bold',
            textAlign: 'center',
            textShadow: '2px 4px 6px rgba(0, 0, 0, 0.7)', // Stronger shadow for visibility
            fontSize: { xs: '2rem', md: '3.5rem' }, // Responsive font size
            px: 2, // Padding for mobile
          }}
        >
          Welcome to Xetar Health Care
        </Typography>
      </Box>
    </Fade>
  );
}