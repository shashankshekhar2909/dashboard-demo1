'use client';
import { useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip, useMap, ZoomControl } from 'react-leaflet';
import { MapMarkerData } from '@/types';

const statusColors: Record<string, string> = {
  deployed: '#4CAF50',
  'in-progress': '#FF9800',
  pending: '#2196F3',
};

function MapResizer() {
  const map = useMap();
  useEffect(() => {
    const t1 = setTimeout(() => map.invalidateSize({ animate: false }), 100);
    const t2 = setTimeout(() => map.invalidateSize({ animate: false }), 400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [map]);
  return null;
}

interface Props {
  markers: MapMarkerData[];
  onMarkerClick?: (marker: MapMarkerData) => void;
}

export default function MapInner({ markers, onMarkerClick }: Props) {
  const maxCapital = Math.max(...markers.map(m => m.capitalValue));

  return (
    <MapContainer
      center={[15, 60]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <MapResizer />
      <ZoomControl position="bottomright" />

      {/* FIX 1 — CartoDB Voyager: warm beige land + blue water */}
      <TileLayer
        attribution="© OpenStreetMap contributors © CARTO"
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />

      {markers.map((marker) => {
        // FIX 2 — radius proportional to capital deployed
        const radius = 10 + (marker.capitalValue / maxCapital) * 22;

        return (
          <CircleMarker
            key={marker.id}
            center={[marker.lat, marker.lng]}
            radius={radius}
            pathOptions={{
              fillColor: statusColors[marker.status],
              fillOpacity: 0.85,
              color: '#FFFFFF',
              weight: 2,
            }}
            eventHandlers={{
              click: () => onMarkerClick?.(marker),
            }}
          >
            {/* FIX 5 — hover tooltip */}
            <Tooltip
              permanent={false}
              direction="top"
              className="custom-tooltip"
            >
              <div style={{
                background: '#1A2340',
                color: '#FFFFFF',
                borderRadius: '8px',
                padding: '10px 14px',
                fontFamily: 'Roboto, sans-serif',
                minWidth: '180px',
              }}>
                <div style={{ fontWeight: 700, fontSize: '13px', marginBottom: '8px' }}>
                  {marker.flagEmoji} {marker.country}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 12px' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>Water Scarcity</div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: '#F44336' }}>{marker.waterScarcity}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>Impact Score</div>
                    <div style={{ fontSize: '12px', fontWeight: 600 }}>{marker.impactScore}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>Capital</div>
                    <div style={{ fontSize: '12px', fontWeight: 600 }}>{marker.capitalDeployed}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>Deployments</div>
                    <div style={{ fontSize: '12px', fontWeight: 600 }}>{marker.activeDeployments}</div>
                  </div>
                </div>
              </div>
            </Tooltip>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
