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
  deployed:      { label: 'Active',       bg: 'rgba(76,175,80,0.15)',  color: '#2E7D32' },
  'in-progress': { label: 'In Progress',  bg: 'rgba(255,152,0,0.15)', color: '#E65100' },
  pending:       { label: 'Pending',      bg: 'rgba(33,150,243,0.15)', color: '#1565C0' },
};

const sectionLabelSx = {
  fontSize: '10px',
  fontWeight: 600,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.06em',
  color: '#9AA3B8',
  mb: '8px',
};

export default function MapPopup({ marker, onClose }: Props) {
  const status = statusConfig[marker.status];

  const metricCells = [
    { label: 'Water Scarcity',  value: marker.waterScarcity,   valueColor: '#F44336' },
    { label: 'Capital Deployed', value: marker.capitalDeployed, valueColor: '#1A2340' },
    { label: 'Impact Score',    value: marker.impactScore,     valueColor: '#1A2340' },
    { label: 'Infrastructure',  value: marker.infrastructure,  valueColor: '#1A2340' },
  ];

  return (
    <Box className="map-popup-card" sx={{ width: '320px', bgcolor: '#FFFFFF', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.18)', overflow: 'hidden', fontFamily: '"Roboto", sans-serif' }}>

      {/* HEADER */}
      <Box className="map-popup-header" sx={{ p: '16px 16px 12px', position: 'relative' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', pr: '28px' }}>
          <Typography sx={{ fontSize: '18px', lineHeight: 1, flexShrink: 0 }}>{marker.flagEmoji}</Typography>
          <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#1A2340' }}>{marker.country}</Typography>
          <Box sx={{
            bgcolor: status.bg,
            color: status.color,
            fontSize: '11px',
            fontWeight: 500,
            borderRadius: '20px',
            px: '8px',
            py: '2px',
            lineHeight: 1.6,
            flexShrink: 0,
          }}>
            {status.label}
          </Box>
        </Box>
        <Typography sx={{ fontSize: '12px', color: '#6B7A99', mt: '2px' }}>{marker.region}</Typography>
        <IconButton
          size="small"
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            width: 24,
            height: 24,
            color: '#9AA3B8',
            '&:hover': { bgcolor: '#F4F6F9', color: '#1A2340' },
          }}
        >
          <CloseIcon sx={{ fontSize: 16 }} />
        </IconButton>
      </Box>

      {/* METRICS GRID */}
      <Box className="map-popup-metrics" sx={{ px: '16px', pb: '12px' }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          {metricCells.map((cell) => (
            <Box key={cell.label} sx={{ border: '1px solid #F0F4F8', borderRadius: '6px', p: '10px' }}>
              <Typography sx={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', color: '#9AA3B8', letterSpacing: '0.04em', mb: '4px', lineHeight: 1 }}>
                {cell.label}
              </Typography>
              <Typography sx={{ fontSize: '14px', fontWeight: 600, color: cell.valueColor, lineHeight: 1.2 }}>
                {cell.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ACTIVE DEPLOYMENTS */}
      <Box className="map-popup-deployments" sx={{ px: '16px', pb: '10px' }}>
        <Typography sx={sectionLabelSx}>Active Deployments</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {marker.deploymentLabels.map((label) => (
            <Box key={label} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ bgcolor: '#F0F4F8', borderRadius: '20px', px: '10px', py: '4px', fontSize: '12px', color: '#1A2340', lineHeight: 1.5 }}>
                {label}
              </Box>
              <Typography sx={{ fontSize: '13px', color: '#2196F3', cursor: 'pointer', ml: 'auto', pl: '8px', '&:hover': { textDecoration: 'underline' } }}>
                Maintain
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* INTELLIGENCE */}
      <Box className="map-popup-intelligence" sx={{ px: '16px', pb: '10px' }}>
        <Typography sx={sectionLabelSx}>Intelligence ({marker.intelligence.length})</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {marker.intelligence.map((item, i) => (
            <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
              <InfoOutlinedIcon sx={{ fontSize: 14, color: '#2196F3', mt: '2px', flexShrink: 0 }} />
              <Typography sx={{ fontSize: '13px', color: '#2196F3', lineHeight: 1.4 }}>{item}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* CTA BUTTON */}
      <Box className="map-popup-cta" sx={{ px: '16px', pb: '16px' }}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: '#1B2A4A',
            color: '#FFFFFF',
            borderRadius: '24px',
            height: '40px',
            fontSize: '14px',
            fontWeight: 500,
            textTransform: 'none',
            boxShadow: 'none',
            '&:hover': { bgcolor: '#2D4B7A', boxShadow: 'none' },
          }}
        >
          View Full Profile ›
        </Button>
      </Box>

    </Box>
  );
}
