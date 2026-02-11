"""
Test module for verifying the application startup and UI checks.
"""

import unittest
import sys
from unittest.mock import patch, MagicMock
from app import Application


class TestApplicationStartup(unittest.TestCase):
    """Test cases for application startup."""
    
    def setUp(self):
        """Set up test fixtures."""
        self.app = Application("TestApp")
    
    def test_initialization(self):
        """Test application initialization."""
        self.assertEqual(self.app.name, "TestApp")
        self.assertEqual(self.app.version, "1.0.0")
        self.assertFalse(self.app.is_running)
    
    def test_python_version_check(self):
        """Test Python version check."""
        with patch('sys.version_info', (3, 8, 0)):
            result = self.app._check_python_version()
            self.assertTrue(result)
    
    def test_dependency_check(self):
        """Test dependency check."""
        result = self.app._check_dependencies()
        self.assertTrue(result)
    
    @patch('psutil.virtual_memory')
    @patch('psutil.disk_usage')
    def test_system_resources_check(self, mock_disk, mock_memory):
        """Test system resources check."""
        # Mock sufficient resources
        mock_memory.return_value.available = 200 * 1024 * 1024  # 200 MB
        mock_disk.return_value.free = 1000 * 1024 * 1024  # 1 GB
        
        result = self.app._check_system_resources()
        self.assertTrue(result)
    
    def test_configuration_check(self):
        """Test configuration check."""
        result = self.app._check_configuration()
        self.assertTrue(result)
    
    def test_startup_success(self):
        """Test successful application startup."""
        with patch.object(self.app, '_perform_startup_checks', return_value=True):
            with patch.object(self.app, '_initialize_components'):
                result = self.app.start()
                self.assertTrue(result)
                self.assertTrue(self.app.is_running)
    
    def test_startup_failure(self):
        """Test failed application startup."""
        with patch.object(self.app, '_perform_startup_checks', return_value=False):
            result = self.app.start()
            self.assertFalse(result)
            self.assertFalse(self.app.is_running)


class TestUIVerification(unittest.TestCase):
    """Test cases for UI verification."""
    
    def setUp(self):
        """Set up test fixtures."""
        self.app = Application("TestApp")
    
    def test_ui_dependency_check(self):
        """Test UI dependency check."""
        result = self.app._check_ui_dependencies()
        self.assertTrue(result)
    
    def test_ui_configuration_check(self):
        """Test UI configuration check."""
        result = self.app._check_ui_configuration()
        self.assertTrue(result)
    
    def test_ui_resources_check(self):
        """Test UI resources check."""
        result = self.app._check_ui_resources()
        self.assertTrue(result)
    
    def test_ui_verification_success(self):
        """Test successful UI verification."""
        with patch.object(self.app, '_check_ui_dependencies', return_value=True):
            with patch.object(self.app, '_check_ui_configuration', return_value=True):
                with patch.object(self.app, '_check_ui_resources', return_value=True):
                    success, error = self.app.verify_ui()
                    self.assertTrue(success)
                    self.assertIsNone(error)
    
    def test_ui_verification_failure(self):
        """Test failed UI verification."""
        with patch.object(self.app, '_check_ui_dependencies', return_value=False):
            success, error = self.app.verify_ui()
            self.assertFalse(success)
            self.assertIsNotNone(error)


class TestApplicationLifecycle(unittest.TestCase):
    """Test cases for application lifecycle."""
    
    def setUp(self):
        """Set up test fixtures."""
        self.app = Application("TestApp")
    
    def test_stop_when_running(self):
        """Test stopping a running application."""
        self.app.is_running = True
        self.app.stop()
        self.assertFalse(self.app.is_running)
    
    def test_stop_when_not_running(self):
        """Test stopping an application that's not running."""
        self.app.is_running = False
        self.app.stop()  # Should not raise an exception
        self.assertFalse(self.app.is_running)


if __name__ == '__main__':
    unittest.main()
