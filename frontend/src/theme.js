/**
 * Global theme configuration with modern dark/vibrant palette
 * Updated from default colors to a cohesive dark theme with vibrant accents
 */

const theme = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#7C3AED', // Vibrant purple
      light: '#A78BFA',
      dark: '#5B21B6',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#10B981', // Vibrant emerald green
      light: '#34D399',
      dark: '#059669',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#EF4444', // Vibrant red
      light: '#FCA5A5',
      dark: '#DC2626',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#F59E0B', // Vibrant amber
      light: '#FBBF24',
      dark: '#D97706',
      contrastText: '#1F2937',
    },
    info: {
      main: '#3B82F6', // Vibrant blue
      light: '#60A5FA',
      dark: '#2563EB',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#10B981', // Vibrant green
      light: '#34D399',
      dark: '#059669',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#0F172A', // Dark blue-gray
      paper: '#1E293B',   // Slightly lighter blue-gray
    },
    text: {
      primary: '#F1F5F9',
      secondary: '#CBD5E1',
      disabled: '#64748B',
    },
    divider: '#334155',
    action: {
      active: '#CBD5E1',
      hover: 'rgba(124, 58, 237, 0.08)',
      selected: 'rgba(124, 58, 237, 0.16)',
      disabled: '#475569',
      disabledBackground: 'rgba(100, 116, 139, 0.12)',
    },
    // Additional custom colors for the vibrant palette
    vibrant: {
      purple: '#7C3AED',
      emerald: '#10B981',
      amber: '#F59E0B',
      blue: '#3B82F6',
      pink: '#EC4899',
      cyan: '#06B6D4',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)',
      secondary: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
      warning: 'linear-gradient(135deg, #F59E0B 0%, #EC4899 100%)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#F1F5F9',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
      color: '#F1F5F9',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#F1F5F9',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#F1F5F9',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#F1F5F9',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#F1F5F9',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      color: '#CBD5E1',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.57,
      color: '#94A3B8',
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.3)',
    '0px 4px 8px rgba(0, 0, 0, 0.3)',
    '0px 8px 16px rgba(0, 0, 0, 0.4)',
    '0px 12px 24px rgba(0, 0, 0, 0.4)',
    '0px 16px 32px rgba(0, 0, 0, 0.5)',
    '0px 20px 40px rgba(0, 0, 0, 0.5)',
    '0px 24px 48px rgba(0, 0, 0, 0.6)',
    '0px 28px 56px rgba(0, 0, 0, 0.6)',
    '0px 32px 64px rgba(0, 0, 0, 0.7)',
    '0px 36px 72px rgba(0, 0, 0, 0.7)',
    '0px 40px 80px rgba(0, 0, 0, 0.8)',
    '0px 44px 88px rgba(0, 0, 0, 0.8)',
    '0px 48px 96px rgba(0, 0, 0, 0.9)',
    '0px 52px 104px rgba(0, 0, 0, 0.9)',
    '0px 56px 112px rgba(0, 0, 0, 1)',
    '0px 60px 120px rgba(0, 0, 0, 1)',
    '0px 64px 128px rgba(0, 0, 0, 1)',
    '0px 68px 136px rgba(0, 0, 0, 1)',
    '0px 72px 144px rgba(0, 0, 0, 1)',
    '0px 76px 152px rgba(0, 0, 0, 1)',
    '0px 80px 160px rgba(0, 0, 0, 1)',
    '0px 84px 168px rgba(0, 0, 0, 1)',
    '0px 88px 176px rgba(0, 0, 0, 1)',
    '0px 92px 184px rgba(0, 0, 0, 1)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 24px',
          fontWeight: 600,
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #5B21B6 0%, #2563EB 100%)',
            boxShadow: '0px 8px 16px rgba(124, 58, 237, 0.3)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #059669 0%, #0891B2 100%)',
            boxShadow: '0px 8px 16px rgba(16, 185, 129, 0.3)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          background: '#1E293B',
          border: '1px solid #334155',
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)',
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
          background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #334155',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#0F172A',
          borderRight: '1px solid #334155',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#7C3AED',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#7C3AED',
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
          fontWeight: 500,
        },
        colorPrimary: {
          background: 'linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)',
          color: '#FFFFFF',
        },
        colorSecondary: {
          background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
          color: '#FFFFFF',
        },
      },
    },
  },
};

export default theme;
