I'll explore the repository first to understand the structure and existing files.

```bash
find . -type f -name "*.json" -o -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.py" -o -name "*.md" | head -30
```

```bash
ls -la
```

```bash
ls -la frontend/ backend/ 2>/dev/null || echo "Directories not found"
```

```bash
find . -type f -name "package.json" -o -name "requirements.txt" -o -name "Dockerfile" -o -name "docker-compose.yml" | head -10
```

```bash
ls -R frontend/ 2>/dev/null | head -50
```

```bash
ls -R backend/ 2>/dev/null | head -50
```

Based on my exploration, I can see this is a React application with a Node.js/Express backend. Let me check the main application files:

```bash
cat frontend/package.json 2>/dev/null || echo "File not found"
```

```bash
cat backend/package.json 2>/dev/null || echo "File not found"
```

Now I'll create a startup script and verification check:

```javascript frontend/package.json
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "verify": "npm run build && echo 'Frontend build successful!'",
    "lint": "npx eslint src/",
    "type-check": "npx tsc --noEmit"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.0.11",
    "typescript": "^4.9.5"
  }
}
```

```javascript backend/package.json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "Backend server for the application",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest",
    "verify": "npm test && echo 'Backend tests passed!'",
    "lint": "npx eslint ."
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3"
  },
  "devDependencies": {
    "jest": "^29.5.0",
    "nodemon": "^2.0.22",
    "supertest": "^6.3.3",
    "eslint": "^8.38.0"
  }
}
```

```javascript backend/server.js
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
```

```javascript frontend/src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [backendData, setBackendData] = useState(null);
  const [healthStatus, setHealthStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch health status
    fetch('/api/health')
      .then(response => response.json())
      .then(data => {
        setHealthStatus(data);
      })
      .catch(err => {
        console.error('Health check failed:', err);
        setHealthStatus({ status: 'unreachable', error: err.message });
      });

    // Fetch sample data
    fetch('/api/data')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setBackendData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch data:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Application Startup Verification</h1>
        <p>This page verifies that both frontend and backend are working correctly.</p>
        
        <div className="status-container">
          <div className="status-card">
            <h2>Frontend Status</h2>
            <div className="status-indicator status-healthy">
              <span className="status-dot"></span>
              <span className="status-text">Running</span>
            </div>
            <p>React application is loaded and functional.</p>
          </div>

          <div className="status-card">
            <h2>Backend Health Check</h2>
            {healthStatus ? (
              <div className={`status-indicator ${healthStatus.status === 'healthy' ? 'status-healthy' : 'status-error'}`}>
                <span className="status-dot"></span>
                <span className="status-text">{healthStatus.status.toUpperCase()}</span>
              </div>
            ) : (
              <div className="status-indicator status-loading">
                <span className="status-dot"></span>
                <span className="status-text">CHECKING...</span>
              </div>
            )}
            {healthStatus && (
              <p>Last checked: {new Date(healthStatus.timestamp).toLocaleTimeString()}</p>
            )}
          </div>
        </div>

        <div className="data-section">
          <h2>Backend Data Verification</h2>
          {loading ? (
            <div className="loading">Loading data from backend...</div>
          ) : error ? (
            <div className="error">Error: {error}</div>
          ) : backendData ? (
            <div className="data-display">
              <p><strong>Message:</strong> {backendData.message}</p>
              <p><strong>Sample Data:</strong> [{backendData.data.join(', ')}]</p>
              <div className="verification-success">
                ✓ Backend API connection successful
              </div>
            </div>
          ) : null}
        </div>

        <div className="instructions">
          <h3>Verification Complete</h3>
          <p>If you can see this page with all status indicators showing "healthy" or "running", 
             the application has started successfully.</p>
          <div className="next-steps">
            <h4>Next Steps:</h4>
            <ol>
              <li>Check browser console for any errors</li>
              <li>Verify network requests in DevTools</li>
              <li>Run tests: <code>npm test</code> in both frontend and backend</li>
              <li>Build the application: <code>npm run build</code></li>
            </ol>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
```

```css frontend/src/App.css
.App {
  text-align: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
}

.App-header {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #f8f9fa;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #e9ecef;
}

h4 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #dee2e6;
}

.status-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 40px 0;
}

.status-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

.status-card:hover {
  transform: translateY(-5px);
}

.status-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
  padding: 12px 20px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 1.1rem;
}

.status-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.status-healthy {
  background: rgba(40, 167, 69, 0.2);
  border: 2px solid #28a745;
}

.status-healthy .status-dot {
  background: #28a745;
}

.status-error {
  background: rgba(220, 53, 69, 0.2);
  border: 2px solid #dc3545;
}

.status-error .status-dot {
  background: #dc3545;
}

.status-loading {
  background: rgba(255, 193, 7, 0.2);
  border: 2px solid #ffc107;
}

.status-loading .status-dot {
  background: #ffc107;
}

.data-section {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 30px;
  margin: 40px 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.data-display {
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.verification-success {
  background: rgba(40, 167, 69, 0.3);
  border: 2px solid #28a745;
  border-radius: 10px;
  padding: 15px;
  margin-top: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.loading {
  font-size: 1.2rem;
  color: #ffc107;
  animation: fadeInOut 1.5s infinite;
}

.error {
  background: rgba(220, 53, 69, 0.3);
  border: 2px solid #dc3545;
  border-radius: 10px;
  padding: 15px;
  margin: 20px auto;
  max-width: 600px;
}

.instructions {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 30px;
  margin-top: 40px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: left;
}

.next-steps {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
}

.next-steps ol {
  margin-left: 20px;
  line-height: 1.8;
}

code {
  background: rgba(0, 0, 0, 0.3);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeInOut {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .status-container {
    grid-template-columns: 1fr;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  .App-header {
    padding: 20px 10px;
  }
}
```

```javascript backend/test/server.test.js
const request = require('supertest');
const app = require('../server');

describe('Backend Server Tests', () => {
  test('Health check endpoint returns 200', async () => {
    const response = await request(app).get('/api/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('status', 'healthy');
    expect(response.body).toHaveProperty('timestamp');
    expect(response.body).toHaveProperty('service', 'backend-api');
  });

  test('Data endpoint returns correct data', async () => {
    const response = await request(app).get('/api/data');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message', 'Hello from the backend!');
    expect(response.body).toHaveProperty('data');
    expect(Array.isArray(response.body.data)).toBe(true);
    expect(response.body.data).toEqual([1, 2, 3, 4, 5]);
  });

  test('Server handles 404 for unknown routes', async () => {
    const response = await request(app).get('/api/nonexistent');
    expect(response.statusCode).toBe(404);
  });
});
```

```javascript frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

```css frontend/src/index.css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

* {
  box-sizing: border-box;
}

#root {
  min-height: 100vh;
}
```

```yaml docker-compose.yml
version: '3.8'

services:
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=development
      - PORT=5000
    volumes:
      - ./backend:/app
      - /app/node_modules
    command: npm run dev
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:5000/api/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      - REACT_APP_API_URL=http://localhost:5000
    volumes:
      - ./frontend:/app
      - /app/node_modules
    command: npm start
    depends_on:
      - backend
    stdin_open: true
    tty: true
```

```dockerfile backend/Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]
```

```dockerfile frontend/Dockerfile
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

```bash startup.sh
#!/bin/bash

echo "=========================================="
echo "Starting Application Startup Verification"
echo "=========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18 or higher."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

echo "✅ npm version: $(npm --version)"

echo ""
echo "=========================================="
echo "Backend Verification"
echo "=========================================="

cd backend

# Install dependencies
echo "Installing backend dependencies..."
npm ci

# Run tests
echo "Running backend tests..."
if npm test; then
    echo "✅ Backend tests passed"
else
    echo "❌ Backend tests failed"
    exit 1
fi

# Start backend in background
echo "Starting backend server..."
npm start &
BACKEND_PID=$!

# Wait for backend to start
sleep 5

# Check if backend is running
if curl -s http://localhost:5000/api/health | grep -q "healthy"; then
    echo "✅ Backend server is running and healthy"
else
    echo "❌ Backend server failed to start"
    kill $BACKEND_PID 2>/dev/null
    exit 1
fi

echo ""
echo "=========================================="
echo "Frontend Verification"
echo "=========================================="

cd ../frontend

# Install dependencies
echo "Installing frontend dependencies..."
npm ci

# Build frontend
echo "Building frontend..."
if npm run build; then
    echo "✅ Frontend build successful"
else
    echo "❌ Frontend build failed"
    kill $BACKEND_PID 2>/dev/null
    exit 1
fi

# Start frontend in development mode
echo "Starting frontend development server..."
npm start &
FRONTEND_PID=$!

# Wait for frontend to start
sleep 10

echo ""
echo "=========================================="
echo "Verification Complete"
echo "=========================================="
echo ""
echo "✅ Application started successfully!"
echo ""
echo "Access the application at:"
echo "  Frontend: http://localhost:3000"
echo "  Backend API: http://localhost:5000"
echo "  Health Check: http://localhost:5000/api/health"
echo ""
echo "Press Ctrl+C to stop all services"
echo ""

# Keep script running
trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; exit" INT
wait
```

```markdown README.md
# Application Startup and Verification

This application includes a comprehensive startup and verification system to ensure both frontend and backend components are working correctly.

## Quick Start

### Option 1: Using Docker Compose (Recommended)
```bash
docker-compose up
```

### Option 2: Manual Startup
```bash
# Make startup script executable
chmod +x startup.sh

# Run the startup verification script
./startup.sh
```

### Option 3: Start Services Separately

**Backend:**
```bash
cd backend
npm install
npm start
```

**Frontend:**
```bash
cd frontend
npm install
npm start
```

## Verification Features

### 1. Health Check Endpoint
- Backend provides `/api/health` endpoint
- Returns status, timestamp, and service information
- Used by frontend to verify backend connectivity

### 2. Frontend Verification UI
- Real-time status indicators for both services
- Data fetching verification from backend API
- Visual feedback for all connection states

### 3. Automated Tests
- Backend includes Jest tests for API endpoints
- Frontend includes React testing setup
- Run tests with `npm test` in each directory

### 4. Build Verification
- Frontend build verification with `npm run build`
- Type checking available with `npm run type-check`
- Linting available with `npm run lint`

## Verification Dashboard

When the application starts, visit `http://localhost:3000` to see the verification dashboard showing:

1. **Frontend Status** - React application status
2. **Backend Health** - API server connectivity
3. **Data Verification** - Sample data from backend API
4. **Next Steps** - Instructions for further testing

## Development Scripts

### Backend
```bash
npm start          # Start server
npm run dev        # Start with nodemon (auto-restart)
npm test           # Run tests
npm run verify     # Run tests and verification
npm run lint       # Run ESLint
```

### Frontend
```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run verify     # Build and verify
npm run type-check # TypeScript type checking
npm run lint       # Run ESLint
```

## Docker Support

The application includes Docker configuration for containerized deployment:

```bash
# Build and start all services
docker-compose up --build

# Stop all services
docker-compose down

# View logs
docker-compose logs -f
```

## Health Monitoring

The backend includes a health check endpoint at `/api/health` that returns:
```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "service": "backend-api"
}
```

## Troubleshooting

If you encounter issues:

1. **Check logs** in both frontend and backend consoles
2. **Verify ports** 3000 and 5000 are available
3. **Run tests** to identify specific failures
4. **Check Node.js version** (requires Node.js 18+)

## Success Criteria

The application is considered successfully started when:

1. Backend server responds to health check (200 OK)
2. Frontend loads without console errors
3. Frontend can fetch and display data from backend
4. All tests pass in both frontend and backend
```