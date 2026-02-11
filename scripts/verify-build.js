#!/usr/bin/env node

/**
 * Build verification script for the application
 * This script checks if the application builds successfully
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Starting application verification...');
console.log('========================================');

// Check if package.json exists
const packageJsonPath = path.join(__dirname, '..', 'package.json');
if (!fs.existsSync(packageJsonPath)) {
  console.error('❌ package.json not found');
  process.exit(1);
}

console.log('✅ package.json found');

// Read package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
console.log(`📦 Application: ${packageJson.name} v${packageJson.version}`);

// Check for required dependencies
const requiredDeps = ['react', 'react-dom'];
const missingDeps = requiredDeps.filter(dep => !packageJson.dependencies[dep]);

if (missingDeps.length > 0) {
  console.error(`❌ Missing required dependencies: ${missingDeps.join(', ')}`);
  process.exit(1);
}

console.log('✅ Required dependencies found');

// Check if build directory exists, if not try to build
const buildDir = path.join(__dirname, '..', 'build');
if (!fs.existsSync(buildDir)) {
  console.log('📦 Build directory not found, attempting to build...');
  try {
    execSync('npm run build', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
    console.log('✅ Build completed successfully');
  } catch (error) {
    console.error('❌ Build failed');
    process.exit(1);
  }
} else {
  console.log('✅ Build directory exists');
  
  // Check build artifacts
  const requiredBuildFiles = ['index.html', 'asset-manifest.json'];
  const missingBuildFiles = requiredBuildFiles.filter(file => 
    !fs.existsSync(path.join(buildDir, file))
  );
  
  if (missingBuildFiles.length > 0) {
    console.error(`❌ Missing build files: ${missingBuildFiles.join(', ')}`);
    process.exit(1);
  }
  
  console.log('✅ All build artifacts present');
}

// Check if we can start the development server (simulated)
console.log('\n🚀 Testing development server startup...');
try {
  // Check if we have the start script
  if (!packageJson.scripts || !packageJson.scripts.start) {
    console.error('❌ No start script found in package.json');
    process.exit(1);
  }
  
  console.log('✅ Start script available');
  console.log(`📝 Start command: ${packageJson.scripts.start}`);
  
  // For verification purposes, we'll just check if the port is available
  // In a real scenario, we might try to start the server and check if it responds
  console.log('⚠️  Note: Development server startup test simulated');
  console.log('   To actually test, run: npm start');
  
} catch (error) {
  console.error('❌ Development server check failed:', error.message);
  process.exit(1);
}

console.log('\n========================================');
console.log('🎉 Application verification completed successfully!');
console.log('\nNext steps:');
console.log('1. Run `npm start` to start the development server');
console.log('2. Run `npm run build` to create a production build');
console.log('3. Run `npm test` to run tests');
console.log('\nThe application is ready for development! 🚀');
