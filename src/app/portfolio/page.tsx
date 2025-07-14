import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const portfolioItems = [
  {
    title: "Modern Minimalist Living Room",
    description: "A serene living space combining clean lines, a neutral color palette, and natural materials.",
    image: "https://placehold.co/600x400.png",
    hint: "modern living room"
  },
  {
    title: "Cozy Scandinavian Bedroom",
    description: "Warm woods, soft textiles, and a focus on simplicity create a tranquil and inviting bedroom.",
    image: "https://placehold.co/600x400.png",
    hint: "scandinavian bedroom"
  },
  {
    title: "Industrial Chic Kitchen",
    description: "Exposed brick, metal accents, and state-of-the-art appliances merge for a functional yet stylish kitchen.",
    image: "https://placehold.co/600x400.png",
    hint: "industrial kitchen"
  },
  {
    title: "Luxurious Bathroom Retreat",
    description: "A spa-like bathroom featuring marble countertops, a freestanding tub, and elegant fixtures.",
    image: "https://placehold.co/600x400.png",
    hint: "luxury bathroom"
  },
  {
    title: "Bohemian Rhapsody Patio",
    description: "An eclectic mix of patterns, plants, and comfortable seating for a relaxed outdoor oasis.",
    image: "https://placehold.co/600x400.png",
    hint: "bohemian patio"
  },
  {
    title: "Sleek Corporate Office",
    description: "An open-plan office designed for collaboration, featuring ergonomic furniture and smart lighting.",
    image: "https://placehold.co/600x400.png",
    hint: "corporate office"
  },
];

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Interior Design Portfolio</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore a selection of our finest work, showcasing our passion for detail and commitment to exceptional design.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <Card key={index} className="overflow-hidden group transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <Image
              src={item.image}
              width={600}
              height={400}
              alt={item.title}
              data-ai-hint={item.hint}
              className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
            />
            <CardHeader>
              <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
