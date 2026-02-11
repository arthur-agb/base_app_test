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
