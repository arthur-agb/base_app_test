import React from 'react';
import { Box, Typography, Container } from '@mui/material';

/**
 * Footer component with theme-consistent styling
 */
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{
            '& a': {
              color: 'primary.main',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          }}
        >
          © {new Date().getFullYear()} Modern App. Built with the new vibrant dark theme.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
