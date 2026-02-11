import React from 'react';
import { Box, Container } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

/**
 * Main layout component that wraps the entire application
 * Provides consistent structure with header, main content, and footer
 */
const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, var(--bg-default) 0%, #1a1a1a 100%)',
      }}
    >
      <Header />
      <Container
        component="main"
        maxWidth="xl"
        sx={{
          flex: 1,
          py: 4,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
