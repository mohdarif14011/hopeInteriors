
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, ArrowRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const heroCollections = [
    {
        name: "Collection 1",
        image: "https://placehold.co/150x100.png",
        hint: "living room"
    },
    {
        name: "Collection 2",
        image: "https://placehold.co/150x100.png",
        hint: "bedroom furniture"
    },
    {
        name: "Collection 3",
        image: "https://placehold.co/150x100.png",
        hint: "dining set"
    }
];

const lovedPicks = [
    {
        sku: 'S123',
        name: 'Modern Linen Sofa',
        description: '3-seater, beige linen',
        price: 999,
        image: 'https://placehold.co/400x400.png',
        hint: 'modern sofa'
    },
    {
        sku: 'B789',
        name: 'Tufted Velvet Bed',
        description: 'Queen size, grey velvet',
        price: 789,
        image: 'https://placehold.co/400x400.png',
        hint: 'velvet bed'
    },
    {
        sku: 'T240',
        name: 'Marble Coffee Table',
        description: 'Round, black marble',
        price: 645,
        image: 'https://placehold.co/400x400.png',
        hint: 'marble table'
    },
];

const roomCategories = [
    {
        name: "Living Room Collection",
        description: "Comfortable, elegant, stylish",
        image: "https://placehold.co/600x600.png",
        hint: "modern living room"
    },
    {
        name: "Bedroom Essentials",
        description: "Cozy, tranquil, serene",
        image: "https://placehold.co/600x600.png",
        hint: "cozy bedroom"
    },
    {
        name: "Dining Room Elegance",
        description: "Modern, chic, functional",
        image: "https://placehold.co/600x600.png",
        hint: "dining room"
    },
    {
        name: "Home Decor & Accessories",
        description: "Stylish, unique, personal",
        image: "https://placehold.co/600x600.png",
        hint: 'home decor'
    }
]

const testimonials = [
  {
    name: "Emily Watson",
    comment: "The team at Frniture was amazing. They helped me find the perfect pieces for my new apartment and the delivery was seamless. I couldn't be happier with the quality and style!",
    avatar: "https://placehold.co/100x100.png",
    fallback: "EW",
  },
  {
    name: "John Smith",
    comment: "I've been a loyal customer for years. The craftsmanship is consistently excellent, and their designs are always on-trend yet timeless. Highly recommend for anyone looking to invest in quality furniture.",
    avatar: "https://placehold.co/100x100.png",
    fallback: "JS",
  },
  {
    name: "Sarah Miller",
    comment: "From the initial idea to the final installation, the team was professional, creative, and attentive to every detail. They transformed our living room into a space that's not only beautiful but perfectly functional.",
    avatar: "https://placehold.co/100x100.png",
    fallback: "SM",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      {/* Hero Section */}
      <section className="w-full h-[calc(100vh-80px)] relative flex flex-col pt-20">
        <Image
            src="https://placehold.co/1600x900.png"
            layout="fill"
            alt="Modern dining room with stylish furniture"
            data-ai-hint="modern dining room table"
            className="object-cover -z-10"
        />
        <div className="absolute inset-0 bg-black/20 -z-10"></div>
        
        <div className="container mx-auto px-4 flex-grow flex flex-col justify-center">
            <div className="max-w-xl text-left text-white space-y-6 bg-black/30 backdrop-blur-sm p-8 rounded-lg">
                <h1 className="text-5xl lg:text-7xl font-bold font-headline tracking-tight">
                Discover Timeless Furniture for Every Space
                </h1>
                <p className="text-lg text-white/90">
                Transform your home with stylish, durable, and comfortable furniture designed to elevate your living experience.
                </p>
                <div className="flex items-center gap-6">
                    <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black group">
                        <Link href="/contact">Shop Now <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"/></Link>
                    </Button>
                    <Button asChild size="lg" variant="link" className="text-white hover:text-white/80 p-0">
                        <Link href="/services">Explore Collections <ArrowRight className="w-4 h-4 ml-1"/></Link>
                    </Button>
                </div>
            </div>
        </div>

        <div className="container mx-auto px-4 py-8">
            <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-lg">
                <CarouselContent>
                    {heroCollections.map((item, index) => (
                    <CarouselItem key={index} className="basis-1/3">
                         <div className="aspect-[3/2] rounded-md overflow-hidden">
                            <Image src={item.image} width={150} height={100} alt={item.name} data-ai-hint={item.hint} className="w-full h-full object-cover"/>
                        </div>
                    </CarouselItem>
                    ))}
                    <CarouselItem className="basis-2/3">
                        <div className="text-white/90 h-full flex items-center">
                            <p>Transform your home with stylish, durable, and comfortable.</p>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <div className="flex items-center gap-4 mt-4">
                     <p className="text-white font-semibold">See All</p>
                     <div className="flex-grow h-px bg-white/20"></div>
                     <CarouselPrevious className="bg-transparent border-white/50 text-white hover:bg-white/10 relative -left-0 -top-0 -translate-y-0" />
                     <CarouselNext className="bg-transparent border-white/50 text-white hover:bg-white/10 relative -right-0 -top-0 -translate-y-0" />
                </div>
            </Carousel>
        </div>
      </section>

      {/* Crafting Comfort Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">ABOUT US</p>
                    <h2 className="text-4xl lg:text-5xl font-bold font-headline mt-4 mb-6">Crafting Comfort, Defining Spaces</h2>
                    <p className="text-muted-foreground mb-8 max-w-prose">
                        We believe that furniture should be more than just functional; it should be a reflection of your personality and a source of comfort and joy. Our mission is to provide you with high-quality, beautifully designed pieces that stand the test of time.
                    </p>
                     <div className="grid gap-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-secondary p-3 rounded-full"><Star className="w-8 h-8 text-foreground" /></div>
                            <div>
                                <p className="text-2xl font-bold">10,000+</p>
                                <p className="text-muted-foreground">Items Collection</p>
                            </div>
                        </div>
                         <div className="flex items-center gap-4">
                            <div className="bg-secondary p-3 rounded-full"><Star className="w-8 h-8 text-foreground" /></div>
                            <div>
                                <p className="text-2xl font-bold">5,000+</p>
                                <p className="text-muted-foreground">Happy customers & growing</p>
                            </div>
                        </div>
                         <div className="flex items-center gap-4">
                            <div className="bg-secondary p-3 rounded-full"><Star className="w-8 h-8 text-foreground" /></div>
                            <div>
                                <p className="text-2xl font-bold">4.9/5</p>
                                <p className="text-muted-foreground">Based on all of our reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
                    <Image
                        src="https://placehold.co/600x800.png"
                        fill
                        alt="Stylish chair in a well-lit room"
                        data-ai-hint="stylish chair room"
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
                    <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Collection</p>
                    <h2 className="text-4xl lg:text-5xl font-bold font-headline mt-2">Our Most-Loved Picks</h2>
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
                            <Image src={item.image} width={400} height={400} alt={item.name} data-ai-hint={item.hint} className="w-full h-full object-contain"/>
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.sku}</p>
                                <h3 className="text-lg font-semibold font-headline">{item.name}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                            <p className="text-lg font-bold">${item.price}</p>
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
                    <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Our Categories</p>
                    <h2 className="text-4xl lg:text-5xl font-bold font-headline mt-2">Find the Perfect Piece for Every Room</h2>
                </div>
                <p className="text-muted-foreground max-w-md hidden lg:block">
                    Explore our curated collections for every corner of your home, designed to bring harmony, comfort, and style to your life.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {roomCategories.map(category => (
                    <Link href="/portfolio" key={category.name}>
                        <div className="relative group overflow-hidden rounded-xl aspect-square">
                            <Image src={category.image} layout="fill" objectFit="cover" alt={category.name} data-ai-hint={category.hint} />
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
                        <h2 className="text-4xl lg:text-5xl font-bold font-headline mt-2">Hear from Our Happy Customers</h2>
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
        <Image src="https://placehold.co/1600x800.png" alt="Comfortable modern sofa" data-ai-hint="modern sofa" layout="fill" objectFit="cover" className="-z-10"/>
        <div className="absolute inset-0 bg-black/50 -z-10"></div>
        <div className="container mx-auto px-4 grid items-center justify-center gap-4 text-center text-white">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-headline">Upgrade Your Space with Timeless Furniture</h2>
            <p className="mx-auto max-w-2xl text-white/80 md:text-xl">
              Let's collaborate to create a space that's uniquely yours. Contact us today for a consultation and discover the perfect pieces for your home.
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
