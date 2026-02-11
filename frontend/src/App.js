import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import modernDarkTheme from './theme/theme';
import AppRoutes from './routes/AppRoutes';
import Layout from './components/Layout/Layout';

/**
 * Main App component with global theme provider
 */
function App() {
  return (
    <ThemeProvider theme={modernDarkTheme}>
      <CssBaseline />
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
