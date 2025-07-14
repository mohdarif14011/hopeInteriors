import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, GanttChartSquare, Paintbrush, Users } from "lucide-react";

const services = [
  {
    icon: <Paintbrush className="w-10 h-10 text-primary" />,
    title: "Interior Design",
    description: "Our interior design services focus on creating spaces that are both beautiful and functional. We work closely with you to understand your vision, lifestyle, and preferences, delivering a personalized design that transforms your house into a home. From space planning and color consultation to furniture selection and final styling, we handle every detail."
  },
  {
    icon: <Building className="w-10 h-10 text-primary" />,
    title: "Construction",
    description: "With a commitment to quality and craftsmanship, our construction team brings your architectural plans to life. We manage all aspects of the construction process, including project management, sourcing materials, and coordinating with trades. We specialize in residential and commercial projects, ensuring they are completed on time, within budget, and to the highest standards."
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Consulting",
    description: "Our expert consultants provide strategic advice and guidance for your design and construction projects. Whether you're a homeowner embarking on a renovation or a developer planning a new build, we offer insights on feasibility, budgeting, design direction, and project strategy to ensure your project's success from the very beginning."
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Our Services</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          We offer a complete range of services to take your project from initial concept to final realization.
        </p>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader className="items-center text-center">
              {service.icon}
              <CardTitle className="font-headline text-2xl mt-4">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-center text-base">
                {service.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
