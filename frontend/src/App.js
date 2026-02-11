import React from 'react';
import { Box, Container, Typography, Button, Card, CardContent, Grid, Chip, TextField } from '@mui/material';
import './App.css';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Header */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h1" component="h1" gutterBottom sx={{ 
            background: 'linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700 
          }}>
            Modern Dark Theme
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Updated with vibrant color palette
          </Typography>
          <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Chip label="Primary" color="primary" />
            <Chip label="Secondary" color="secondary" />
            <Chip label="Success" color="success" />
            <Chip label="Warning" color="warning" />
            <Chip label="Error" color="error" />
            <Chip label="Info" color="info" />
          </Box>
        </Box>

        {/* Color Palette Display */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Primary Colors</Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
                  <Box sx={{ width: 60, height: 60, bgcolor: 'primary.main', borderRadius: 2 }} />
                  <Box sx={{ width: 60, height: 60, bgcolor: 'primary.light', borderRadius: 2 }} />
                  <Box sx={{ width: 60, height: 60, bgcolor: 'primary.dark', borderRadius: 2 }} />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  Vibrant purple gradient for primary actions
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Secondary Colors</Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
                  <Box sx={{ width: 60, height: 60, bgcolor: 'secondary.main', borderRadius: 2 }} />
                  <Box sx={{ width: 60, height: 60, bgcolor: 'secondary.light', borderRadius: 2 }} />
                  <Box sx={{ width: 60, height: 60, bgcolor: 'secondary.dark', borderRadius: 2 }} />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  Emerald green gradient for secondary elements
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Buttons Section */}
        <Card sx={{ mb: 6 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>Button Styles</Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 3 }}>
              <Button variant="contained" color="primary">Primary Button</Button>
              <Button variant="contained" color="secondary">Secondary Button</Button>
              <Button variant="outlined" color="primary">Outlined Button</Button>
              <Button variant="text" color="primary">Text Button</Button>
              <Button variant="contained" color="success">Success</Button>
              <Button variant="contained" color="warning">Warning</Button>
              <Button variant="contained" color="error">Error</Button>
              <Button variant="contained" color="info">Info</Button>
            </Box>
          </CardContent>
        </Card>

        {/* Form Elements */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>Form Elements</Typography>
                <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <TextField 
                    label="Full Name" 
                    variant="outlined" 
                    fullWidth 
                    placeholder="Enter your name"
                  />
                  <TextField 
                    label="Email Address" 
                    variant="outlined" 
                    fullWidth 
                    placeholder="Enter your email"
                    type="email"
                  />
                  <TextField 
                    label="Message" 
                    variant="outlined" 
                    fullWidth 
                    multiline 
                    rows={4}
                    placeholder="Enter your message"
                  />
                  <Button variant="contained" color="primary" sx={{ alignSelf: 'flex-start' }}>
                    Submit Form
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>Typography</Typography>
                <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Typography variant="h1">H1 Heading</Typography>
                  <Typography variant="h2">H2 Heading</Typography>
                  <Typography variant="h3">H3 Heading</Typography>
                  <Typography variant="h4">H4 Heading</Typography>
                  <Typography variant="body1">
                    This is body text with the new color palette. The text uses the updated text.primary and text.secondary colors.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This is secondary body text with muted colors for less important information.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Footer */}
        <Box sx={{ mt: 6, pt: 4, borderTop: 1, borderColor: 'divider', textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Global theme updated with modern dark palette featuring vibrant accents
          </Typography>
          <Typography variant="caption" color="text.disabled" sx={{ display: 'block', mt: 1 }}>
            Primary: #7C3AED • Secondary: #10B981 • Background: #0F172A
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
