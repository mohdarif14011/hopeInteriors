
'use server';

import AuthGuard from '@/components/AuthGuard';
import { DesignVerseLogo } from '@/components/FrnitureLogo';
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { Home, LogOut, Package } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const handleSignOut = async () => {
    'use server';
    await signOut(auth);
    redirect('/login');
}

const navItems = [
    { href: '/admin', icon: Home, label: 'Dashboard' },
    { href: '/admin/portfolio', icon: Package, label: 'Portfolio' },
];

function AdminSidebar() {
    return (
        <div className="flex h-full min-h-screen w-64 flex-col bg-secondary text-secondary-foreground">
            <div className="p-4 border-b">
                <Link href="/"><DesignVerseLogo /></Link>
            </div>
            <nav className="flex-1 space-y-2 p-4">
                 {navItems.map((item) => (
                    <Button key={item.label} variant="ghost" className="w-full justify-start gap-2" asChild>
                        <Link href={item.href}>
                            <item.icon className="h-4 w-4" />
                            {item.label}
                        </Link>
                    </Button>
                ))}
            </nav>
            <div className="p-4 border-t">
                 <form action={handleSignOut}>
                    <Button variant="ghost" className="w-full justify-start gap-2">
                        <LogOut className="h-4 w-4" />
                        Sign Out
                    </Button>
                </form>
            </div>
        </div>
    )
}


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthGuard>
        <div className="flex">
            <AdminSidebar />
            <main className="flex-1 p-8 bg-background">
                {children}
            </main>
        </div>
    </AuthGuard>
  )
}
