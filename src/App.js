import React, { Suspense } from 'react';
import { ThemeProvider, CssBaseline, CircularProgress, Box } from '@mui/material';
import theme from './theme';

const Header = React.lazy(() => import('./components/Header'));
const Description = React.lazy(() => import('./components/Description'));
const CustomerCarousel = React.lazy(() => import('./components/Carousel'));
const LongDescription = React.lazy(() => import('./components/LongDescription'));
const ContactForm = React.lazy(() => import('./components/Form'));
const SocialMedia = React.lazy(() => import('./components/SocialMedia'));
const StatisticsSection = React.lazy(() => import('./components/StatisticsSection'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Suspense
        fallback={
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <CircularProgress />
          </Box>
        }
      >
        <Header />
        <Description />
        <CustomerCarousel cz={1} />
        <CustomerCarousel cz={2} />
        <CustomerCarousel cz={3} />
        <LongDescription />
        <StatisticsSection />
        <ContactForm />
        <SocialMedia />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
