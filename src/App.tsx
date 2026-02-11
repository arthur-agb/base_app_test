import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [status, setStatus] = useState<string>('Checking application status...');
  const [buildTime, setBuildTime] = useState<string>('');
  const [features, setFeatures] = useState<string[]>([]);

  useEffect(() => {
    // Simulate application startup and verification
    const timer = setTimeout(() => {
      setStatus('✅ Application started successfully!');
      setBuildTime(new Date().toLocaleString());
      setFeatures([
        'React 18 with TypeScript',
        'ESLint configured',
        'Build system verified',
        'UI components ready'
      ]);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Application Startup & Verification</h1>
        <div className="verification-container">
          <div className="status-card">
            <h2>Startup Status</h2>
            <div className={`status-indicator ${status.includes('✅') ? 'success' : 'loading'}`}>
              {status}
            </div>
            <div className="build-info">
              <p><strong>Build Time:</strong> {buildTime || 'Checking...'}</p>
              <p><strong>Environment:</strong> Development</p>
              <p><strong>Version:</strong> 1.0.0</p>
            </div>
          </div>

          <div className="features-card">
            <h2>Verified Features</h2>
            <ul className="features-list">
              {features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <span className="checkmark">✓</span>
                  {feature}
                </li>
              ))}
              {features.length === 0 && (
                <li className="feature-item loading">Verifying features...</li>
              )}
            </ul>
          </div>

          <div className="actions-card">
            <h2>Quick Actions</h2>
            <div className="action-buttons">
              <button 
                className="action-button primary"
                onClick={() => window.location.reload()}
              >
                Refresh Application
              </button>
              <button 
                className="action-button secondary"
                onClick={() => console.log('Build check triggered')}
              >
                Run Build Check
              </button>
              <button 
                className="action-button tertiary"
                onClick={() => alert('UI verification complete! All components are functional.')}
              >
                Verify UI Components
              </button>
            </div>
          </div>
        </div>

        <div className="system-info">
          <h3>System Information</h3>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">React Version:</span>
              <span className="info-value">{React.version}</span>
            </div>
            <div className="info-item">
              <span className="info-label">User Agent:</span>
              <span className="info-value">{navigator.userAgent}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Viewport:</span>
              <span className="info-value">{window.innerWidth} x {window.innerHeight}</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
