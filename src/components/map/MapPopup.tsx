'use client';
import { Box, Typography, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { MapMarkerData } from '@/types';

interface Props {
  marker: MapMarkerData;
  onClose: () => void;
}

const statusConfig: Record<string, { label: string; bg: string; color: string }> = {
  deployed:    { label: 'Active',      bg: 'rgba(76,175,80,0.15)',  color: '#4CAF50' },
  'in-progress': { label: 'In Progress', bg: 'rgba(255,152,0,0.15)', color: '#FF9800' },
  pending:     { label: 'Pending',     bg: 'rgba(33,150,243,0.15)', color: '#2196F3' },
};

const metrics = (m: MapMarkerData) => [
  { label: 'Water Scarcity',  value: m.waterScarcity,   valueColor: '#F44336' },
  { label: 'Capital Deployed', value: m.capitalDeployed, valueColor: '#1A2340' },
  { label: 'Impact Score',    value: m.impactScore,     valueColor: '#1A2340' },
  { label: 'Infrastructure',  value: m.infrastructure,  valueColor: '#1A2340' },
];

export default function MapPopup({ marker, onClose }: Props) {
  const status = statusConfig[marker.status];

  return (
    <Box className="map-popup-card" sx={{ width: '320px', fontFamily: '"Roboto", sans-serif' }}>
      {/* Header row */}
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: '4px' }}>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <Typography sx={{ fontSize: '18px', lineHeight: 1 }}>{marker.flagEmoji}</Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#1A2340' }}>{marker.country}</Typography>
            <Box sx={{
              bgcolor: status.bg, color: status.color,
              fontSize: '11px', fontWeight: 500,
              borderRadius: '20px', px: '8px', py: '2px',
              lineHeight: 1.5,
            }}>
              {status.label}
            </Box>
          </Box>
          <Typography sx={{ fontSize: '12px', color: '#6B7A99', mt: '4px' }}>{marker.region}</Typography>
        </Box>
        <IconButton
          size="small"
          onClick={onClose}
          sx={{ width: 24, height: 24, color: '#6B7A99', flexShrink: 0, ml: '8px', mt: '-2px', '&:hover': { bgcolor: '#f4f6f9' } }}
        >
          <CloseIcon sx={{ fontSize: 16 }} />
        </IconButton>
      </Box>

      {/* Metrics 2x2 grid */}
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', mt: '12px' }}>
        {metrics(marker).map((m) => (
          <Box key={m.label} sx={{ border: '1px solid #F0F4F8', borderRadius: '6px', p: '10px' }}>
            <Typography sx={{ fontSize: '11px', textTransform: 'uppercase', color: '#9AA3B8', letterSpacing: '0.04em', lineHeight: 1 }}>
              {m.label}
            </Typography>
            <Typography sx={{ fontSize: '14px', fontWeight: 600, color: m.valueColor, mt: '4px', lineHeight: 1.2 }}>
              {m.value}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Active Deployments */}
      <Typography sx={{ fontSize: '10px', textTransform: 'uppercase', color: '#9AA3B8', letterSpacing: '0.06em', mt: '12px', mb: '6px' }}>
        Active Deployments
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {marker.deploymentLabels.map((label) => (
          <Box key={label} sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Box sx={{ bgcolor: '#F0F4F8', borderRadius: '20px', px: '10px', py: '4px', fontSize: '11px', color: '#1A2340' }}>
              {label}
            </Box>
            <Typography
              component="span"
              sx={{ fontSize: '11px', color: '#2196F3', cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
            >
              Maintain
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Intelligence */}
      <Typography sx={{ fontSize: '10px', textTransform: 'uppercase', color: '#9AA3B8', letterSpacing: '0.06em', mt: '12px', mb: '6px' }}>
        Intelligence ({marker.intelligence.length})
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {marker.intelligence.map((item, i) => (
          <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
            <InfoOutlinedIcon sx={{ fontSize: 14, color: '#2196F3', mt: '1px', flexShrink: 0 }} />
            <Typography sx={{ fontSize: '13px', color: '#2196F3', lineHeight: 1.4 }}>{item}</Typography>
          </Box>
        ))}
      </Box>

      {/* CTA */}
      <Button
        fullWidth
        variant="contained"
        sx={{
          bgcolor: '#1B2A4A',
          borderRadius: '24px',
          fontSize: '14px',
          fontWeight: 500,
          height: '40px',
          mt: '14px',
          textTransform: 'none',
          '&:hover': { bgcolor: '#1B2A4A', filter: 'brightness(1.15)' },
        }}
      >
        View Full Profile ›
      </Button>
    </Box>
  );
}
