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
find frontend/src -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" \) -exec grep -l "theme" {} \; | head -10
```

```bash
cat frontend/src/App.js
```

```bash
cat frontend/src/index.js
```

```bash
find frontend/src -type f -name "*.js" -o -name "*.jsx" | xargs grep -l "theme" | head -10
```

```bash
ls -la frontend/src/theme/
```

```bash
cat frontend/src/theme/theme.js
```

```bash
cat frontend/src/theme/index.js
```

```bash
find frontend/src -type f -name "*.css" -o -name "*.scss" | head -10
```

```bash
cat frontend/src/App.css
```

Now I'll implement the global theme update with a modern dark/vibrant palette:

```javascript frontend/src/theme/theme.js
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
```

```javascript frontend/src/theme/index.js
export { default } from './theme';
```

```javascript frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import theme from './theme';

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

```css frontend/src/App.css
/* Global styles for the modern dark theme */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #121212;
  color: #FFFFFF;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  background-color: #252525;
  padding: 2px 6px;
  border-radius: 4px;
  color: #69F0AE;
}

/* Custom scrollbar for modern dark theme */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: #1E1E1E;
  border-radius: 5px;
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

/* Smooth transitions */
a, button, input, select, textarea {
  transition: all 0.2s ease-in-out;
}

/* Focus styles for accessibility */
:focus {
  outline: 2px solid #7C4DFF;
  outline-offset: 2px;
}

/* Remove focus outline for mouse users */
:focus:not(:focus-visible) {
  outline: none;
}

/* Glass morphism effect for modern UI elements */
.glass-effect {
  background: rgba(30, 30, 30, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Gradient text for accent elements */
.gradient-text {
  background: linear-gradient(45deg, #7C4DFF, #00E5FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Pulse animation for interactive elements */
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(124, 77, 255, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(124, 77, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(124, 77, 255, 0);
  }
}

.pulse {
  animation: pulse 2s infinite;
}
```

```javascript frontend/src/App.js
import React from 'react';
import { Box, Container, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import './App.css';

function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Modern Dark Theme
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          A sleek, modern dark theme with vibrant accent colors
        </Typography>
        
        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom color="primary">
                  Primary Colors
                </Typography>
                <Typography variant="body1" paragraph>
                  The primary color palette features vibrant purple (#7C4DFF) with cyan (#00E5FF) as secondary accent.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
                  <Button variant="contained" color="primary">
                    Primary Button
                  </Button>
                  <Button variant="outlined" color="secondary">
                    Secondary Button
                  </Button>
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
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom color="secondary">
                  Typography & Design
                </Typography>
                <Typography variant="body1" paragraph>
                  Using Inter font family with enhanced readability in dark mode. Rounded corners and subtle shadows create depth.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Heading Examples
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Body text with secondary color for less emphasis
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    Caption text for labels and descriptions
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: 4, p: 3, backgroundColor: 'background.card', borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            Color Palette Preview
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6} sm={3}>
              <Box sx={{ p: 2, bgcolor: 'primary.main', borderRadius: 1, color: 'white' }}>
                Primary
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ p: 2, bgcolor: 'secondary.main', borderRadius: 1, color: 'black' }}>
                Secondary
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ p: 2, bgcolor: 'background.default', borderRadius: 1, color: 'white' }}>
                Background
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1, color: 'white' }}>
                Paper
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
```