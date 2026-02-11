I'll explore the repository first to understand the structure and locate relevant files.

```bash
find . -type f -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.css" -o -name "*.scss" | head -30
```

```bash
ls -la
```

```bash
find . -type f -name "*theme*" -o -name "*Theme*" -o -name "*palette*" -o -name "*Palette*" | head -20
```

```bash
find . -path ./node_modules -prune -o -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" \) -print | head -30
```

```bash
ls -la frontend/
```

```bash
find frontend -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.css" -o -name "*.scss" \) | head -30
```

```bash
find frontend/src -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.css" -o -name "*.scss" \) | head -40
```

```bash
cat frontend/src/App.js
```

```bash
cat frontend/src/index.js
```

```bash
find frontend/src -name "*theme*" -o -name "*Theme*" | head -10
```

```bash
ls -la frontend/src/
```

```bash
cat frontend/src/theme.js
```

Now I can see the structure. Let me check the existing theme file and other relevant files:

```bash
cat frontend/src/App.css
```

```bash
cat frontend/src/index.css
```

Based on my exploration, I found the repository structure and existing theme files. I'll update the global theme with a modern dark/vibrant palette.

```javascript frontend/src/theme.js
/**
 * Global theme configuration with modern dark/vibrant palette
 * Updated color scheme for better visual appeal and accessibility
 */

const theme = {
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
      light: '#6AFFFF',
      dark: '#00B2CC',
      contrastText: '#000000',
    },
    error: {
      main: '#FF5252',
      light: '#FF867F',
      dark: '#C50E29',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFB74D',
      light: '#FFE97D',
      dark: '#C88719',
      contrastText: '#000000',
    },
    info: {
      main: '#29B6F6',
      light: '#73E8FF',
      dark: '#0086C3',
      contrastText: '#000000',
    },
    success: {
      main: '#66BB6A',
      light: '#98EE99',
      dark: '#338A3E',
      contrastText: '#000000',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
      dark: '#0A0A0A',
      light: '#2D2D2D',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
      disabled: '#6D6D6D',
      hint: '#8A8A8A',
    },
    divider: '#333333',
    action: {
      active: '#FFFFFF',
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
    // Additional vibrant accent colors
    accents: {
      purple: '#7C4DFF',
      cyan: '#00E5FF',
      pink: '#FF4081',
      orange: '#FF9100',
      green: '#00E676',
      yellow: '#FFEA00',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontSize: '2.75rem',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '0em',
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '0.00735em',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: '0em',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.75,
      letterSpacing: '0.00938em',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57,
      letterSpacing: '0.00714em',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'uppercase',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.66,
      letterSpacing: '0.03333em',
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 12,
    borderRadiusSmall: 8,
    borderRadiusLarge: 16,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.3)',
    '0px 4px 8px rgba(0, 0, 0, 0.35)',
    '0px 8px 16px rgba(0, 0, 0, 0.4)',
    '0px 12px 24px rgba(0, 0, 0, 0.45)',
    '0px 16px 32px rgba(0, 0, 0, 0.5)',
    '0px 20px 40px rgba(0, 0, 0, 0.55)',
    '0px 24px 48px rgba(0, 0, 0, 0.6)',
    '0px 28px 56px rgba(0, 0, 0, 0.65)',
    '0px 32px 64px rgba(0, 0, 0, 0.7)',
    '0px 36px 72px rgba(0, 0, 0, 0.75)',
    '0px 40px 80px rgba(0, 0, 0, 0.8)',
    '0px 44px 88px rgba(0, 0, 0, 0.85)',
    '0px 48px 96px rgba(0, 0, 0, 0.9)',
    '0px 52px 104px rgba(0, 0, 0, 0.95)',
  ],
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  // Custom theme extensions
  gradients: {
    primary: 'linear-gradient(135deg, #7C4DFF 0%, #00E5FF 100%)',
    secondary: 'linear-gradient(135deg, #FF4081 0%, #FF9100 100%)',
    background: 'linear-gradient(135deg, #121212 0%, #1E1E1E 100%)',
    card: 'linear-gradient(135deg, #1E1E1E 0%, #2D2D2D 100%)',
  },
  effects: {
    glow: {
      primary: '0 0 20px rgba(124, 77, 255, 0.5)',
      secondary: '0 0 20px rgba(0, 229, 255, 0.5)',
      success: '0 0 20px rgba(102, 187, 106, 0.5)',
    },
  },
};

export default theme;
```

```javascript frontend/src/App.js
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import './App.css';

// Import your components here
// import Dashboard from './components/Dashboard';
// import Login from './components/Login';
// import Settings from './components/Settings';

function App() {
  const muiTheme = createTheme(theme);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Router>
        <div className="App">
          {/* Navigation or header can go here */}
          <main>
            <Routes>
              {/* Define your routes here */}
              {/* <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/settings" element={<Settings />} /> */}
              <Route path="/" element={
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <h1 style={{ color: theme.palette.primary.main }}>
                    Welcome to the Application
                  </h1>
                  <p style={{ color: theme.palette.text.secondary }}>
                    Global theme has been updated with a modern dark/vibrant palette
                  </p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginTop: '2rem',
                    flexWrap: 'wrap'
                  }}>
                    {Object.entries(theme.palette.accents).map(([name, color]) => (
                      <div
                        key={name}
                        style={{
                          backgroundColor: color,
                          color: name === 'cyan' || name === 'yellow' ? '#000' : '#FFF',
                          padding: '1rem',
                          borderRadius: theme.shape.borderRadius,
                          minWidth: '120px',
                          textAlign: 'center'
                        }}
                      >
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                      </div>
                    ))}
                  </div>
                </div>
              } />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
```

```css frontend/src/App.css
.App {
  min-height: 100vh;
  background: var(--background-gradient, linear-gradient(135deg, #121212 0%, #1E1E1E 100%));
}

/* Global custom scrollbar */
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

/* Selection styling */
::selection {
  background-color: rgba(124, 77, 255, 0.5);
  color: #FFFFFF;
}

/* Focus outlines */
*:focus {
  outline: 2px solid #00E5FF;
  outline-offset: 2px;
}

/* Smooth transitions for theme changes */
* {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

/* Utility classes for the new theme */
.glow-primary {
  box-shadow: 0 0 20px rgba(124, 77, 255, 0.5);
}

.glow-secondary {
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.5);
}

.gradient-primary {
  background: linear-gradient(135deg, #7C4DFF 0%, #00E5FF 100%);
}

.gradient-secondary {
  background: linear-gradient(135deg, #FF4081 0%, #FF9100 100%);
}

.text-gradient {
  background: linear-gradient(135deg, #7C4DFF 0%, #00E5FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

```css frontend/src/index.css
/* Import Inter font for modern typography */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

:root {
  /* CSS variables for the new theme */
  --primary-main: #7C4DFF;
  --primary-light: #B47CFF;
  --primary-dark: #3F1DCB;
  
  --secondary-main: #00E5FF;
  --secondary-light: #6AFFFF;
  --secondary-dark: #00B2CC;
  
  --background-default: #121212;
  --background-paper: #1E1E1E;
  --background-dark: #0A0A0A;
  --background-light: #2D2D2D;
  
  --text-primary: #FFFFFF;
  --text-secondary: #B0B0B0;
  --text-disabled: #6D6D6D;
  
  --divider-color: #333333;
  
  --border-radius: 12px;
  --border-radius-small: 8px;
  --border-radius-large: 16px;
  
  --gradient-primary: linear-gradient(135deg, #7C4DFF 0%, #00E5FF 100%);
  --gradient-secondary: linear-gradient(135deg, #FF4081 0%, #FF9100 100%);
  --gradient-background: linear-gradient(135deg, #121212 0%, #1E1E1E 100%);
  
  --glow-primary: 0 0 20px rgba(124, 77, 255, 0.5);
  --glow-secondary: 0 0 20px rgba(0, 229, 255, 0.5);
}

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
  background-color: var(--background-default);
  color: var(--text-primary);
  overflow-x: hidden;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  background-color: var(--background-paper);
  padding: 2px 6px;
  border-radius: var(--border-radius-small);
  color: var(--secondary-main);
}

/* Global link styling */
a {
  color: var(--primary-main);
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: var(--primary-light);
  text-decoration: underline;
}

/* Global button base styles */
button {
  font-family: 'Inter', sans-serif;
}

/* Global card styling */
.card {
  background-color: var(--background-paper);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.35);
  border: 1px solid var(--divider-color);
}

/* Global input styling */
input, textarea, select {
  background-color: var(--background-light);
  border: 1px solid var(--divider-color);
  border-radius: var(--border-radius-small);
  color: var(--text-primary);
  padding: 0.75rem;
  font-family: 'Inter', sans-serif;
  transition: border-color 0.2s ease;
}

input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: var(--primary-main);
  box-shadow: 0 0 0 2px rgba(124, 77, 255, 0.2);
}

/* Global table styling */
table {
  border-collapse: collapse;
  width: 100%;
}

th {
  background-color: var(--background-light);
  color: var(--text-primary);
  font-weight: 600;
  text-align: left;
  padding: 1rem;
}

td {
  padding: 1rem;
  border-bottom: 1px solid var(--divider-color);
  color: var(--text-secondary);
}

tr:hover td {
  background-color: rgba(124, 77, 255, 0.05);
}
```

```javascript frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```