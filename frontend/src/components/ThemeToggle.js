import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';

const ThemeToggle = () => {
  const theme = useTheme();
  
  // Note: This component is for future light/dark mode toggle
  // Currently we're using only dark mode with the modern palette
  
  return (
    <Tooltip title="Switch theme">
      <IconButton
        sx={{
          ml: 1,
          color: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        }}
        aria-label="toggle theme"
      >
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
