"""
Main application entry point with theme demonstration.
"""
import sys
from typing import Optional
from theme.theme_manager import theme_manager, ThemeMode
from theme.palette import Palette


def apply_theme_to_ui(palette: Palette) -> None:
    """
    Example function that would apply theme to UI components.
    In a real application, this would update UI elements.
    
    Args:
        palette: The color palette to apply
    """
    print(f"Theme updated! Primary color: {palette.primary}")
    print(f"Background: {palette.background}, Text: {palette.text_primary}")
    
    # In a real app, this would update:
    # - CSS variables
    # - Component styles
    # - Theme context in React/Vue/etc.
    # - Material-UI/Chakra-UI theme provider


def main() -> None:
    """Main application function."""
    # Load saved theme configuration
    theme_manager.load_config()
    
    # Register theme change listener
    theme_manager.add_listener(apply_theme_to_ui)
    
    # Apply initial theme
    apply_theme_to_ui(theme_manager.current_palette)
    
    print(f"\nCurrent theme: {theme_manager.current_mode.value}")
    print("Available commands:")
    print("  1. Set modern dark theme")
    print("  2. Set vibrant theme")
    print("  3. Set default theme")
    print("  4. Create custom theme")
    print("  5. Save and exit")
    
    while True:
        try:
            choice = input("\nEnter choice (1-5): ").strip()
            
            if choice == "1":
                theme_manager.set_modern_dark_theme()
                print("✓ Modern dark theme applied")
            elif choice == "2":
                theme_manager.set_vibrant_theme()
                print("✓ Vibrant theme applied")
            elif choice == "3":
                theme_manager.set_default_theme()
                print("✓ Default theme applied")
            elif choice == "4":
                # Example custom palette
                custom_palette = Palette(
                    primary="#4a148c",
                    primary_light="#7c43bd",
                    primary_dark="#12005e",
                    secondary="#ff6f00",
                    secondary_light="#ff9e40",
                    secondary_dark="#c43e00",
                    background="#fafafa",
                    surface="#ffffff",
                    text_primary="#212121",
                    text_secondary="#616161",
                    border="#bdbdbd",
                    error="#d32f2f",
                    warning="#ffa000",
                    success="#388e3c",
                    info="#1976d2",
                    accent1="#c2185b",
                    accent2="#00796b",
                    accent3="#fbc02d"
                )
                theme_manager.set_custom_theme(custom_palette)
                print("✓ Custom theme applied")
            elif choice == "5":
                print("Theme configuration saved. Goodbye!")
                break
            else:
                print("Invalid choice. Please enter 1-5.")
        
        except KeyboardInterrupt:
            print("\n\nExiting...")
            break
        except Exception as e:
            print(f"Error: {e}")


if __name__ == "__main__":
    main()
