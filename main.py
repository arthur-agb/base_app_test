"""
Main application entry point with theme demonstration.
"""
import os
import sys
from typing import Dict, Any

# Add the app directory to the path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from app.theme import ThemeManager, Palette, Palettes
from app.theme.css_generator import CSSGenerator


class Application:
    """
    Main application class demonstrating theme usage.
    """
    
    def __init__(self):
        """Initialize application with theme manager."""
        self.theme_manager = ThemeManager()
        self.theme_manager.register_observer(self._on_theme_changed)
        
    def _on_theme_changed(self, palette: Palette) -> None:
        """
        Handle theme change events.
        
        Args:
            palette: New color palette
        """
        print(f"Theme changed to: {self._get_palette_name(palette)}")
        self._update_ui_colors(palette)
    
    def _get_palette_name(self, palette: Palette) -> str:
        """Get descriptive name for palette."""
        if palette == Palettes.MODERN_DARK:
            return "Modern Dark"
        elif palette == Palettes.VIBRANT:
            return "Vibrant"
        elif palette == Palettes.DEFAULT:
            return "Default"
        return "Custom"
    
    def _update_ui_colors(self, palette: Palette) -> None:
        """
        Update UI colors based on palette.
        
        In a real application, this would update the actual UI components.
        For demonstration, we'll just print the CSS.
        
        Args:
            palette: Current color palette
        """
        css = CSSGenerator.generate_complete_css(palette)
        print("\nGenerated CSS:")
        print("-" * 40)
        print(css[:200] + "..." if len(css) > 200 else css)
        print("-" * 40)
    
    def display_current_theme(self) -> None:
        """Display current theme information."""
        palette = self.theme_manager.current_palette
        print(f"\nCurrent Theme: {self._get_palette_name(palette)}")
        print("Colors:")
        for key, value in palette.to_dict().items():
            print(f"  {key}: {value}")
    
    def display_available_themes(self) -> None:
        """Display all available themes."""
        print("\nAvailable Themes:")
        palettes = self.theme_manager.get_available_palettes()
        for name, palette in palettes.items():
            print(f"  {name.replace('_', ' ').title()}:")
            print(f"    Primary: {palette.primary}")
            print(f"    Background: {palette.background}")
    
    def run(self) -> None:
        """Run the application demonstration."""
        print("=" * 50)
        print("Global Theme & Palette Update Demo")
        print("=" * 50)
        
        # Display current theme
        self.display_current_theme()
        
        # Display available themes
        self.display_available_themes()
        
        # Demonstrate theme switching
        print("\n" + "=" * 50)
        print("Demonstrating Theme Switching")
        print("=" * 50)
        
        # Switch to modern dark
        print("\n1. Switching to Modern Dark theme...")
        self.theme_manager.set_modern_dark()
        
        # Switch to vibrant
        print("\n2. Switching to Vibrant theme...")
        self.theme_manager.set_vibrant()
        
        # Switch back to default
        print("\n3. Switching to Default theme...")
        self.theme_manager.set_default()
        
        print("\n" + "=" * 50)
        print("Demo Complete!")
        print("=" * 50)
        
        # Show final theme
        self.display_current_theme()


if __name__ == "__main__":
    app = Application()
    app.run()
