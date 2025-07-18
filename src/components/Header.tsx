'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto">
          <Link href="/" className="flex items-center space-x-2">
            <DesignVerseLogo />
          </Link>
        </div>
        
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === href ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        
        <div className="ml-auto md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
              </Button>
          </SheetTrigger>
          <SheetContent side="left">
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
                      "font-medium text-lg transition-colors hover:text-primary",
                      pathname === href ? 'text-primary' : 'text-foreground'
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
