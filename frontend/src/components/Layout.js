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
