import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import InteractiveBackground from '@/components/interactive-background';
import { FirebaseClientProvider } from '@/firebase';

export const metadata: Metadata = {
  title: 'MagaTech Portfolio',
  description: 'A modern, responsive portfolio for MagaTech, showcasing projects and skills.',
  icons: {
    icon: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='hsl(145 58% 54%)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3crect width='18' height='18' x='3' y='3' rx='2'/%3e%3cpath d='m10 9-2 2 2 2'/%3e%3cpath d='m14 15 2-2-2-2'/%3e%3c/svg%3e",
    apple: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='hsl(145 58% 54%)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3crect width='18' height='18' x='3' y='3' rx='2'/%3e%3cpath d='m10 9-2 2 2 2'/%3e%3cpath d='m14 15 2-2-2-2'/%3e%3c/svg%3e",
  }
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
        <FirebaseClientProvider>
          <div className="fixed top-0 left-0 w-full h-full bg-background -z-20" />
          <InteractiveBackground />
          {children}
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
