const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'backend-api'
  });
});

// Basic API endpoint
app.get('/api/data', (req, res) => {
  res.json({
    message: 'Hello from the backend!',
    data: [1, 2, 3, 4, 5]
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
  console.log(`Health check available at http://localhost:${PORT}/api/health`);
});

module.exports = app;
