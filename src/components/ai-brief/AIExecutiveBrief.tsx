'use client';
import { Box, Typography, Button } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PriorityItemComponent from './PriorityItem';
import DeploymentAlert from './DeploymentAlert';
import ForecastItemComponent from './ForecastItem';
import { priorities, deploymentAlert, forecastItems } from '@/data/aiData';

export default function AIExecutiveBrief() {
  return (
    <Box
      className="ai-brief-card"
      sx={{
        width: '380px',
        flexShrink: 0,
        bgcolor: '#FFFFFF',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)',
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
      }}
    >
      {/* Header */}
      <Box
        className="ai-brief-header"
        sx={{
          background: 'linear-gradient(135deg, #2D4B7A 0%, #1B2A4A 100%)',
          px: '24px',
          py: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AutoAwesomeIcon sx={{ fontSize: 18, color: '#FFFFFF' }} />
          <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#FFFFFF' }}>
            AI Executive Brief
          </Typography>
        </Box>
        <Button
          variant="outlined"
          size="small"
          sx={{
            color: '#FFFFFF',
            borderColor: 'rgba(255,255,255,0.5)',
            borderRadius: '20px',
            fontSize: '12px',
            px: '16px',
            py: '4px',
            '&:hover': { borderColor: '#FFFFFF', bgcolor: 'rgba(255,255,255,0.1)' },
          }}
        >
          View Full Report ›
        </Button>
      </Box>

      {/* Timestamp */}
      <Typography sx={{ fontSize: '13px', color: '#9AA3B8', px: '20px', py: '8px' }}>
        Updated: Today, 09:41 AM UTC
      </Typography>

      {/* Top 3 Priorities */}
      <Typography
        sx={{
          fontSize: '10px',
          fontWeight: 600,
          color: '#6B7A99',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          px: '20px',
          pb: '8px',
          pt: '4px',
        }}
      >
        Top 3 Priorities
      </Typography>

      {priorities.map((item) => (
        <PriorityItemComponent key={item.id} item={item} />
      ))}

      {/* Alert */}
      <Typography
        sx={{
          fontSize: '10px',
          fontWeight: 600,
          color: '#6B7A99',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          px: '20px',
          pt: '12px',
          pb: '4px',
        }}
      >
        Underperforming Deployment Alert
      </Typography>

      <DeploymentAlert data={deploymentAlert} />

      {/* Strategic Forecasting */}
      <Typography
        sx={{
          fontSize: '10px',
          fontWeight: 600,
          color: '#6B7A99',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          px: '20px',
          py: '12px',
        }}
      >
        Strategic Forecasting
      </Typography>

      {forecastItems.map((item) => (
        <ForecastItemComponent key={item.id} item={item} />
      ))}

      {/* Spacer */}
      <Box sx={{ flex: 1 }} />
    </Box>
  );
}
