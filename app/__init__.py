"""
Base Application Test Package
"""
from app.config.theme_config import get_theme_manager

# Initialize theme manager on import
theme_manager = get_theme_manager()

__version__ = "1.0.0"
__all__ = ["theme_manager"]
