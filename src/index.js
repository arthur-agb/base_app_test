import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Verify React is loaded
console.log('🚀 Starting Base Application Test...');
console.log('React version:', React.version);
console.log('Environment:', process.env.NODE_ENV);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Report web vitals
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Only report in development
if (process.env.NODE_ENV === 'development') {
  reportWebVitals(console.log);
}
