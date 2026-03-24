'use client';
import { Box, Typography } from '@mui/material';

export default function MapLegend() {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '12px',
        right: '12px',
        zIndex: 1000,
        bgcolor: 'rgba(255,255,255,0.92)',
        borderRadius: '8px',
        p: '12px',
        minWidth: '140px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
      }}
    >
      <Typography sx={{ fontSize: '10px', fontWeight: 600, color: '#6B7A99', textTransform: 'uppercase', letterSpacing: '0.08em', mb: '6px' }}>
        Status Layer
      </Typography>
      {[
        { color: '#4CAF50', label: 'Deployed' },
        { color: '#FF9800', label: 'In Progress' },
        { color: '#2196F3', label: 'Pending' },
      ].map((item) => (
        <Box key={item.label} sx={{ display: 'flex', alignItems: 'center', gap: '6px', mb: '4px' }}>
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: item.color }} />
          <Typography sx={{ fontSize: '11px', color: '#1A2340' }}>{item.label}</Typography>
        </Box>
      ))}

      <Box sx={{ borderTop: '1px solid #E2E8F0', mt: '8px', pt: '8px' }}>
        <Typography sx={{ fontSize: '10px', fontWeight: 600, color: '#6B7A99', textTransform: 'uppercase', letterSpacing: '0.08em', mb: '6px' }}>
          Risk Status
        </Typography>
        {[
          { color: '#4CAF50', label: 'Low Risk' },
          { color: '#FF9800', label: 'Medium Risk' },
          { color: '#F44336', label: 'High Risk' },
        ].map((item) => (
          <Box key={item.label} sx={{ display: 'flex', alignItems: 'center', gap: '6px', mb: '4px' }}>
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: item.color }} />
            <Typography sx={{ fontSize: '11px', color: '#1A2340' }}>{item.label}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
