"""
Unit tests for the application verification module.
"""
import unittest
import sys
import os
from unittest.mock import patch, MagicMock
from app import Application


class TestApplication(unittest.TestCase):
    """Test cases for the Application class."""
    
    def setUp(self):
        """Set up test fixtures."""
        self.config = {'test': True, 'debug': False}
        self.app = Application(self.config)
    
    def test_initialization(self):
        """Test application initialization."""
        self.assertEqual(self.app.config, self.config)
        self.assertFalse(self.app.is_running)
        self.assertEqual(self.app.version, "1.0.0")
    
    def test_startup_success(self):
        """Test successful application startup."""
        with patch.object(self.app, '_perform_startup_checks', return_value=True):
            with patch.object(self.app, '_initialize_components'):
                result = self.app.startup()
                self.assertTrue(result)
                self.assertTrue(self.app.is_running)
    
    def test_startup_failure(self):
        """Test failed application startup."""
        with patch.object(self.app, '_perform_startup_checks', return_value=False):
            result = self.app.startup()
            self.assertFalse(result)
            self.assertFalse(self.app.is_running)
    
    def test_shutdown(self):
        """Test application shutdown."""
        self.app.is_running = True
        self.app.shutdown()
        self.assertFalse(self.app.is_running)
    
    def test_check_environment(self):
        """Test environment check."""
        result = self.app._check_environment()
        self.assertTrue(result)
    
    def test_check_dependencies(self):
        """Test dependency check."""
        result = self.app._check_dependencies()
        self.assertTrue(result)
    
    def test_check_configuration(self):
        """Test configuration check."""
        # Test with valid config
        result = self.app._check_configuration()
        self.assertTrue(result)
        
        # Test with invalid config
        app = Application("invalid_config")
        result = app._check_configuration()
        self.assertFalse(result)
    
    def test_check_resources(self):
        """Test resource check."""
        result = self.app._check_resources()
        self.assertTrue(result)
    
    @patch('app.tkinter')
    def test_verify_ui_with_dependencies(self, mock_tkinter):
        """Test UI verification with dependencies available."""
        mock_tk = MagicMock()
        mock_tkinter.Tk.return_value = mock_tk
        mock_tkinter.Label.return_value = MagicMock()
        mock_tkinter.Button.return_value = MagicMock()
        
        result = self.app.verify_ui()
        self.assertTrue(result)
    
    @patch('app.tkinter', side_effect=ImportError)
    def test_verify_ui_without_dependencies(self, mock_tkinter):
        """Test UI verification without dependencies."""
        result = self.app.verify_ui()
        self.assertTrue(result)  # Should return True for headless mode
    
    def test_run_build_check(self):
        """Test comprehensive build check."""
        with patch.object(self.app, 'startup', return_value=True):
            with patch.object(self.app, 'verify_ui', return_value=True):
                with patch.object(self.app, '_run_basic_tests', return_value=True):
                    with patch.object(self.app, '_check_common_issues'):
                        with patch.object(self.app, 'shutdown'):
                            results = self.app.run_build_check()
                            
                            self.assertTrue(results['startup'])
                            self.assertTrue(results['ui_verification'])
                            self.assertTrue(results['tests_passed'])
                            self.assertIsInstance(results['warnings'], list)
                            self.assertIsInstance(results['errors'], list)
    
    def test_run_basic_tests(self):
        """Test basic test execution."""
        result = self.app._run_basic_tests()
        self.assertTrue(result)


class TestMainFunction(unittest.TestCase):
    """Test cases for the main function."""
    
    @patch('app.Application')
    def test_main_execution(self, mock_app_class):
        """Test main function execution."""
        mock_app = MagicMock()
        mock_app.run_build_check.return_value = {
            'startup': True,
            'ui_verification': True,
            'tests_passed': True,
            'warnings': [],
            'errors': []
        }
        mock_app_class.return_value = mock_app
        
        # Import and run main
        from app import main
        
        # Capture print output
        import io
        from contextlib import redirect_stdout
        
        f = io.StringIO()
        with redirect_stdout(f):
            main()
        
        output = f.getvalue()
        self.assertIn("BUILD CHECK RESULTS", output)
        self.assertIn("BUILD CHECK PASSED", output)


if __name__ == '__main__':
    unittest.main()
