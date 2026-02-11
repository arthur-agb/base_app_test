import React from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Button,
  LinearProgress,
  Chip
} from '@mui/material';
import { 
  TrendingUp, 
  People, 
  AttachMoney, 
  Dashboard as DashboardIcon 
} from '@mui/icons-material';

const Dashboard = () => {
  const stats = [
    { title: 'Total Revenue', value: '$54,234', change: '+23%', icon: <AttachMoney />, color: '#7C4DFF' },
    { title: 'Active Users', value: '3,456', change: '+12%', icon: <People />, color: '#00E5FF' },
    { title: 'Conversion Rate', value: '4.8%', change: '+5%', icon: <TrendingUp />, color: '#66BB6A' },
    { title: 'Engagement', value: '78%', change: '+8%', icon: <DashboardIcon />, color: '#FFB74D' },
  ];

  return (
    <Box className="fade-in">
      <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 600 }}>
        Dashboard Overview
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className="glow-effect" sx={{ 
              border: '1px solid rgba(124, 77, 255, 0.2)',
              transition: 'transform 0.3s ease, border-color 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                borderColor: 'rgba(124, 77, 255, 0.4)',
              }
            }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ 
                    p: 1, 
                    borderRadius: 2, 
                    backgroundColor: `${stat.color}20`,
                    color: stat.color
                  }}>
                    {stat.icon}
                  </Box>
                  <Chip 
                    label={stat.change} 
                    size="small" 
                    sx={{ 
                      backgroundColor: `${stat.color}20`,
                      color: stat.color,
                      fontWeight: 600
                    }} 
                  />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ 
            border: '1px solid rgba(124, 77, 255, 0.2)',
            background: 'linear-gradient(135deg, rgba(30, 30, 30, 0.8) 0%, rgba(18, 18, 18, 0.8) 100%)'
          }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Performance Metrics
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Website Traffic</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#7C4DFF' }}>85%</Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={85} 
                    sx={{ 
                      height: 8, 
                      borderRadius: 4,
                      backgroundColor: 'rgba(124, 77, 255, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: '#7C4DFF',
                        borderRadius: 4,
                      }
                    }} 
                  />
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">User Engagement</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#00E5FF' }}>72%</Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={72} 
                    sx={{ 
                      height: 8, 
                      borderRadius: 4,
                      backgroundColor: 'rgba(0, 229, 255, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: '#00E5FF',
                        borderRadius: 4,
                      }
                    }} 
                  />
                </Box>
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Conversion Rate</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#66BB6A' }}>92%</Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={92} 
                    sx={{ 
                      height: 8, 
                      borderRadius: 4,
                      backgroundColor: 'rgba(102, 187, 106, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: '#66BB6A',
                        borderRadius: 4,
                      }
                    }} 
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ 
            border: '1px solid rgba(124, 77, 255, 0.2)',
            background: 'linear-gradient(135deg, rgba(30, 30, 30, 0.8) 0%, rgba(18, 18, 18, 0.8) 100%)'
          }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Quick Actions
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button 
                  variant="contained" 
                  fullWidth
                  sx={{ 
                    py: 1.5,
                    background: 'linear-gradient(135deg, #7C4DFF 0%, #4A00B8 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #B47CFF 0%, #7C4DFF 100%)',
                    }
                  }}
                >
                  Generate Report
                </Button>
                <Button 
                  variant="outlined" 
                  fullWidth
                  sx={{ 
                    py: 1.5,
                    borderColor: 'rgba(124, 77, 255, 0.5)',
                    color: '#7C4DFF',
                    '&:hover': {
                      borderColor: '#7C4DFF',
                      backgroundColor: 'rgba(124, 77, 255, 0.1)',
                    }
                  }}
                >
                  Add New User
                </Button>
                <Button 
                  variant="outlined" 
                  fullWidth
                  sx={{ 
                    py: 1.5,
                    borderColor: 'rgba(0, 229, 255, 0.5)',
                    color: '#00E5FF',
                    '&:hover': {
                      borderColor: '#00E5FF',
                      backgroundColor: 'rgba(0, 229, 255, 0.1)',
                    }
                  }}
                >
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
