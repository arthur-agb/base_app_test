#!/bin/bash
# Script to run the application verification and build check

echo "Starting application verification..."
echo "====================================="

# Check if Python is available
if ! command -v python3 &> /dev/null; then
    echo "Error: Python3 is not installed or not in PATH"
    exit 1
fi

# Check Python version
PYTHON_VERSION=$(python3 -c "import sys; print(f'{sys.version_info.major}.{sys.version_info.minor}.{sys.version_info.micro}')")
echo "Python version: $PYTHON_VERSION"

# Run the application
echo ""
echo "Running application startup and verification..."
python3 app.py
APP_EXIT_CODE=$?

echo ""
echo "====================================="

if [ $APP_EXIT_CODE -eq 0 ]; then
    echo "✓ Application verification completed successfully"
    
    # Run tests if requested
    if [ "$1" == "--test" ]; then
        echo ""
        echo "Running unit tests..."
        python3 -m unittest test_verification.py -v
        TEST_EXIT_CODE=$?
        
        if [ $TEST_EXIT_CODE -eq 0 ]; then
            echo "✓ All tests passed"
        else
            echo "✗ Some tests failed"
            exit $TEST_EXIT_CODE
        fi
    fi
    
    exit 0
else
    echo "✗ Application verification failed with exit code: $APP_EXIT_CODE"
    exit $APP_EXIT_CODE
fi
