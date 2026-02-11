import React from 'react';
import { Box, Container, Typography, Button, Card, CardContent, Grid, Paper } from '@mui/material';
import './App.css';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ py: 8 }}>
          <Typography 
            variant="h1" 
            component="h1" 
            gutterBottom
            sx={{ 
              color: 'primary.main',
              mb: 4
            }}
          >
            Modern Dark Theme
          </Typography>
          
          <Typography 
            variant="subtitle1" 
            sx={{ 
              color: 'text.secondary',
              mb: 6,
              maxWidth: '800px'
            }}
          >
            This application features a modern dark theme with vibrant accent colors. 
            The palette uses deep backgrounds with purple and cyan accents for a contemporary look.
          </Typography>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
                    Primary Colors
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
                    <Box sx={{ width: 60, height: 60, bgcolor: 'primary.main', borderRadius: 1 }} />
                    <Box sx={{ width: 60, height: 60, bgcolor: 'primary.light', borderRadius: 1 }} />
                    <Box sx={{ width: 60, height: 60, bgcolor: 'primary.dark', borderRadius: 1 }} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ color: 'secondary.main' }}>
                    Secondary Colors
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
                    <Box sx={{ width: 60, height: 60, bgcolor: 'secondary.main', borderRadius: 1 }} />
                    <Box sx={{ width: 60, height: 60, bgcolor: 'secondary.light', borderRadius: 1 }} />
                    <Box sx={{ width: 60, height: 60, bgcolor: 'secondary.dark', borderRadius: 1 }} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ mb: 6 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'error.main' }}>
                <Typography variant="h6" sx={{ color: 'white' }}>Error</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'warning.main' }}>
                <Typography variant="h6" sx={{ color: 'black' }}>Warning</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'info.main' }}>
                <Typography variant="h6" sx={{ color: 'black' }}>Info</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'success.main' }}>
                <Typography variant="h6" sx={{ color: 'black' }}>Success</Typography>
              </Paper>
            </Grid>
          </Grid>

          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
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

          <Box sx={{ mt: 8 }}>
            <Typography variant="h4" gutterBottom sx={{ color: 'text.primary' }}>
              Typography Scale
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="h1">H1 Heading</Typography>
              <Typography variant="h2">H2 Heading</Typography>
              <Typography variant="h3">H3 Heading</Typography>
              <Typography variant="h4">H4 Heading</Typography>
              <Typography variant="h5">H5 Heading</Typography>
              <Typography variant="h6">H6 Heading</Typography>
              <Typography variant="body1">Body 1 text with normal weight and size.</Typography>
              <Typography variant="body2">Body 2 text with smaller size.</Typography>
              <Typography variant="subtitle1">Subtitle 1 for supporting text.</Typography>
              <Typography variant="subtitle2">Subtitle 2 for smaller supporting text.</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
