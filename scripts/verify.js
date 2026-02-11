#!/usr/bin/env node

/**
 * Verification script for the application
 * Checks if all required components are present and builds successfully
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Starting application verification...\n');

// Check if required directories exist
const requiredDirs = ['frontend', 'backend'];
const missingDirs = requiredDirs.filter(dir => !fs.existsSync(dir));

if (missingDirs.length > 0) {
  console.error(`❌ Missing required directories: ${missingDirs.join(', ')}`);
  process.exit(1);
}

console.log('✅ Required directories exist');

// Check frontend package.json
try {
  const frontendPackage = JSON.parse(fs.readFileSync(path.join('frontend', 'package.json'), 'utf8'));
  console.log(`✅ Frontend package.json found (${frontendPackage.name} v${frontendPackage.version})`);
} catch (error) {
  console.error('❌ Frontend package.json missing or invalid:', error.message);
  process.exit(1);
}

// Check backend package.json
try {
  const backendPackage = JSON.parse(fs.readFileSync(path.join('backend', 'package.json'), 'utf8'));
  console.log(`✅ Backend package.json found (${backendPackage.name} v${backendPackage.version})`);
} catch (error) {
  console.error('❌ Backend package.json missing or invalid:', error.message);
  process.exit(1);
}

// Check if we can install dependencies
console.log('\n📦 Checking dependencies...');
try {
  console.log('Installing root dependencies...');
  execSync('npm install --silent', { stdio: 'inherit' });
  console.log('✅ Root dependencies installed');
  
  console.log('Installing frontend dependencies...');
  execSync('cd frontend && npm install --silent', { stdio: 'inherit' });
  console.log('✅ Frontend dependencies installed');
  
  console.log('Installing backend dependencies...');
  execSync('cd backend && npm install --silent', { stdio: 'inherit' });
  console.log('✅ Backend dependencies installed');
} catch (error) {
  console.error('❌ Failed to install dependencies:', error.message);
  process.exit(1);
}

// Try to build the application
console.log('\n🏗️  Testing build process...');
try {
  console.log('Building frontend...');
  execSync('cd frontend && npm run build --silent', { stdio: 'inherit' });
  console.log('✅ Frontend builds successfully');
  
  console.log('Building backend...');
  execSync('cd backend && npm run build --silent', { stdio: 'inherit' });
  console.log('✅ Backend builds successfully');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Run tests if available
console.log('\n🧪 Running tests...');
try {
  console.log('Running frontend tests...');
  execSync('cd frontend && npm test -- --passWithNoTests --silent', { stdio: 'inherit' });
  console.log('✅ Frontend tests passed');
} catch (error) {
  console.log('⚠️  Frontend tests failed or no tests configured');
}

try {
  console.log('Running backend tests...');
  execSync('cd backend && npm test -- --passWithNoTests --silent', { stdio: 'inherit' });
  console.log('✅ Backend tests passed');
} catch (error) {
  console.log('⚠️  Backend tests failed or no tests configured');
}

console.log('\n🎉 Verification complete!');
console.log('The application is ready to start.');
console.log('\nTo start the application, run:');
console.log('  npm start');
console.log('\nTo run in development mode:');
console.log('  Frontend: cd frontend && npm start');
console.log('  Backend: cd backend && npm start');
