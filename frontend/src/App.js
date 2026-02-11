import React from 'react';
import { Box, Container, Typography, Button, Paper, Grid, Card, CardContent, Chip } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          {/* Header */}
          <Box sx={{ py: 4, textAlign: 'center' }}>
            <Typography variant="h1" sx={{ color: 'primary.main', mb: 2 }}>
              Modern Dark Theme
            </Typography>
            <Typography variant="h5" sx={{ color: 'text.secondary', mb: 4 }}>
              A vibrant dark palette with modern design elements
            </Typography>
          </Box>

          {/* Color Palette Display */}
          <Paper sx={{ p: 4, mb: 4, borderRadius: 3 }}>
            <Typography variant="h4" sx={{ mb: 3, color: 'text.primary' }}>
              Color Palette
            </Typography>
            <Grid container spacing={3}>
              {[
                { name: 'Primary', color: theme.palette.primary.main },
                { name: 'Secondary', color: theme.palette.secondary.main },
                { name: 'Error', color: theme.palette.error.main },
                { name: 'Warning', color: theme.palette.warning.main },
                { name: 'Info', color: theme.palette.info.main },
                { name: 'Success', color: theme.palette.success.main },
              ].map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.name}>
                  <Card sx={{ bgcolor: item.color, color: theme.palette.getContrastText(item.color) }}>
                    <CardContent>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="body2">{item.color}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Component Examples */}
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 4, borderRadius: 3 }}>
                <Typography variant="h5" sx={{ mb: 3, color: 'text.primary' }}>
                  Buttons
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
                  <Button variant="contained" color="primary">
                    Primary
                  </Button>
                  <Button variant="contained" color="secondary">
                    Secondary
                  </Button>
                  <Button variant="outlined" color="primary">
                    Outlined
                  </Button>
                  <Button variant="text" color="primary">
                    Text
                  </Button>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 4, borderRadius: 3 }}>
                <Typography variant="h5" sx={{ mb: 3, color: 'text.primary' }}>
                  Chips & Status
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  <Chip label="Default" />
                  <Chip label="Primary" color="primary" />
                  <Chip label="Success" color="success" />
                  <Chip label="Warning" color="warning" />
                  <Chip label="Error" color="error" />
                  <Chip label="Info" color="info" />
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper sx={{ p: 4, borderRadius: 3 }}>
                <Typography variant="h5" sx={{ mb: 3, color: 'text.primary' }}>
                  Typography Scale
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Typography variant="h1">Heading 1</Typography>
                  <Typography variant="h2">Heading 2</Typography>
                  <Typography variant="h3">Heading 3</Typography>
                  <Typography variant="h4">Heading 4</Typography>
                  <Typography variant="h5">Heading 5</Typography>
                  <Typography variant="h6">Heading 6</Typography>
                  <Typography variant="body1">Body 1 - Main content text</Typography>
                  <Typography variant="body2">Body 2 - Secondary content text</Typography>
                  <Typography variant="caption">Caption - Small helper text</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          {/* Footer */}
          <Box sx={{ py: 4, mt: 4, textAlign: 'center', borderTop: 1, borderColor: 'divider' }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Global Theme Updated with Modern Dark Palette
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
