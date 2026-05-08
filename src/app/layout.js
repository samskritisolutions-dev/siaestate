import { Fraunces, Inter } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['SOFT', 'opsz'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const geist = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-geist',
  display: 'swap',
});

export const metadata = {
  title: 'Sia Estates & Promises Built in Stone',
  description:
    'Building the promises of tomorrow. A legacy of 20+ years revolutionizing real estate in Hyderabad.',
  icons: {
    icon: '/images/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${geist.variable}`}>
      <body className="overflow-x-hidden preload">{children}</body>
    </html>
  );
}
