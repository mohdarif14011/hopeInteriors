
'use client';

import { ReactNode } from 'react';
import { AuthProvider, AuthGuard } from '@/hooks/useAuth';
import AdminSidebar from './AdminSidebar';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

const AdminHeader = () => {
    const { user, loading } = useAuth();
    const router = useRouter();

    const handleSignOut = async () => {
        await auth.signOut();
        router.push('/login');
    };

    if (loading) {
        return <div className="h-16 flex items-center justify-end px-4 border-b"> <Loader2 className="h-5 w-5 animate-spin" /></div>;
    }

    return (
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4">
            <h1 className="text-xl font-semibold">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground hidden sm:block">{user?.email}</p>
                <Button variant="outline" size="sm" onClick={handleSignOut}>
                    Sign Out
                </Button>
            </div>
        </header>
    );
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <AuthGuard>
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          <AdminSidebar />
          <div className="flex flex-col">
            <AdminHeader />
            <main className="flex-1 overflow-auto p-4 md:p-8">
              {children}
            </main>
          </div>
        </div>
      </AuthGuard>
    </AuthProvider>
  );
}
