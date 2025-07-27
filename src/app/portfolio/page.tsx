
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Project } from '@/services/portfolio';
import { getPortfolioItems } from '@/services/portfolio';
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const categories = ["All", "Living Room", "Bedroom", "Kitchen", "Bathroom", "Outdoor", "Office"];

export default function PortfolioPage() {
  const [portfolioItems, setPortfolioItems] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const items = await getPortfolioItems();
        setPortfolioItems(items);
      } catch (err) {
        setError("Failed to load portfolio items. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);


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

          {error && <p className="text-center text-destructive">{error}</p>}
          
          {loading ? (
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <Card key={index}>
                  <Skeleton className="aspect-[4/3] w-full" />
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : (
            <Tabs defaultValue="All" className="w-full">
              <TabsList className="grid w-full grid-cols-3 md:grid-cols-7 mb-8">
                {categories.map(category => (
                  <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                ))}
              </TabsList>
              
              {categories.map(category => (
                <TabsContent key={category} value={category}>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {(category === "All" ? portfolioItems : portfolioItems.filter(item => item.category === category)).map((item: Project) => (
                      <Card key={item.id} className="overflow-hidden group transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
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
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
}
