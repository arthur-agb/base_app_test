"""
Main application entry point with theme integration.
"""
import sys
from typing import Optional
from theme.theme_manager import ThemeManager


class Application:
    """
    Main application class with theme support.
    """
    
    def __init__(self, theme_manager: Optional[ThemeManager] = None):
        """
        Initialize application.
        
        Args:
            theme_manager: Optional theme manager instance
        """
        self.theme_manager = theme_manager or ThemeManager()
        self.running = False
    
    def start(self) -> None:
        """Start the application."""
        self.running = True
        print("Application started")
        print(f"Current theme: {self.theme_manager.get_current_palette_name()}")
        print("Available themes:", list(self.theme_manager.available_palettes.keys()))
    
    def stop(self) -> None:
        """Stop the application."""
        self.running = False
        print("Application stopped")
    
    def change_theme(self, theme_name: str) -> bool:
        """
        Change the application theme.
        
        Args:
            theme_name: Name of the theme to change to
            
        Returns:
            True if theme was changed successfully
        """
        success = self.theme_manager.set_palette(theme_name)
        if success:
            print(f"Theme changed to: {theme_name}")
            print("CSS Variables:")
            print(self.theme_manager.generate_css_variables())
        else:
            print(f"Theme '{theme_name}' not found")
        
        return success
    
    def show_current_theme(self) -> None:
        """Display current theme information."""
        palette = self.theme_manager.current_palette
        print(f"\nCurrent Theme: {self.theme_manager.get_current_palette_name()}")
        print("Colors:")
        for key, value in palette.to_dict().items():
            print(f"  {key}: {value}")


def main() -> None:
    """Main function."""
    app = Application()
    
    try:
        app.start()
        
        # Example: Change to dark theme
        app.change_theme("dark")
        
        # Show current theme
        app.show_current_theme()
        
        # Generate theme object for frontend
        theme_obj = app.theme_manager.generate_theme_object()
        print(f"\nTheme Object: {theme_obj}")
        
    except KeyboardInterrupt:
        print("\nShutting down...")
    finally:
        app.stop()


if __name__ == "__main__":
    main()
