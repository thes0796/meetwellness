// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50', // Green for health
    },
    secondary: {
      main: '#03a9f4', // Light blue for a calming effect
    },
    background: {
      default: '#e8f5e9', // Light background for cleanliness
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 700,
      color: '#333',
    },
    body1: {
      color: '#555',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20, // Rounded buttons
        },
      },
    },
  },
});

export default theme;
