
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const lovedPicks = [
    {
        sku: 'P-001',
        name: 'The Atherton Project',
        description: 'Full-home luxury remodel',
        price: 'View',
        image: 'https://placehold.co/400x400.png',
        hint: 'luxury home interior'
    },
    {
        sku: 'P-002',
        name: 'The Bayfront Loft',
        description: 'Modern open-concept living',
        price: 'View',
        image: 'https://placehold.co/400x400.png',
        hint: 'modern loft'
    },
    {
        sku: 'P-003',
        name: 'The Coastal Retreat',
        description: 'Serene beachfront villa design',
        price: 'View',
        image: 'https://placehold.co/400x400.png',
        hint: 'beach house interior'
    },
];

const roomCategories = [
    {
        name: "Living Spaces",
        description: "Elegant, functional, inviting",
        image: "https://placehold.co/600x600.png",
        hint: "modern living room"
    },
    {
        name: "Kitchen & Dining",
        description: "Bespoke, refined, culinary",
        image: "https://placehold.co/600x600.png",
        hint: "modern kitchen"
    },
    {
        name: "Bedrooms & Suites",
        description: "Serene, personal, luxurious",
        image: "https://placehold.co/600x600.png",
        hint: "luxury bedroom"
    },
    {
        name: "Outdoor Living",
        description: "Seamless, stylish, relaxing",
        image: "https://placehold.co/600x600.png",
        hint: 'outdoor patio'
    }
]

const testimonials = [
  {
    name: "Emily Watson",
    comment: "Working with DesignVerse was a dream. They understood my vision perfectly and brought it to life with incredible attention to detail. My home now feels both luxurious and deeply personal.",
    avatar: "https://placehold.co/100x100.png",
    fallback: "EW",
  },
  {
    name: "John Smith",
    comment: "The professionalism and creativity of the DesignVerse team are unmatched. They transformed our outdated office into a modern, inspiring workspace that has boosted morale and productivity.",
    avatar: "https://placehold.co/100x100.png",
    fallback: "JS",
  },
  {
    name: "Sarah Miller",
    comment: "From the initial concept to the final reveal, the entire process was seamless and enjoyable. Their expertise in material selection and space planning is truly exceptional. I couldn't be happier.",
    avatar: "https://placehold.co/100x100.png",
    fallback: "SM",
  },
];

export default function HomePage() {
  return (
    <div className=" text-foreground">
      {/* Hero Section */}
      <section className="w-full h-screen relative">
        <Image
          src="https://res.cloudinary.com/dbjx14ajj/image/upload/v1752990468/view-futuristic-lighting-lamp-design_imgdsm.jpg"
          alt="Hero background image of a modern interior"
          fill
          priority
          className="object-cover"
          data-ai-hint="modern interior design"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-24 md:pb-32 items-start text-white relative">
          <div className="max-w-xl text-left space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold font-headline tracking-tight [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
              Where Vision Meets Bespoke Interior Design
            </h1>
            <p className="text-lg text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
              We craft timeless, personalized interiors that tell your story. Experience the art of living through exceptional design.
            </p>
            <div className="flex items-center gap-6">
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black group">
                <Link href="/portfolio">View Our Work<ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"/></Link>
              </Button>
              <Button asChild size="lg" variant="link" className="text-white hover:text-white/80 p-0">
                <Link href="/services">Our Services<ArrowRight className="w-4 h-4 ml-1"/></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Crafting Comfort Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">ABOUT US</p>
                    <h2 className="text-4xl lg:text-5xl font-bold font-headline mt-4 mb-6">Designing Spaces, Inspiring Lives</h2>
                    <p className="text-muted-foreground mb-8 max-w-prose">
                        At DesignVerse, we believe that a well-designed space has the power to transform your life. Our philosophy centers on creating environments that are not only beautiful but also deeply personal and functional. We blend artistry with a meticulous process to deliver exceptional interiors.
                    </p>
                     <div className="grid gap-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-secondary p-3 rounded-full"><Star className="w-8 h-8 text-foreground" /></div>
                            <div>
                                <p className="text-2xl font-bold">100+</p>
                                <p className="text-muted-foreground">Completed Projects</p>
                            </div>
                        </div>
                         <div className="flex items-center gap-4">
                            <div className="bg-secondary p-3 rounded-full"><Star className="w-8 h-8 text-foreground" /></div>
                            <div>
                                <p className="text-2xl font-bold">15+</p>
                                <p className="text-muted-foreground">Years of Experience</p>
                            </div>
                        </div>
                         <div className="flex items-center gap-4">
                            <div className="bg-secondary p-3 rounded-full"><Star className="w-8 h-8 text-foreground" /></div>
                            <div>
                                <p className="text-2xl font-bold">4.9/5</p>
                                <p className="text-muted-foreground">Client Satisfaction Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
                    <Image
                        src="https://placehold.co/600x800.png"
                        fill
                        alt="A designer sketching interior plans"
                        data-ai-hint="interior designer sketching"
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
      </section>
      
      {/* Most-Loved Picks Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
            <Carousel opts={{ align: "start", loop: true }}>
            <div className="flex justify-between items-end mb-12">
                <div>
                    <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Our Portfolio</p>
                    <h2 className="text-4xl lg:text-5xl font-bold font-headline mt-2">Signature Projects</h2>
                </div>
                <div className="hidden md:flex gap-2">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
            </div>
              <CarouselContent>
                {lovedPicks.map((item) => (
                  <CarouselItem key={item.sku} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden border-none shadow-none bg-transparent">
                      <CardContent className="p-0">
                        <div className="bg-background rounded-lg p-4 aspect-square relative group mb-4">
                            <Image src={item.image} width={400} height={400} alt={item.name} data-ai-hint={item.hint} className="w-full h-full object-cover"/>
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.sku}</p>
                                <h3 className="text-lg font-semibold font-headline">{item.name}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                             <Link href="/portfolio" className="text-lg font-bold">View</Link>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
        </div>
      </section>
      
       {/* Find the Perfect Piece Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Design Focus</p>
                    <h2 className="text-4xl lg:text-5xl font-bold font-headline mt-2">Designing for Every Aspect of Life</h2>
                </div>
                <p className="text-muted-foreground max-w-md hidden lg:block">
                    Our expertise spans across a diverse range of spaces, each designed with a unique purpose and a commitment to quality.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {roomCategories.map(category => (
                    <Link href="/portfolio" key={category.name}>
                        <div className="relative group overflow-hidden rounded-xl aspect-square">
                            <Image src={category.image} fill alt={category.name} data-ai-hint={category.hint} className="object-cover" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                <h3 className="text-xl font-bold font-headline">{category.name}</h3>
                                <p className="text-sm opacity-80">{category.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <Carousel opts={{ align: "start", loop: true }}>
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Testimonials</p>
                        <h2 className="text-4xl lg:text-5xl font-bold font-headline mt-2">What Our Clients Say</h2>
                    </div>
                    <div className="hidden md:flex items-center gap-2">
                        <CarouselPrevious className="relative -left-0 -top-0 -translate-y-0" />
                        <CarouselNext className="relative -right-0 -top-0 -translate-y-0" />
                    </div>
                </div>
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <Card className="h-full bg-background border-none shadow-sm flex flex-col justify-between p-8">
                            <div>
                                <div className="flex text-yellow-500 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-current" />
                                    ))}
                                </div>
                                <blockquote className="text-base text-muted-foreground mb-6">
                                    "{testimonial.comment}"
                                </blockquote>
                            </div>
                            <div className="flex items-center gap-4">
                                <Avatar className="w-12 h-12">
                                    <AvatarImage src={testimonial.avatar} data-ai-hint="person portrait"/>
                                    <AvatarFallback>{testimonial.fallback}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold">{testimonial.name}</p>
                                </div>
                            </div>
                        </Card>
                    </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
          </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-32 relative overflow-hidden">
        <Image src="https://placehold.co/1600x800.png" alt="A beautiful modern interior" data-ai-hint="modern interior" fill className="object-cover -z-10"/>
        <div className="absolute inset-0 bg-black/50 -z-10"></div>
        <div className="container mx-auto px-4 grid items-center justify-center gap-4 text-center text-white">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-headline">Let's Create Your Dream Space</h2>
            <p className="mx-auto max-w-2xl text-white/80 md:text-xl">
              Ready to transform your home or business? Contact us today for a consultation and let's begin the journey of creating a space that is uniquely yours.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
             <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
                <Link href="/contact">Book a Consultation</Link>
              </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
