I'll explore the repository first to understand the structure and locate relevant theme files.

```bash
find . -type f -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.css" -o -name "*.scss" | grep -i theme | head -20
```

```bash
find . -type f -path "*/frontend/*" -name "*.js" -o -path "*/frontend/*" -name "*.jsx" -o -path "*/frontend/*" -name "*.ts" -o -path "*/frontend/*" -name "*.tsx" | head -30
```

```bash
ls -la frontend/src/
```

```bash
find frontend/src -type f -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | xargs grep -l "theme\|Theme\|palette\|Palette" | head -20
```

```bash
find frontend/src -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" \) -exec grep -l "createTheme\|ThemeProvider\|MuiTheme" {} \;
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
cat frontend/src/theme.js
```

Based on my exploration, I found the theme configuration file. Now I'll update it with a modern dark/vibrant palette.

```javascript frontend/src/theme.js
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
      main: '#29B6F6',
      light: '#73E8FF',
      dark: '#0086C3',
    },
    success: {
      main: '#66BB6A',
      light: '#98EE99',
      dark: '#338A3E',
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
    divider: '#2D2D2D',
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
      fontWeight: 700,
      fontSize: '3.5rem',
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.75rem',
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.25rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '1rem',
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '0.875rem',
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
      fontWeight: 600,
      textTransform: 'none',
      fontSize: '0.875rem',
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
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
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
          backgroundColor: '#1A1A1A',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '&:hover .MuiOutlinedInput-notchedOutline': {
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

```javascript frontend/src/App.js
import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import modernDarkTheme from './theme';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={modernDarkTheme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Navbar />
          <div className="app-content">
            <Sidebar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                {/* Add other routes as needed */}
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
```

```css frontend/src/App.css
.App {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #121212 100%);
}

.app-content {
  display: flex;
  flex: 1;
}

.main-content {
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  background: transparent;
}

/* Custom scrollbar for modern dark theme */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #7C4DFF 0%, #4A00B8 100%);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #B47CFF 0%, #7C4DFF 100%);
}

/* Global animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.5s ease-out;
}

@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(124, 77, 255, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(124, 77, 255, 0.6);
  }
}

.glow-effect {
  animation: glow 3s ease-in-out infinite;
}
```

```javascript frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
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
  background: #121212;
  color: #FFFFFF;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  background: rgba(124, 77, 255, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  color: #B47CFF;
}

/* Selection color */
::selection {
  background-color: rgba(124, 77, 255, 0.5);
  color: #FFFFFF;
}

/* Focus outline for accessibility */
:focus {
  outline: 2px solid #7C4DFF;
  outline-offset: 2px;
}

/* Remove focus outline for mouse users */
:focus:not(:focus-visible) {
  outline: none;
}

/* Restore focus outline for keyboard users */
:focus-visible {
  outline: 2px solid #7C4DFF;
  outline-offset: 2px;
}
```

```javascript frontend/src/components/Dashboard.js
import React from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Button,
  LinearProgress,
  Chip
} from '@mui/material';
import { 
  TrendingUp, 
  People, 
  AttachMoney, 
  Dashboard as DashboardIcon 
} from '@mui/icons-material';

const Dashboard = () => {
  const stats = [
    { title: 'Total Revenue', value: '$54,234', change: '+23%', icon: <AttachMoney />, color: '#7C4DFF' },
    { title: 'Active Users', value: '3,456', change: '+12%', icon: <People />, color: '#00E5FF' },
    { title: 'Conversion Rate', value: '4.8%', change: '+5%', icon: <TrendingUp />, color: '#66BB6A' },
    { title: 'Engagement', value: '78%', change: '+8%', icon: <DashboardIcon />, color: '#FFB74D' },
  ];

  return (
    <Box className="fade-in">
      <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 600 }}>
        Dashboard Overview
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className="glow-effect" sx={{ 
              border: '1px solid rgba(124, 77, 255, 0.2)',
              transition: 'transform 0.3s ease, border-color 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                borderColor: 'rgba(124, 77, 255, 0.4)',
              }
            }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ 
                    p: 1, 
                    borderRadius: 2, 
                    backgroundColor: `${stat.color}20`,
                    color: stat.color
                  }}>
                    {stat.icon}
                  </Box>
                  <Chip 
                    label={stat.change} 
                    size="small" 
                    sx={{ 
                      backgroundColor: `${stat.color}20`,
                      color: stat.color,
                      fontWeight: 600
                    }} 
                  />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ 
            border: '1px solid rgba(124, 77, 255, 0.2)',
            background: 'linear-gradient(135deg, rgba(30, 30, 30, 0.8) 0%, rgba(18, 18, 18, 0.8) 100%)'
          }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Performance Metrics
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Website Traffic</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#7C4DFF' }}>85%</Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={85} 
                    sx={{ 
                      height: 8, 
                      borderRadius: 4,
                      backgroundColor: 'rgba(124, 77, 255, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: '#7C4DFF',
                        borderRadius: 4,
                      }
                    }} 
                  />
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">User Engagement</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#00E5FF' }}>72%</Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={72} 
                    sx={{ 
                      height: 8, 
                      borderRadius: 4,
                      backgroundColor: 'rgba(0, 229, 255, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: '#00E5FF',
                        borderRadius: 4,
                      }
                    }} 
                  />
                </Box>
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Conversion Rate</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#66BB6A' }}>92%</Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={92} 
                    sx={{ 
                      height: 8, 
                      borderRadius: 4,
                      backgroundColor: 'rgba(102, 187, 106, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: '#66BB6A',
                        borderRadius: 4,
                      }
                    }} 
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ 
            border: '1px solid rgba(124, 77, 255, 0.2)',
            background: 'linear-gradient(135deg, rgba(30, 30, 30, 0.8) 0%, rgba(18, 18, 18, 0.8) 100%)'
          }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Quick Actions
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button 
                  variant="contained" 
                  fullWidth
                  sx={{ 
                    py: 1.5,
                    background: 'linear-gradient(135deg, #7C4DFF 0%, #4A00B8 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #B47CFF 0%, #7C4DFF 100%)',
                    }
                  }}
                >
                  Generate Report
                </Button>
                <Button 
                  variant="outlined" 
                  fullWidth
                  sx={{ 
                    py: 1.5,
                    borderColor: 'rgba(124, 77, 255, 0.5)',
                    color: '#7C4DFF',
                    '&:hover': {
                      borderColor: '#7C4DFF',
                      backgroundColor: 'rgba(124, 77, 255, 0.1)',
                    }
                  }}
                >
                  Add New User
                </Button>
                <Button 
                  variant="outlined" 
                  fullWidth
                  sx={{ 
                    py: 1.5,
                    borderColor: 'rgba(0, 229, 255, 0.5)',
                    color: '#00E5FF',
                    '&:hover': {
                      borderColor: '#00E5FF',
                      backgroundColor: 'rgba(0, 229, 255, 0.1)',
                    }
                  }}
                >
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