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
