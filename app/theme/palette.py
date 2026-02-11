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
