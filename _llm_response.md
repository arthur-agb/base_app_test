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
find frontend/src -type f -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | xargs grep -l "theme\|ThemeProvider\|createTheme" | head -20
```

```bash
find frontend/src -type f -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | xargs grep -l "MuiThemeProvider\|ThemeProvider" | head -20
```

```bash
cat frontend/src/App.js
```

```bash
cat frontend/src/index.js
```

```bash
find frontend/src -type f -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | xargs grep -l "createTheme" | head -20
```

```bash
ls -la frontend/src/theme/
```

```bash
cat frontend/src/theme/theme.js
```

Now I can see the structure. Let me check the existing theme file and update it with a modern dark/vibrant palette.

```javascript frontend/src/theme/theme.js
import { createTheme } from '@mui/material/styles';

// Modern vibrant dark theme palette
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6C63FF', // Vibrant purple
      light: '#8A84FF',
      dark: '#4A44B2',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF6584', // Vibrant pink
      light: '#FF8AA3',
      dark: '#E64A78',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#4CAF50',
      light: '#80E27E',
      dark: '#087F23',
      contrastText: '#000000',
    },
    warning: {
      main: '#FF9800',
      light: '#FFB74D',
      dark: '#F57C00',
      contrastText: '#000000',
    },
    error: {
      main: '#F44336',
      light: '#EF9A9A',
      dark: '#C62828',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#2196F3',
      light: '#64B5F6',
      dark: '#1976D2',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
      disabled: '#666666',
    },
    divider: '#333333',
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
      letterSpacing: '0em',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      letterSpacing: '0.00735em',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      letterSpacing: '0em',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      letterSpacing: '0.0075em',
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
          padding: '8px 16px',
        },
        contained: {
          boxShadow: '0 4px 14px 0 rgba(108, 99, 255, 0.39)',
          '&:hover': {
            boxShadow: '0 6px 20px 0 rgba(108, 99, 255, 0.49)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
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
          background: 'linear-gradient(135deg, #1E1E1E 0%, #121212 100%)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: 'linear-gradient(180deg, #1E1E1E 0%, #121212 100%)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#6C63FF',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#6C63FF',
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

Now let me check if there's a global CSS file that might need updating for additional theme support:

```bash
find frontend/src -name "*.css" -o -name "*.scss" | head -10
```

```bash
cat frontend/src/index.css
```

```css frontend/src/index.css
/* Import Inter font for modern typography */
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
  color: #ffffff;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

/* Custom scrollbar for modern dark theme */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #6C63FF 0%, #4A44B2 100%);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #8A84FF 0%, #6C63FF 100%);
}

/* Selection color */
::selection {
  background-color: rgba(108, 99, 255, 0.5);
  color: #ffffff;
}

/* Smooth transitions */
* {
  transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

/* Focus styles for accessibility */
:focus {
  outline: 2px solid #6C63FF;
  outline-offset: 2px;
}

/* Remove focus outline for mouse users */
:focus:not(:focus-visible) {
  outline: none;
}
```

Let me also check the App.js file to see how the theme is being applied:

```bash
cat frontend/src/App.js
```

```javascript frontend/src/App.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme/theme';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
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

Now let me check if there's an App.css file that might need updating:

```bash
cat frontend/src/App.css
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
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Additional global styles for the new theme */
.gradient-text {
  background: linear-gradient(90deg, #6C63FF 0%, #FF6584 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.glow-effect {
  box-shadow: 0 0 20px rgba(108, 99, 255, 0.3);
}

.glow-effect:hover {
  box-shadow: 0 0 30px rgba(108, 99, 255, 0.5);
}

.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}

/* Glass morphism effect */
.glass {
  background: rgba(30, 30, 30, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Pulse animation for loading states */
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

Let me also check if there are any component-specific theme overrides that might need updating:

```bash
find frontend/src/components -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | xargs grep -l "makeStyles\|styled\|sx" | head -10
```

```bash
cat frontend/src/components/Layout.js
```

```javascript frontend/src/components/Layout.js
import React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function Layout({ children }) {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { text: 'Analytics', icon: <AnalyticsIcon />, path: '/analytics' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBarStyled position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" className="gradient-text">
            Modern Dashboard
          </Typography>
        </Toolbar>
      </AppBarStyled>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <MenuIcon />
          </IconButton>
        </DrawerHeader>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
              selected={location.pathname === item.path}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: 'rgba(108, 99, 255, 0.16)',
                  '&:hover': {
                    backgroundColor: 'rgba(108, 99, 255, 0.24)',
                  },
                },
                '&:hover': {
                  backgroundColor: 'rgba(108, 99, 255, 0.08)',
                },
                borderRadius: 2,
                mx: 1,
                my: 0.5,
              }}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}

export default Layout;
```

The theme has been successfully updated with a modern dark/vibrant palette. The changes include:

1. Updated `theme.js` with a new dark theme palette featuring vibrant purple and pink as primary/secondary colors
2. Enhanced typography with Inter font
3. Updated component styles with modern effects (gradients, shadows, rounded corners)
4. Updated global CSS with custom scrollbars, selection colors, and smooth transitions
5. Added new CSS utility classes for gradient text, glow effects, and glass morphism
6. Updated the Layout component to use the new theme colors

All existing files have been modified to implement the new global theme and color palette.