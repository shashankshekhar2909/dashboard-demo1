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
    <Box className="map-popup-card" sx={{ width: '100%', bgcolor: '#FFFFFF', borderRadius: '16px', boxShadow: '0 18px 40px rgba(42, 57, 85, 0.22)', overflow: 'hidden', fontFamily: 'Arial, Helvetica, sans-serif', border: '1px solid #dce5f0' }}>
      <Box className="map-popup-header" sx={{ p: '14px 14px 12px', position: 'relative', bgcolor: '#2F446A', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', pr: '28px' }}>
          <Typography sx={{ fontSize: '15px', lineHeight: 1, flexShrink: 0 }}>{marker.flagEmoji}</Typography>
          <Typography sx={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>{marker.country}</Typography>
          <Box sx={{
            bgcolor: status.bg,
            color: status.color,
            fontSize: '11px',
            fontWeight: 700,
            borderRadius: '20px',
            px: '8px',
            py: '2px',
            lineHeight: 1.6,
            flexShrink: 0,
          }}>
            {status.label}
          </Box>
        </Box>
        <Typography sx={{ fontSize: '11px', color: '#A8B8D8', mt: '4px' }}>{marker.region}</Typography>
        <IconButton
          size="small"
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            width: 24,
            height: 24,
            color: '#D7E1F3',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.10)', color: '#FFFFFF' },
          }}
        >
          <CloseIcon sx={{ fontSize: 16 }} />
        </IconButton>
      </Box>

      <Box className="map-popup-metrics" sx={{ px: '14px', pt: '14px', pb: '12px' }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          {metricCells.map((cell) => (
            <Box key={cell.label} sx={{ border: '1px solid #e8eef7', background: '#f6f9fc', borderRadius: '10px', p: '9px 10px' }}>
              <Typography sx={{ fontSize: '9px', fontWeight: 700, textTransform: 'none', color: '#b0b8c4', letterSpacing: 0, mb: '5px', lineHeight: 1 }}>
                {cell.label}
              </Typography>
              <Typography sx={{ fontSize: '17px', fontWeight: 700, color: cell.valueColor, lineHeight: 1.1 }}>
                {cell.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className="map-popup-deployments" sx={{ px: '14px', pb: '10px' }}>
        <Typography sx={sectionLabelSx}>Active Deployments</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {marker.deploymentLabels.map((label) => (
            <Box key={label} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
              <Box sx={{ bgcolor: '#edf3fb', borderRadius: '999px', px: '10px', py: '5px', fontSize: '11px', fontWeight: 600, color: '#76839b', lineHeight: 1.5 }}>
                {label}
              </Box>
              <Typography sx={{ fontSize: '12px', fontWeight: 700, color: '#4ea4f2', cursor: 'pointer', ml: 'auto', pl: '8px', '&:hover': { textDecoration: 'underline' } }}>
                Maintain
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className="map-popup-intelligence" sx={{ px: '14px', pb: '12px' }}>
        <Typography sx={sectionLabelSx}>Intelligence ({marker.intelligence.length})</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {marker.intelligence.map((item, i) => (
            <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
              <InfoOutlinedIcon sx={{ fontSize: 14, color: '#4c9cf1', mt: '2px', flexShrink: 0 }} />
              <Typography sx={{ fontSize: '12px', color: '#4c9cf1', lineHeight: 1.4, fontWeight: 600 }}>{item}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className="map-popup-cta" sx={{ px: '14px', pb: '14px' }}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: '#2F446A',
            color: '#FFFFFF',
            borderRadius: '24px',
            height: '36px',
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'none',
            boxShadow: 'none',
            '&:hover': { bgcolor: '#3e5681', boxShadow: 'none' },
          }}
        >
          View Full Profile ›
        </Button>
      </Box>
    </Box>
  );
}
