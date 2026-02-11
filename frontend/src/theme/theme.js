import { createTheme } from '@mui/material/styles';

// Modern dark theme with vibrant accent colors
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7C4DFF', // Vibrant purple
      light: '#B47CFF',
      dark: '#3F1DCB',
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
      light: '#9EFFDA',
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
      disabled: '#6D6D6D',
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
      textTransform: 'uppercase',
      letterSpacing: '0.08333em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.2)',
    '0px 3px 6px rgba(0, 0, 0, 0.25)',
    '0px 4px 8px rgba(0, 0, 0, 0.3)',
    '0px 6px 12px rgba(0, 0, 0, 0.35)',
    '0px 8px 16px rgba(0, 0, 0, 0.4)',
    '0px 10px 20px rgba(0, 0, 0, 0.45)',
    '0px 12px 24px rgba(0, 0, 0, 0.5)',
    '0px 14px 28px rgba(0, 0, 0, 0.55)',
    '0px 16px 32px rgba(0, 0, 0, 0.6)',
    '0px 18px 36px rgba(0, 0, 0, 0.65)',
    '0px 20px 40px rgba(0, 0, 0, 0.7)',
    '0px 22px 44px rgba(0, 0, 0, 0.75)',
    '0px 24px 48px rgba(0, 0, 0, 0.8)',
    '0px 26px 52px rgba(0, 0, 0, 0.85)',
    '0px 28px 56px rgba(0, 0, 0, 0.9)',
    '0px 30px 60px rgba(0, 0, 0, 0.95)',
    '0px 32px 64px rgba(0, 0, 0, 1)',
    '0px 34px 68px rgba(0, 0, 0, 1)',
    '0px 36px 72px rgba(0, 0, 0, 1)',
    '0px 38px 76px rgba(0, 0, 0, 1)',
    '0px 40px 80px rgba(0, 0, 0, 1)',
    '0px 42px 84px rgba(0, 0, 0, 1)',
    '0px 44px 88px rgba(0, 0, 0, 1)',
    '0px 46px 92px rgba(0, 0, 0, 1)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 24px',
        },
        contained: {
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
          '&:hover': {
            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.35)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundImage: 'none',
          backgroundColor: '#252525',
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
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E1E1E',
          backgroundImage: 'none',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1E1E1E',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#7C4DFF',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
