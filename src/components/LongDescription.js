// src/components/LongDescription.js
import { Box, Typography, Divider, Fade } from '@mui/material';
import { useState, useEffect } from 'react';

export default function LongDescription() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300); // Slight delay for fade-in effect
  }, []);

  return (
    <Fade in={loaded} timeout={1500}>
      <Box
        sx={{
          background: 'linear-gradient(135deg, #e0f7fa 30%, #f1f8e9 100%)',
          py: 8,
          px: 4,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            fontSize: '2rem',
            color: '#333',
            letterSpacing: '0.05em',
          }}
        >
          About Xetar Health Care
        </Typography>

        <Divider
          variant="middle"
          sx={{
            mb: 4,
            width: '80%',
            mx: 'auto',
            borderBottomWidth: 3,
            borderColor: '#4caf50',
          }}
        />

        <Typography
          variant="body1"
          sx={{
            maxWidth: '800px',
            margin: 'auto',
            fontSize: '1.2rem',
            lineHeight: 1.8,
            color: '#666',
            textAlign: 'justify',
          }}
        >
          Xetar Health Care is dedicated to providing the highest quality of personalized health care
          services. We believe in a holistic approach that focuses not just on treating ailments, but
          also on preventing them by empowering you to take control of your health and well-being.
          <br />
          <br />
          Our team of experienced health professionals is committed to ensuring that every patient receives
          individualized attention and care, helping them live healthier and more fulfilling lives. We offer
          a range of services tailored to meet your unique health needs, from preventive care to comprehensive
          treatment plans.
        </Typography>

        {/* Highlight Section */}
        <Box
          sx={{
            backgroundColor: '#f9fbe7',
            py: 4,
            mt: 6,
            boxShadow: '0px 8px 15px rgba(0,0,0,0.1)',
            borderRadius: 2,
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              fontSize: '1.8rem',
              color: '#4caf50',
              mb: 2,
            }}
          >
            Your Health, Our Priority
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: '700px',
              margin: 'auto',
              fontSize: '1.2rem',
              color: '#555',
            }}
          >
            At Xetar Health Care, we are driven by our mission to make quality health care accessible and
            affordable to all. From preventive screenings to advanced treatments, we have you covered every
            step of the way.
          </Typography>
        </Box>
      </Box>
    </Fade>
  );
}
