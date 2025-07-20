
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { DesignVerseLogo } from './FrnitureLogo';

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

  const headerTextColor = hasScrolled || pathname !== '/' ? 'text-foreground' : 'text-white';
  const isHomePage = pathname === '/';
  const finalHeaderTextColor = isHomePage && !hasScrolled ? 'text-white' : 'text-foreground';


  return (
    <header className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        hasScrolled ? 'bg-background/80 backdrop-blur-sm shadow-sm' : 'bg-transparent',
    )}>
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-4 justify-start">
             <Link href="/">
                <DesignVerseLogo className={finalHeaderTextColor}/>
            </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
                <Link
                    key={href}
                    href={href}
                    className={cn(
                    "font-medium text-sm transition-colors hover:text-primary",
                    pathname === href ? 'text-primary' : finalHeaderTextColor
                    )}
                >
                    {label}
                </Link>
            ))}
        </nav>
      </div>
    </header>
  );
}
