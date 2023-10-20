import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#328B6B', // Primary button color
    },
    background: {
      default: 'rgba(230, 245, 243, 0.5)', // Primary background color with 50% transparency
    },
    text: {
      primary: '#005A52', // Text and bold elements color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Choose a modern font family
  },
  overrides: {
    MuiCard: {
      root: {
        border: '1px solid #ccc', // Light gray borders for cards
      },
    },
    MuiButton: {
      root: {
        backgroundColor: '#328B6B',
        color: '#fff', // Apply the primary button color
      },
    },
  },
});

export default theme;
