"""
Theme configuration for the application.
"""
import os
from typing import Optional
from pathlib import Path

from app.theme import ThemeManager


def setup_theme() -> ThemeManager:
    """
    Set up theme manager with application configuration.
    
    Returns:
        Configured ThemeManager instance
    """
    # Get theme from environment variable or use default
    theme_name = os.environ.get("APP_THEME", "modern_dark")
    
    # Use application-specific config directory
    config_dir = Path.home() / ".base_app_test"
    config_dir.mkdir(exist_ok=True)
    config_path = config_dir / "theme.json"
    
    # Initialize theme manager
    theme_manager = ThemeManager(str(config_path))
    
    # Apply theme from environment if specified
    if theme_name in theme_manager.get_available_palettes():
        theme_manager.set_palette(theme_name)
    
    return theme_manager


# Global theme manager instance
theme_manager: Optional[ThemeManager] = None


def get_theme_manager() -> ThemeManager:
    """
    Get or create the global theme manager instance.
    
    Returns:
        Global ThemeManager instance
    """
    global theme_manager
    if theme_manager is None:
        theme_manager = setup_theme()
    return theme_manager
