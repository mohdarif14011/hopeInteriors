
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Paintbrush, Building, Users } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";


const services = [
  {
    icon: <Building className="w-10 h-10 text-primary mb-4" />,
    title: "Construction",
    description: "Our expert team handles all aspects of construction and renovation, ensuring high-quality execution, on-time delivery, and adherence to your budget.",
    href: "/construction"
  },
  {
    icon: <Paintbrush className="w-10 h-10 text-primary mb-4" />,
    title: "Interior Designing",
    description: "Full-service interior design, from concept development and space planning to material selection and final styling. We create beautiful, functional spaces tailored to you.",
    href: "/portfolio"
  },
  {
    icon: <Users className="w-10 h-10 text-primary mb-4" />,
    title: "Consulting",
    description: "Leverage our expertise to get professional advice and guidance for your project, ensuring you make informed decisions every step of the way.",
    href: "/consulting"
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <div className="bg-background pt-20">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="text-center mb-12">
            <p className="text-sm uppercase text-muted-foreground tracking-widest font-headline">What We Do</p>
            <h1 className="text-4xl md:text-5xl font-bold font-headline mt-2 mb-4">Our Services</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive range of services to bring your design dreams to life, from initial concept to final construction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link href={service.href} key={service.title}>
                <Card className="text-center h-full p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center">
                  <CardHeader>
                    {service.icon}
                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
