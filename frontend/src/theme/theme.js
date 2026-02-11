import { createTheme } from '@mui/material/styles';

const modernDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7C4DFF', // Vibrant purple
      light: '#B47CFF',
      dark: '#4A00B8',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#00E5FF', // Cyan accent
      light: '#6EFFFF',
      dark: '#00B2CC',
      contrastText: '#000000',
    },
    error: {
      main: '#FF5252',
      light: '#FF867F',
      dark: '#C50E29',
    },
    warning: {
      main: '#FFB74D',
      light: '#FFE97D',
      dark: '#C88719',
    },
    info: {
      main: '#40C4FF',
      light: '#80F7FF',
      dark: '#0094CC',
    },
    success: {
      main: '#69F0AE',
      light: '#9EFFDF',
      dark: '#2BBF7E',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
      card: '#252525',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
      disabled: '#666666',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    action: {
      active: '#FFFFFF',
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(255, 255, 255, 0.16)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontSize: '2.75rem',
      fontWeight: 600,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.75,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.43,
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.02857em',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.66,
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      lineHeight: 2.66,
      textTransform: 'uppercase',
      letterSpacing: '0.08333em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontWeight: 600,
        },
        contained: {
          boxShadow: '0 4px 14px 0 rgba(124, 77, 255, 0.4)',
          '&:hover': {
            boxShadow: '0 6px 20px 0 rgba(124, 77, 255, 0.6)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(30, 30, 30, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(124, 77, 255, 0.3)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: 'linear-gradient(180deg, #1E1E1E 0%, #121212 100%)',
          borderRight: '1px solid rgba(124, 77, 255, 0.2)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#7C4DFF',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#7C4DFF',
              borderWidth: '2px',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
        colorPrimary: {
          background: 'linear-gradient(45deg, #7C4DFF 30%, #00E5FF 90%)',
          color: '#FFFFFF',
        },
      },
    },
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.2)',
    '0px 3px 6px rgba(0, 0, 0, 0.3)',
    '0px 4px 8px rgba(0, 0, 0, 0.4)',
    '0px 6px 12px rgba(0, 0, 0, 0.5)',
    '0px 8px 16px rgba(0, 0, 0, 0.6)',
    '0px 12px 24px rgba(0, 0, 0, 0.7)',
    '0px 16px 32px rgba(0, 0, 0, 0.8)',
    '0px 24px 48px rgba(0, 0, 0, 0.9)',
    '0px 32px 64px rgba(0, 0, 0, 1)',
    '0px 48px 96px rgba(0, 0, 0, 1)',
    '0px 64px 128px rgba(0, 0, 0, 1)',
    '0px 96px 192px rgba(0, 0, 0, 1)',
    '0px 128px 256px rgba(0, 0, 0, 1)',
    '0px 192px 384px rgba(0, 0, 0, 1)',
    '0px 256px 512px rgba(0, 0, 0, 1)',
    '0px 384px 768px rgba(0, 0, 0, 1)',
    '0px 512px 1024px rgba(0, 0, 0, 1)',
    '0px 768px 1536px rgba(0, 0, 0, 1)',
    '0px 1024px 2048px rgba(0, 0, 0, 1)',
    '0px 1536px 3072px rgba(0, 0, 0, 1)',
    '0px 2048px 4096px rgba(0, 0, 0, 1)',
    '0px 3072px 6144px rgba(0, 0, 0, 1)',
    '0px 4096px 8192px rgba(0, 0, 0, 1)',
  ],
});

export default modernDarkTheme;
