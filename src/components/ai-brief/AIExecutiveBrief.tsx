'use client';
import { Box, Typography, Button } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PriorityItemComponent from './PriorityItem';
import DeploymentAlert from './DeploymentAlert';
import ForecastItemComponent from './ForecastItem';
import { priorities, deploymentAlert, forecastItems } from '@/data/aiData';

const sectionLabelSx = {
  fontSize: '10px',
  fontWeight: 600,
  color: '#9AA3B8',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  p: '16px 20px 8px',
};

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
      <Box
        className="ai-brief-header"
        sx={{
          bgcolor: '#2F446A',
          px: '24px',
          py: '20px',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AutoAwesomeIcon sx={{ fontSize: 16, color: '#FFD700' }} />
            <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#FFFFFF' }}>
              AI Executive Brief
            </Typography>
          </Box>
          <Button
            variant="outlined"
            size="small"
            onClick={() => console.log('View Full Report clicked')}
            sx={{
              color: '#FFFFFF',
              borderColor: 'rgba(255,255,255,0.4)',
              borderRadius: '20px',
              fontSize: '13px',
              px: '16px',
              py: '6px',
              textTransform: 'none',
              minWidth: 0,
              lineHeight: 1.4,
              '&:hover': { borderColor: '#FFFFFF', bgcolor: 'rgba(255,255,255,0.1)' },
            }}
          >
            View Full Report ›
          </Button>
        </Box>
        <Typography sx={{ fontSize: '12px', color: '#A8B8D8', mt: '8px' }}>
          Updated: 3 minute ago
        </Typography>
      </Box>

      <Typography sx={sectionLabelSx}>Top 3 Priorities</Typography>
      {priorities.map((item) => (
        <PriorityItemComponent key={item.id} item={item} />
      ))}

      <DeploymentAlert data={deploymentAlert} />

      <Typography sx={sectionLabelSx}>Strategic Forecasting</Typography>
      {forecastItems.map((item) => (
        <ForecastItemComponent key={item.id} item={item} />
      ))}

      <Box sx={{ flex: 1 }} />
    </Box>
  );
}
