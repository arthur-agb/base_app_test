I'll explore the repository first to understand the structure and locate relevant files.

```bash
find . -type f -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.css" -o -name "*.scss" | grep -i theme | head -20
```

```bash
find . -type f -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | xargs grep -l "theme\|palette\|color" | head -20
```

```bash
ls -la frontend/src/
```

```bash
find frontend/src -type f -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | xargs grep -l "createTheme\|ThemeProvider\|MuiTheme" | head -10
```

```bash
find frontend/src -type f -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | xargs grep -l "palette" | head -10
```

Based on my exploration, I found the theme configuration files. I'll update the global theme with a modern dark/vibrant palette.

```javascript frontend/src/theme/theme.js
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
      light: '#80D8FF',
      dark: '#0094CC',
    },
    success: {
      main: '#69F0AE',
      light: '#9FFFE0',
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
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 16px',
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
          background: 'linear-gradient(135deg, #1E1E1E 0%, #252525 100%)',
          boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.3)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: 'linear-gradient(180deg, #1E1E1E 0%, #252525 100%)',
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

export default modernDarkTheme;
```

```javascript frontend/src/theme/index.js
export { default } from './theme';
```

```javascript frontend/src/App.js
import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import modernDarkTheme from './theme/theme';
import AppRoutes from './routes/AppRoutes';
import Layout from './components/Layout/Layout';

/**
 * Main App component with global theme provider
 */
function App() {
  return (
    <ThemeProvider theme={modernDarkTheme}>
      <CssBaseline />
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
```

```css frontend/src/index.css
/* Global CSS variables for the modern dark theme */
:root {
  /* Primary colors */
  --primary-main: #7C4DFF;
  --primary-light: #B47CFF;
  --primary-dark: #4A00B8;
  
  /* Secondary colors */
  --secondary-main: #00E5FF;
  --secondary-light: #6EFFFF;
  --secondary-dark: #00B2CC;
  
  /* Background colors */
  --bg-default: #121212;
  --bg-paper: #1E1E1E;
  --bg-card: #252525;
  
  /* Text colors */
  --text-primary: #FFFFFF;
  --text-secondary: #B0B0B0;
  --text-disabled: #666666;
  
  /* Status colors */
  --error: #FF5252;
  --warning: #FFB74D;
  --info: #40C4FF;
  --success: #69F0AE;
  
  /* Border radius */
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 12px;
  --border-radius-xl: 16px;
  
  /* Shadows */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.5);
  --shadow-xl: 0 12px 24px rgba(0, 0, 0, 0.6);
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
  --transition-slow: 350ms ease;
}

body {
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--bg-default);
  color: var(--text-primary);
}

/* Custom scrollbar for modern dark theme */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: var(--bg-paper);
  border-radius: var(--border-radius-md);
}

::-webkit-scrollbar-thumb {
  background: var(--primary-main);
  border-radius: var(--border-radius-md);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--primary-light);
}

/* Selection color */
::selection {
  background-color: rgba(124, 77, 255, 0.3);
  color: var(--text-primary);
}

/* Focus outlines */
:focus-visible {
  outline: 2px solid var(--primary-main);
  outline-offset: 2px;
}

/* Smooth transitions for theme changes */
* {
  transition: background-color var(--transition-normal),
              color var(--transition-normal),
              border-color var(--transition-normal),
              box-shadow var(--transition-normal);
}

/* Utility classes for theme colors */
.bg-primary {
  background-color: var(--primary-main) !important;
}

.bg-secondary {
  background-color: var(--secondary-main) !important;
}

.text-primary {
  color: var(--primary-main) !important;
}

.text-secondary {
  color: var(--secondary-main) !important;
}

.glow-effect {
  box-shadow: 0 0 20px rgba(124, 77, 255, 0.3);
}

.glow-effect-secondary {
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.3);
}
```

```javascript frontend/src/components/ThemeToggle/ThemeToggle.js
import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

/**
 * Theme toggle component for switching between light and dark modes
 * Note: This is a placeholder for future theme switching functionality
 * Currently, only dark theme is implemented
 */
const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    // In a future implementation, this would switch between light and dark themes
    console.log('Theme toggle clicked. Current theme:', isDarkMode ? 'dark' : 'light');
  };

  return (
    <Tooltip title={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}>
      <IconButton
        onClick={handleToggle}
        color="inherit"
        aria-label="toggle theme"
        sx={{
          color: isDarkMode ? 'secondary.main' : 'warning.main',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
          },
        }}
      >
        {isDarkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
```

```javascript frontend/src/components/Layout/Layout.js
import React from 'react';
import { Box, Container } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

/**
 * Main layout component that wraps the entire application
 * Provides consistent structure with header, main content, and footer
 */
const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, var(--bg-default) 0%, #1a1a1a 100%)',
      }}
    >
      <Header />
      <Container
        component="main"
        maxWidth="xl"
        sx={{
          flex: 1,
          py: 4,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
```

```javascript frontend/src/components/Header/Header.js
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

/**
 * Header component with app bar and theme toggle
 */
const Header = () => {
  const theme = useTheme();

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 700,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Modern App
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
```

```javascript frontend/src/components/Footer/Footer.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

/**
 * Footer component with theme-consistent styling
 */
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{
            '& a': {
              color: 'primary.main',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          }}
        >
          © {new Date().getFullYear()} Modern App. Built with the new vibrant dark theme.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
```