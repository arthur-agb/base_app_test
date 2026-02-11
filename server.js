const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public directory if it exists
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from build directory if it exists
app.use(express.static(path.join(__dirname, 'build')));

// API endpoint for health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Serve index.html for all other routes (for SPA)
app.get('*', (req, res) => {
  // Try to serve from build directory first
  const buildPath = path.join(__dirname, 'build', 'index.html');
  const publicPath = path.join(__dirname, 'public', 'index.html');
  
  if (require('fs').existsSync(buildPath)) {
    res.sendFile(buildPath);
  } else if (require('fs').existsSync(publicPath)) {
    res.sendFile(publicPath);
  } else {
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Base App Test</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; }
            .container { max-width: 800px; margin: 0 auto; }
            .status { padding: 20px; background: #f0f0f0; border-radius: 5px; }
            .success { color: green; }
            .info { color: blue; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Base App Test</h1>
            <div class="status">
              <p class="success">✓ Application is running</p>
              <p>Server is listening on port ${PORT}</p>
              <p><a href="/api/health">Health Check Endpoint</a></p>
            </div>
          </div>
        </body>
      </html>
    `);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check available at http://localhost:${PORT}/api/health`);
});
