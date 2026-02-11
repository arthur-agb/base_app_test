"""
Application configuration settings.
This module contains configuration for the startup and verification process.
"""
import os
from typing import Dict, Any


class Settings:
    """Application settings configuration."""
    
    # Application settings
    APP_NAME: str = "BaseAppTest"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = os.getenv("DEBUG", "False").lower() == "true"
    
    # UI settings
    UI_THEME: str = "default"
    UI_LANGUAGE: str = "en"
    UI_COMPONENTS: list = ["layout", "navigation", "forms", "buttons", "tables"]
    
    # Build settings
    MIN_PYTHON_VERSION: tuple = (3, 7)
    REQUIRED_DIRECTORIES: list = ["src", "tests", "config", "static", "templates"]
    REQUIRED_FILES: list = ["requirements.txt", "README.md", "app.py"]
    
    # Verification settings
    VERIFICATION_TIMEOUT: int = 30  # seconds
    MAX_RETRIES: int = 3
    
    @classmethod
    def get_all_settings(cls) -> Dict[str, Any]:
        """
        Get all settings as a dictionary.
        
        Returns:
            Dict[str, Any]: Dictionary containing all settings
        """
        return {
            key: value for key, value in cls.__dict__.items() 
            if not key.startswith('_') and not callable(value)
        }
    
    @classmethod
    def validate_settings(cls) -> Tuple[bool, str]:
        """
        Validate all application settings.
        
        Returns:
            Tuple[bool, str]: (validation_status, message)
        """
        try:
            # Validate Python version requirement
            import sys
            if sys.version_info < cls.MIN_PYTHON_VERSION:
                return False, f"Python {cls.MIN_PYTHON_VERSION[0]}.{cls.MIN_PYTHON_VERSION[1]} or higher required"
            
            # Validate UI components
            if not cls.UI_COMPONENTS:
                return False, "UI components list cannot be empty"
            
            # Validate timeout and retries
            if cls.VERIFICATION_TIMEOUT <= 0:
                return False, "Verification timeout must be positive"
            if cls.MAX_RETRIES < 0:
                return False, "Max retries cannot be negative"
            
            return True, "Settings validation passed"
        except Exception as e:
            return False, f"Settings validation error: {e}"


# Create a singleton instance
settings = Settings()
