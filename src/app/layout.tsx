'use client';

import type { Metadata } from 'next';
import './globals.css';
import { ToastProvider, ToastViewport } from "@/components/ui/toast"
import { AuthContext, useAuth } from '@/hooks/use-auth';
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};


// Note: Metadata export is commented out because it's not allowed in a client component.
// You can move this to a separate server component if needed.
// export const metadata: Metadata = {
//   title: 'DesignVerse - Crafting Exceptional Interiors',
//   description: 'DesignVerse is a full-service interior design firm dedicated to creating bespoke, timeless spaces that reflect your personality and lifestyle.',
// };

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
          <AuthProvider>
            {children}
          </AuthProvider>
          <ToastViewport />
        </ToastProvider>
      </body>
    </html>
  );
}
