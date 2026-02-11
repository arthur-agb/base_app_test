import { createTheme } from '@mui/material/styles';

const modernDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00D4AA', // Vibrant teal
      light: '#33FFD6',
      dark: '#00A37A',
      contrastText: '#000000',
    },
    secondary: {
      main: '#FF6B9D', // Vibrant pink
      light: '#FF9AC7',
      dark: '#FF3A7A',
      contrastText: '#000000',
    },
    error: {
      main: '#FF5252',
      light: '#FF7B7B',
      dark: '#FF0000',
    },
    warning: {
      main: '#FFB74D',
      light: '#FFCC80',
      dark: '#FF9800',
    },
    info: {
      main: '#64B5F6',
      light: '#90CAF9',
      dark: '#2196F3',
    },
    success: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#388E3C',
    },
    background: {
      default: '#0A0A0F', // Deep dark blue-black
      paper: '#1A1A24', // Slightly lighter dark
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0C0',
      disabled: '#6A6A80',
    },
    divider: '#2D2D3A',
    action: {
      active: '#00D4AA',
      hover: 'rgba(0, 212, 170, 0.08)',
      selected: 'rgba(0, 212, 170, 0.16)',
      disabled: '#6A6A80',
      disabledBackground: '#2D2D3A',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.75rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.875rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 24px',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #00D4AA 0%, #00A37A 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #33FFD6 0%, #00D4AA 100%)',
            boxShadow: '0 8px 25px rgba(0, 212, 170, 0.3)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #FF6B9D 0%, #FF3A7A 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #FF9AC7 0%, #FF6B9D 100%)',
            boxShadow: '0 8px 25px rgba(255, 107, 157, 0.3)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          background: 'linear-gradient(145deg, #1A1A24 0%, #15151E 100%)',
          border: '1px solid #2D2D3A',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(10, 10, 15, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #2D2D3A',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#0A0A0F',
          borderRight: '1px solid #2D2D3A',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#00D4AA',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#00D4AA',
              borderWidth: 2,
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        colorPrimary: {
          background: 'linear-gradient(135deg, #00D4AA 0%, #00A37A 100%)',
        },
        colorSecondary: {
          background: 'linear-gradient(135deg, #FF6B9D 0%, #FF3A7A 100%)',
        },
      },
    },
  },
});

export default modernDarkTheme;
