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
      center={[10, 35]}
      zoom={3}
      style={{ height: '100%', width: '100%', display: 'block' }}
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
              mouseover: (event) => {
                event.target.setStyle({
                  fillOpacity: 1,
                  color: '#FFFFFF',
                  weight: 3,
                });
                event.target.bringToFront();
              },
              mouseout: (event) => {
                event.target.setStyle({
                  fillOpacity: 0.85,
                  color: '#FFFFFF',
                  weight: 2,
                });
              },
            }}
          >
            <Tooltip
              permanent={false}
              direction="top"
              offset={[0, -10]}
              opacity={1}
              className="custom-tooltip"
            >
              <div style={{
                position: 'relative',
                background: '#2F446ACC',
                color: '#FFFFFF',
                borderRadius: '8px',
                padding: '8px',
                fontFamily: 'Arial, Helvetica, sans-serif',
                width: '212px',
                minHeight: '78px',
                boxShadow: 'none',
                border: '0',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minHeight: '20px' }}>
                  <div style={{ fontSize: '20px', lineHeight: 1, flexShrink: 0 }}>
                    {marker.flagEmoji}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '14px', lineHeight: 1.1 }}>
                    {marker.country}
                  </div>
                  <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '999px',
                    background: marker.status === 'deployed' ? '#6DBB5E' : marker.status === 'in-progress' ? '#F4A33C' : '#59A7FF',
                    marginLeft: 'auto',
                    flexShrink: 0,
                  }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', columnGap: '12px', rowGap: '8px' }}>
                  <div>
                    <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.72)', marginBottom: '3px', lineHeight: 1 }}>Water Scarcity</div>
                    <div style={{ fontSize: '13px', fontWeight: 700, lineHeight: 1.1 }}>{marker.waterScarcity}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.72)', marginBottom: '3px', lineHeight: 1 }}>Impact Score</div>
                    <div style={{ fontSize: '13px', fontWeight: 700, lineHeight: 1.1 }}>{marker.impactScore}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.72)', marginBottom: '3px', lineHeight: 1 }}>Capital</div>
                    <div style={{ fontSize: '13px', fontWeight: 700, lineHeight: 1.1 }}>{marker.capitalDeployed}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.72)', marginBottom: '3px', lineHeight: 1 }}>Deployments</div>
                    <div style={{ fontSize: '13px', fontWeight: 700, lineHeight: 1.1 }}>{marker.activeDeployments}</div>
                  </div>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '50%',
                    bottom: '-8px',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: '10px solid transparent',
                    borderRight: '10px solid transparent',
                    borderTop: '8px solid #2F446ACC',
                  }}
                />
              </div>
            </Tooltip>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
