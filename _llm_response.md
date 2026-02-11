I'll explore the repository first to understand the structure and locate relevant files.

```bash
find . -type f -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.css" -o -name "*.scss" | head -30
```

```bash
ls -la
```

```bash
find . -path ./node_modules -prune -o -type f -name "*theme*" -o -name "*Theme*" -print
```

```bash
find . -path ./node_modules -prune -o -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" \) -exec grep -l "theme\|Theme\|palette\|Palette" {} \; | head -20
```

```bash
ls -la frontend/
```

```bash
find frontend/ -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" \) | head -20
```

```bash
find frontend/src -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" \) | head -30
```

```bash
cat frontend/src/App.js
```

```bash
cat frontend/src/index.js
```

```bash
find frontend/src -type f -name "*.js" -o -name "*.jsx" | xargs grep -l "theme\|Theme" | head -10
```

```bash
cat frontend/src/theme.js
```

```bash
cat frontend/src/App.css
```

```bash
find frontend/src -type f -name "*.css" | head -10
```

Now I'll examine the existing theme structure and update it with a modern dark/vibrant palette.

```javascript frontend/src/theme.js
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
```

```javascript frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './theme';

// Create MUI theme from our theme configuration
const muiTheme = createTheme(theme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

```css frontend/src/index.css
/* Global CSS with modern dark theme support */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #0F172A;
  color: #F1F5F9;
  min-height: 100vh;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  background: rgba(124, 58, 237, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  color: #A78BFA;
}

/* Custom scrollbar for modern dark theme */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: #1E293B;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #5B21B6 0%, #2563EB 100%);
}

/* Selection color */
::selection {
  background-color: rgba(124, 58, 237, 0.3);
  color: #FFFFFF;
}

/* Smooth transitions */
* {
  transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

/* Focus styles for accessibility */
:focus-visible {
  outline: 2px solid #7C3AED;
  outline-offset: 2px;
  border-radius: 4px;
}
```

```javascript frontend/src/App.js
import React from 'react';
import { Box, Container, Typography, Button, Card, CardContent, Grid, Chip, TextField } from '@mui/material';
import './App.css';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Header */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h1" component="h1" gutterBottom sx={{ 
            background: 'linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700 
          }}>
            Modern Dark Theme
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Updated with vibrant color palette
          </Typography>
          <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Chip label="Primary" color="primary" />
            <Chip label="Secondary" color="secondary" />
            <Chip label="Success" color="success" />
            <Chip label="Warning" color="warning" />
            <Chip label="Error" color="error" />
            <Chip label="Info" color="info" />
          </Box>
        </Box>

        {/* Color Palette Display */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Primary Colors</Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
                  <Box sx={{ width: 60, height: 60, bgcolor: 'primary.main', borderRadius: 2 }} />
                  <Box sx={{ width: 60, height: 60, bgcolor: 'primary.light', borderRadius: 2 }} />
                  <Box sx={{ width: 60, height: 60, bgcolor: 'primary.dark', borderRadius: 2 }} />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  Vibrant purple gradient for primary actions
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Secondary Colors</Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
                  <Box sx={{ width: 60, height: 60, bgcolor: 'secondary.main', borderRadius: 2 }} />
                  <Box sx={{ width: 60, height: 60, bgcolor: 'secondary.light', borderRadius: 2 }} />
                  <Box sx={{ width: 60, height: 60, bgcolor: 'secondary.dark', borderRadius: 2 }} />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  Emerald green gradient for secondary elements
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Buttons Section */}
        <Card sx={{ mb: 6 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>Button Styles</Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 3 }}>
              <Button variant="contained" color="primary">Primary Button</Button>
              <Button variant="contained" color="secondary">Secondary Button</Button>
              <Button variant="outlined" color="primary">Outlined Button</Button>
              <Button variant="text" color="primary">Text Button</Button>
              <Button variant="contained" color="success">Success</Button>
              <Button variant="contained" color="warning">Warning</Button>
              <Button variant="contained" color="error">Error</Button>
              <Button variant="contained" color="info">Info</Button>
            </Box>
          </CardContent>
        </Card>

        {/* Form Elements */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>Form Elements</Typography>
                <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <TextField 
                    label="Full Name" 
                    variant="outlined" 
                    fullWidth 
                    placeholder="Enter your name"
                  />
                  <TextField 
                    label="Email Address" 
                    variant="outlined" 
                    fullWidth 
                    placeholder="Enter your email"
                    type="email"
                  />
                  <TextField 
                    label="Message" 
                    variant="outlined" 
                    fullWidth 
                    multiline 
                    rows={4}
                    placeholder="Enter your message"
                  />
                  <Button variant="contained" color="primary" sx={{ alignSelf: 'flex-start' }}>
                    Submit Form
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>Typography</Typography>
                <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Typography variant="h1">H1 Heading</Typography>
                  <Typography variant="h2">H2 Heading</Typography>
                  <Typography variant="h3">H3 Heading</Typography>
                  <Typography variant="h4">H4 Heading</Typography>
                  <Typography variant="body1">
                    This is body text with the new color palette. The text uses the updated text.primary and text.secondary colors.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This is secondary body text with muted colors for less important information.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Footer */}
        <Box sx={{ mt: 6, pt: 4, borderTop: 1, borderColor: 'divider', textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Global theme updated with modern dark palette featuring vibrant accents
          </Typography>
          <Typography variant="caption" color="text.disabled" sx={{ display: 'block', mt: 1 }}>
            Primary: #7C3AED • Secondary: #10B981 • Background: #0F172A
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
```

```css frontend/src/App.css
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #0F172A;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #F1F5F9;
}

.App-link {
  color: #7C3AED;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.App-link:hover {
  color: #A78BFA;
  text-decoration: underline;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Additional custom styles for the new theme */
.gradient-text {
  background: linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.glow-effect {
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.3);
}

.glow-effect:hover {
  box-shadow: 0 0 30px rgba(124, 58, 237, 0.5);
}

/* Card hover effects */
.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-card:hover {
  transform: translateY(-4px);
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.5);
}

/* Custom badge styles */
.badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge-primary {
  background: linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%);
  color: white;
}

.badge-secondary {
  background: linear-gradient(135deg, #10B981 0%, #06B6D4 100%);
  color: white;
}

/* Loading animation */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```