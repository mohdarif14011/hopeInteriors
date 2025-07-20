import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const services = [
    {
        title: "New Construction",
        description: "Building your vision from the ground up with precision and quality craftsmanship."
    },
    {
        title: "Renovations & Remodeling",
        description: "Transforming existing spaces to meet your current needs and aesthetic desires."
    },
    {
        title: "Project Management",
        description: "Overseeing every detail of your project from start to finish for a seamless experience."
    },
    {
        title: "Structural Engineering",
        description: "Ensuring the integrity and safety of your project with expert engineering solutions."
    },
    {
        title: "Permit Acquisition",
        description: "Navigating the complexities of building codes and regulations to secure necessary permits."
    },
    {
        title: "Quality Assurance",
        description: "Implementing rigorous checks and standards to guarantee the highest quality outcome."
    }
]

export default function ConstructionPage() {
  return (
    <div className="bg-background pt-20">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <p className="text-sm uppercase text-muted-foreground tracking-widest font-headline">Build with Confidence</p>
                <h1 className="text-4xl md:text-5xl font-bold font-headline mt-2 mb-4">Construction Services</h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                    Our experienced construction team brings architectural visions to life with a commitment to quality, timelines, and budget. We handle every aspect of the build process, ensuring a smooth journey from foundation to finishing touches.
                </p>
                <div className="mt-8 space-y-4">
                    {services.map(service => (
                        <div key={service.title} className="flex items-start gap-4">
                            <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold font-headline">{service.title}</h3>
                                <p className="text-muted-foreground">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="grid gap-4">
                 <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="Construction site" data-ai-hint="building construction" className="rounded-xl object-cover w-full"/>
                 <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="Interior finishing" data-ai-hint="interior construction" className="rounded-xl object-cover w-full"/>
            </div>
        </div>
      </div>
    </div>
  );
}
