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
              direction="right"
              offset={[14, -2]}
              className="custom-tooltip"
            >
              <div style={{
                background: '#2F446A',
                color: '#FFFFFF',
                borderRadius: '12px',
                padding: '12px',
                fontFamily: 'Arial, Helvetica, sans-serif',
                minWidth: '220px',
                border: '1px solid rgba(255,255,255,0.10)',
                boxShadow: '0 18px 36px rgba(29, 43, 67, 0.32)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <div style={{ fontWeight: 700, fontSize: '13px', lineHeight: 1.1 }}>
                    {marker.flagEmoji} {marker.country}
                  </div>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '999px',
                    background: marker.status === 'deployed' ? '#5cb56f' : marker.status === 'in-progress' ? '#f18b34' : '#59a7ff',
                    marginLeft: 'auto',
                  }} />
                </div>
                <div style={{ fontSize: '11px', color: '#A8B8D8', marginBottom: '10px' }}>
                  {marker.region}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px' }}>
                  <div>
                    <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.64)', marginBottom: '3px' }}>Water Scarcity</div>
                    <div style={{ fontSize: '12px', fontWeight: 700 }}>{marker.waterScarcity}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.64)', marginBottom: '3px' }}>Impact Score</div>
                    <div style={{ fontSize: '12px', fontWeight: 700 }}>{marker.impactScore}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.64)', marginBottom: '3px' }}>Capital</div>
                    <div style={{ fontSize: '12px', fontWeight: 700 }}>{marker.capitalDeployed}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.64)', marginBottom: '3px' }}>Deployments</div>
                    <div style={{ fontSize: '12px', fontWeight: 700 }}>{marker.activeDeployments}</div>
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
