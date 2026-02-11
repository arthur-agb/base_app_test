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
