import React, { useState, useEffect } from 'react';
import './App.css';

/**
 * Main Application Component
 * Displays verification status and application information
 */
function App() {
  const [verificationStatus, setVerificationStatus] = useState({
    loaded: false,
    buildVerified: false,
    dependencies: [],
    lastVerified: null
  });

  useEffect(() => {
    // Simulate verification check
    const verifyApp = async () => {
      try {
        // In a real app, this would be an API call or file system check
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setVerificationStatus({
          loaded: true,
          buildVerified: true,
          dependencies: ['react', 'react-dom', 'react-scripts'],
          lastVerified: new Date().toISOString()
        });
      } catch (error) {
        console.error('Verification failed:', error);
        setVerificationStatus(prev => ({
          ...prev,
          loaded: true,
          buildVerified: false
        }));
      }
    };

    verifyApp();
  }, []);

  const handleVerifyClick = () => {
    setVerificationStatus(prev => ({
      ...prev,
      lastVerified: new Date().toISOString()
    }));
    alert('Verification check triggered! Check console for details.');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Base Application Test</h1>
        <p className="subtitle">Startup and Verification Dashboard</p>
      </header>

      <main className="App-main">
        <section className="verification-section">
          <h2>Application Status</h2>
          
          <div className="status-card">
            <div className="status-header">
              <span className="status-label">Build Status:</span>
              <span className={`status-badge ${verificationStatus.buildVerified ? 'success' : 'error'}`}>
                {verificationStatus.buildVerified ? '✅ Verified' : '❌ Failed'}
              </span>
            </div>
            
            <div className="status-details">
              <p><strong>Application Loaded:</strong> {verificationStatus.loaded ? 'Yes' : 'Loading...'}</p>
              <p><strong>Last Verified:</strong> {
                verificationStatus.lastVerified 
                  ? new Date(verificationStatus.lastVerified).toLocaleString() 
                  : 'Never'
              }</p>
              
              <div className="dependencies">
                <p><strong>Key Dependencies:</strong></p>
                <ul>
                  {verificationStatus.dependencies.map((dep, index) => (
                    <li key={index}>📦 {dep}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <button 
              className="verify-button"
              onClick={handleVerifyClick}
              disabled={!verificationStatus.loaded}
            >
              Run Verification Check
            </button>
          </div>
        </section>

        <section className="instructions-section">
          <h2>Development Instructions</h2>
          <div className="instructions-card">
            <h3>Available Scripts</h3>
            <div className="script-list">
              <div className="script-item">
                <code>npm start</code>
                <p>Runs the app in development mode</p>
              </div>
              <div className="script-item">
                <code>npm run build</code>
                <p>Builds the app for production</p>
              </div>
              <div className="script-item">
                <code>npm test</code>
                <p>Runs the test suite</p>
              </div>
              <div className="script-item">
                <code>npm run verify</code>
                <p>Runs the build verification script</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="App-footer">
        <p>Base Application Test • Version 0.1.0 • Ready for Development</p>
      </footer>
    </div>
  );
}

export default App;
