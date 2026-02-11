import React from 'react';
import { Box, Container, Typography, Button, Card, CardContent, Grid } from '@mui/material';

function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom color="primary">
          Modern Dark Theme Application
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          This application uses a modern dark theme with vibrant color palette
        </Typography>
        
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom color="primary">
                  Primary Color Example
                </Typography>
                <Typography variant="body1" paragraph>
                  The primary color (#7C4DFF) is used for main actions and important elements.
                </Typography>
                <Button variant="contained" color="primary">
                  Primary Button
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom color="secondary">
                  Secondary Color Example
                </Typography>
                <Typography variant="body1" paragraph>
                  The secondary color (#00E5FF) provides contrast and visual interest.
                </Typography>
                <Button variant="contained" color="secondary">
                  Secondary Button
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Color Palette Preview
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3}>
              <Box sx={{ bgcolor: 'primary.main', p: 2, borderRadius: 1 }}>
                <Typography variant="body2" color="white">
                  Primary: #7C4DFF
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ bgcolor: 'secondary.main', p: 2, borderRadius: 1 }}>
                <Typography variant="body2" color="black">
                  Secondary: #00E5FF
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ bgcolor: 'error.main', p: 2, borderRadius: 1 }}>
                <Typography variant="body2" color="white">
                  Error: #FF5252
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ bgcolor: 'success.main', p: 2, borderRadius: 1 }}>
                <Typography variant="body2" color="black">
                  Success: #69F0AE
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
