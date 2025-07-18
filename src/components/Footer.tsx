import Link from 'next/link';
import { Button } from './ui/button';
import { Input } from './ui/input';

function FrnitureLogo() {
  return (
    <div className="font-headline text-4xl font-bold tracking-wider text-gray-400">
      FRNITURE
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <FrnitureLogo />
            <p className="text-muted-foreground mt-4 text-sm max-w-xs">
              Crafting timeless pieces for modern living, designed to be loved and lived in.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">Shop</h4>
            <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">New Arrivals</Link>
            <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">Living Room</Link>
            <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">Bedroom</Link>
            <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">Dining</Link>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">About</h4>
            <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">Our Story</Link>
            <Link href="/testimonials" className="block text-sm text-muted-foreground hover:text-primary">Testimonials</Link>
            <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">Careers</Link>
            <Link href="/contact" className="block text-sm text-muted-foreground hover:text-primary">Contact Us</Link>
          </div>
          <div>
             <h4 className="font-semibold font-headline">Newsletter</h4>
             <p className="text-muted-foreground text-sm mt-2">Join our mailing list for updates and offers.</p>
             <div className="flex mt-4">
                <Input placeholder="Email address" className="rounded-r-none"/>
                <Button className="rounded-l-none">Subscribe</Button>
             </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FRNITURE. All rights reserved.
          </p>
          <div className="flex gap-4">
             <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
             <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
