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
delete (L.Icon.Default.prototype as any)._getIconUrl;
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
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <Box
        className="geo-map-header"
        sx={{
          background: 'linear-gradient(135deg, #2D4B7A 0%, #1B2A4A 100%)',
          px: '24px',
          py: '20px',
          flexShrink: 0,
        }}
      >
        <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#FFFFFF' }}>
          Geographic Impact Distribution
        </Typography>
        <Typography sx={{ fontSize: '13px', color: '#A8B8D8', mt: '2px' }}>
          Real-time deployment scale and risk heat overlay
        </Typography>
      </Box>

      {/* Map */}
      <Box className="geo-map-viewport" sx={{ flex: 1, position: 'relative', overflow: 'hidden', lineHeight: 0 }}>
        <MapInner markers={mapMarkers} onMarkerClick={setSelectedMarker} />
        <MapLegend />

        {/* Fixed top-left popup panel */}
        {selectedMarker && (
          <Box
            className="geo-map-popup-panel"
            sx={{
              position: 'absolute',
              top: '8px',
              left: '8px',
              zIndex: 1000,
              bgcolor: '#FFFFFF',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
              overflow: 'hidden',
              width: '320px',
              p: 0,
            }}
          >
            <MapPopup marker={selectedMarker} onClose={() => setSelectedMarker(null)} />
          </Box>
        )}
      </Box>

      {/* Stats bar */}
      <MapStatsBar />
    </Box>
  );
}
