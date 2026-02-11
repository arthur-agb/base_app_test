#!/bin/bash

echo "🏥 Application Health Check"
echo "=========================="
echo ""

# Check Node.js version
echo "📦 Node.js version:"
node --version
if [ $? -ne 0 ]; then
    echo "❌ Node.js is not installed or not in PATH"
    exit 1
fi

# Check npm version
echo "📦 npm version:"
npm --version
if [ $? -ne 0 ]; then
    echo "❌ npm is not installed or not in PATH"
    exit 1
fi

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found"
    exit 1
fi

echo "✅ package.json found"

# Check dependencies
echo "🔍 Checking dependencies..."
npm list --depth=0 2>/dev/null | grep -E "(react|react-dom|react-scripts)" || echo "⚠️  Some React dependencies might be missing"

# Run the verification script
echo ""
echo "🔍 Running verification..."
./scripts/verify.sh

if [ $? -eq 0 ]; then
    echo ""
    echo "=========================="
    echo "✅ HEALTH CHECK PASSED"
    echo "✅ Application is healthy and ready"
    echo "✅ All systems operational"
else
    echo ""
    echo "=========================="
    echo "❌ HEALTH CHECK FAILED"
    echo "❌ Application needs attention"
    exit 1
fi
