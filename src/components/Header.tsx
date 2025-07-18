'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Search, ShoppingBag, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Inspiration' },
  { href: '/construction', label: 'Products' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

function FrnitureLogo() {
  return (
    <div className="font-headline text-2xl font-bold tracking-wide">
      FRNITURE
    </div>
  );
}


export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="hidden md:flex items-center gap-2">
           <FrnitureLogo />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'transition-colors hover:text-primary',
                pathname === href ? 'text-primary font-semibold' : 'text-muted-foreground'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden flex-1">
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
                    <FrnitureLogo />
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

        <div className="md:hidden">
            <Link href="/" className="flex items-center gap-2">
                <FrnitureLogo />
            </Link>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
           <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
