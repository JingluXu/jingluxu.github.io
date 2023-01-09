import { createTheme, responsiveFontSizes } from '@material-ui/core';

export const Theme = responsiveFontSizes(
  createTheme({
    palette: {
      background: {
        default: '#e0efea',
      },
    },
    typography: {
      fontSize: 16,
      h1: {
        color: "#4e7779",
      },
      h2: {
        color: "#677C77",
      },
      h3: {
        color: "#4e7779",
      },
      h4: {
        color: "#455442",
      },
      h6: {
        color: "#455442",
      },
      body1: {
        color: "#33472c",
      },
      body2: {
        color: "#33472c",
      },
      subtitle1: {
        color: "#677c77",
      },
    },
    overrides: {
      MuiButton: {
        text: {
          backgroundColor: "#8e8f27",
          borderRadius: 3,
          border: 0,
          color: '#ffffff',
          height: '3rem',
          padding: '0 30px',
        },
        root: {
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#677c77',
          },
        },
      },
      MuiIconButton: {
        root: {
          transition: 'all 0.5s ease',
          color: '#646109',
          height: '4rem',
          width: '4rem',
          '&:hover': {
            color: '#677c77',
            backgroundColor: 'transparent',
          },
        },
      },
      MuiTooltip: {
        root: {
          tooltip: {
            backgroundColor: '#677c77',
            color: '#ffffff',
            fontSize: 12,
          },
        },
      },
      MuiTextField: {
        root: {
          width: '100%',
          backgroundColor: "#f4f4e9",
          marginBottom: '1rem',
          '& label.Mui-focused': {
            color: '#8e8f27',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#f4f4e9',
            },
            '&:hover fieldset': {
              borderColor: '#8e8f27',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#8e8f27',
            },
          },
        },
      },
    },
  })
);