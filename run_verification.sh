#!/bin/bash
# Script to run application startup and verification

echo "Starting application verification..."
echo "====================================="

# Check if Python is available
if ! command -v python3 &> /dev/null; then
    echo "ERROR: Python3 is not installed or not in PATH"
    exit 1
fi

# Check Python version
PYTHON_VERSION=$(python3 -c "import sys; print(f'{sys.version_info.major}.{sys.version_info.minor}')")
echo "Python version: $PYTHON_VERSION"

# Run the application
echo ""
echo "Running application startup and verification..."
python3 app.py

EXIT_CODE=$?

echo ""
echo "====================================="
if [ $EXIT_CODE -eq 0 ]; then
    echo "SUCCESS: Application verification completed successfully"
else
    echo "FAILURE: Application verification failed with exit code $EXIT_CODE"
fi

exit $EXIT_CODE
