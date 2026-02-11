import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Verify React is working
console.log('🚀 React application starting...');
console.log('✅ React version:', React.version);
console.log('✅ ReactDOM version:', ReactDOM.version);

// Create root and render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Report successful startup
console.log('✅ Application rendered successfully');
console.log('📊 To verify backend, check: /api/health');

// Optional: Check backend health on startup
fetch('/api/health')
  .then(response => response.json())
  .then(data => {
    console.log('✅ Backend health check:', data);
  })
  .catch(error => {
    console.log('⚠️  Backend not reachable (might be starting):', error.message);
  });
