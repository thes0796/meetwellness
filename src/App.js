// src/App.js
import { ThemeProvider, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Description from './components/Description';
import CustomerCarousel from './components/Carousel';
import LongDescription from './components/LongDescription';
import ContactForm from './components/Form';
import SocialMedia from './components/SocialMedia';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Description />
      <CustomerCarousel />
      <LongDescription />
      <ContactForm />
      <SocialMedia />
    </ThemeProvider>
  );
}

export default App;
