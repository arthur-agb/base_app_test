"""
Unit tests for the startup and verification functionality.
"""
import unittest
import sys
import os
from unittest.mock import patch, MagicMock
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app import Application
from config.settings import Settings


class TestApplicationStartup(unittest.TestCase):
    """Test cases for application startup."""
    
    def setUp(self):
        """Set up test fixtures."""
        self.app = Application("TestApp")
    
    def test_initialization(self):
        """Test application initialization."""
        self.assertEqual(self.app.name, "TestApp")
        self.assertFalse(self.app.started)
        self.assertFalse(self.app.verified)
    
    def test_successful_start(self):
        """Test successful application startup."""
        result = self.app.start()
        self.assertTrue(result)
        self.assertTrue(self.app.started)
    
    def test_verification_before_start(self):
        """Test verification when application is not started."""
        result, message = self.app.verify()
        self.assertFalse(result)
        self.assertIn("not started", message)
    
    def test_successful_verification(self):
        """Test successful verification after startup."""
        self.app.start()
        result, message = self.app.verify()
        self.assertTrue(result)
        self.assertIn("successfully", message)
        self.assertTrue(self.app.verified)
    
    @patch('app.Application._perform_ui_checks')
    def test_verification_ui_check_failure(self, mock_ui_checks):
        """Test verification when UI checks fail."""
        mock_ui_checks.return_value = (False, "UI component missing")
        self.app.start()
        result, message = self.app.verify()
        self.assertFalse(result)
        self.assertIn("UI check failed", message)
    
    @patch('app.Application._perform_build_checks')
    def test_verification_build_check_failure(self, mock_build_checks):
        """Test verification when build checks fail."""
        mock_build_checks.return_value = (False, "Build dependency missing")
        self.app.start()
        result, message = self.app.verify()
        self.assertFalse(result)
        self.assertIn("Build check failed", message)
    
    def test_run_success(self):
        """Test successful application run."""
        with patch('builtins.print'):
            exit_code = self.app.run()
        self.assertEqual(exit_code, 0)
    
    def test_run_startup_failure(self):
        """Test application run when startup fails."""
        app = Application()
        with patch.object(app, 'start', return_value=False):
            with patch('builtins.print'):
                exit_code = app.run()
        self.assertEqual(exit_code, 1)
    
    def test_run_verification_failure(self):
        """Test application run when verification fails."""
        app = Application()
        with patch.object(app, 'start', return_value=True):
            with patch.object(app, 'verify', return_value=(False, "Verification failed")):
                with patch('builtins.print'):
                    exit_code = app.run()
        self.assertEqual(exit_code, 1)


class TestSettings(unittest.TestCase):
    """Test cases for application settings."""
    
    def test_settings_attributes(self):
        """Test that settings have expected attributes."""
        self.assertEqual(Settings.APP_NAME, "BaseAppTest")
        self.assertEqual(Settings.APP_VERSION, "1.0.0")
        self.assertIsInstance(Settings.UI_COMPONENTS, list)
        self.assertGreater(len(Settings.UI_COMPONENTS), 0)
    
    def test_get_all_settings(self):
        """Test getting all settings as dictionary."""
        settings_dict = Settings.get_all_settings()
        self.assertIsInstance(settings_dict, dict)
        self.assertIn("APP_NAME", settings_dict)
        self.assertIn("DEBUG", settings_dict)
        self.assertIn("UI_COMPONENTS", settings_dict)
    
    def test_validate_settings(self):
        """Test settings validation."""
        result, message = Settings.validate_settings()
        self.assertTrue(result)
        self.assertIn("passed", message)
    
    @patch('config.settings.sys.version_info', (3, 6))
    def test_validate_settings_python_version_failure(self):
        """Test settings validation with insufficient Python version."""
        result, message = Settings.validate_settings()
        self.assertFalse(result)
        self.assertIn("Python", message)


if __name__ == '__main__':
    unittest.main()
