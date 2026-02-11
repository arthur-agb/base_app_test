"""
Theme manager for handling global theme changes.
"""
import json
import os
from typing import Optional, Dict, Any, Callable
from dataclasses import asdict

from .palette import Palette, Palettes


class ThemeManager:
    """
    Manages application theme and color palette.
    
    This class handles theme switching, persistence, and notification
    of theme changes to observers.
    """
    
    def __init__(self, config_path: str = "theme_config.json"):
        """
        Initialize theme manager.
        
        Args:
            config_path: Path to theme configuration file
        """
        self.config_path = config_path
        self._current_palette: Palette = Palettes.DEFAULT
        self._observers: list[Callable[[Palette], None]] = []
        self._load_config()
    
    @property
    def current_palette(self) -> Palette:
        """Get current color palette."""
        return self._current_palette
    
    def set_palette(self, palette: Palette, save: bool = True) -> None:
        """
        Set current color palette.
        
        Args:
            palette: New color palette
            save: Whether to save to config file
        """
        self._current_palette = palette
        self._notify_observers()
        
        if save:
            self._save_config()
    
    def set_modern_dark(self) -> None:
        """Switch to modern dark palette."""
        self.set_palette(Palettes.MODERN_DARK)
    
    def set_vibrant(self) -> None:
        """Switch to vibrant palette."""
        self.set_palette(Palettes.VIBRANT)
    
    def set_default(self) -> None:
        """Switch to default palette."""
        self.set_palette(Palettes.DEFAULT)
    
    def register_observer(self, callback: Callable[[Palette], None]) -> None:
        """
        Register an observer for theme changes.
        
        Args:
            callback: Function to call when theme changes
        """
        if callback not in self._observers:
            self._observers.append(callback)
    
    def unregister_observer(self, callback: Callable[[Palette], None]) -> None:
        """
        Unregister an observer.
        
        Args:
            callback: Observer to remove
        """
        if callback in self._observers:
            self._observers.remove(callback)
    
    def _notify_observers(self) -> None:
        """Notify all observers of theme change."""
        for observer in self._observers:
            observer(self._current_palette)
    
    def _save_config(self) -> None:
        """Save current theme configuration to file."""
        config = {
            "palette": self._current_palette.to_dict(),
            "palette_name": self._get_palette_name(self._current_palette)
        }
        
        try:
            with open(self.config_path, 'w') as f:
                json.dump(config, f, indent=2)
        except IOError as e:
            print(f"Warning: Could not save theme config: {e}")
    
    def _load_config(self) -> None:
        """Load theme configuration from file."""
        if not os.path.exists(self.config_path):
            return
        
        try:
            with open(self.config_path, 'r') as f:
                config = json.load(f)
            
            if "palette" in config:
                palette_dict = config["palette"]
                self._current_palette = Palette.from_dict(palette_dict)
        except (IOError, json.JSONDecodeError, KeyError) as e:
            print(f"Warning: Could not load theme config: {e}")
            # Fall back to default palette
            self._current_palette = Palettes.DEFAULT
    
    def _get_palette_name(self, palette: Palette) -> Optional[str]:
        """Get the name of a palette if it's a predefined one."""
        if palette == Palettes.MODERN_DARK:
            return "modern_dark"
        elif palette == Palettes.VIBRANT:
            return "vibrant"
        elif palette == Palettes.DEFAULT:
            return "default"
        return None
    
    def get_available_palettes(self) -> Dict[str, Palette]:
        """Get all available predefined palettes."""
        return {
            "modern_dark": Palettes.MODERN_DARK,
            "vibrant": Palettes.VIBRANT,
            "default": Palettes.DEFAULT,
        }
