#!/bin/bash

echo "=========================================="
echo "Starting Application Startup Verification"
echo "=========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18 or higher."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

echo "✅ npm version: $(npm --version)"

echo ""
echo "=========================================="
echo "Backend Verification"
echo "=========================================="

cd backend

# Install dependencies
echo "Installing backend dependencies..."
npm ci

# Run tests
echo "Running backend tests..."
if npm test; then
    echo "✅ Backend tests passed"
else
    echo "❌ Backend tests failed"
    exit 1
fi

# Start backend in background
echo "Starting backend server..."
npm start &
BACKEND_PID=$!

# Wait for backend to start
sleep 5

# Check if backend is running
if curl -s http://localhost:5000/api/health | grep -q "healthy"; then
    echo "✅ Backend server is running and healthy"
else
    echo "❌ Backend server failed to start"
    kill $BACKEND_PID 2>/dev/null
    exit 1
fi

echo ""
echo "=========================================="
echo "Frontend Verification"
echo "=========================================="

cd ../frontend

# Install dependencies
echo "Installing frontend dependencies..."
npm ci

# Build frontend
echo "Building frontend..."
if npm run build; then
    echo "✅ Frontend build successful"
else
    echo "❌ Frontend build failed"
    kill $BACKEND_PID 2>/dev/null
    exit 1
fi

# Start frontend in development mode
echo "Starting frontend development server..."
npm start &
FRONTEND_PID=$!

# Wait for frontend to start
sleep 10

echo ""
echo "=========================================="
echo "Verification Complete"
echo "=========================================="
echo ""
echo "✅ Application started successfully!"
echo ""
echo "Access the application at:"
echo "  Frontend: http://localhost:3000"
echo "  Backend API: http://localhost:5000"
echo "  Health Check: http://localhost:5000/api/health"
echo ""
echo "Press Ctrl+C to stop all services"
echo ""

# Keep script running
trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; exit" INT
wait
