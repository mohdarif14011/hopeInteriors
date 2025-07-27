
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { HopeInteriorsLogo } from '@/components/HopeInteriorsLogo';
import { LayoutGrid, Briefcase, PlusCircle, Mail, Star } from 'lucide-react';

const adminNavLinks = [
  { href: '/admin/portfolio', label: 'Manage Portfolio', icon: Briefcase },
  { href: '/admin/portfolio/new', label: 'Add Project', icon: PlusCircle },
  { href: '/admin/testimonials', label: 'Testimonials', icon: Star },
  { href: '/admin/messages', label: 'Messages', icon: Mail },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden border-r bg-muted/40 lg:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/admin">
            <HopeInteriorsLogo />
          </Link>
        </div>
        <div className="flex-1 overflow-y-auto">
          <nav className="grid items-start px-4 text-sm font-medium">
            {adminNavLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                  (pathname === href || (href !== '/admin/portfolio' && pathname.startsWith(href))) && 'bg-muted text-primary'
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
