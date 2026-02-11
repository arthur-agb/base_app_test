import React from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Box,
  Chip,
  LinearProgress,
  Avatar
} from '@mui/material';
import { 
  TrendingUp, 
  People, 
  ShoppingCart, 
  AttachMoney,
  ArrowUpward,
  MoreVert
} from '@mui/icons-material';

/**
 * Dashboard page component
 */
const Dashboard = () => {
  const stats = [
    { title: 'Total Revenue', value: '$54,234', icon: <AttachMoney />, change: '+12%', color: 'primary' },
    { title: 'Active Users', value: '3,456', icon: <People />, change: '+8%', color: 'secondary' },
    { title: 'New Orders', value: '1,234', icon: <ShoppingCart />, change: '+23%', color: 'success' },
    { title: 'Growth Rate', value: '42%', icon: <TrendingUp />, change: '+5%', color: 'warning' },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
        Dashboard Overview
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card elevation={2}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: `${stat.color}.main`, color: 'white' }}>
                    {stat.icon}
                  </Avatar>
                  <Chip 
                    label={stat.change} 
                    size="small" 
                    color={stat.color}
                    icon={<ArrowUpward sx={{ fontSize: 14 }} />}
                  />
                </Box>
                <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.title}
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={75} 
                  sx={{ 
                    mt: 2, 
                    height: 6, 
                    borderRadius: 3,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '& .MuiLinearProgress-bar': {
                      background: `linear-gradient(90deg, ${stat.color === 'primary' ? '#7C4DFF' : stat.color === 'secondary' ? '#00E5FF' : stat.color === 'success' ? '#69F0AE' : '#FFB74D'} 0%, ${stat.color === 'primary' ? '#B47CFF' : stat.color === 'secondary' ? '#6EFFFF' : stat.color === 'success' ? '#9EFFDF' : '#FFE97D'} 100%)`,
                    }
                  }} 
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card elevation={2}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Performance Metrics
                </Typography>
                <IconButton size="small">
                  <MoreVert />
                </IconButton>
              </Box>
              <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography color="text.secondary">
                  Chart visualization would appear here
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card elevation={2}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                Quick Actions
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button 
                  variant="contained" 
                  fullWidth
                  sx={{ 
                    py: 1.5,
                    background: 'linear-gradient(45deg, #7C4DFF 30%, #00E5FF 90%)',
                  }}
                >
                  Generate Report
                </Button>
                <Button variant="outlined" fullWidth sx={{ py: 1.5 }}>
                  Export Data
                </Button>
                <Button variant="outlined" fullWidth sx={{ py: 1.5 }}>
                  Schedule Task
                </Button>
                <Button variant="outlined" fullWidth sx={{ py: 1.5 }}>
                  View Analytics
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
