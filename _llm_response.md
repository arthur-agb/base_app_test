```python app/theme/__init__.py
"""
Theme module initialization.
"""
from .palette import Palette
from .theme_manager import ThemeManager

__all__ = ["Palette", "ThemeManager"]
```

```python app/theme/palette.py
"""
Color palette definitions for the application.
"""
from dataclasses import dataclass
from typing import Dict, Tuple


@dataclass(frozen=True)
class Palette:
    """
    A color palette for the application theme.
    
    Attributes:
        primary: Primary brand color (hex string)
        secondary: Secondary brand color (hex string)
        accent: Accent color for highlights (hex string)
        background: Main background color (hex string)
        surface: Surface color for cards, dialogs (hex string)
        error: Error color (hex string)
        success: Success color (hex string)
        warning: Warning color (hex string)
        info: Info color (hex string)
        on_primary: Text/icon color on primary background (hex string)
        on_secondary: Text/icon color on secondary background (hex string)
        on_background: Text/icon color on background (hex string)
        on_surface: Text/icon color on surface (hex string)
        on_error: Text/icon color on error background (hex string)
    """
    primary: str
    secondary: str
    accent: str
    background: str
    surface: str
    error: str
    success: str
    warning: str
    info: str
    on_primary: str
    on_secondary: str
    on_background: str
    on_surface: str
    on_error: str
    
    def to_dict(self) -> Dict[str, str]:
        """Convert palette to dictionary."""
        return {
            "primary": self.primary,
            "secondary": self.secondary,
            "accent": self.accent,
            "background": self.background,
            "surface": self.surface,
            "error": self.error,
            "success": self.success,
            "warning": self.warning,
            "info": self.info,
            "on_primary": self.on_primary,
            "on_secondary": self.on_secondary,
            "on_background": self.on_background,
            "on_surface": self.on_surface,
            "on_error": self.on_error,
        }
    
    @classmethod
    def from_dict(cls, data: Dict[str, str]) -> "Palette":
        """Create palette from dictionary."""
        return cls(**data)


# Modern Dark Palette
MODERN_DARK = Palette(
    primary="#7C3AED",      # Vibrant purple
    secondary="#10B981",    # Emerald green
    accent="#F59E0B",       # Amber
    background="#0F172A",   # Dark blue-gray
    surface="#1E293B",      # Slightly lighter blue-gray
    error="#EF4444",        # Red
    success="#10B981",      # Emerald green
    warning="#F59E0B",      # Amber
    info="#3B82F6",         # Blue
    on_primary="#FFFFFF",   # White
    on_secondary="#FFFFFF", # White
    on_background="#F1F5F9",# Light blue-gray
    on_surface="#E2E8F0",   # Lighter blue-gray
    on_error="#FFFFFF",     # White
)

# Vibrant Palette
VIBRANT = Palette(
    primary="#FF6B6B",      # Coral red
    secondary="#4ECDC4",    # Turquoise
    accent="#FFD166",       # Yellow
    background="#1A1A2E",   # Dark navy
    surface="#16213E",      # Dark blue
    error="#FF6B6B",        # Coral red
    success="#06D6A0",      # Mint green
    warning="#FFD166",      # Yellow
    info="#118AB2",         # Ocean blue
    on_primary="#FFFFFF",   # White
    on_secondary="#000000", # Black
    on_background="#FFFFFF",# White
    on_surface="#FFFFFF",   # White
    on_error="#FFFFFF",     # White
)

# Default Palette (for reference/fallback)
DEFAULT = Palette(
    primary="#3B82F6",      # Blue
    secondary="#6B7280",    # Gray
    accent="#8B5CF6",       # Purple
    background="#FFFFFF",   # White
    surface="#F9FAFB",      # Light gray
    error="#EF4444",        # Red
    success="#10B981",      # Green
    warning="#F59E0B",      # Yellow
    info="#3B82F6",         # Blue
    on_primary="#FFFFFF",   # White
    on_secondary="#FFFFFF", # White
    on_background="#111827",# Dark gray
    on_surface="#374151",   # Gray
    on_error="#FFFFFF",     # White
)

# Available palettes
PALETTES = {
    "modern_dark": MODERN_DARK,
    "vibrant": VIBRANT,
    "default": DEFAULT,
}
```

```python app/theme/theme_manager.py
"""
Theme manager for handling global theme changes.
"""
import json
import os
from typing import Optional, Dict, Any
from pathlib import Path

from .palette import Palette, PALETTES


class ThemeManager:
    """
    Manages application theme and color palette.
    
    Attributes:
        current_palette: Currently active palette
        config_path: Path to theme configuration file
    """
    
    def __init__(self, config_path: Optional[str] = None):
        """
        Initialize theme manager.
        
        Args:
            config_path: Path to theme configuration file. 
                        Defaults to ~/.app/theme_config.json
        """
        if config_path is None:
            config_dir = Path.home() / ".app"
            config_dir.mkdir(exist_ok=True)
            self.config_path = config_dir / "theme_config.json"
        else:
            self.config_path = Path(config_path)
        
        # Load saved palette or use modern_dark as default
        self.current_palette = self._load_saved_palette() or PALETTES["modern_dark"]
    
    def set_palette(self, palette_name: str) -> bool:
        """
        Set the active palette by name.
        
        Args:
            palette_name: Name of the palette (modern_dark, vibrant, default)
            
        Returns:
            True if palette was set successfully, False otherwise
        """
        if palette_name not in PALETTES:
            return False
        
        self.current_palette = PALETTES[palette_name]
        self._save_palette()
        self._apply_palette()
        return True
    
    def set_custom_palette(self, palette: Palette) -> None:
        """
        Set a custom palette.
        
        Args:
            palette: Custom palette instance
        """
        self.current_palette = palette
        self._save_palette()
        self._apply_palette()
    
    def get_palette(self) -> Palette:
        """
        Get the current palette.
        
        Returns:
            Current palette instance
        """
        return self.current_palette
    
    def get_available_palettes(self) -> Dict[str, Palette]:
        """
        Get all available palettes.
        
        Returns:
            Dictionary of palette names to palette instances
        """
        return PALETTES.copy()
    
    def _load_saved_palette(self) -> Optional[Palette]:
        """
        Load saved palette from configuration file.
        
        Returns:
            Palette instance if found, None otherwise
        """
        try:
            if self.config_path.exists():
                with open(self.config_path, 'r') as f:
                    data = json.load(f)
                
                # Check if it's a custom palette or named palette
                if "palette_name" in data:
                    palette_name = data["palette_name"]
                    if palette_name in PALETTES:
                        return PALETTES[palette_name]
                elif "primary" in data:  # Custom palette
                    return Palette.from_dict(data)
        except (json.JSONDecodeError, KeyError, IOError):
            pass
        
        return None
    
    def _save_palette(self) -> None:
        """
        Save current palette to configuration file.
        """
        try:
            # Check if it's a predefined palette
            palette_name = None
            for name, palette in PALETTES.items():
                if palette == self.current_palette:
                    palette_name = name
                    break
            
            if palette_name:
                data = {"palette_name": palette_name}
            else:
                data = self.current_palette.to_dict()
            
            with open(self.config_path, 'w') as f:
                json.dump(data, f, indent=2)
        except IOError:
            pass
    
    def _apply_palette(self) -> None:
        """
        Apply the current palette globally.
        This method should be called by the UI framework to update colors.
        """
        # This is a stub that should be implemented by the UI framework
        # For example, in a web app, this would update CSS variables
        # In a desktop app, this would update style sheets
        pass
    
    def generate_css_variables(self) -> str:
        """
        Generate CSS variables for web applications.
        
        Returns:
            CSS string with color variables
        """
        palette = self.current_palette
        variables = [
            f"--color-primary: {palette.primary};",
            f"--color-secondary: {palette.secondary};",
            f"--color-accent: {palette.accent};",
            f"--color-background: {palette.background};",
            f"--color-surface: {palette.surface};",
            f"--color-error: {palette.error};",
            f"--color-success: {palette.success};",
            f"--color-warning: {palette.warning};",
            f"--color-info: {palette.info};",
            f"--color-on-primary: {palette.on_primary};",
            f"--color-on-secondary: {palette.on_secondary};",
            f"--color-on-background: {palette.on_background};",
            f"--color-on-surface: {palette.on_surface};",
            f"--color-on-error: {palette.on_error};",
        ]
        
        return ":root {\n  " + "\n  ".join(variables) + "\n}"
    
    def generate_style_dict(self) -> Dict[str, Dict[str, str]]:
        """
        Generate style dictionary for desktop/mobile applications.
        
        Returns:
            Dictionary with style properties
        """
        palette = self.current_palette
        return {
            "primary": {"color": palette.primary, "text_color": palette.on_primary},
            "secondary": {"color": palette.secondary, "text_color": palette.on_secondary},
            "accent": {"color": palette.accent},
            "background": {"color": palette.background, "text_color": palette.on_background},
            "surface": {"color": palette.surface, "text_color": palette.on_surface},
            "error": {"color": palette.error, "text_color": palette.on_error},
            "success": {"color": palette.success},
            "warning": {"color": palette.warning},
            "info": {"color": palette.info},
        }
```

```python app/config/theme_config.py
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
```

```python app/__init__.py
"""
Base Application Test Package
"""
from app.config.theme_config import get_theme_manager

# Initialize theme manager on import
theme_manager = get_theme_manager()

__version__ = "1.0.0"
__all__ = ["theme_manager"]
```

```python tests/test_theme.py
"""
Tests for theme functionality.
"""
import pytest
import tempfile
import json
from pathlib import Path

from app.theme.palette import Palette, MODERN_DARK, VIBRANT, DEFAULT
from app.theme.theme_manager import ThemeManager


class TestPalette:
    """Test Palette class."""
    
    def test_palette_creation(self):
        """Test creating a palette."""
        palette = Palette(
            primary="#000000",
            secondary="#111111",
            accent="#222222",
            background="#333333",
            surface="#444444",
            error="#555555",
            success="#666666",
            warning="#777777",
            info="#888888",
            on_primary="#999999",
            on_secondary="#AAAAAA",
            on_background="#BBBBBB",
            on_surface="#CCCCCC",
            on_error="#DDDDDD",
        )
        
        assert palette.primary == "#000000"
        assert palette.secondary == "#111111"
        assert palette.accent == "#222222"
    
    def test_palette_to_dict(self):
        """Test converting palette to dictionary."""
        palette = MODERN_DARK
        palette_dict = palette.to_dict()
        
        assert isinstance(palette_dict, dict)
        assert palette_dict["primary"] == palette.primary
        assert palette_dict["secondary"] == palette.secondary
        assert "on_background" in palette_dict
    
    def test_palette_from_dict(self):
        """Test creating palette from dictionary."""
        data = {
            "primary": "#FF0000",
            "secondary": "#00FF00",
            "accent": "#0000FF",
            "background": "#000000",
            "surface": "#111111",
            "error": "#FF0000",
            "success": "#00FF00",
            "warning": "#FFFF00",
            "info": "#0000FF",
            "on_primary": "#FFFFFF",
            "on_secondary": "#000000",
            "on_background": "#FFFFFF",
            "on_surface": "#FFFFFF",
            "on_error": "#FFFFFF",
        }
        
        palette = Palette.from_dict(data)
        assert palette.primary == "#FF0000"
        assert palette.secondary == "#00FF00"
        assert palette.accent == "#0000FF"


class TestThemeManager:
    """Test ThemeManager class."""
    
    def test_theme_manager_initialization(self):
        """Test initializing theme manager."""
        with tempfile.TemporaryDirectory() as tmpdir:
            config_path = Path(tmpdir) / "theme.json"
            manager = ThemeManager(str(config_path))
            
            # Should default to modern_dark
            assert manager.current_palette == MODERN_DARK
    
    def test_set_palette(self):
        """Test setting palette by name."""
        with tempfile.TemporaryDirectory() as tmpdir:
            config_path = Path(tmpdir) / "theme.json"
            manager = ThemeManager(str(config_path))
            
            # Set to vibrant palette
            result = manager.set_palette("vibrant")
            assert result is True
            assert manager.current_palette == VIBRANT
            
            # Try invalid palette
            result = manager.set_palette("invalid")
            assert result is False
            assert manager.current_palette == VIBRANT  # Should not change
    
    def test_save_and_load_palette(self):
        """Test saving and loading palette from file."""
        with tempfile.TemporaryDirectory() as tmpdir:
            config_path = Path(tmpdir) / "theme.json"
            
            # Create manager and set palette
            manager1 = ThemeManager(str(config_path))
            manager1.set_palette("vibrant")
            
            # Create new manager that should load saved palette
            manager2 = ThemeManager(str(config_path))
            assert manager2.current_palette == VIBRANT
    
    def test_get_available_palettes(self):
        """Test getting available palettes."""
        manager = ThemeManager()
        palettes = manager.get_available_palettes()
        
        assert "modern_dark" in palettes
        assert "vibrant" in palettes
        assert "default" in palettes
        assert palettes["modern_dark"] == MODERN_DARK
    
    def test_generate_css_variables(self):
        """Test generating CSS variables."""
        manager = ThemeManager()
        manager.set_palette("modern_dark")
        
        css = manager.generate_css_variables()
        assert ":root {" in css
        assert "--color-primary:" in css
        assert MODERN_DARK.primary in css
    
    def test_generate_style_dict(self):
        """Test generating style dictionary."""
        manager = ThemeManager()
        manager.set_palette("vibrant")
        
        styles = manager.generate_style_dict()
        assert "primary" in styles
        assert "color" in styles["primary"]
        assert "text_color" in styles["primary"]
        assert styles["primary"]["color"] == VIBRANT.primary


def test_predefined_palettes():
    """Test that predefined palettes are valid."""
    assert isinstance(MODERN_DARK, Palette)
    assert isinstance(VIBRANT, Palette)
    assert isinstance(DEFAULT, Palette)
    
    # Check that all palettes have valid hex colors
    for palette in [MODERN_DARK, VIBRANT, DEFAULT]:
        for color_value in palette.to_dict().values():
            assert color_value.startswith("#")
            assert len(color_value) == 7  # #RRGGBB format


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
```

```python examples/theme_example.py
"""
Example usage of the theme system.
"""
import sys
from pathlib import Path

# Add parent directory to path for imports
sys.path.insert(0, str