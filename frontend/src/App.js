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
