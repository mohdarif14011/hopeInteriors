
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
}

const staticPortfolioItems: Project[] = [
    {
        id: '1',
        title: 'Modern Living Room',
        description: 'A spacious living room with a minimalist aesthetic and natural light.',
        category: 'Living Room',
        imageUrl: 'https://placehold.co/600x400.png',
    },
    {
        id: '2',
        title: 'Cozy Bedroom Retreat',
        description: 'A serene bedroom designed for relaxation and comfort.',
        category: 'Bedroom',
        imageUrl: 'https://placehold.co/600x400.png',
    },
    {
        id: '3',
        title: 'Gourmet Kitchen',
        description: 'A state-of-the-art kitchen for the passionate home chef.',
        category: 'Kitchen',
        imageUrl: 'https://placehold.co/600x400.png',
    },
     {
        id: '4',
        title: 'Luxury Bathroom',
        description: 'A spa-like bathroom with premium fixtures and finishes.',
        category: 'Bathroom',
        imageUrl: 'https://placehold.co/600x400.png',
    },
    {
        id: '5',
        title: 'Outdoor Oasis',
        description: 'A beautiful outdoor space perfect for entertaining or relaxing.',
        category: 'Outdoor',
        imageUrl: 'https://placehold.co/600x400.png',
    },
    {
        id: '6',
        title: 'Productive Home Office',
        description: 'A stylish and functional home office to inspire creativity.',
        category: 'Office',
        imageUrl: 'https://placehold.co/600x400.png',
    }
];


const categories = ["All", "Living Room", "Bedroom", "Kitchen", "Bathroom", "Outdoor", "Office"];

export default function PortfolioPage() {
  const portfolioItems = staticPortfolioItems;

  return (
    <>
      <Header />
      <div className="bg-background pt-20">
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
                  {(category === "All" ? portfolioItems : portfolioItems.filter(item => item.category === category)).map((item: Project, index) => (
                    <Card key={index} className="overflow-hidden group transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                      <div className="aspect-[4/3] overflow-hidden">
                         <Image
                          src={item.imageUrl}
                          width={600}
                          height={400}
                          alt={item.title}
                          data-ai-hint={item.category}
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
      <Footer/>
    </>
  );
}
