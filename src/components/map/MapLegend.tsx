'use client';
import { Box, Typography } from '@mui/material';

const statusItems = [
  { color: '#4CAF50', label: 'Deployed' },
  { color: '#FF9800', label: 'In Progress' },
  { color: '#2196F3', label: 'Pending' },
];

const riskItems = [
  { color: '#4CAF50', label: 'Low Risk' },
  { color: '#FF9800', label: 'Medium Risk' },
  { color: '#F44336', label: 'High Risk' },
];

function Dot({ color }: { color: string }) {
  return (
    <Box sx={{
      width: 10,
      height: 10,
      borderRadius: '50%',
      backgroundColor: color,
      display: 'inline-block',
      flexShrink: 0,
    }} />
  );
}

export default function MapLegend() {
  return (
    <Box
      className="map-legend"
      sx={{
        position: 'absolute',
        top: '14px',
        right: '14px',
        zIndex: 1000,
        bgcolor: 'rgba(249, 251, 255, 0.94)',
        borderRadius: '10px',
        p: '12px 14px',
        minWidth: '160px',
        boxShadow: 'var(--shadow-soft)',
      }}
    >
      <Typography sx={{ fontSize: '10px', fontWeight: 700, color: '#a0a7b2', textTransform: 'uppercase', letterSpacing: '0.08em', mb: '8px' }}>
        Status Layer
      </Typography>
      {statusItems.map((item) => (
        <Box key={item.label} sx={{ display: 'flex', alignItems: 'center', gap: '6px', mb: '4px' }}>
          <Dot color={item.color} />
          <Typography sx={{ fontSize: '12px', color: '#55606f' }}>{item.label === 'In Progress' ? 'Deployment in progress' : item.label === 'Pending' ? 'Pending proposal' : 'Deployed solution'}</Typography>
        </Box>
      ))}

      <Box sx={{ borderTop: '1px solid #dde5f0', mt: '10px', pt: '10px' }}>
        <Typography sx={{ fontSize: '10px', fontWeight: 700, color: '#a0a7b2', textTransform: 'uppercase', letterSpacing: '0.08em', mb: '8px' }}>
          Risk Status
        </Typography>
        {riskItems.map((item) => (
          <Box key={item.label} sx={{ display: 'flex', alignItems: 'center', gap: '6px', mb: '4px' }}>
            <Dot color={item.color} />
            <Typography sx={{ fontSize: '12px', color: '#55606f' }}>{item.label.replace(' Risk', '')}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
