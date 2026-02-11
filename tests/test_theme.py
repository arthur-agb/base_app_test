"""
Tests for theme functionality.
"""
import pytest
import tempfile
import json
from pathlib import Path

from app.theme.palette import Palette, MODERN_DARK, VIBRANT, DEFAULT
from app.theme.theme_manager import ThemeManager


class TestPalette:
    """Test Palette class."""
    
    def test_palette_creation(self):
        """Test creating a palette."""
        palette = Palette(
            primary="#000000",
            secondary="#111111",
            accent="#222222",
            background="#333333",
            surface="#444444",
            error="#555555",
            success="#666666",
            warning="#777777",
            info="#888888",
            on_primary="#999999",
            on_secondary="#AAAAAA",
            on_background="#BBBBBB",
            on_surface="#CCCCCC",
            on_error="#DDDDDD",
        )
        
        assert palette.primary == "#000000"
        assert palette.secondary == "#111111"
        assert palette.accent == "#222222"
    
    def test_palette_to_dict(self):
        """Test converting palette to dictionary."""
        palette = MODERN_DARK
        palette_dict = palette.to_dict()
        
        assert isinstance(palette_dict, dict)
        assert palette_dict["primary"] == palette.primary
        assert palette_dict["secondary"] == palette.secondary
        assert "on_background" in palette_dict
    
    def test_palette_from_dict(self):
        """Test creating palette from dictionary."""
        data = {
            "primary": "#FF0000",
            "secondary": "#00FF00",
            "accent": "#0000FF",
            "background": "#000000",
            "surface": "#111111",
            "error": "#FF0000",
            "success": "#00FF00",
            "warning": "#FFFF00",
            "info": "#0000FF",
            "on_primary": "#FFFFFF",
            "on_secondary": "#000000",
            "on_background": "#FFFFFF",
            "on_surface": "#FFFFFF",
            "on_error": "#FFFFFF",
        }
        
        palette = Palette.from_dict(data)
        assert palette.primary == "#FF0000"
        assert palette.secondary == "#00FF00"
        assert palette.accent == "#0000FF"


class TestThemeManager:
    """Test ThemeManager class."""
    
    def test_theme_manager_initialization(self):
        """Test initializing theme manager."""
        with tempfile.TemporaryDirectory() as tmpdir:
            config_path = Path(tmpdir) / "theme.json"
            manager = ThemeManager(str(config_path))
            
            # Should default to modern_dark
            assert manager.current_palette == MODERN_DARK
    
    def test_set_palette(self):
        """Test setting palette by name."""
        with tempfile.TemporaryDirectory() as tmpdir:
            config_path = Path(tmpdir) / "theme.json"
            manager = ThemeManager(str(config_path))
            
            # Set to vibrant palette
            result = manager.set_palette("vibrant")
            assert result is True
            assert manager.current_palette == VIBRANT
            
            # Try invalid palette
            result = manager.set_palette("invalid")
            assert result is False
            assert manager.current_palette == VIBRANT  # Should not change
    
    def test_save_and_load_palette(self):
        """Test saving and loading palette from file."""
        with tempfile.TemporaryDirectory() as tmpdir:
            config_path = Path(tmpdir) / "theme.json"
            
            # Create manager and set palette
            manager1 = ThemeManager(str(config_path))
            manager1.set_palette("vibrant")
            
            # Create new manager that should load saved palette
            manager2 = ThemeManager(str(config_path))
            assert manager2.current_palette == VIBRANT
    
    def test_get_available_palettes(self):
        """Test getting available palettes."""
        manager = ThemeManager()
        palettes = manager.get_available_palettes()
        
        assert "modern_dark" in palettes
        assert "vibrant" in palettes
        assert "default" in palettes
        assert palettes["modern_dark"] == MODERN_DARK
    
    def test_generate_css_variables(self):
        """Test generating CSS variables."""
        manager = ThemeManager()
        manager.set_palette("modern_dark")
        
        css = manager.generate_css_variables()
        assert ":root {" in css
        assert "--color-primary:" in css
        assert MODERN_DARK.primary in css
    
    def test_generate_style_dict(self):
        """Test generating style dictionary."""
        manager = ThemeManager()
        manager.set_palette("vibrant")
        
        styles = manager.generate_style_dict()
        assert "primary" in styles
        assert "color" in styles["primary"]
        assert "text_color" in styles["primary"]
        assert styles["primary"]["color"] == VIBRANT.primary


def test_predefined_palettes():
    """Test that predefined palettes are valid."""
    assert isinstance(MODERN_DARK, Palette)
    assert isinstance(VIBRANT, Palette)
    assert isinstance(DEFAULT, Palette)
    
    # Check that all palettes have valid hex colors
    for palette in [MODERN_DARK, VIBRANT, DEFAULT]:
        for color_value in palette.to_dict().values():
            assert color_value.startswith("#")
            assert len(color_value) == 7  # #RRGGBB format


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
