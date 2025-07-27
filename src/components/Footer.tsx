import Link from 'next/link';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Github, Twitter, Instagram } from 'lucide-react';
import { DesignVerseLogo } from './FrnitureLogo';

export function Footer() {
  return (
    <footer className="border-t bg-secondary text-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1: About */}
            <div className="space-y-4 lg:col-span-2">
                <DesignVerseLogo/>
                <p className="text-sm text-muted-foreground max-w-md">
                   DesignVerse is a premier interior design firm dedicated to creating beautiful, functional, and timeless spaces that reflect the unique personality of our clients.
                </p>
                <div className="flex space-x-4">
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-5 h-5"/></Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-5 h-5"/></Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="w-5 h-5"/></Link>
                </div>
            </div>

            {/* Column 2: Links */}
            <div>
                <h4 className="font-bold font-headline mb-4">Quick Links</h4>
                <nav className="flex flex-col space-y-2 text-sm">
                    <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
                    <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
                    <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link>
                    <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
                </nav>
            </div>

            {/* Column 3: Contact */}
             <div>
                <h4 className="font-bold font-headline mb-4">Contact Us</h4>
                <div className="text-sm space-y-2 text-muted-foreground">
                    <p>Email: 15saifbtceng092@gmail.com</p>
                    <p>Phone: 9026825095</p>
                    <p>Phone: 9598466676</p>
                </div>
            </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} DesignVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
