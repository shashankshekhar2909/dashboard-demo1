'use client';
import dynamic from 'next/dynamic';
import { Box, Typography, Fab } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Sidebar from './layout/Sidebar';
import TopBar from './layout/TopBar';
import HeroKpiCard from './kpi/HeroKpiCard';
import SecondaryKpiCard from './kpi/SecondaryKpiCard';
const GeographicMap = dynamic(() => import('./map/GeographicMap'), {
  ssr: false,
  loading: () => <Box className="map-loading-placeholder" sx={{ height: 440, background: '#f0f4f8', borderRadius: '12px' }} />,
});
import AIExecutiveBrief from './ai-brief/AIExecutiveBrief';
import AlertsTicker from './ticker/AlertsTicker';
import PerformanceBanner from './performance/PerformanceBanner';
import DeepDiveGrid from './deep-dive/DeepDiveGrid';
import { heroKpiData, secondaryKpiData } from '@/data/kpiData';

export default function ExecutiveControlRoom() {
  return (
    <Box className="ecr-root" sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#EEF2F7' }}>
      <Sidebar />

      <Box className="ecr-main-area" sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <TopBar />

        <Box
          component="main"
          className="ecr-content"
          sx={{
            flex: 1,
            overflowY: 'auto',
            px: { xs: '24px', lg: '32px', xl: '40px' },
            py: '24px',
          }}
        >
          <Box
            className="ecr-page-header"
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              mb: '24px',
            }}
          >
            <Box className="ecr-page-title-group">
              <Typography sx={{ fontSize: '24px', fontWeight: 400, color: '#1A2340' }}>
                Executive Control Room
              </Typography>
              <Typography sx={{ fontSize: '14px', color: '#6B7A99', mt: '2px' }}>
                Strategic Overview &amp; Impact Posture
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'right' }}>
              <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#9AA3B8', mb: '6px' }}>
                System Status
              </Typography>
              <Box
                className="ecr-live-indicator"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  px: '12px',
                  py: '5px',
                  borderRadius: '999px',
                  bgcolor: '#EDF7ED',
                }}
              >
                <Box
                  className="ecr-live-dot"
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: '#027A48',
                    animation: 'pulse 2s infinite',
                  }}
                />
                <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#027A48', lineHeight: 1 }}>
                  Live Monitoring
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box className="ecr-hero-kpi-row" sx={{ display: 'flex', gap: '16px', mb: '16px' }}>
            {heroKpiData.map((kpi) => (
              <HeroKpiCard key={kpi.id} data={kpi} />
            ))}
          </Box>

          <Box
            className="ecr-secondary-kpi-row"
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '16px',
              mb: '24px',
              minWidth: 0,
            }}
          >
            {secondaryKpiData.map((kpi) => (
              <SecondaryKpiCard key={kpi.id} data={kpi} />
            ))}
          </Box>

          <Box className="ecr-map-brief-row" sx={{ display: 'flex', gap: '16px', mb: '16px', alignItems: 'stretch' }}>
            <Box className="ecr-map-wrapper" sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
              <GeographicMap />
            </Box>
            <AIExecutiveBrief />
          </Box>

          {/* Alerts ticker */}
          <Box className="ecr-ticker-row" sx={{ mb: '16px' }}>
            <AlertsTicker />
          </Box>

          {/* Performance banner */}
          <Box className="ecr-performance-row" sx={{ mb: '16px' }}>
            <PerformanceBanner />
          </Box>

          {/* Deep dive grid */}
          <Box className="ecr-deep-dive-row" sx={{ mb: '24px' }}>
            <DeepDiveGrid />
          </Box>
        </Box>
      </Box>

      {/* FAB */}
      <Fab
        className="ecr-ai-fab"
        sx={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          bgcolor: '#1565C0',
          color: '#FFFFFF',
          width: 56,
          height: 56,
          boxShadow: '0 8px 24px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
          '&:hover': {
            bgcolor: '#1565C0',
            filter: 'brightness(1.1)',
            transform: 'scale(1.05)',
          },
          '&:active': { transform: 'scale(0.97)' },
          transition: 'filter 200ms ease, transform 200ms ease',
          zIndex: 1200,
        }}
      >
        <AutoAwesomeIcon sx={{ fontSize: 24 }} />
      </Fab>

    </Box>
  );
}
