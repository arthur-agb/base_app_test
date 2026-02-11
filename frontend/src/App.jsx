import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [backendStatus, setBackendStatus] = useState('checking');
  const [appVersion, setAppVersion] = useState('1.0.0');

  useEffect(() => {
    // Check backend connection
    fetch('/api/health')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Backend not responding');
      })
      .then(data => {
        setBackendStatus('connected');
        if (data.version) {
          setAppVersion(data.version);
        }
      })
      .catch(error => {
        console.error('Backend connection error:', error);
        setBackendStatus('disconnected');
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Base Application Test</h1>
        <p className="version">Version: {appVersion}</p>
        
        <div className="status-container">
          <div className="status-item">
            <span className="status-label">Frontend:</span>
            <span className="status-value status-ok">✓ Running</span>
          </div>
          <div className="status-item">
            <span className="status-label">Backend:</span>
            <span className={`status-value ${backendStatus === 'connected' ? 'status-ok' : 'status-error'}`}>
              {backendStatus === 'connected' ? '✓ Connected' : '✗ Disconnected'}
            </span>
          </div>
        </div>

        <div className="verification-info">
          <h2>Application Verification</h2>
          <p>This application has been successfully verified and is ready for use.</p>
          
          <div className="features">
            <h3>Features:</h3>
            <ul>
              <li>React frontend with modern UI</li>
              <li>Node.js backend API</li>
              <li>Health check endpoint</li>
              <li>Build verification system</li>
              <li>Dependency management</li>
            </ul>
          </div>
        </div>

        <div className="actions">
          <button 
            className="action-button"
            onClick={() => window.location.reload()}
          >
            Refresh Status
          </button>
          <button 
            className="action-button secondary"
            onClick={() => fetch('/api/test').then(r => r.json()).then(console.log).catch(console.error)}
          >
            Test API
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
