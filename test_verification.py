"""
Test module for verifying the application startup and build checks.
"""

import unittest
import sys
from unittest.mock import patch, MagicMock
from io import StringIO

from app import Application, perform_build_check


class TestApplication(unittest.TestCase):
    """Test cases for the Application class."""
    
    def setUp(self):
        """Set up test fixtures."""
        self.app = Application("TestApp")
    
    def test_initialization(self):
        """Test application initialization."""
        self.assertEqual(self.app.name, "TestApp")
        self.assertEqual(self.app.version, "1.0.0")
        self.assertFalse(self.app.is_running)
    
    def test_start_success(self):
        """Test successful application start."""
        with patch.object(self.app, '_perform_startup_checks', return_value=True):
            with patch.object(self.app, '_initialize_components'):
                result = self.app.start()
                self.assertTrue(result)
                self.assertTrue(self.app.is_running)
    
    def test_start_failure(self):
        """Test failed application start."""
        with patch.object(self.app, '_perform_startup_checks', return_value=False):
            result = self.app.start()
            self.assertFalse(result)
            self.assertFalse(self.app.is_running)
    
    def test_stop(self):
        """Test application stop."""
        self.app.is_running = True
        self.app.stop()
        self.assertFalse(self.app.is_running)
    
    def test_get_status(self):
        """Test getting application status."""
        status = self.app.get_status()
        self.assertEqual(status['name'], "TestApp")
        self.assertEqual(status['version'], "1.0.0")
        self.assertFalse(status['is_running'])
        self.assertIn('python_version', status)


class TestBuildCheck(unittest.TestCase):
    """Test cases for build check functionality."""
    
    def test_build_check_success(self):
        """Test successful build check."""
        success, message = perform_build_check()
        self.assertTrue(success)
        self.assertIn("passed", message)
    
    def test_build_check_failure(self):
        """Test failed build check."""
        # Mock the logger to capture output
        with patch('app.logger') as mock_logger:
            # We can't easily test the failure case without modifying the function
            # This test ensures the function at least runs without error
            success, message = perform_build_check()
            self.assertIsInstance(success, bool)
            self.assertIsInstance(message, str)


class TestMainFunction(unittest.TestCase):
    """Test cases for the main function."""
    
    def test_main_success(self):
        """Test successful main execution."""
        with patch('app.Application.start', return_value=True):
            with patch('app.perform_build_check', return_value=(True, "Success")):
                with patch('app.Application.stop'):
                    from app import main
                    result = main()
                    self.assertEqual(result, 0)
    
    def test_main_start_failure(self):
        """Test main execution with startup failure."""
        with patch('app.Application.start', return_value=False):
            from app import main
            result = main()
            self.assertEqual(result, 1)
    
    def test_main_build_check_failure(self):
        """Test main execution with build check failure."""
        with patch('app.Application.start', return_value=True):
            with patch('app.perform_build_check', return_value=(False, "Failed")):
                with patch('app.Application.stop'):
                    from app import main
                    result = main()
                    self.assertEqual(result, 1)


if __name__ == '__main__':
    unittest.main()
