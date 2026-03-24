import 'leaflet/dist/leaflet.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import ThemeRegistry from './ThemeRegistry';

const roboto = Roboto({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AquaIntel — Executive Control Room',
  description: 'Real-time water infrastructure investment intelligence platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.className}>
      <body style={{ margin: 0, padding: 0 }}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
