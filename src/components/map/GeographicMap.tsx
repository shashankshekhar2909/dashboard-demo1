'use client';
import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Box, Typography } from '@mui/material';
import MapInner from './MapInner';
import MapStatsBar from './MapStatsBar';
import MapLegend from './MapLegend';
import MapPopup from './MapPopup';
import { mapMarkers } from '@/data/mapData';
import { MapMarkerData } from '@/types';

// Fix Leaflet default marker icons broken in Next.js/webpack
type LeafletDefaultIconPrototype = typeof L.Icon.Default.prototype & {
  _getIconUrl?: string;
};

delete (L.Icon.Default.prototype as LeafletDefaultIconPrototype)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export default function GeographicMap() {
  const [selectedMarker, setSelectedMarker] = useState<MapMarkerData | null>(null);

  return (
    <Box
      className="geo-map-card"
      sx={{
        bgcolor: '#FFFFFF',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-card)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid var(--border-soft)',
      }}
    >
      <Box
        className="geo-map-header"
        sx={{
          bgcolor: '#2F446A',
          px: '24px',
          py: '20px',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.2 }}>
          Geographic Impact Distribution
        </Typography>
        <Typography sx={{ fontSize: '12px', color: '#A8B8D8', mt: '8px' }}>
          Real-time deployment scale and risk heat overlay
        </Typography>
        <Typography sx={{ fontSize: '12px', color: '#A8B8D8', mt: '4px' }}>
          Updated: 3 minute ago
        </Typography>
      </Box>

      <Box className="geo-map-viewport" sx={{ flex: 1, position: 'relative', overflow: 'hidden', lineHeight: 0 }}>
        <MapInner markers={mapMarkers} onMarkerClick={setSelectedMarker} />
        <MapLegend />

        {selectedMarker && (
          <Box
            className="geo-map-popup-panel"
            sx={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              zIndex: 1000,
              bgcolor: 'transparent',
              borderRadius: '16px',
              boxShadow: 'none',
              overflow: 'hidden',
              width: '343px',
              p: 0,
            }}
          >
            <MapPopup marker={selectedMarker} onClose={() => setSelectedMarker(null)} />
          </Box>
        )}
      </Box>

      <MapStatsBar />
    </Box>
  );
}
