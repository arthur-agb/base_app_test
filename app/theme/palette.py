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
