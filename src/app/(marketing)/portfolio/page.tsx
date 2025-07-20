import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const portfolioItems = [
  {
    category: "Living Room",
    title: "Modern Minimalist Living Room",
    description: "A serene living space combining clean lines, a neutral color palette, and natural materials.",
    image: "https://placehold.co/600x400.png",
    hint: "modern living room"
  },
  {
    category: "Bedroom",
    title: "Cozy Scandinavian Bedroom",
    description: "Warm woods, soft textiles, and a focus on simplicity create a tranquil and inviting bedroom.",
    image: "https://placehold.co/600x400.png",
    hint: "scandinavian bedroom"
  },
  {
    category: "Kitchen",
    title: "Industrial Chic Kitchen",
    description: "Exposed brick, metal accents, and state-of-the-art appliances merge for a functional yet stylish kitchen.",
    image: "https://placehold.co/600x400.png",
    hint: "industrial kitchen"
  },
  {
    category: "Bathroom",
    title: "Luxurious Bathroom Retreat",
    description: "A spa-like bathroom featuring marble countertops, a freestanding tub, and elegant fixtures.",
    image: "https://placehold.co/600x400.png",
    hint: "luxury bathroom"
  },
  {
    category: "Outdoor",
    title: "Bohemian Rhapsody Patio",
    description: "An eclectic mix of patterns, plants, and comfortable seating for a relaxed outdoor oasis.",
    image: "https://placehold.co/600x400.png",
    hint: "bohemian patio"
  },
  {
    category: "Office",
    title: "Sleek Corporate Office",
    description: "An open-plan office designed for collaboration, featuring ergonomic furniture and smart lighting.",
    image: "https://placehold.co/600x400.png",
    hint: "corporate office"
  },
   {
    category: "Living Room",
    title: "Mid-Century Modern Lounge",
    description: "Iconic furniture pieces and a warm color palette create a nostalgic yet timeless atmosphere.",
    image: "https://placehold.co/600x400.png",
    hint: "mid-century living room"
  },
  {
    category: "Bedroom",
    title: "Minimalist Zen Bedroom",
    description: "A clutter-free space with low-profile furniture and organic textures for ultimate relaxation.",
    image: "https://placehold.co/600x400.png",
    hint: "minimalist bedroom"
  },
];

const categories = ["All", "Living Room", "Bedroom", "Kitchen", "Bathroom", "Outdoor", "Office"];

export default function PortfolioPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="text-center mb-12">
           <p className="text-sm uppercase text-muted-foreground tracking-widest font-headline">Our Work</p>
          <h1 className="text-4xl md:text-5xl font-bold font-headline mt-2 mb-4">Design Portfolio</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore a selection of our finest work, showcasing our passion for detail and commitment to exceptional design.
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-7 mb-8">
            {categories.map(category => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map(category => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(category === "All" ? portfolioItems : portfolioItems.filter(item => item.category === category)).map((item, index) => (
                  <Card key={index} className="overflow-hidden group transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    <div className="aspect-[4/3] overflow-hidden">
                       <Image
                        src={item.image}
                        width={600}
                        height={400}
                        alt={item.title}
                        data-ai-hint={item.hint}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
