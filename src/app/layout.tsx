
import type { Metadata } from 'next';
import './globals.css';
import { ToastProvider, ToastViewport } from "@/components/ui/toast"
import React from 'react';

export const metadata: Metadata = {
  title: 'hope interiors - Crafting Exceptional Interiors',
  description: 'hope interiors is a full-service interior design firm dedicated to creating bespoke, timeless spaces that reflect your personality and lifestyle.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ToastProvider>
            {children}
          <ToastViewport />
        </ToastProvider>
      </body>
    </html>
  );
}
