// src/components/Carousel.js
import Carousel from 'react-material-ui-carousel';
import { Paper, Box } from '@mui/material';
import backgroundImage from '../assets/image.png'; 

const items = [
  { image: `${backgroundImage}`, name: 'Customer 1' },
  { image: `${backgroundImage}`, name: 'Customer 2' },
  { image: `${backgroundImage}`, name: 'Customer 3' },
];

export default function CustomerCarousel() {
  return (
    <Box sx={{ my: 6, p: 4 }}>
      <Carousel
        animation="slide"
        indicators={false} // Hide dots
        navButtonsAlwaysVisible={true} // Show navigation arrows
        sx={{ height: '400px' }}
      >
        {items.map((item, index) => (
          <Paper key={index} elevation={4} sx={{ height: '100%', position: 'relative' }}>
            <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
}
