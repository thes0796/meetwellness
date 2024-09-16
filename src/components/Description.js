// src/components/Description.js
import { Box, Typography, Fade } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Description() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Fade in={loaded} timeout={1500}>
      <Box sx={{ p: 6, textAlign: 'center', backgroundColor: '#e8f5e9' }}> {/* Soft green background */}
        <Typography variant="h4" gutterBottom>
          Your Partner in Health and Wellness
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', margin: 'auto', lineHeight: 1.8 }}>
          At Xetar Health Care, we provide personalized health solutions to ensure your well-being.
          Our experts are here to guide you on a path to a healthier lifestyle.
        </Typography>
      </Box>
    </Fade>
  );
}
