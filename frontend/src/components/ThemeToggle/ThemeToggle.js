import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

/**
 * Theme toggle component for switching between light and dark modes
 * Note: This is a placeholder for future theme switching functionality
 * Currently, only dark theme is implemented
 */
const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    // In a future implementation, this would switch between light and dark themes
    console.log('Theme toggle clicked. Current theme:', isDarkMode ? 'dark' : 'light');
  };

  return (
    <Tooltip title={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}>
      <IconButton
        onClick={handleToggle}
        color="inherit"
        aria-label="toggle theme"
        sx={{
          color: isDarkMode ? 'secondary.main' : 'warning.main',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
          },
        }}
      >
        {isDarkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
