
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, MessageSquare, Lightbulb } from "lucide-react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const consultingServices = [
    {
        icon: <Lightbulb className="w-6 h-6 text-primary flex-shrink-0" />,
        title: "Design Concept & Strategy",
        description: "Develop a cohesive design strategy and concept that aligns with your vision and goals."
    },
    {
        title: "Material & Finish Selection",
        description: "Expert guidance on choosing the perfect materials, colors, and finishes for your space."
    },
    {
        title: "Space Planning & Layout Optimization",
        description: "Maximize the functionality and flow of your space with professional layout advice."
    },
    {
        title: "Budget & Timeline Planning",
        description: "Get help creating a realistic budget and project timeline to ensure a smooth process."
    },
]

export default function ConsultingPage() {
  return (
    <>
    <Header/>
    <div className="bg-background pt-20">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
                <p className="text-sm uppercase text-muted-foreground tracking-widest font-headline">Expert Guidance</p>
                <h1 className="text-4xl md:text-5xl font-bold font-headline mt-2 mb-4">Consulting Services</h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                    Whether you need a second opinion or comprehensive project guidance, our consulting services provide the expertise and insight you need to make your project a success. We're here to answer your questions and help you navigate the complexities of design and construction.
                </p>
                <div className="mt-8 space-y-4">
                    {consultingServices.map(service => (
                        <div key={service.title} className="flex items-start gap-4">
                            {service.icon ? service.icon : <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />}
                            <div>
                                <h3 className="font-semibold font-headline">{service.title}</h3>
                                <p className="text-muted-foreground">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                 <Button asChild className="mt-8" size="lg">
                    <Link href="/contact">Book a Consultation</Link>
                </Button>
            </div>
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden">
                <Image 
                    src="https://placehold.co/600x450.png" 
                    width={600} 
                    height={450} 
                    alt="Consultant meeting with clients" 
                    data-ai-hint="design meeting consulting" 
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
