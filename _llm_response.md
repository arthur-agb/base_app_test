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
    A color palette containing primary, secondary, and neutral colors.
    """
    # Primary colors
    primary: str
    primary_light: str
    primary_dark: str
    
    # Secondary colors
    secondary: str
    secondary_light: str
    secondary_dark: str
    
    # Neutral colors
    background: str
    surface: str
    text_primary: str
    text_secondary: str
    border: str
    error: str
    warning: str
    success: str
    info: str
    
    # Additional accent colors
    accent1: str
    accent2: str
    accent3: str
    
    @classmethod
    def get_default(cls) -> 'Palette':
        """
        Returns the default color palette.
        """
        return cls(
            primary="#3f51b5",
            primary_light="#757de8",
            primary_dark="#002984",
            secondary="#f50057",
            secondary_light="#ff4081",
            secondary_dark="#c51162",
            background="#f5f5f5",
            surface="#ffffff",
            text_primary="#212121",
            text_secondary="#757575",
            border="#e0e0e0",
            error="#f44336",
            warning="#ff9800",
            success="#4caf50",
            info="#2196f3",
            accent1="#9c27b0",
            accent2="#ff5722",
            accent3="#009688"
        )
    
    @classmethod
    def get_modern_dark(cls) -> 'Palette':
        """
        Returns a modern dark color palette.
        """
        return cls(
            primary="#6200ee",
            primary_light="#bb86fc",
            primary_dark="#3700b3",
            secondary="#03dac6",
            secondary_light="#66fff9",
            secondary_dark="#00a896",
            background="#121212",
            surface="#1e1e1e",
            text_primary="#ffffff",
            text_secondary="#b3b3b3",
            border="#333333",
            error="#cf6679",
            warning="#ffb74d",
            success="#81c784",
            info="#64b5f6",
            accent1="#ff4081",
            accent2="#ff9100",
            accent3="#00e5ff"
        )
    
    @classmethod
    def get_vibrant(cls) -> 'Palette':
        """
        Returns a vibrant color palette.
        """
        return cls(
            primary="#ff3d00",
            primary_light="#ff7539",
            primary_dark="#c30000",
            secondary="#00b0ff",
            secondary_light="#69e2ff",
            secondary_dark="#0081cb",
            background="#f8f9fa",
            surface="#ffffff",
            text_primary="#1a237e",
            text_secondary="#5c6bc0",
            border="#c5cae9",
            error="#ff1744",
            warning="#ff9100",
            success="#00c853",
            info="#2979ff",
            accent1="#aa00ff",
            accent2="#ffd600",
            accent3="#00bfa5"
        )
    
    def to_dict(self) -> Dict[str, str]:
        """
        Convert palette to dictionary.
        """
        return {
            'primary': self.primary,
            'primary_light': self.primary_light,
            'primary_dark': self.primary_dark,
            'secondary': self.secondary,
            'secondary_light': self.secondary_light,
            'secondary_dark': self.secondary_dark,
            'background': self.background,
            'surface': self.surface,
            'text_primary': self.text_primary,
            'text_secondary': self.text_secondary,
            'border': self.border,
            'error': self.error,
            'warning': self.warning,
            'success': self.success,
            'info': self.info,
            'accent1': self.accent1,
            'accent2': self.accent2,
            'accent3': self.accent3
        }
    
    def get_css_variables(self) -> Dict[str, str]:
        """
        Get CSS variable definitions for this palette.
        """
        return {
            '--color-primary': self.primary,
            '--color-primary-light': self.primary_light,
            '--color-primary-dark': self.primary_dark,
            '--color-secondary': self.secondary,
            '--color-secondary-light': self.secondary_light,
            '--color-secondary-dark': self.secondary_dark,
            '--color-background': self.background,
            '--color-surface': self.surface,
            '--color-text-primary': self.text_primary,
            '--color-text-secondary': self.text_secondary,
            '--color-border': self.border,
            '--color-error': self.error,
            '--color-warning': self.warning,
            '--color-success': self.success,
            '--color-info': self.info,
            '--color-accent1': self.accent1,
            '--color-accent2': self.accent2,
            '--color-accent3': self.accent3
        }
```

```python app/theme/theme_manager.py
"""
Theme manager for handling global theme changes.
"""
import json
from typing import Dict, Optional, Callable, List
from enum import Enum
from .palette import Palette


class ThemeMode(Enum):
    """Available theme modes."""
    DEFAULT = "default"
    MODERN_DARK = "modern_dark"
    VIBRANT = "vibrant"
    CUSTOM = "custom"


class ThemeManager:
    """
    Manages the global application theme.
    """
    
    def __init__(self):
        self._current_mode: ThemeMode = ThemeMode.DEFAULT
        self._current_palette: Palette = Palette.get_default()
        self._custom_palette: Optional[Palette] = None
        self._listeners: List[Callable[[Palette], None]] = []
        self._config_file = "theme_config.json"
    
    @property
    def current_mode(self) -> ThemeMode:
        """Get current theme mode."""
        return self._current_mode
    
    @property
    def current_palette(self) -> Palette:
        """Get current color palette."""
        return self._current_palette
    
    def set_theme(self, mode: ThemeMode, custom_palette: Optional[Palette] = None) -> None:
        """
        Set the application theme.
        
        Args:
            mode: The theme mode to use
            custom_palette: Custom palette for CUSTOM mode
        """
        if mode == ThemeMode.DEFAULT:
            palette = Palette.get_default()
        elif mode == ThemeMode.MODERN_DARK:
            palette = Palette.get_modern_dark()
        elif mode == ThemeMode.VIBRANT:
            palette = Palette.get_vibrant()
        elif mode == ThemeMode.CUSTOM:
            if custom_palette is None:
                raise ValueError("Custom palette required for CUSTOM mode")
            palette = custom_palette
            self._custom_palette = custom_palette
        else:
            raise ValueError(f"Unknown theme mode: {mode}")
        
        self._current_mode = mode
        self._current_palette = palette
        
        # Notify all listeners
        self._notify_listeners()
        
        # Save configuration
        self._save_config()
    
    def set_modern_dark_theme(self) -> None:
        """Set modern dark theme."""
        self.set_theme(ThemeMode.MODERN_DARK)
    
    def set_vibrant_theme(self) -> None:
        """Set vibrant theme."""
        self.set_theme(ThemeMode.VIBRANT)
    
    def set_default_theme(self) -> None:
        """Set default theme."""
        self.set_theme(ThemeMode.DEFAULT)
    
    def set_custom_theme(self, palette: Palette) -> None:
        """Set custom theme with provided palette."""
        self.set_theme(ThemeMode.CUSTOM, palette)
    
    def add_listener(self, listener: Callable[[Palette], None]) -> None:
        """
        Add a listener for theme changes.
        
        Args:
            listener: Function to call when theme changes
        """
        self._listeners.append(listener)
    
    def remove_listener(self, listener: Callable[[Palette], None]) -> None:
        """
        Remove a theme change listener.
        
        Args:
            listener: Listener to remove
        """
        if listener in self._listeners:
            self._listeners.remove(listener)
    
    def _notify_listeners(self) -> None:
        """Notify all registered listeners of theme change."""
        for listener in self._listeners:
            listener(self._current_palette)
    
    def _save_config(self) -> None:
        """Save theme configuration to file."""
        config = {
            'mode': self._current_mode.value,
            'palette': self._current_palette.to_dict()
        }
        
        try:
            with open(self._config_file, 'w') as f:
                json.dump(config, f, indent=2)
        except Exception as e:
            print(f"Failed to save theme config: {e}")
    
    def load_config(self) -> bool:
        """
        Load theme configuration from file.
        
        Returns:
            True if config was loaded successfully, False otherwise
        """
        try:
            with open(self._config_file, 'r') as f:
                config = json.load(f)
            
            mode = ThemeMode(config.get('mode', 'default'))
            palette_dict = config.get('palette', {})
            
            if mode == ThemeMode.CUSTOM and palette_dict:
                palette = Palette(**palette_dict)
                self.set_theme(mode, palette)
            else:
                self.set_theme(mode)
            
            return True
        except FileNotFoundError:
            print("Theme config file not found, using default theme")
            return False
        except Exception as e:
            print(f"Failed to load theme config: {e}")
            return False
    
    def get_css(self) -> str:
        """
        Get CSS stylesheet for current theme.
        
        Returns:
            CSS string with theme variables
        """
        css_vars = self._current_palette.get_css_variables()
        
        css = ":root {\n"
        for var_name, value in css_vars.items():
            css += f"  {var_name}: {value};\n"
        css += "}\n\n"
        
        # Additional theme-specific styles
        css += """
body {
  background-color: var(--color-background);
  color: var(--color-text-primary);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  margin: 0;
  padding: 0;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.container {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
}

.btn-primary {
  background-color: var(--color-primary);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
}

.btn-secondary {
  background-color: var(--color-secondary);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn-secondary:hover {
  background-color: var(--color-secondary-dark);
}

.text-primary {
  color: var(--color-text-primary);
}

.text-secondary {
  color: var(--color-text-secondary);
}

.border {
  border: 1px solid var(--color-border);
}

.error {
  color: var(--color-error);
}

.warning {
  color: var(--color-warning);
}

.success {
  color: var(--color-success);
}

.info {
  color: var(--color-info);
}

.accent1 {
  color: var(--color-accent1);
}

.accent2 {
  color: var(--color-accent2);
}

.accent3 {
  color: var(--color-accent3);
}
"""
        
        return css


# Global theme manager instance
theme_manager = ThemeManager()
```

```python app/__init__.py
"""
Base application package.
"""
from .theme import theme_manager

__all__ = ["theme_manager"]
```

```python app/main.py
"""
Main application entry point with theme demonstration.
"""
import sys
from typing import Optional
from theme.theme_manager import theme_manager, ThemeMode
from theme.palette import Palette


def apply_theme_to_ui(palette: Palette) -> None:
    """
    Example function that would apply theme to UI components.
    In a real application, this would update UI elements.
    
    Args:
        palette: The color palette to apply
    """
    print(f"Theme updated! Primary color: {palette.primary}")
    print(f"Background: {palette.background}, Text: {palette.text_primary}")
    
    # In a real app, this would update:
    # - CSS variables
    # - Component styles
    # - Theme context in React/Vue/etc.
    # - Material-UI/Chakra-UI theme provider


def main() -> None:
    """Main application function."""
    # Load saved theme configuration
    theme_manager.load_config()
    
    # Register theme change listener
    theme_manager.add_listener(apply_theme_to_ui)
    
    # Apply initial theme
    apply_theme_to_ui(theme_manager.current_palette)
    
    print(f"\nCurrent theme: {theme_manager.current_mode.value}")
    print("Available commands:")
    print("  1. Set modern dark theme")
    print("  2. Set vibrant theme")
    print("  3. Set default theme")
    print("  4. Create custom theme")
    print("  5. Save and exit")
    
    while True:
        try:
            choice = input("\nEnter choice (1-5): ").strip()
            
            if choice == "1":
                theme_manager.set_modern_dark_theme()
                print("✓ Modern dark theme applied")
            elif choice == "2":
                theme_manager.set_vibrant_theme()
                print("✓ Vibrant theme applied")
            elif choice == "3":
                theme_manager.set_default_theme()
                print("✓ Default theme applied")
            elif choice == "4":
                # Example custom palette
                custom_palette = Palette(
                    primary="#4a148c",
                    primary_light="#7c43bd",
                    primary_dark="#12005e",
                    secondary="#ff6f00",
                    secondary_light="#ff9e40",
                    secondary_dark="#c43e00",
                    background="#fafafa",
                    surface="#ffffff",
                    text_primary="#212121",
                    text_secondary="#616161",
                    border="#bdbdbd",
                    error="#d32f2f",
                    warning="#ffa000",
                    success="#388e3c",
                    info="#1976d2",
                    accent1="#c2185b",
                    accent2="#00796b",
                    accent3="#fbc02d"
                )
                theme_manager.set_custom_theme(custom_palette)
                print("✓ Custom theme applied")
            elif choice == "5":
                print("Theme configuration saved. Goodbye!")
                break
            else:
                print("Invalid choice. Please enter 1-5.")
        
        except KeyboardInterrupt:
            print("\n\nExiting...")
            break
        except Exception as e:
            print(f"Error: {e}")


if __name__ == "__main__":
    main()
```

```python tests/test_theme.py
"""
Tests for theme functionality.
"""
import unittest
import tempfile
import json
import os
from theme.palette import Palette
from theme.theme_manager import ThemeManager, ThemeMode


class TestPalette(unittest.TestCase):
    """Test Palette class."""
    
    def test_default_palette(self):
        """Test default palette creation."""
        palette = Palette.get_default()
        self.assertEqual(palette.primary, "#3f51b5")
        self.assertEqual(palette.background, "#f5f5f5")
        self.assertEqual(palette.text_primary, "#212121")
    
    def test_modern_dark_palette(self):
        """Test modern dark palette creation."""
        palette = Palette.get_modern_dark()
        self.assertEqual(palette.primary, "#6200ee")
        self.assertEqual(palette.background, "#121212")
        self.assertEqual(palette.text_primary, "#ffffff")
    
    def test_vibrant_palette(self):
        """Test vibrant palette creation."""
        palette = Palette.get_vibrant()
        self.assertEqual(palette.primary, "#ff3d00")
        self.assertEqual(palette.background, "#f8f9fa")
        self.assertEqual(palette.text_primary, "#1a237e")
    
    def test_to_dict(self):
        """Test palette to dictionary conversion."""
        palette = Palette.get_default()
        palette_dict = palette.to_dict()
        
        self.assertIn('primary', palette_dict)
        self.assertIn('background', palette_dict)
        self.assertIn('text_primary', palette_dict)
        self.assertEqual(palette_dict['primary'], palette.primary)
    
    def test_css_variables(self):
        """Test CSS variable generation."""
        palette = Palette.get_default()
        css_vars = palette.get_css_variables()
        
        self.assertIn('--color-primary', css_vars)
        self.assertIn('--color-background', css_vars)
        self.assertIn('--color-text-primary', css_vars)
        self.assertEqual(css_vars['--color-primary'], palette.primary)


class TestThemeManager(unittest.TestCase):
    """Test ThemeManager class."""
    
    def setUp(self):
        """Set up test environment."""
        self.manager = ThemeManager()
        # Create temporary config file
        self.temp_dir = tempfile.mkdtemp()
        self.manager._config_file = os.path.join(self.temp_dir, "theme_config.json")
    
    def tearDown(self