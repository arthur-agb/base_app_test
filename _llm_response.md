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

Based on my exploration, I found the theme configuration files. Here are the updated files with a modern dark/vibrant palette:

```javascript frontend/src/theme/theme.js
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
```

```javascript frontend/src/theme/index.js
import modernDarkTheme from './theme';

export { modernDarkTheme };
export default modernDarkTheme;
```

```javascript frontend/src/App.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import modernDarkTheme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={modernDarkTheme}>
      <CssBaseline />
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
```

```css frontend/src/index.css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(135deg, #0A0A0F 0%, #15151E 100%);
  min-height: 100vh;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #1A1A24;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #00D4AA 0%, #00A37A 100%);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #33FFD6 0%, #00D4AA 100%);
}

/* Selection color */
::selection {
  background-color: rgba(0, 212, 170, 0.3);
  color: #FFFFFF;
}

/* Focus styles */
:focus {
  outline: 2px solid #00D4AA;
  outline-offset: 2px;
}

/* Smooth transitions */
* {
  transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}
```

```javascript frontend/src/components/ThemeToggle.js
import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';

const ThemeToggle = () => {
  const theme = useTheme();
  
  // Note: This component is for future light/dark mode toggle
  // Currently we're using only dark mode with the modern palette
  
  return (
    <Tooltip title="Switch theme">
      <IconButton
        sx={{
          ml: 1,
          color: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        }}
        aria-label="toggle theme"
      >
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
```

```javascript frontend/src/hooks/useThemeColors.js
import { useTheme } from '@mui/material/styles';

export const useThemeColors = () => {
  const theme = useTheme();
  
  return {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    background: theme.palette.background.default,
    paper: theme.palette.background.paper,
    textPrimary: theme.palette.text.primary,
    textSecondary: theme.palette.text.secondary,
    success: theme.palette.success.main,
    error: theme.palette.error.main,
    warning: theme.palette.warning.main,
    info: theme.palette.info.main,
    gradientPrimary: 'linear-gradient(135deg, #00D4AA 0%, #00A37A 100%)',
    gradientSecondary: 'linear-gradient(135deg, #FF6B9D 0%, #FF3A7A 100%)',
    gradientBackground: 'linear-gradient(135deg, #0A0A0F 0%, #15151E 100%)',
  };
};

export default useThemeColors;
```