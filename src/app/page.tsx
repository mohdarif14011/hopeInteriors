import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Building, Paintbrush } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-card">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                  Crafting Spaces, Building Dreams
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Welcome to DesignVerse. We offer expert interior design, robust construction, and innovative AI-powered design consultations to bring your vision to life.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/services">Explore Our Services</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <Image
              src="https://placehold.co/600x400.png"
              width="600"
              height="400"
              alt="Hero"
              data-ai-hint="modern architecture"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Services</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">A Universe of Design Possibilities</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From concept to completion, we provide a comprehensive suite of services to meet all your design and construction needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 pt-12">
            <Link href="/portfolio">
              <Card className="h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <Paintbrush className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle className="font-headline">Interior Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Our award-winning designers create personalized and functional spaces that reflect your unique style.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
            <Link href="/construction">
              <Card className="h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <Building className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle className="font-headline">Construction</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We deliver high-quality construction services, ensuring your project is built to last, on time, and on budget.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
            <Link href="/ai-designer">
              <Card className="h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <Bot className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle className="font-headline">AI Design Ideas</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Leverage our cutting-edge AI to generate unique design concepts and visualize your ideas instantly.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
