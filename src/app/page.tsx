
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const products = [
  {
    name: 'Sofa',
    price: 5199,
    description: 'Modern Sectional Sofa',
    category: 'Spacious and comfortable for the whole family.',
    image: 'https://placehold.co/400x400.png',
    hint: 'modern sofa'
  },
  {
    name: 'Bed',
    price: 1788,
    description: 'Upholstered Platform Bed',
    category: 'Elegant design with a comfortable headboard.',
    image: 'https://placehold.co/400x400.png',
    hint: 'platform bed'
  },
  {
    name: 'Table',
    price: 2045,
    description: 'Marble Dining Table',
    category: 'Luxurious and durable centerpiece.',
    image: 'https://placehold.co/400x400.png',
    hint: 'marble table'
  },
  {
    name: 'Dining Set',
    price: 3099,
    description: 'Modern Dining Set',
    category: 'Seats four comfortably, perfect for small spaces.',
    image: 'https://placehold.co/400x400.png',
    hint: 'dining table chairs'
  },
  {
    name: 'Office Chair',
    price: 3799,
    description: 'Ergonomic Office Chair',
    category: 'Supportive and stylish for your home office.',
    image: 'https://placehold.co/400x400.png',
    hint: 'office chair'
  },
  {
    name: 'Sideboard',
    price: 1289,
    description: 'Fluted Sideboard',
    category: 'Ample storage with a touch of elegance.',
    image: 'https://placehold.co/400x400.png',
    hint: 'wood sideboard'
  },
];

const roomCategories = [
  {
    name: 'Living Room Collection',
    image: 'https://placehold.co/600x600.png',
    hint: 'luxury living room'
  },
  {
    name: 'Bedroom Essentials',
    image: 'https://placehold.co/600x600.png',
    hint: 'modern bedroom'
  },
  {
    name: 'Dining Room Elegance',
    image: 'https://placehold.co/600x600.png',
    hint: 'dining room'
  },
  {
    name: 'Home Decor & Accessories',
    image: 'https://placehold.co/600x600.png',
    hint: 'home decor'
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="w-full bg-background py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="relative aspect-[16/9] md:aspect-[2/1] lg:aspect-[2.4/1] rounded-2xl overflow-hidden">
            <Image
              src="https://placehold.co/1200x500.png"
              fill
              alt="Hero"
              data-ai-hint="modern interior design"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-8 md:p-12">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-headline">
                Discover Timeless Furniture for Every Space
              </h1>
              <p className="max-w-[600px] text-white/90 md:text-xl mt-4">
                A curated selection of designs that bring comfort, style, and functionality to your home.
              </p>
              <div className="flex gap-4 mt-6">
                <Button size="lg">Shop Now</Button>
                <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
                  Explore Designs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crafting Comfort Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className='space-y-6'>
              <p className="text-sm uppercase text-muted-foreground tracking-widest font-headline">Our Philosophy</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 font-headline">Crafting Comfort, Defining Spaces</h2>
              <p className="text-muted-foreground text-lg">
                We believe that furniture should be more than just functional. It should be a reflection of your personality, a source of comfort, and a cornerstone of your home's identity. That's why we're dedicated to sourcing and crafting pieces that are built to last, designed to inspire, and destined to be loved.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-secondary p-6 rounded-2xl">
                  <p className="text-3xl font-bold font-headline">10,000+</p>
                  <p className="text-muted-foreground mt-1">Items in Collection</p>
                </div>
                <div className="bg-secondary p-6 rounded-2xl">
                  <p className="text-3xl font-bold font-headline">5,000+</p>
                  <p className="text-muted-foreground mt-1">Happy Customers</p>
                </div>
              </div>
               <div className="bg-secondary p-6 rounded-2xl">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="fill-current"/> <Star className="fill-current"/> <Star className="fill-current"/> <Star className="fill-current"/> <Star className="fill-current"/>
                  </div>
                  <p className="text-3xl font-bold font-headline mt-2">4.9/5</p>
                  <p className="text-muted-foreground mt-1">Star Rating</p>
                </div>
            </div>
            <div>
              <Image src="https://placehold.co/600x400.png" alt="Comfortable chair" data-ai-hint="armchair interior" width={600} height={400} className="rounded-2xl"/>
            </div>
          </div>
        </div>
      </section>
      
      {/* Premium Craftsmanship Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase text-muted-foreground tracking-widest font-headline">What we guarantee</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 font-headline">Premium Craftsmanship, Unmatched Comfort</h2>
              <Accordion type="single" collapsible className="w-full mt-6" defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium font-headline">Premium Quality</AccordionTrigger>
                  <AccordionContent>Our furniture is crafted from the finest materials, ensuring durability and timeless beauty.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium font-headline">Modern & Timeless Designs</AccordionTrigger>
                  <AccordionContent>We blend contemporary aesthetics with classic design principles to create pieces that never go out of style.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium font-headline">Fast & Free Delivery</AccordionTrigger>
                  <AccordionContent>Enjoy complimentary delivery on all orders, with professional assembly available.</AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium font-headline">Satisfaction Guarantee</AccordionTrigger>
                  <AccordionContent>Your satisfaction is our priority. We offer a 30-day return policy, no questions asked.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
             <Image src="https://placehold.co/600x700.png" alt="Stylish room" data-ai-hint="minimalist interior" width={600} height={700} className="rounded-2xl object-cover"/>
          </div>
        </div>
      </section>

      {/* Most-Loved Picks Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-sm uppercase text-muted-foreground tracking-widest font-headline">Shop</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 font-headline">Our Most-Loved Picks</h2>
            </div>
            <Button variant="outline">View All</Button>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {products.map((product, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden group border-none shadow-none">
                      <div className="bg-secondary aspect-square relative rounded-2xl">
                        <Image src={product.image} alt={product.description} data-ai-hint={product.hint} fill className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-2xl"/>
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle className="font-headline text-xl">{product.description}</CardTitle>
                        <p className="text-lg font-semibold">${product.price}</p>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <CardDescription>{product.category}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4" />
            <CarouselNext className="absolute right-4" />
          </Carousel>
        </div>
      </section>

       {/* Find by Room Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
           <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-sm uppercase text-muted-foreground tracking-widest font-headline">Categories</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 font-headline">Find the Perfect Piece for Every Room</h2>
            </div>
            <p className="max-w-md text-muted-foreground text-right">Explore our curated collections designed to bring harmony and style to every corner of your home.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {roomCategories.map((category) => (
               <Link href="/portfolio" key={category.name}>
                 <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                    <Image src={category.image} alt={category.name} data-ai-hint={category.hint} fill className="object-cover group-hover:scale-105 transition-transform duration-300"/>
                    <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                      <p className="text-white text-xl font-bold font-headline">{category.name}</p>
                    </div>
                  </div>
               </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-sm uppercase text-muted-foreground tracking-widest font-headline">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 font-headline">Hear from Our Happy Customers</h2>
           <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto mt-12"
          >
             <CarouselContent>
              {[...Array(3)].map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Image src={`https://placehold.co/400x500.png`} alt={`Customer photo ${index + 1}`} data-ai-hint="lifestyle furniture" width={400} height={500} className="rounded-2xl object-cover"/>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4" />
            <CarouselNext className="absolute right-4" />
           </Carousel>
           <div className="flex justify-center gap-1 text-yellow-500 mt-8">
              <Star className="fill-current"/> <Star className="fill-current"/> <Star className="fill-current"/> <Star className="fill-current"/> <Star className="fill-current"/>
            </div>
          <blockquote className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-foreground">
            "The armchair is not only beautiful but incredibly comfortable. The entire process from ordering to delivery was seamless. I couldn't be happier with my purchase and the service from FRNITURE."
          </blockquote>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Avatar>
              <AvatarImage src="https://placehold.co/100x100.png" alt="Luis V." data-ai-hint="man portrait"/>
              <AvatarFallback>LV</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">Luis V.</p>
              <p className="text-sm text-muted-foreground">Happy Customer</p>
            </div>
          </div>
          <Button variant="outline" className="mt-8">View All Reviews</Button>
        </div>
      </section>

      {/* Upgrade Your Space Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
           <div className="relative aspect-video rounded-2xl overflow-hidden">
            <Image
              src="https://placehold.co/1200x600.png"
              fill
              alt="Upgrade your space"
              data-ai-hint="spacious living room"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white font-headline">
                Upgrade Your Space with Timeless Furniture
              </h2>
              <p className="max-w-2xl text-white/90 md:text-xl mt-4">
                Discover pieces that will transform your home and last a lifetime.
              </p>
              <Button size="lg" className="mt-6">Shop The Collection</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
