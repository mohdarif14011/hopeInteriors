import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const constructionProjects = [
  {
    title: "The Meadow View Residence",
    description: "A custom-built family home featuring sustainable materials and energy-efficient design, completed in 18 months.",
    details: "Location: Green Valley | Size: 4,500 sq ft | Duration: 18 months",
    image: "https://placehold.co/600x400.png",
    hint: "modern house exterior"
  },
  {
    title: "Downtown Commercial Tower",
    description: "A 20-story commercial building with retail space on the ground floor and modern offices above. Structural steel frame with a glass curtain wall.",
    details: "Location: City Center | Size: 200,000 sq ft | Duration: 36 months",
    image: "https://placehold.co/600x400.png",
    hint: "skyscraper city"
  },
  {
    title: "Lakeside Community Center",
    description: "A public facility featuring a library, gym, and event spaces, built with a focus on accessibility and community engagement.",
    details: "Location: Lakeside | Size: 15,000 sq ft | Duration: 24 months",
    image: "https://placehold.co/600x400.png",
    hint: "community center"
  },
  {
    title: "Historic Warehouse Renovation",
    description: "Conversion of a 19th-century warehouse into luxury loft apartments, preserving historical elements while introducing modern amenities.",
    details: "Location: Old Town | Size: 50,000 sq ft | Duration: 30 months",
    image: "https://placehold.co/600x400.png",
    hint: "warehouse loft"
  },
  {
    title: "Suburban Retail Plaza",
    description: "A new retail development providing convenient shopping and dining options to a growing suburban community.",
    details: "Location: Oakwood Suburbs | Size: 80,000 sq ft | Duration: 20 months",
    image: "https://placehold.co/600x400.png",
    hint: "shopping plaza"
  },
  {
    title: "The Coastal Hotel & Spa",
    description: "A luxury beachfront hotel with 150 rooms, a full-service spa, and infinity pools, constructed to withstand coastal weather conditions.",
    details: "Location: Seaview Coast | Size: 120,000 sq ft | Duration: 40 months",
    image: "https://placehold.co/600x400.png",
    hint: "luxury hotel"
  },
];

export default function ConstructionPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Construction Showcase</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Our projects are built on a foundation of integrity, quality, and a commitment to excellence. See our craftsmanship in action.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {constructionProjects.map((project, index) => (
          <Card key={index} className="overflow-hidden group transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <Image
              src={project.image}
              width={600}
              height={400}
              alt={project.title}
              data-ai-hint={project.hint}
              className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
            />
            <CardHeader>
              <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
              <CardDescription className="text-primary font-semibold pt-1">{project.details}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
