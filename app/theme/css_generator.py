"""
CSS generator for theme colors.
"""
from typing import Dict
from .palette import Palette


class CSSGenerator:
    """
    Generates CSS variables and styles from color palette.
    """
    
    @staticmethod
    def generate_css_variables(palette: Palette) -> str:
        """
        Generate CSS variables from palette.
        
        Args:
            palette: Color palette
            
        Returns:
            CSS string with variables
        """
        variables = {
            "--color-primary": palette.primary,
            "--color-secondary": palette.secondary,
            "--color-accent": palette.accent,
            "--color-background": palette.background,
            "--color-surface": palette.surface,
            "--color-error": palette.error,
            "--color-success": palette.success,
            "--color-warning": palette.warning,
            "--color-info": palette.info,
            "--color-on-primary": palette.on_primary,
            "--color-on-secondary": palette.on_secondary,
            "--color-on-background": palette.on_background,
            "--color-on-surface": palette.on_surface,
            "--color-on-error": palette.on_error,
        }
        
        css_lines = [":root {"]
        for var_name, color in variables.items():
            css_lines.append(f"  {var_name}: {color};")
        css_lines.append("}")
        
        return "\n".join(css_lines)
    
    @staticmethod
    def generate_utility_classes() -> str:
        """
        Generate utility CSS classes for colors.
        
        Returns:
            CSS string with utility classes
        """
        return """
/* Background colors */
.bg-primary { background-color: var(--color-primary); }
.bg-secondary { background-color: var(--color-secondary); }
.bg-accent { background-color: var(--color-accent); }
.bg-background { background-color: var(--color-background); }
.bg-surface { background-color: var(--color-surface); }
.bg-error { background-color: var(--color-error); }
.bg-success { background-color: var(--color-success); }
.bg-warning { background-color: var(--color-warning); }
.bg-info { background-color: var(--color-info); }

/* Text colors */
.text-primary { color: var(--color-primary); }
.text-secondary { color: var(--color-secondary); }
.text-accent { color: var(--color-accent); }
.text-background { color: var(--color-background); }
.text-surface { color: var(--color-surface); }
.text-error { color: var(--color-error); }
.text-success { color: var(--color-success); }
.text-warning { color: var(--color-warning); }
.text-info { color: var(--color-info); }
.text-on-primary { color: var(--color-on-primary); }
.text-on-secondary { color: var(--color-on-secondary); }
.text-on-background { color: var(--color-on-background); }
.text-on-surface { color: var(--color-on-surface); }
.text-on-error { color: var(--color-on-error); }

/* Border colors */
.border-primary { border-color: var(--color-primary); }
.border-secondary { border-color: var(--color-secondary); }
.border-accent { border-color: var(--color-accent); }
.border-error { border-color: var(--color-error); }
.border-success { border-color: var(--color-success); }
.border-warning { border-color: var(--color-warning); }
.border-info { border-color: var(--color-info); }
"""
    
    @staticmethod
    def generate_complete_css(palette: Palette) -> str:
        """
        Generate complete CSS with variables and utility classes.
        
        Args:
            palette: Color palette
            
        Returns:
            Complete CSS string
        """
        variables = CSSGenerator.generate_css_variables(palette)
        utilities = CSSGenerator.generate_utility_classes()
        
        return f"{variables}\n\n{utilities}"
