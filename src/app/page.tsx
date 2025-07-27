
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useEffect, useState } from 'react';
import { getPortfolioItems, Project } from '@/services/portfolio';
import { getTestimonials, Testimonial } from '@/services/testimonials';
import { Skeleton } from '@/components/ui/skeleton';
import { AiDesignIdeas } from '@/components/AiDesignIdeas';

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

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoadingProjects(true);
        const items = await getPortfolioItems();
        const sortedItems = items.sort((a, b) => (b.createdAt?.toMillis() || 0) - (a.createdAt?.toMillis() || 0));
        setProjects(sortedItems.slice(0, 3));
      } catch (err) {
        console.error("Failed to fetch projects for homepage", err);
      } finally {
        setLoadingProjects(false);
      }
    };
    const fetchTestimonials = async () => {
      try {
        setLoadingTestimonials(true);
        const items = await getTestimonials();
        setTestimonials(items);
      } catch (err) {
        console.error("Failed to fetch testimonials", err);
      } finally {
        setLoadingTestimonials(false);
      }
    };
    fetchProjects();
    fetchTestimonials();
  }, []);

  return (
    <>
      <Header />
      <div className="bg-background text-foreground">
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
          <div className="container mx-auto px-4 h-full flex flex-col justify-end items-start text-white relative">
            <div className="max-w-xl text-left space-y-6 pb-5">
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
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="lg:pr-12">
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
                   <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
                      <Image
                          src="https://placehold.co/600x800.png"
                          width={600}
                          height={800}
                          alt="A designer sketching interior plans"
                          data-ai-hint="interior designer sketching"
                          className="object-cover rounded-xl"
                      />
                  </div>
              </div>
          </div>
        </section>
        
        {/* Most-Loved Picks Section */}
        <section className="bg-secondary py-24">
          <div className="container mx-auto px-4">
              <Carousel opts={{ align: "start", loop: projects.length > 2 }}>
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
                  {loadingProjects ? (
                     Array.from({ length: 3 }).map((_, i) => (
                        <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                           <Skeleton className="bg-background rounded-lg aspect-square w-full"/>
                        </CarouselItem>
                      ))
                  ) : (
                    projects.map((item) => (
                      <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                        <Link href={`/portfolio/${item.id}`}>
                          <Card className="overflow-hidden group relative border-none shadow-md rounded-xl">
                            <Image src={item.coverImageUrl} width={400} height={400} alt={item.title} data-ai-hint={item.category} className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-105"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                <p className="text-xs font-semibold uppercase tracking-wider opacity-80">{item.category}</p>
                                <h3 className="text-xl font-bold font-headline">{item.title}</h3>
                            </div>
                             <div className="absolute top-4 right-4 bg-background/80 text-foreground p-2 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                          </Card>
                        </Link>
                      </CarouselItem>
                    ))
                  )}
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
                      <div key={category.name} className="relative overflow-hidden rounded-xl aspect-square">
                          <Image src={category.image} fill alt={category.name} data-ai-hint={category.hint} className="object-cover" />
                          <div className="absolute inset-0 bg-black/40 transition-colors duration-300"></div>
                          <div className="absolute bottom-0 left-0 p-6 text-white">
                              <h3 className="text-xl font-bold font-headline">{category.name}</h3>
                              <p className="text-sm opacity-80">{category.description}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
        </section>


        {/* Testimonials Section */}
        <section className="bg-secondary py-24">
            <div className="container mx-auto px-4">
              <Carousel opts={{ align: "start", loop: testimonials.length > 2 }}>
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
                      {loadingTestimonials ? (
                        Array.from({ length: 3 }).map((_, i) => (
                            <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                                <Card className="h-full bg-background border-none shadow-sm flex flex-col justify-between p-8">
                                    <Skeleton className="h-24 w-full" />
                                    <div className="flex items-center gap-4 mt-6">
                                        <div className="w-full">
                                            <Skeleton className="h-5 w-1/2" />
                                        </div>
                                    </div>
                                </Card>
                            </CarouselItem>
                        ))
                      ) : (
                        testimonials.map((testimonial) => (
                        <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                            <Card className="h-full bg-background border-none shadow-sm flex flex-col justify-between p-8">
                                <div>
                                    <div className="flex text-yellow-500 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-current" />
                                        ))}
                                    </div>
                                    <blockquote className="text-base text-muted-foreground mb-6">
                                        "{testimonial.comment}"
                                    </blockquote>
                                </div>
                                <div>
                                    <p className="font-semibold">{testimonial.name}</p>
                                </div>
                            </Card>
                        </CarouselItem>
                        ))
                      )}
                  </CarouselContent>
              </Carousel>
            </div>
        </section>

        {/* AI Design Ideas Section */}
        <AiDesignIdeas />

      </div>
      <Footer />
    </>
  );
}
