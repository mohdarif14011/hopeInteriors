
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { DesignVerseLogo } from './FrnitureLogo';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, User } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/ai-designer', label: 'AI Designer' },
  { href: '/contact', label: 'Contact' },
];


export function Header() {
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isHomePage = pathname === '/';
  const isTransparent = isHomePage && !hasScrolled;
  const isAdminPage = pathname.startsWith('/admin');

  if (isAdminPage) {
    return null;
  }

  return (
    <header className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isTransparent ? 'bg-transparent' : 'bg-background/80 backdrop-blur-sm shadow-sm',
    )}>
      <div className="container flex h-20 items-center justify-between">
        <Link href="/">
            <DesignVerseLogo className={cn(isTransparent ? 'text-white' : 'text-foreground')}/>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
                <Link
                    key={href}
                    href={href}
                    className={cn(
                    "font-medium text-sm transition-colors hover:text-primary",
                    pathname === href ? 'text-primary' : (isTransparent ? 'text-white' : 'text-foreground')
                    )}
                >
                    {label}
                </Link>
            ))}
        </nav>

        <div className="flex items-center gap-2">
            <Link href="/admin">
              <Button variant="ghost" size="icon" aria-label="Admin Login">
                <User className={cn("h-5 w-5", isTransparent ? 'text-white' : 'text-foreground')} />
              </Button>
            </Link>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className={cn("h-6 w-6", isTransparent ? 'text-white' : 'text-foreground')}/>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <nav className="flex flex-col gap-6 text-lg font-medium mt-10">
                         {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={cn(
                                "transition-colors hover:text-primary",
                                 pathname === href ? 'text-primary' : 'text-foreground'
                                )}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
