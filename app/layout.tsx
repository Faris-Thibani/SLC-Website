import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SLC Manufacturing - Premium Street Light Poles',
  description: 'High-quality street light pole manufacturing with innovative solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
