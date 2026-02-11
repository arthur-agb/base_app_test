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
find frontend/src -type f -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | xargs grep -l "createTheme\|MuiThemeProvider" | head -20
```

```bash
cat frontend/src/theme.js
```

```bash
cat frontend/src/index.js
```

Based on my exploration, I found the existing theme configuration. I'll update the global theme with a modern dark/vibrant palette.

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
      main: '#00E5FF', // Cyan
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
      main: '#FFAB40',
      light: '#FFDD71',
      dark: '#C77C02',
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
      fontSize: '0.875rem',
      fontWeight: 600,
      textTransform: 'none',
    },
    caption: {
      fontSize: '0.75rem',
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
          padding: '10px 24px',
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
          backgroundImage: 'none',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #1E1E1E 0%, #121212 100%)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1A1A1A',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
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
  background: linear-gradient(135deg, #0a0a0a 0%, #121212 100%);
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
  background-color: rgba(124, 77, 255, 0.5);
  color: white;
}

/* Smooth transitions */
* {
  transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}
```

```javascript frontend/src/App.js
import React from 'react';
import { Box, Container, Typography, Button, Paper, Grid, Card, CardContent, Chip } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          {/* Header */}
          <Box sx={{ py: 4, textAlign: 'center' }}>
            <Typography variant="h1" sx={{ color: 'primary.main', mb: 2 }}>
              Modern Dark Theme
            </Typography>
            <Typography variant="h5" sx={{ color: 'text.secondary', mb: 4 }}>
              A vibrant dark palette with modern design elements
            </Typography>
          </Box>

          {/* Color Palette Display */}
          <Paper sx={{ p: 4, mb: 4, borderRadius: 3 }}>
            <Typography variant="h4" sx={{ mb: 3, color: 'text.primary' }}>
              Color Palette
            </Typography>
            <Grid container spacing={3}>
              {[
                { name: 'Primary', color: theme.palette.primary.main },
                { name: 'Secondary', color: theme.palette.secondary.main },
                { name: 'Error', color: theme.palette.error.main },
                { name: 'Warning', color: theme.palette.warning.main },
                { name: 'Info', color: theme.palette.info.main },
                { name: 'Success', color: theme.palette.success.main },
              ].map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.name}>
                  <Card sx={{ bgcolor: item.color, color: theme.palette.getContrastText(item.color) }}>
                    <CardContent>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="body2">{item.color}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Component Examples */}
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 4, borderRadius: 3 }}>
                <Typography variant="h5" sx={{ mb: 3, color: 'text.primary' }}>
                  Buttons
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
                  <Button variant="contained" color="primary">
                    Primary
                  </Button>
                  <Button variant="contained" color="secondary">
                    Secondary
                  </Button>
                  <Button variant="outlined" color="primary">
                    Outlined
                  </Button>
                  <Button variant="text" color="primary">
                    Text
                  </Button>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 4, borderRadius: 3 }}>
                <Typography variant="h5" sx={{ mb: 3, color: 'text.primary' }}>
                  Chips & Status
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  <Chip label="Default" />
                  <Chip label="Primary" color="primary" />
                  <Chip label="Success" color="success" />
                  <Chip label="Warning" color="warning" />
                  <Chip label="Error" color="error" />
                  <Chip label="Info" color="info" />
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper sx={{ p: 4, borderRadius: 3 }}>
                <Typography variant="h5" sx={{ mb: 3, color: 'text.primary' }}>
                  Typography Scale
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Typography variant="h1">Heading 1</Typography>
                  <Typography variant="h2">Heading 2</Typography>
                  <Typography variant="h3">Heading 3</Typography>
                  <Typography variant="h4">Heading 4</Typography>
                  <Typography variant="h5">Heading 5</Typography>
                  <Typography variant="h6">Heading 6</Typography>
                  <Typography variant="body1">Body 1 - Main content text</Typography>
                  <Typography variant="body2">Body 2 - Secondary content text</Typography>
                  <Typography variant="caption">Caption - Small helper text</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          {/* Footer */}
          <Box sx={{ py: 4, mt: 4, textAlign: 'center', borderTop: 1, borderColor: 'divider' }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Global Theme Updated with Modern Dark Palette
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
```