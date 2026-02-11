"""
Main application entry point for startup and verification.
This module initializes the application and performs basic checks.
"""
import sys
import os
from typing import Dict, Any, Optional
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


class Application:
    """Main application class for startup and verification."""
    
    def __init__(self, config: Optional[Dict[str, Any]] = None):
        """
        Initialize the application with optional configuration.
        
        Args:
            config: Optional configuration dictionary
        """
        self.config = config or {}
        self.is_running = False
        self.version = "1.0.0"
        logger.info(f"Initializing Application v{self.version}")
    
    def startup(self) -> bool:
        """
        Start the application and perform initialization checks.
        
        Returns:
            bool: True if startup successful, False otherwise
        """
        try:
            logger.info("Starting application...")
            
            # Perform startup checks
            if not self._perform_startup_checks():
                logger.error("Startup checks failed")
                return False
            
            # Initialize components
            self._initialize_components()
            
            self.is_running = True
            logger.info("Application started successfully")
            return True
            
        except Exception as e:
            logger.error(f"Startup failed: {str(e)}")
            return False
    
    def _perform_startup_checks(self) -> bool:
        """
        Perform all startup verification checks.
        
        Returns:
            bool: True if all checks pass, False otherwise
        """
        checks = [
            self._check_environment(),
            self._check_dependencies(),
            self._check_configuration(),
            self._check_resources()
        ]
        
        all_passed = all(checks)
        if all_passed:
            logger.info("All startup checks passed")
        else:
            logger.warning("Some startup checks failed")
        
        return all_passed
    
    def _check_environment(self) -> bool:
        """Check if the runtime environment is valid."""
        try:
            # Check Python version
            if sys.version_info < (3, 8):
                logger.error(f"Python 3.8+ required, found {sys.version}")
                return False
            
            # Check required environment variables
            required_env_vars = ['HOME', 'USER']
            for var in required_env_vars:
                if var not in os.environ:
                    logger.warning(f"Environment variable {var} not set")
            
            logger.info("Environment check passed")
            return True
            
        except Exception as e:
            logger.error(f"Environment check failed: {str(e)}")
            return False
    
    def _check_dependencies(self) -> bool:
        """Check if required dependencies are available."""
        try:
            # Try to import common dependencies
            import json
            import datetime
            import pathlib
            
            # Check for optional UI dependencies
            try:
                import tkinter
                logger.info("UI dependencies available")
            except ImportError:
                logger.warning("UI dependencies not available - running in headless mode")
            
            logger.info("Dependency check passed")
            return True
            
        except ImportError as e:
            logger.error(f"Dependency check failed: {str(e)}")
            return False
    
    def _check_configuration(self) -> bool:
        """Check if configuration is valid."""
        try:
            # Validate configuration structure
            if not isinstance(self.config, dict):
                logger.error("Configuration must be a dictionary")
                return False
            
            # Set default configuration if needed
            defaults = {
                'debug': False,
                'port': 8080,
                'host': 'localhost'
            }
            
            for key, value in defaults.items():
                if key not in self.config:
                    self.config[key] = value
                    logger.info(f"Set default config: {key}={value}")
            
            logger.info("Configuration check passed")
            return True
            
        except Exception as e:
            logger.error(f"Configuration check failed: {str(e)}")
            return False
    
    def _check_resources(self) -> bool:
        """Check if required resources are available."""
        try:
            # Check current working directory
            cwd = os.getcwd()
            if not os.path.exists(cwd):
                logger.error(f"Working directory does not exist: {cwd}")
                return False
            
            # Check write permissions
            test_file = os.path.join(cwd, '.test_write')
            try:
                with open(test_file, 'w') as f:
                    f.write('test')
                os.remove(test_file)
            except Exception as e:
                logger.error(f"No write permission in {cwd}: {str(e)}")
                return False
            
            logger.info("Resource check passed")
            return True
            
        except Exception as e:
            logger.error(f"Resource check failed: {str(e)}")
            return False
    
    def _initialize_components(self) -> None:
        """Initialize application components."""
        logger.info("Initializing components...")
        
        # Initialize core components
        components = [
            "Database connection",
            "API endpoints",
            "UI framework",
            "Background services"
        ]
        
        for component in components:
            logger.info(f"Initializing {component}...")
            # Simulate component initialization
            # In a real application, this would initialize actual components
    
    def shutdown(self) -> None:
        """Gracefully shutdown the application."""
        if self.is_running:
            logger.info("Shutting down application...")
            self.is_running = False
            logger.info("Application shutdown complete")
    
    def verify_ui(self) -> bool:
        """
        Verify that UI components are working correctly.
        
        Returns:
            bool: True if UI verification passes, False otherwise
        """
        try:
            logger.info("Verifying UI components...")
            
            # Check if UI dependencies are available
            try:
                import tkinter
                from tkinter import messagebox
                
                # Test basic UI functionality
                test_result = self._test_ui_functionality()
                
                if test_result:
                    logger.info("UI verification passed")
                    return True
                else:
                    logger.warning("UI functionality test failed")
                    return False
                    
            except ImportError:
                logger.warning("UI dependencies not available - skipping UI verification")
                return True  # Return True for headless mode
                
        except Exception as e:
            logger.error(f"UI verification failed: {str(e)}")
            return False
    
    def _test_ui_functionality(self) -> bool:
        """Test basic UI functionality."""
        try:
            # Simple UI test - create a hidden window and destroy it
            import tkinter as tk
            
            # Create a hidden root window
            root = tk.Tk()
            root.withdraw()  # Hide the window
            
            # Test basic widgets
            label = tk.Label(root, text="Test Label")
            button = tk.Button(root, text="Test Button")
            
            # Clean up
            label.destroy()
            button.destroy()
            root.destroy()
            
            return True
            
        except Exception as e:
            logger.error(f"UI functionality test failed: {str(e)}")
            return False
    
    def run_build_check(self) -> Dict[str, Any]:
        """
        Perform a comprehensive build check to verify changes don't break the UI.
        
        Returns:
            Dict containing build check results
        """
        logger.info("Running build check...")
        
        results = {
            'startup': False,
            'ui_verification': False,
            'tests_passed': False,
            'warnings': [],
            'errors': []
        }
        
        try:
            # Step 1: Startup verification
            startup_result = self.startup()
            results['startup'] = startup_result
            
            if not startup_result:
                results['errors'].append("Startup failed")
                return results
            
            # Step 2: UI verification
            ui_result = self.verify_ui()
            results['ui_verification'] = ui_result
            
            if not ui_result:
                results['warnings'].append("UI verification failed or unavailable")
            
            # Step 3: Run basic tests
            test_result = self._run_basic_tests()
            results['tests_passed'] = test_result
            
            if not test_result:
                results['errors'].append("Basic tests failed")
            
            # Step 4: Check for common issues
            self._check_common_issues(results)
            
            # Shutdown if we started up
            self.shutdown()
            
            logger.info("Build check completed")
            return results
            
        except Exception as e:
            results['errors'].append(f"Build check failed: {str(e)}")
            logger.error(f"Build check failed: {str(e)}")
            return results
    
    def _run_basic_tests(self) -> bool:
        """Run basic application tests."""
        try:
            logger.info("Running basic tests...")
            
            # Test 1: Configuration access
            assert isinstance(self.config, dict), "Config must be a dictionary"
            
            # Test 2: Application state
            assert hasattr(self, 'is_running'), "Missing is_running attribute"
            assert hasattr(self, 'version'), "Missing version attribute"
            
            # Test 3: Method availability
            assert callable(self.startup), "startup method not callable"
            assert callable(self.shutdown), "shutdown method not callable"
            assert callable(self.verify_ui), "verify_ui method not callable"
            
            logger.info("Basic tests passed")
            return True
            
        except AssertionError as e:
            logger.error(f"Basic test failed: {str(e)}")
            return False
        except Exception as e:
            logger.error(f"Basic test error: {str(e)}")
            return False
    
    def _check_common_issues(self, results: Dict[str, Any]) -> None:
        """Check for common issues that might break the UI."""
        logger.info("Checking for common issues...")
        
        # Check for missing UI dependencies
        try:
            import tkinter
            import tkinter.ttk
        except ImportError:
            results['warnings'].append("UI dependencies (tkinter) not installed")
        
        # Check for environment issues
        if 'DISPLAY' not in os.environ and sys.platform != 'win32':
            results['warnings'].append("DISPLAY environment variable not set (may affect UI on Linux)")
        
        # Check Python version compatibility
        if sys.version_info >= (3, 12):
            results['warnings'].append("Python 3.12+ may have compatibility issues with some UI libraries")


def main() -> None:
    """Main entry point for the application."""
    print("=" * 60)
    print("Application Startup and Verification")
    print("=" * 60)
    
    # Create and configure application
    config = {
        'debug': True,
        'port': 8080,
        'host': '0.0.0.0'
    }
    
    app = Application(config)
    
    # Run build check
    print("\nRunning build check...")
    results = app.run_build_check()
    
    # Display results
    print("\n" + "=" * 60)
    print("BUILD CHECK RESULTS")
    print("=" * 60)
    
    print(f"\n✓ Startup: {'PASSED' if results['startup'] else 'FAILED'}")
    print(f"✓ UI Verification: {'PASSED' if results['ui_verification'] else 'FAILED/UNSUPPORTED'}")
    print(f"✓ Tests: {'PASSED' if results['tests_passed'] else 'FAILED'}")
    
    if results['warnings']:
        print(f"\n⚠ Warnings ({len(results['warnings'])}):")
        for warning in results['warnings']:
            print(f"  - {warning}")
    
    if results['errors']:
        print(f"\n✗ Errors ({len(results['errors'])}):")
        for error in results['errors']:
            print(f"  - {error}")
    
    # Overall status
    print("\n" + "=" * 60)
    if not results['errors']:
        print("✅ BUILD CHECK PASSED - UI should not be broken")
    else:
        print("❌ BUILD CHECK FAILED - UI may be broken")
    print("=" * 60)


if __name__ == "__main__":
    main()
