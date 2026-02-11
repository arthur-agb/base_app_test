import { useTheme } from '@mui/material/styles';

export const useThemeColors = () => {
  const theme = useTheme();
  
  return {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    background: theme.palette.background.default,
    paper: theme.palette.background.paper,
    textPrimary: theme.palette.text.primary,
    textSecondary: theme.palette.text.secondary,
    success: theme.palette.success.main,
    error: theme.palette.error.main,
    warning: theme.palette.warning.main,
    info: theme.palette.info.main,
    gradientPrimary: 'linear-gradient(135deg, #00D4AA 0%, #00A37A 100%)',
    gradientSecondary: 'linear-gradient(135deg, #FF6B9D 0%, #FF3A7A 100%)',
    gradientBackground: 'linear-gradient(135deg, #0A0A0F 0%, #15151E 100%)',
  };
};

export default useThemeColors;
