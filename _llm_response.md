```python app/theme/__init__.py
"""
Theme module initialization.
"""
from .palette import ColorPalette
from .theme_manager import ThemeManager

__all__ = ["ColorPalette", "ThemeManager"]
```

```python app/theme/palette.py
"""
Color palette definitions for the application.
"""
from dataclasses import dataclass
from typing import Dict, Tuple


@dataclass(frozen=True)
class ColorPalette:
    """
    A color palette for the application theme.
    
    Attributes:
        primary: Primary brand color
        secondary: Secondary brand color
        accent: Accent color for highlights
        background: Main background color
        surface: Surface color for cards, dialogs
        error: Error state color
        success: Success state color
        warning: Warning state color
        info: Informational color
        text_primary: Primary text color
        text_secondary: Secondary text color
        text_disabled: Disabled text color
        border: Border color
        divider: Divider color
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
    text_primary: str
    text_secondary: str
    text_disabled: str
    border: str
    divider: str
    
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
            "text_primary": self.text_primary,
            "text_secondary": self.text_secondary,
            "text_disabled": self.text_disabled,
            "border": self.border,
            "divider": self.divider,
        }
    
    @classmethod
    def get_default_palette(cls) -> "ColorPalette":
        """Get the default color palette."""
        return cls(
            primary="#1976d2",
            secondary="#dc004e",
            accent="#ff4081",
            background="#f5f5f5",
            surface="#ffffff",
            error="#f44336",
            success="#4caf50",
            warning="#ff9800",
            info="#2196f3",
            text_primary="#212121",
            text_secondary="#757575",
            text_disabled="#9e9e9e",
            border="#e0e0e0",
            divider="#eeeeee",
        )
    
    @classmethod
    def get_dark_palette(cls) -> "ColorPalette":
        """Get a modern dark color palette."""
        return cls(
            primary="#bb86fc",
            secondary="#03dac6",
            accent="#ff4081",
            background="#121212",
            surface="#1e1e1e",
            error="#cf6679",
            success="#4caf50",
            warning="#ff9800",
            info="#2196f3",
            text_primary="#ffffff",
            text_secondary="#b3b3b3",
            text_disabled="#666666",
            border="#333333",
            divider="#2a2a2a",
        )
    
    @classmethod
    def get_vibrant_palette(cls) -> "ColorPalette":
        """Get a vibrant color palette."""
        return cls(
            primary="#6200ee",
            secondary="#03dac6",
            accent="#ff4081",
            background="#f8fdff",
            surface="#ffffff",
            error="#b00020",
            success="#00c853",
            warning="#ffab00",
            info="#2962ff",
            text_primary="#000000",
            text_secondary="#5f6368",
            text_disabled="#9aa0a6",
            border="#dadce0",
            divider="#f1f3f4",
        )
    
    @classmethod
    def get_palette_by_name(cls, name: str) -> "ColorPalette":
        """Get a palette by name."""
        palettes = {
            "default": cls.get_default_palette,
            "dark": cls.get_dark_palette,
            "vibrant": cls.get_vibrant_palette,
        }
        
        if name not in palettes:
            raise ValueError(f"Unknown palette: {name}. Available: {list(palettes.keys())}")
        
        return palettes[name]()
```

```python app/theme/theme_manager.py
"""
Theme manager for handling global theme updates.
"""
import json
import os
from typing import Dict, Optional, Any
from .palette import ColorPalette


class ThemeManager:
    """
    Manages application themes and color palettes.
    
    Attributes:
        current_palette: Currently active color palette
        available_palettes: Dictionary of available palettes
    """
    
    def __init__(self, config_path: Optional[str] = None):
        """
        Initialize theme manager.
        
        Args:
            config_path: Path to theme configuration file
        """
        self.config_path = config_path or "theme_config.json"
        self.current_palette: ColorPalette = ColorPalette.get_default_palette()
        self.available_palettes: Dict[str, ColorPalette] = {
            "default": ColorPalette.get_default_palette(),
            "dark": ColorPalette.get_dark_palette(),
            "vibrant": ColorPalette.get_vibrant_palette(),
        }
        self._load_config()
    
    def _load_config(self) -> None:
        """Load theme configuration from file."""
        if os.path.exists(self.config_path):
            try:
                with open(self.config_path, 'r') as f:
                    config = json.load(f)
                    palette_name = config.get("current_palette", "default")
                    self.set_palette(palette_name)
            except (json.JSONDecodeError, IOError):
                # If config is corrupted, use default
                self.current_palette = ColorPalette.get_default_palette()
    
    def _save_config(self) -> None:
        """Save theme configuration to file."""
        config = {
            "current_palette": self.get_current_palette_name(),
            "available_palettes": list(self.available_palettes.keys())
        }
        
        try:
            with open(self.config_path, 'w') as f:
                json.dump(config, f, indent=2)
        except IOError:
            # Silently fail if we can't save config
            pass
    
    def set_palette(self, palette_name: str) -> bool:
        """
        Set the current color palette.
        
        Args:
            palette_name: Name of the palette to set
            
        Returns:
            True if palette was set successfully, False otherwise
        """
        if palette_name not in self.available_palettes:
            return False
        
        self.current_palette = self.available_palettes[palette_name]
        self._save_config()
        return True
    
    def get_current_palette_name(self) -> str:
        """
        Get the name of the current palette.
        
        Returns:
            Name of the current palette
        """
        for name, palette in self.available_palettes.items():
            if palette == self.current_palette:
                return name
        return "default"
    
    def get_palette(self, name: str) -> Optional[ColorPalette]:
        """
        Get a palette by name.
        
        Args:
            name: Name of the palette
            
        Returns:
            ColorPalette if found, None otherwise
        """
        return self.available_palettes.get(name)
    
    def add_custom_palette(self, name: str, palette: ColorPalette) -> None:
        """
        Add a custom palette.
        
        Args:
            name: Name for the custom palette
            palette: ColorPalette instance
        """
        self.available_palettes[name] = palette
    
    def remove_calette(self, name: str) -> bool:
        """
        Remove a palette.
        
        Args:
            name: Name of the palette to remove
            
        Returns:
            True if removed, False if not found or is default/dark/vibrant
        """
        if name in ["default", "dark", "vibrant"]:
            return False
        
        if name in self.available_palettes:
            del self.available_palettes[name]
            
            # If current palette was removed, fall back to default
            if self.get_current_palette_name() == name:
                self.set_palette("default")
            
            return True
        
        return False
    
    def get_all_palettes(self) -> Dict[str, Dict[str, str]]:
        """
        Get all available palettes as dictionaries.
        
        Returns:
            Dictionary of palette names to palette dictionaries
        """
        return {name: palette.to_dict() for name, palette in self.available_palettes.items()}
    
    def generate_css_variables(self) -> str:
        """
        Generate CSS variables for the current palette.
        
        Returns:
            CSS string with variables
        """
        palette_dict = self.current_palette.to_dict()
        css_vars = []
        
        for key, value in palette_dict.items():
            css_var_name = f"--color-{key.replace('_', '-')}"
            css_vars.append(f"{css_var_name}: {value};")
        
        return ":root {\n  " + "\n  ".join(css_vars) + "\n}"
    
    def generate_theme_object(self) -> Dict[str, Any]:
        """
        Generate a theme object for JavaScript/TypeScript.
        
        Returns:
            Dictionary with theme data
        """
        return {
            "current": self.get_current_palette_name(),
            "palette": self.current_palette.to_dict(),
            "available": list(self.available_palettes.keys())
        }
```

```python app/__init__.py
"""
Application package initialization.
"""
from .theme import ThemeManager, ColorPalette

__all__ = ["ThemeManager", "ColorPalette"]
```

```python app/main.py
"""
Main application entry point with theme integration.
"""
import sys
from typing import Optional
from theme.theme_manager import ThemeManager


class Application:
    """
    Main application class with theme support.
    """
    
    def __init__(self, theme_manager: Optional[ThemeManager] = None):
        """
        Initialize application.
        
        Args:
            theme_manager: Optional theme manager instance
        """
        self.theme_manager = theme_manager or ThemeManager()
        self.running = False
    
    def start(self) -> None:
        """Start the application."""
        self.running = True
        print("Application started")
        print(f"Current theme: {self.theme_manager.get_current_palette_name()}")
        print("Available themes:", list(self.theme_manager.available_palettes.keys()))
    
    def stop(self) -> None:
        """Stop the application."""
        self.running = False
        print("Application stopped")
    
    def change_theme(self, theme_name: str) -> bool:
        """
        Change the application theme.
        
        Args:
            theme_name: Name of the theme to change to
            
        Returns:
            True if theme was changed successfully
        """
        success = self.theme_manager.set_palette(theme_name)
        if success:
            print(f"Theme changed to: {theme_name}")
            print("CSS Variables:")
            print(self.theme_manager.generate_css_variables())
        else:
            print(f"Theme '{theme_name}' not found")
        
        return success
    
    def show_current_theme(self) -> None:
        """Display current theme information."""
        palette = self.theme_manager.current_palette
        print(f"\nCurrent Theme: {self.theme_manager.get_current_palette_name()}")
        print("Colors:")
        for key, value in palette.to_dict().items():
            print(f"  {key}: {value}")


def main() -> None:
    """Main function."""
    app = Application()
    
    try:
        app.start()
        
        # Example: Change to dark theme
        app.change_theme("dark")
        
        # Show current theme
        app.show_current_theme()
        
        # Generate theme object for frontend
        theme_obj = app.theme_manager.generate_theme_object()
        print(f"\nTheme Object: {theme_obj}")
        
    except KeyboardInterrupt:
        print("\nShutting down...")
    finally:
        app.stop()


if __name__ == "__main__":
    main()
```

```json theme_config.json
{
  "current_palette": "default",
  "available_palettes": [
    "default",
    "dark",
    "vibrant"
  ]
}
```

```css app/static/css/theme.css
/* 
 * Theme CSS variables
 * Generated by ThemeManager
 */

:root {
  --color-primary: #1976d2;
  --color-secondary: #dc004e;
  --color-accent: #ff4081;
  --color-background: #f5f5f5;
  --color-surface: #ffffff;
  --color-error: #f44336;
  --color-success: #4caf50;
  --color-warning: #ff9800;
  --color-info: #2196f3;
  --color-text-primary: #212121;
  --color-text-secondary: #757575;
  --color-text-disabled: #9e9e9e;
  --color-border: #e0e0e0;
  --color-divider: #eeeeee;
}

/* Dark theme */
.theme-dark {
  --color-primary: #bb86fc;
  --color-secondary: #03dac6;
  --color-accent: #ff4081;
  --color-background: #121212;
  --color-surface: #1e1e1e;
  --color-error: #cf6679;
  --color-success: #4caf50;
  --color-warning: #ff9800;
  --color-info: #2196f3;
  --color-text-primary: #ffffff;
  --color-text-secondary: #b3b3b3;
  --color-text-disabled: #666666;
  --color-border: #333333;
  --color-divider: #2a2a2a;
}

/* Vibrant theme */
.theme-vibrant {
  --color-primary: #6200ee;
  --color-secondary: #03dac6;
  --color-accent: #ff4081;
  --color-background: #f8fdff;
  --color-surface: #ffffff;
  --color-error: #b00020;
  --color-success: #00c853;
  --color-warning: #ffab00;
  --color-info: #2962ff;
  --color-text-primary: #000000;
  --color-text-secondary: #5f6368;
  --color-text-disabled: #9aa0a6;
  --color-border: #dadce0;
  --color-divider: #f1f3f4;
}

/* Utility classes using theme variables */
.primary-bg {
  background-color: var(--color-primary);
}

.secondary-bg {
  background-color: var(--color-secondary);
}

.accent-bg {
  background-color: var(--color-accent);
}

.background-bg {
  background-color: var(--color-background);
}

.surface-bg {
  background-color: var(--color-surface);
}

.primary-text {
  color: var(--color-text-primary);
}

.secondary-text {
  color: var(--color-text-secondary);
}

.disabled-text {
  color: var(--color-text-disabled);
}

.border {
  border: 1px solid var(--color-border);
}

.divider {
  border-bottom: 1px solid var(--color-divider);
}

/* Component styles using theme variables */
.button {
  background-color: var(--color-primary);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  opacity: 0.9;
}

.button.secondary {
  background-color: var(--color-secondary);
}

.card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.alert {
  padding: 12px;
  border-radius: 4px;
  margin: 8px 0;
}

.alert.error {
  background-color: var(--color-error);
  color: white;
}

.alert.success {
  background-color: var(--color-success);
  color: white;
}

.alert.warning {
  background-color: var(--color-warning);
  color: black;
}

.alert.info {
  background-color: var(--color-info);
  color: white;
}
```

```python tests/test_theme.py
"""
Tests for theme functionality.
"""
import unittest
import tempfile
import os
import json
from app.theme.palette import ColorPalette
from app.theme.theme_manager import ThemeManager


class TestColorPalette(unittest.TestCase):
    """Test ColorPalette class."""
    
    def test_default_palette(self):
        """Test default palette creation."""
        palette = ColorPalette.get_default_palette()
        self.assertEqual(palette.primary, "#1976d2")
        self.assertEqual(palette.background, "#f5f5f5")
        self.assertEqual(palette.text_primary, "#212121")
    
    def test_dark_palette(self):
        """Test dark palette creation."""
        palette = ColorPalette.get_dark_palette()
        self.assertEqual(palette.primary, "#bb86fc")
        self.assertEqual(palette.background, "#121212")
        self.assertEqual(palette.text_primary, "#ffffff")
    
    def test_vibrant_palette(self):
        """Test vibrant palette creation."""
        palette = ColorPalette.get_vibrant_palette()
        self.assertEqual(palette.primary, "#6200ee")
        self.assertEqual(palette.background, "#f8fdff")
        self.assertEqual(palette.text_primary, "#000000")
    
    def test_to_dict(self):
        """Test palette to dictionary conversion."""
        palette = ColorPalette.get_default_palette()
        palette_dict = palette.to_dict()
        
        self.assertIn("primary", palette_dict)
        self.assertIn("background", palette_dict)
        self.assertIn("text_primary", palette_dict)
        self.assertEqual(palette_dict["primary"], palette.primary)
    
    def test_get_palette_by_name(self):
