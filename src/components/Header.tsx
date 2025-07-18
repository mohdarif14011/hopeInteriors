
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Search, ShoppingBag, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { FrnitureLogo } from './FrnitureLogo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/ai-designer', label: 'AI Designer' },
  { href: '/contact', label: 'Contact' },
];


export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        hasScrolled ? 'bg-background/80 backdrop-blur-sm shadow-sm' : 'bg-transparent',
    )}>
      <div className="container grid grid-cols-3 h-20 items-center">
        <div className="flex items-center gap-4 justify-start">
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" className="p-0 text-base font-semibold uppercase">
                    MENU
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background">
                <SheetHeader>
                  <SheetTitle className="sr-only">Main Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Navigate through the main sections of the website.
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center p-4 border-b">
                        <FrnitureLogo />
                         <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close menu</span>
                        </Button>
                    </div>
                    <nav className="flex-grow p-4">
                        <ul className="space-y-4">
                        {navLinks.map(({ href, label }) => (
                            <li key={href}>
                            <Link
                                href={href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                "font-medium text-xl transition-colors hover:text-primary",
                                pathname === href ? 'text-primary' : 'text-foreground/70'
                                )}
                            >
                                {label}
                            </Link>
                            </li>
                        ))}
                        </ul>
                    </nav>
                </div>
            </SheetContent>
            </Sheet>
        </div>

        <div className="flex justify-center">
            <Link href="/">
                <FrnitureLogo />
            </Link>
        </div>
        
        <div className="flex items-center justify-end gap-2">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
                CART (1)
            </Button>
            <Button variant="ghost" size="icon">
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Cart</span>
            </Button>
            <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
            </Button>
             <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
            </Button>
        </div>
      </div>
    </header>
  );
}
