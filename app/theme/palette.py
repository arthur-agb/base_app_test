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
