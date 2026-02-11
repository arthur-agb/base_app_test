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


class Palettes:
    """Predefined color palettes."""
    
    # Modern Dark Palette
    MODERN_DARK = Palette(
        primary="#6366F1",      # Indigo
        secondary="#8B5CF6",    # Violet
        accent="#10B981",       # Emerald
        background="#0F172A",   # Slate 900
        surface="#1E293B",      # Slate 800
        error="#EF4444",        # Red 500
        success="#22C55E",      # Green 500
        warning="#F59E0B",      # Amber 500
        info="#3B82F6",         # Blue 500
        on_primary="#FFFFFF",
        on_secondary="#FFFFFF",
        on_background="#F1F5F9",
        on_surface="#E2E8F0",
        on_error="#FFFFFF",
    )
    
    # Vibrant Palette
    VIBRANT = Palette(
        primary="#FF6B6B",      # Coral Red
        secondary="#4ECDC4",    # Turquoise
        accent="#FFD166",       # Yellow
        background="#1A1A2E",   # Dark Blue
        surface="#16213E",      # Navy Blue
        error="#FF2E63",        # Pink Red
        success="#06D6A0",      # Mint Green
        warning="#FF9E00",      # Orange
        info="#118AB2",         # Teal Blue
        on_primary="#000000",
        on_secondary="#000000",
        on_background="#FFFFFF",
        on_surface="#E0E0E0",
        on_error="#000000",
    )
    
    # Default Light Palette
    DEFAULT = Palette(
        primary="#3F51B5",      # Indigo
        secondary="#FF4081",    # Pink
        accent="#00BCD4",       # Cyan
        background="#F5F5F5",   # Light Gray
        surface="#FFFFFF",      # White
        error="#F44336",        # Red
        success="#4CAF50",      # Green
        warning="#FF9800",      # Orange
        info="#2196F3",         # Blue
        on_primary="#FFFFFF",
        on_secondary="#FFFFFF",
        on_background="#000000",
        on_surface="#000000",
        on_error="#FFFFFF",
    )
