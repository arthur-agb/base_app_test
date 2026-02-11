import React from 'react';
import { Box, Container, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import './App.css';

function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Modern Dark Theme
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          A sleek, modern dark theme with vibrant accent colors
        </Typography>
        
        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom color="primary">
                  Primary Colors
                </Typography>
                <Typography variant="body1" paragraph>
                  The primary color palette features vibrant purple (#7C4DFF) with cyan (#00E5FF) as secondary accent.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
                  <Button variant="contained" color="primary">
                    Primary Button
                  </Button>
                  <Button variant="outlined" color="secondary">
                    Secondary Button
                  </Button>
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
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom color="secondary">
                  Typography & Design
                </Typography>
                <Typography variant="body1" paragraph>
                  Using Inter font family with enhanced readability in dark mode. Rounded corners and subtle shadows create depth.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Heading Examples
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Body text with secondary color for less emphasis
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    Caption text for labels and descriptions
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: 4, p: 3, backgroundColor: 'background.card', borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            Color Palette Preview
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6} sm={3}>
              <Box sx={{ p: 2, bgcolor: 'primary.main', borderRadius: 1, color: 'white' }}>
                Primary
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ p: 2, bgcolor: 'secondary.main', borderRadius: 1, color: 'black' }}>
                Secondary
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ p: 2, bgcolor: 'background.default', borderRadius: 1, color: 'white' }}>
                Background
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1, color: 'white' }}>
                Paper
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
