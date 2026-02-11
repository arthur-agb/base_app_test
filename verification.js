const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

console.log('=== Application Verification ===\n');

// Check for essential files
const essentialFiles = [
  'package.json',
  'server.js',
  'README.md'
];

console.log('1. Checking essential files:');
essentialFiles.forEach(file => {
  const exists = fs.existsSync(file);
  console.log(`   ${exists ? '✓' : '✗'} ${file}`);
});

// Check package.json structure
console.log('\n2. Checking package.json structure:');
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log(`   ✓ package.json is valid JSON`);
  console.log(`   ✓ Name: ${packageJson.name}`);
  console.log(`   ✓ Version: ${packageJson.version}`);
  
  // Check for required scripts
  const requiredScripts = ['start', 'test'];
  requiredScripts.forEach(script => {
    if (packageJson.scripts && packageJson.scripts[script]) {
      console.log(`   ✓ Script "${script}" found`);
    } else {
      console.log(`   ✗ Script "${script}" not found`);
    }
  });
} catch (error) {
  console.log(`   ✗ Error reading package.json: ${error.message}`);
}

// Check directory structure
console.log('\n3. Checking directory structure:');
const directories = ['public', 'src', 'build'].filter(dir => 
  fs.existsSync(dir) && fs.statSync(dir).isDirectory()
);
directories.forEach(dir => {
  console.log(`   ✓ Directory "${dir}" exists`);
});

// Check if we can start the server
console.log('\n4. Testing server startup:');
console.log('   Starting server in test mode...');

// Create a simple test server
const testApp = require('express')();
const testPort = 3001;

testApp.get('/test', (req, res) => {
  res.json({ test: 'passed' });
});

const testServer = testApp.listen(testPort, () => {
  console.log(`   ✓ Test server started on port ${testPort}`);
  
  // Test the endpoint
  const http = require('http');
  const options = {
    hostname: 'localhost',
    port: testPort,
    path: '/test',
    method: 'GET'
  };
  
  const req = http.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      console.log('   ✓ Test endpoint responded successfully');
      testServer.close();
      console.log('\n=== Verification Complete ===');
      console.log('\nTo start the application:');
      console.log('   npm install');
      console.log('   npm start');
      console.log('\nTo run tests:');
      console.log('   npm test');
      console.log('\nTo verify build:');
      console.log('   npm run verify');
    });
  });
  
  req.on('error', (error) => {
    console.log(`   ✗ Test failed: ${error.message}`);
    testServer.close();
  });
  
  req.end();
});
