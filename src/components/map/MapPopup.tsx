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
  deployed:      { label: 'Active',       bg: 'rgba(103, 194, 132, 0.18)',  color: '#55a76b' },
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
    <Box
      className="map-popup-card"
      sx={{
        width: '343px',
        minHeight: '462px',
        maxHeight: 'calc(100vh - 120px)',
        bgcolor: '#F7F9FC',
        borderRadius: '16px',
        boxShadow:
          '0px 7px 8px -4px rgba(0,0,0,0.15), 0px 12px 17px 2px rgba(0,0,0,0.08), 0px 5px 22px 4px rgba(0,0,0,0.08)',
        overflow: 'auto',
        fontFamily: 'Arial, Helvetica, sans-serif',
        border: '1px solid #00000014',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box className="map-popup-header" sx={{ p: '16px 16px 12px', position: 'relative', flexShrink: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', pr: '28px' }}>
          <Typography sx={{ fontSize: '15px', lineHeight: 1, flexShrink: 0 }}>{marker.flagEmoji}</Typography>
          <Typography sx={{ fontSize: '18px', fontWeight: 700, color: '#2f3237' }}>{marker.country}</Typography>
          <Box sx={{
            bgcolor: marker.status === 'deployed' ? 'rgba(103, 194, 132, 0.18)' : status.bg,
            color: marker.status === 'deployed' ? '#55a76b' : status.color,
            fontSize: '12px',
            fontWeight: 700,
            borderRadius: '20px',
            px: '10px',
            py: '4px',
            lineHeight: 1.6,
            flexShrink: 0,
          }}>
            {status.label}
          </Box>
        </Box>
        <Typography sx={{ fontSize: '12px', color: '#8d95a3', mt: '10px' }}>{marker.region}</Typography>
        <IconButton
          size="small"
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            width: 28,
            height: 28,
            color: '#7f8794',
            '&:hover': { bgcolor: '#EEF3F9', color: '#1A2340' },
          }}
        >
          <CloseIcon sx={{ fontSize: 20 }} />
        </IconButton>
      </Box>

      <Box className="map-popup-metrics" sx={{ px: '16px', pb: '16px', flexShrink: 0 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          {metricCells.map((cell) => (
            <Box key={cell.label} sx={{ border: '1px solid #eef2f8', background: '#FFFFFF', borderRadius: '14px', p: '12px 12px 10px' }}>
              <Typography sx={{ fontSize: '10px', fontWeight: 500, textTransform: 'none', color: '#a7b0bc', letterSpacing: 0, mb: '8px', lineHeight: 1 }}>
                {cell.label}
              </Typography>
              <Typography sx={{ fontSize: '18px', fontWeight: 500, color: cell.valueColor, lineHeight: 1.1 }}>
                {cell.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className="map-popup-deployments" sx={{ px: '16px', pt: '12px', pb: '16px', borderTop: '1px solid #e4e9f1', flexShrink: 0 }}>
        <Typography sx={{ ...sectionLabelSx, fontSize: '11px', color: '#A4ACB8', mb: '12px' }}>Active Deployments</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {marker.deploymentLabels.map((label) => (
            <Box key={label} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
              <Box sx={{ bgcolor: '#EEF3F9', borderRadius: '14px', px: '12px', py: '9px', fontSize: '11px', fontWeight: 600, color: '#5d7695', lineHeight: 1.4, flex: 1 }}>
                {label}
              </Box>
              <Typography sx={{ fontSize: '12px', fontWeight: 700, color: '#4ea4f2', cursor: 'pointer', ml: 'auto', pl: '8px', '&:hover': { textDecoration: 'underline' } }}>
                Maintain
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className="map-popup-intelligence" sx={{ px: '16px', pt: '12px', pb: '16px', borderTop: '1px solid #e4e9f1' }}>
        <Typography sx={{ ...sectionLabelSx, fontSize: '11px', color: '#A4ACB8', mb: '12px' }}>Intelligence ({marker.intelligence.length})</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {marker.intelligence.map((item, i) => (
            <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
              <InfoOutlinedIcon sx={{ fontSize: 14, color: '#4c9cf1', mt: '2px', flexShrink: 0 }} />
              <Typography sx={{ fontSize: '12px', color: '#4c78a8', lineHeight: 1.4, fontWeight: 600 }}>{item}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className="map-popup-cta" sx={{ px: '16px', pb: '16px', flexShrink: 0 }}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: '#394E7A',
            color: '#FFFFFF',
            borderRadius: '24px',
            height: '38px',
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'none',
            boxShadow: 'none',
            '&:hover': { bgcolor: '#48608f', boxShadow: 'none' },
          }}
        >
          View Full Profile ›
        </Button>
      </Box>
    </Box>
  );
}
