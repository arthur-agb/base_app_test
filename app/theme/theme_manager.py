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
