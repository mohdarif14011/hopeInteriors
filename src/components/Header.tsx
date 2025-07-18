'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/ai-designer', label: 'AI Designer' },
  { href: '/contact', label: 'Contact' },
];

function DesignVerseLogo() {
  return (
    <div className="font-headline text-2xl font-bold tracking-wide">
      DesignVerse
    </div>
  );
}


export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute top-0 z-50 w-full bg-transparent text-white">
      <div className="container flex h-20 items-center">
        <div className="mr-auto">
          <Link href="/" className="flex items-center space-x-2">
            <DesignVerseLogo />
          </Link>
        </div>
        
        <nav className="hidden items-center space-x-8 text-sm font-medium md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'transition-colors hover:text-white/80',
                pathname === href ? 'text-white' : 'text-white/60'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center ml-8 border-l border-white/20 pl-8">
            <Phone className="w-5 h-5 mr-3"/>
            <div>
                <p className="text-xs text-white/60">Call Us Anytime</p>
                <p className="font-semibold text-sm">123-456-7890</p>
            </div>
        </div>

        <div className="ml-auto md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
              </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-secondary text-secondary-foreground">
              <div className="grid gap-4 py-6">
              <Link href="/" className="flex items-center gap-2 mb-4" onClick={() => setIsOpen(false)}>
                  <DesignVerseLogo />
              </Link>
              {navLinks.map(({ href, label }) => (
                  <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                      "font-medium text-lg transition-colors hover:text-accent",
                      pathname === href ? 'text-accent' : 'text-secondary-foreground'
                  )}
                  >
                  {label}
                  </Link>
              ))}
              </div>
          </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
