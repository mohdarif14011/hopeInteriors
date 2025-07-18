
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, CheckCircle, PlayCircle, Sprout, Handshake, Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const features = [
  { text: "Modular Kitchen" },
  { text: "Premium Materials" },
  { text: "Latest Technology" },
  { text: "Expert Designers" },
  { text: "Timely Delivery" },
  { text: "Perfect Finishing" },
];

const stats = [
    { value: "27+", label: "Qualifications" },
    { value: "78+", label: "Projects Done" },
    { value: "38+", label: "Projects in Work" },
    { value: "98+", label: "Positive Review" },
]

const workProgress = [
    {
        step: "01",
        title: "Meet & Greet",
        description: "Initial consultation to understand your vision, needs, and the specifics of your space."
    },
    {
        step: "02",
        title: "Design & Plan",
        description: "Our experts craft a detailed design and layout, selecting materials and finishes."
    },
    {
        step: "03",
        title: "Build & Install",
        description: "Our skilled team brings the design to life with precision and quality craftsmanship."
    },
    {
        step: "04",
        title: "Final Review",
        description: "We walk you through your new kitchen to ensure every detail is perfect."
    }
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="w-full bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen pt-20 lg:pt-0">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold font-headline tracking-tight">
                  Design Your Kitchen With Our Experts
                </h1>
                <p className="max-w-[600px] text-secondary-foreground/80 md:text-xl">
                  Bespoke kitchen designs that blend functionality with timeless elegance. Our team is dedicated to creating spaces that inspire.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">Book a Free Design</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96 lg:h-[600px] w-full">
              <Image
                src="https://placehold.co/800x900.png"
                fill
                alt="Modern kitchen design"
                data-ai-hint="modern kitchen"
                className="object-cover rounded-xl"
              />
              <div className="absolute -bottom-8 right-8 bg-background/80 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center text-foreground">
                <p className="text-sm uppercase tracking-widest">Est.</p>
                <p className="text-5xl font-bold font-headline">1920</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover a New Look Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
                    <Image
                        src="https://placehold.co/600x800.png"
                        fill
                        alt="Stylish kitchen interior"
                        data-ai-hint="stylish kitchen"
                        className="object-cover"
                    />
                </div>
                <div>
                    <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Our Process</p>
                    <h2 className="text-3xl lg:text-4xl font-bold font-headline mt-2 mb-6">Discover a New Look For Your Kitchen</h2>
                    <p className="text-muted-foreground mb-8 max-w-prose">We believe in a collaborative process, working closely with you to design and build the kitchen of your dreams. From the initial concept to the final installation, our team ensures a seamless and enjoyable experience.</p>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-10">
                        {features.map(feature => (
                            <div key={feature.text} className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-accent"/>
                                <span className="font-medium">{feature.text}</span>
                            </div>
                        ))}
                    </div>
                     <Button asChild size="lg">
                      <Link href="/services">Our Services</Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
          <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Our Expertise</p>
                    <h2 className="text-3xl lg:text-4xl font-bold font-headline mt-2 mb-6">We provide all-in-one modular kitchen services</h2>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg font-semibold">Other Design</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                        Yes, beyond kitchens, we offer comprehensive interior design services for living rooms, bedrooms, bathrooms, and entire homes to create cohesive and beautiful living spaces.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg font-semibold">Interior Plans</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                        Our interior plans are detailed blueprints covering everything from layout and furniture placement to lighting and color schemes, ensuring a flawless execution of the design.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg font-semibold">Products</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                        We source high-quality materials, fixtures, and furnishings from a curated list of trusted suppliers to ensure durability and a premium finish for your project.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-lg font-semibold">Installation</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                        Our professional installation team handles every aspect of the build with precision and care, ensuring your new space is assembled to the highest standards.
                        </AccordionContent>
                    </AccordionItem>
                    </Accordion>
              </div>
          </div>
      </section>

      {/* Latest Kitchens Section */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <p className="text-sm uppercase tracking-widest text-secondary-foreground/60 font-semibold">Portfolio</p>
                    <h2 className="text-3xl lg:text-4xl font-bold font-headline mt-2">Our Latest Kitchens Design</h2>
                </div>
                <Button asChild variant="outline">
                  <Link href="/portfolio">View All Projects</Link>
                </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <Link href="/portfolio/modern-minimalist-kitchen">
                    <div className="group overflow-hidden rounded-xl">
                        <Image src="https://placehold.co/600x800.png" width={600} height={800} alt="Modern Minimalist Kitchen" data-ai-hint="minimalist kitchen" className="w-full h-full object-cover aspect-[3/4] transition-transform duration-300 group-hover:scale-105"/>
                    </div>
                </Link>
                 <Link href="/portfolio/scandinavian-kitchen">
                    <div className="group overflow-hidden rounded-xl">
                        <Image src="https://placehold.co/600x800.png" width={600} height={800} alt="Scandinavian Kitchen" data-ai-hint="scandinavian kitchen" className="w-full h-full object-cover aspect-[3/4] transition-transform duration-300 group-hover:scale-105"/>
                    </div>
                </Link>
                 <Link href="/portfolio/industrial-chic-kitchen">
                    <div className="group overflow-hidden rounded-xl">
                        <Image src="https://placehold.co/600x800.png" width={600} height={800} alt="Industrial Chic Kitchen" data-ai-hint="industrial kitchen" className="w-full h-full object-cover aspect-[3/4] transition-transform duration-300 group-hover:scale-105"/>
                    </div>
                </Link>
                 <Link href="/portfolio/farmhouse-kitchen">
                    <div className="group overflow-hidden rounded-xl">
                        <Image src="https://placehold.co/600x800.png" width={600} height={800} alt="Modern Farmhouse Kitchen" data-ai-hint="farmhouse kitchen" className="w-full h-full object-cover aspect-[3/4] transition-transform duration-300 group-hover:scale-105"/>
                    </div>
                </Link>
            </div>
        </div>
      </section>

      {/* Stats and Testimonial Section */}
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-4 gap-8 mb-20 text-center">
                    {stats.map(stat => (
                        <div key={stat.label}>
                            <p className="text-5xl font-bold font-headline text-accent">{stat.value}</p>
                            <p className="text-muted-foreground mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center max-w-3xl mx-auto">
                    <div className="flex justify-center mb-6">
                        <Avatar className="w-24 h-24">
                          <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="woman portrait" />
                          <AvatarFallback>SL</AvatarFallback>
                        </Avatar>
                    </div>
                     <div className="flex justify-center text-accent mb-4">
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                      </div>
                    <blockquote className="text-xl italic text-foreground/80 mb-6">
                        "From the initial idea to the final installation, the team was professional, creative, and attentive to every detail. They transformed our kitchen into a space that's not only beautiful but perfectly functional for our family."
                    </blockquote>
                    <p className="font-bold font-headline text-lg">Melissa K.</p>
                    <p className="text-sm text-muted-foreground">Homeowner, CA</p>
                </div>
            </div>
        </section>

        {/* Core Values Section */}
        <section className="py-24 bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-sm uppercase tracking-widest text-secondary-foreground/60 font-semibold">Our Ethos</p>
                        <h2 className="text-3xl lg:text-4xl font-bold font-headline mt-2 mb-6">Our core values allow us to stay on track and innovate in design.</h2>
                        <p className="text-secondary-foreground/80 mb-8 max-w-prose">
                            We are committed to pushing the boundaries of design while holding true to principles of quality, sustainability, and client-centric service.
                        </p>
                         <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <Target className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Client-Centric</h3>
                                    <p className="text-secondary-foreground/80">Your vision is our blueprint. We listen, adapt, and create spaces that are a true reflection of you.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Handshake className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Integrity & Trust</h3>
                                    <p className="text-secondary-foreground/80">We build lasting relationships through transparency, honesty, and a commitment to our promises.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Sprout className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Sustainable Practices</h3>
                                    <p className="text-secondary-foreground/80">We prioritize eco-friendly materials and methods to create beautiful, responsible designs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden group">
                        <Image src="https://placehold.co/600x400.png" layout="fill" objectFit="cover" alt="Kitchen design process" data-ai-hint="kitchen design" />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <PlayCircle className="w-20 h-20 text-white/80 transform transition-transform group-hover:scale-110"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Work Progress Section */}
        <section className="py-24">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">How It Works</p>
                <h2 className="text-3xl lg:text-4xl font-bold font-headline mt-2 mb-16">Our Work Progress</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 relative">
                    <div className="absolute top-1/3 left-0 w-full h-px bg-border -translate-y-4 hidden lg:block"></div>
                    {workProgress.map((item, index) => (
                        <div key={item.title} className="relative">
                            <div className="relative inline-block mb-4">
                                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center">
                                        <span className="text-sm font-bold text-accent-foreground">{item.step}</span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold font-headline mb-2">{item.title}</h3>
                            <p className="text-muted-foreground px-4">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>


        {/* CTA Section */}
      <section className="w-full py-24">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl/tight font-headline">Ready to Start Your Design Journey?</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let's collaborate to create a space that's uniquely yours. Contact us today for a consultation.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
             <Button asChild size="lg">
                <Link href="/contact">Book a Consultation</Link>
              </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
