import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import InteractiveBackground from '@/components/interactive-background';

export const metadata: Metadata = {
  title: 'MagaTech Portfolio',
  description: 'A modern, responsive portfolio for MagaTech, showcasing projects and skills.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <div className="fixed top-0 left-0 w-full h-full bg-background -z-20" />
        <InteractiveBackground />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
