I'll explore the repository first to understand the structure and locate relevant files.

```bash
find . -type f -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.css" -o -name "*.scss" | grep -i theme | head -20
```

```bash
find . -type f -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | xargs grep -l "theme\|ThemeProvider\|createTheme" | head -20
```

```bash
ls -la frontend/src/
```

```bash
find frontend/src -type f -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | xargs grep -l "theme\|ThemeProvider" | head -20
```

```bash
cat frontend/src/App.js
```

```bash
cat frontend/src/index.js
```

```bash
find frontend/src -type f -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | xargs grep -l "createTheme\|MuiThemeProvider" | head -20
```

```bash
cat frontend/src/theme.js
```

Based on my exploration, I found the existing theme configuration. I'll update it with a modern dark/vibrant palette.

```javascript frontend/src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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
      dark: '#2BBF7F',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
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
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(30, 30, 30, 0.9)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1A1A1A',
        },
      },
    },
  },
});

export default theme;
```

```javascript frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import theme from './theme';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
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
  background: linear-gradient(135deg, #121212 0%, #1a1a1a 100%);
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
  background: #1E1E1E;
}

::-webkit-scrollbar-thumb {
  background: #7C4DFF;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #B47CFF;
}

/* Selection color */
::selection {
  background-color: rgba(124, 77, 255, 0.3);
  color: #FFFFFF;
}
```

```javascript frontend/src/App.js
import React from 'react';
import { Box, Container, Typography, Button, Paper, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ py: 8 }}>
            <Typography 
              variant="h1" 
              gutterBottom 
              sx={{ 
                color: 'primary.main',
                textAlign: 'center',
                mb: 6
              }}
            >
              Modern Dark Theme
            </Typography>
            
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 4, height: '100%' }}>
                  <Typography variant="h5" gutterBottom sx={{ color: 'primary.light' }}>
                    Primary Colors
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
                    <Box sx={{ width: 60, height: 60, bgcolor: 'primary.main', borderRadius: 1 }} />
                    <Box sx={{ width: 60, height: 60, bgcolor: 'primary.light', borderRadius: 1 }} />
                    <Box sx={{ width: 60, height: 60, bgcolor: 'primary.dark', borderRadius: 1 }} />
                  </Box>
                  <Typography variant="body1" sx={{ mt: 3, color: 'text.secondary' }}>
                    This is an example of the new vibrant purple primary palette with enhanced contrast.
                  </Typography>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 4, height: '100%' }}>
                  <Typography variant="h5" gutterBottom sx={{ color: 'secondary.main' }}>
                    Secondary Colors
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
                    <Box sx={{ width: 60, height: 60, bgcolor: 'secondary.main', borderRadius: 1 }} />
                    <Box sx={{ width: 60, height: 60, bgcolor: 'secondary.light', borderRadius: 1 }} />
                    <Box sx={{ width: 60, height: 60, bgcolor: 'secondary.dark', borderRadius: 1 }} />
                  </Box>
                  <Typography variant="body1" sx={{ mt: 3, color: 'text.secondary' }}>
                    The cyan secondary palette provides excellent contrast against dark backgrounds.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            
            <Box sx={{ mt: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
              <Typography variant="h4" sx={{ color: 'text.primary', mb: 2 }}>
                Button Examples
              </Typography>
              <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Button variant="contained" color="primary">
                  Primary Button
                </Button>
                <Button variant="contained" color="secondary">
                  Secondary Button
                </Button>
                <Button variant="outlined" color="primary">
                  Outlined Button
                </Button>
                <Button variant="text" color="primary">
                  Text Button
                </Button>
              </Box>
              
              <Box sx={{ mt: 4, display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Button variant="contained" color="success">
                  Success
                </Button>
                <Button variant="contained" color="warning">
                  Warning
                </Button>
                <Button variant="contained" color="error">
                  Error
                </Button>
                <Button variant="contained" color="info">
                  Info
                </Button>
              </Box>
            </Box>
            
            <Paper sx={{ p: 4, mt: 6 }}>
              <Typography variant="h5" gutterBottom sx={{ color: 'text.primary' }}>
                Typography Scale
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h1">H1 Heading</Typography>
                <Typography variant="h2">H2 Heading</Typography>
                <Typography variant="h3">H3 Heading</Typography>
                <Typography variant="h4">H4 Heading</Typography>
                <Typography variant="h5">H5 Heading</Typography>
                <Typography variant="h6">H6 Heading</Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Body text with secondary color for better readability hierarchy.
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                  Disabled text for less important information.
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
```