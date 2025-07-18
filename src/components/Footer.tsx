import Link from 'next/link';
import { Button } from './ui/button';
import { Input } from './ui/input';

function DesignVerseLogo() {
  return (
    <div className="font-headline text-2xl font-bold tracking-wider">
      DesignVerse
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t bg-secondary text-secondary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1: About */}
            <div className="space-y-4">
                <DesignVerseLogo/>
                <p className="text-sm text-secondary-foreground/70">
                    Crafting beautiful and functional kitchens with a passion for design and a commitment to quality.
                </p>
            </div>

            {/* Column 2: Links */}
            <div>
                <h4 className="font-bold font-headline mb-4">Quick Links</h4>
                <nav className="flex flex-col space-y-2 text-sm">
                    <Link href="/about" className="text-secondary-foreground/70 hover:text-accent transition-colors">About Us</Link>
                    <Link href="/services" className="text-secondary-foreground/70 hover:text-accent transition-colors">Services</Link>
                    <Link href="/portfolio" className="text-secondary-foreground/70 hover:text-accent transition-colors">Portfolio</Link>
                    <Link href="/contact" className="text-secondary-foreground/70 hover:text-accent transition-colors">Contact</Link>
                </nav>
            </div>

            {/* Column 3: Contact */}
             <div>
                <h4 className="font-bold font-headline mb-4">Contact Info</h4>
                <div className="text-sm space-y-2 text-secondary-foreground/70">
                    <p>123 Design Avenue,<br/>Creativity City, DC 12345</p>
                    <p>Email: contact@designverse.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>

            {/* Column 4: Newsletter */}
            <div>
                <h4 className="font-bold font-headline mb-4">Newsletter</h4>
                <p className="text-sm text-secondary-foreground/70 mb-4">Subscribe for design tips and special offers.</p>
                <form className="flex gap-2">
                    <Input type="email" placeholder="Your email" className="bg-background/10 border-white/20 text-white placeholder:text-white/50 flex-1" />
                    <Button type="submit" variant="outline">Subscribe</Button>
                </form>
            </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-secondary-foreground/60">
            <p>&copy; {new Date().getFullYear()} DesignVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
