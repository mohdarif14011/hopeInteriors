
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, MessageSquare, Lightbulb, BrainCircuit } from "lucide-react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const consultingServices = [
    {
        icon: <Lightbulb className="w-8 h-8 text-primary mb-4" />,
        title: "Design Concept & Strategy",
        description: "Develop a cohesive design strategy and concept that aligns with your vision and goals."
    },
    {
        icon: <BrainCircuit className="w-8 h-8 text-primary mb-4" />,
        title: "Space Planning & Layout",
        description: "Maximize the functionality and flow of your space with professional layout advice."
    },
    {
        icon: <CheckCircle className="w-8 h-8 text-primary mb-4" />,
        title: "Material & Finish Selection",
        description: "Expert guidance on choosing the perfect materials, colors, and finishes for your space."
    },
    {
        icon: <MessageSquare className="w-8 h-8 text-primary mb-4" />,
        title: "Budget & Timeline Planning",
        description: "Get help creating a realistic budget and project timeline to ensure a smooth process."
    },
];

export default function ConsultingPage() {
  return (
    <>
    <Header/>
    <div className="bg-background pt-20">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col items-center text-center mb-16">
            <p className="text-sm uppercase text-muted-foreground tracking-widest font-headline">Expert Guidance</p>
            <h1 className="text-4xl md:text-5xl font-bold font-headline mt-2 mb-4">Consulting Services</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                Whether you need a second opinion or comprehensive project guidance, our consulting services provide the expertise and insight you need to make your project a success. We're here to answer your questions and help you navigate the complexities of design and construction.
            </p>
             <Button asChild className="mt-8" size="lg">
                <Link href="/contact">Book a Consultation</Link>
            </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {consultingServices.map(service => (
                <div key={service.title} className="flex flex-col items-center text-center p-6 bg-secondary rounded-xl">
                    {service.icon}
                    <h3 className="font-semibold font-headline text-lg">{service.title}</h3>
                    <p className="text-muted-foreground mt-2">{service.description}</p>
                </div>
            ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="Design meeting" data-ai-hint="design meeting consulting" className="rounded-xl object-cover w-full h-full"/>
             <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="Architectural blueprints" data-ai-hint="architectural blueprints" className="rounded-xl object-cover w-full h-full"/>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
