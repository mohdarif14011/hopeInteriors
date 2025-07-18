import Link from 'next/link';

function DesignVerseLogo() {
  return (
    <div className="font-headline text-2xl font-bold tracking-wider text-foreground">
      DesignVerse
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 md:h-24 md:flex-row md:py-0">
        <div className='flex flex-col md:flex-row items-center gap-4'>
            <DesignVerseLogo/>
            <p className="text-sm text-center text-muted-foreground">
            &copy; {new Date().getFullYear()} DesignVerse. All rights reserved.
            </p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
           <Link href="/services" className="text-sm hover:underline">
            Services
          </Link>
          <Link href="/portfolio" className="text-sm hover:underline">
            Portfolio
          </Link>
          <Link href="/contact" className="text-sm hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
