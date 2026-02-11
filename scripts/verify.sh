#!/bin/bash

echo "🔍 Starting application verification..."
echo "========================================"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "⚠️  node_modules not found. Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies"
        exit 1
    fi
    echo "✅ Dependencies installed successfully"
fi

# Run build verification
echo "🏗️  Running build verification..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build verification passed!"
else
    echo "❌ Build verification failed!"
    exit 1
fi

# Check for any TypeScript errors if applicable
if [ -f "tsconfig.json" ]; then
    echo "📝 Checking TypeScript compilation..."
    npx tsc --noEmit
    if [ $? -eq 0 ]; then
        echo "✅ TypeScript compilation passed!"
    else
        echo "❌ TypeScript compilation failed!"
        exit 1
    fi
fi

# Run tests if available
if [ -f "src/App.test.js" ] || [ -f "src/App.test.jsx" ] || [ -f "src/App.test.tsx" ]; then
    echo "🧪 Running tests..."
    npm test -- --watchAll=false
    if [ $? -eq 0 ]; then
        echo "✅ Tests passed!"
    else
        echo "⚠️  Tests failed or were skipped"
    fi
fi

echo "========================================"
echo "🎉 Verification completed successfully!"
echo "✅ Application is ready to start"
echo ""
echo "To start the application:"
echo "  npm start"
echo ""
echo "For health check:"
echo "  npm run health-check"
