I'll explore the repository first to understand the structure and locate relevant files.

```bash
find . -type f -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.css" -o -name "*.scss" | grep -i theme | head -20
```

```bash
find . -type f -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | xargs grep -l "theme\|Theme\|palette\|Palette" | head -20
```

```bash
ls -la frontend/src/
```

```bash
find frontend/src -type f -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | xargs grep -l "createTheme\|ThemeProvider\|MuiTheme" | head -20
```

```bash
find frontend/src -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" \) -exec grep -l "theme" {} \; | head -20
```

```bash
cat frontend/src/App.js
```

```bash
cat frontend/src/index.js
```

```bash
find frontend/src -type f -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | xargs grep -l "ThemeProvider\|createTheme" | head -10
```

```bash
ls -la frontend/src/theme/
```

```bash
cat frontend/src/theme/theme.js
```

Now I can see the structure. Let me check the current theme file and update it with a modern dark/vibrant palette.

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
```

Now let me check if there's an App.js or index.js file that needs to be updated to use this theme:

```javascript frontend/src/App.js
import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import modernDarkTheme from './theme/theme';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';

/**
 * Main App component with theme provider and routing
 */
function App() {
  return (
    <ThemeProvider theme={modernDarkTheme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
```

Let me also check if there's a CSS file that might need updating for global styles:

```css frontend/src/index.css
/* Global CSS styles */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
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
  height: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(30, 30, 30, 0.5);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #7C4DFF, #00E5FF);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(45deg, #B47CFF, #6EFFFF);
}

/* Selection color */
::selection {
  background-color: rgba(124, 77, 255, 0.3);
  color: #FFFFFF;
}

/* Focus outline */
:focus {
  outline: 2px solid #7C4DFF;
  outline-offset: 2px;
}

/* Smooth transitions */
* {
  transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}
```

Let me also check if there's a Layout component that might need updating:

```javascript frontend/src/components/Layout.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Container } from '@mui/material';
import { Menu as MenuIcon, Brightness4, Brightness7 } from '@mui/icons-material';

/**
 * Layout component with app bar and main content container
 */
const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="sticky" elevation={0}>
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
            Modern App
          </Typography>
          <IconButton color="inherit" aria-label="toggle theme">
            <Brightness4 />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container 
        component="main" 
        maxWidth="xl" 
        sx={{ 
          flexGrow: 1, 
          py: 4,
          background: 'linear-gradient(135deg, rgba(18, 18, 18, 0.9) 0%, rgba(30, 30, 30, 0.9) 100%)',
          borderRadius: '24px 24px 0 0',
          mt: 2
        }}
      >
        {children}
      </Container>
      <Box 
        component="footer" 
        sx={{ 
          py: 3, 
          px: 2, 
          mt: 'auto', 
          backgroundColor: 'background.paper',
          borderTop: '1px solid',
          borderColor: 'divider',
          textAlign: 'center'
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Modern App. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;
```

Let me check if there's a Dashboard component to see how the theme is applied:

```javascript frontend/src/pages/Dashboard.js
import React from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Box,
  Chip,
  LinearProgress,
  Avatar
} from '@mui/material';
import { 
  TrendingUp, 
  People, 
  ShoppingCart, 
  AttachMoney,
  ArrowUpward,
  MoreVert
} from '@mui/icons-material';

/**
 * Dashboard page component
 */
const Dashboard = () => {
  const stats = [
    { title: 'Total Revenue', value: '$54,234', icon: <AttachMoney />, change: '+12%', color: 'primary' },
    { title: 'Active Users', value: '3,456', icon: <People />, change: '+8%', color: 'secondary' },
    { title: 'New Orders', value: '1,234', icon: <ShoppingCart />, change: '+23%', color: 'success' },
    { title: 'Growth Rate', value: '42%', icon: <TrendingUp />, change: '+5%', color: 'warning' },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
        Dashboard Overview
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card elevation={2}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: `${stat.color}.main`, color: 'white' }}>
                    {stat.icon}
                  </Avatar>
                  <Chip 
                    label={stat.change} 
                    size="small" 
                    color={stat.color}
                    icon={<ArrowUpward sx={{ fontSize: 14 }} />}
                  />
                </Box>
                <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.title}
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={75} 
                  sx={{ 
                    mt: 2, 
                    height: 6, 
                    borderRadius: 3,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '& .MuiLinearProgress-bar': {
                      background: `linear-gradient(90deg, ${stat.color === 'primary' ? '#7C4DFF' : stat.color === 'secondary' ? '#00E5FF' : stat.color === 'success' ? '#69F0AE' : '#FFB74D'} 0%, ${stat.color === 'primary' ? '#B47CFF' : stat.color === 'secondary' ? '#6EFFFF' : stat.color === 'success' ? '#9EFFDF' : '#FFE97D'} 100%)`,
                    }
                  }} 
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card elevation={2}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Performance Metrics
                </Typography>
                <IconButton size="small">
                  <MoreVert />
                </IconButton>
              </Box>
              <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography color="text.secondary">
                  Chart visualization would appear here
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card elevation={2}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                Quick Actions
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button 
                  variant="contained" 
                  fullWidth
                  sx={{ 
                    py: 1.5,
                    background: 'linear-gradient(45deg, #7C4DFF 30%, #00E5FF 90%)',
                  }}
                >
                  Generate Report
                </Button>
                <Button variant="outlined" fullWidth sx={{ py: 1.5 }}>
                  Export Data
                </Button>
                <Button variant="outlined" fullWidth sx={{ py: 1.5 }}>
                  Schedule Task
                </Button>
                <Button variant="outlined" fullWidth sx={{ py: 1.5 }}>
                  View Analytics
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
```

Let me also check if there's a package.json to ensure we have the required dependencies:

```json frontend/package.json
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@mui/icons-material": "^5.14.19",
    "@mui/material": "^5.14.20",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```