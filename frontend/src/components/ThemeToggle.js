import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

/**
 * ThemeToggle component for switching between light and dark modes
 * @param {Object} props - Component props
 * @param {boolean} props.darkMode - Current theme mode
 * @param {Function} props.toggleTheme - Function to toggle theme
 */
const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <Tooltip title={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
      <IconButton
        onClick={toggleTheme}
        sx={{
          position: 'fixed',
          top: 16,
          right: 16,
          zIndex: 1000,
          backgroundColor: 'background.paper',
          boxShadow: 3,
          '&:hover': {
            backgroundColor: 'action.hover',
            transform: 'scale(1.1)',
          },
          transition: 'all 0.2s ease-in-out',
        }}
        aria-label="toggle theme"
      >
        {darkMode ? (
          <Brightness7 sx={{ color: 'warning.main' }} />
        ) : (
          <Brightness4 sx={{ color: 'primary.main' }} />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
