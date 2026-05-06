import { Roboto } from 'next/font/google';
import ThemeRegistry from '@/components/providers/theme-registry';
import './globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata = {
  title: 'Buntu Ventures Ltd.',
  description: 'We build and invest in businesses that help people globally.',
  icons: {
    icon: '/img/favicon.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
