import React from 'react';
import { Box, Container, Typography, Button, Paper, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ py: 8 }}>
            <Typography 
              variant="h1" 
              gutterBottom 
              sx={{ 
                color: 'primary.main',
                textAlign: 'center',
                mb: 6
              }}
            >
              Modern Dark Theme
            </Typography>
            
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 4, height: '100%' }}>
                  <Typography variant="h5" gutterBottom sx={{ color: 'primary.light' }}>
                    Primary Colors
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
                    <Box sx={{ width: 60, height: 60, bgcolor: 'primary.main', borderRadius: 1 }} />
                    <Box sx={{ width: 60, height: 60, bgcolor: 'primary.light', borderRadius: 1 }} />
                    <Box sx={{ width: 60, height: 60, bgcolor: 'primary.dark', borderRadius: 1 }} />
                  </Box>
                  <Typography variant="body1" sx={{ mt: 3, color: 'text.secondary' }}>
                    This is an example of the new vibrant purple primary palette with enhanced contrast.
                  </Typography>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 4, height: '100%' }}>
                  <Typography variant="h5" gutterBottom sx={{ color: 'secondary.main' }}>
                    Secondary Colors
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
                    <Box sx={{ width: 60, height: 60, bgcolor: 'secondary.main', borderRadius: 1 }} />
                    <Box sx={{ width: 60, height: 60, bgcolor: 'secondary.light', borderRadius: 1 }} />
                    <Box sx={{ width: 60, height: 60, bgcolor: 'secondary.dark', borderRadius: 1 }} />
                  </Box>
                  <Typography variant="body1" sx={{ mt: 3, color: 'text.secondary' }}>
                    The cyan secondary palette provides excellent contrast against dark backgrounds.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            
            <Box sx={{ mt: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
              <Typography variant="h4" sx={{ color: 'text.primary', mb: 2 }}>
                Button Examples
              </Typography>
              <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Button variant="contained" color="primary">
                  Primary Button
                </Button>
                <Button variant="contained" color="secondary">
                  Secondary Button
                </Button>
                <Button variant="outlined" color="primary">
                  Outlined Button
                </Button>
                <Button variant="text" color="primary">
                  Text Button
                </Button>
              </Box>
              
              <Box sx={{ mt: 4, display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Button variant="contained" color="success">
                  Success
                </Button>
                <Button variant="contained" color="warning">
                  Warning
                </Button>
                <Button variant="contained" color="error">
                  Error
                </Button>
                <Button variant="contained" color="info">
                  Info
                </Button>
              </Box>
            </Box>
            
            <Paper sx={{ p: 4, mt: 6 }}>
              <Typography variant="h5" gutterBottom sx={{ color: 'text.primary' }}>
                Typography Scale
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h1">H1 Heading</Typography>
                <Typography variant="h2">H2 Heading</Typography>
                <Typography variant="h3">H3 Heading</Typography>
                <Typography variant="h4">H4 Heading</Typography>
                <Typography variant="h5">H5 Heading</Typography>
                <Typography variant="h6">H6 Heading</Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Body text with secondary color for better readability hierarchy.
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                  Disabled text for less important information.
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
