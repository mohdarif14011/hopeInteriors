
'use client';

import { useEffect, useState } from 'react';
import { getPortfolioItem, Project } from '@/services/portfolio';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Skeleton } from '@/components/ui/skeleton';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default function ProjectDetailPage({ params: { id } }: { params: { id: string } }) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchProject = async () => {
        try {
          setLoading(true);
          const item = await getPortfolioItem(id);
          if (!item) {
            notFound();
          }
          setProject(item);
        } catch (err) {
          setError('Failed to load project details.');
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      fetchProject();
    }
  }, [id]);

  if (loading) {
    return (
        <>
            <Header/>
            <div className="container mx-auto px-4 py-12 md:py-24 pt-32">
                 <Skeleton className="h-10 w-3/4 mb-4" />
                 <Skeleton className="h-6 w-1/2 mb-8" />
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Skeleton className="aspect-video w-full" />
                    <Skeleton className="aspect-video w-full" />
                 </div>
            </div>
            <Footer/>
        </>
    );
  }

  if (error) {
    return <div className="text-center py-20">{error}</div>;
  }

  if (!project) {
    return null; 
  }

  const allImages = [project.coverImageUrl, ...project.imageUrls];

  return (
    <>
      <Header />
      <div className="bg-background pt-20">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="mb-12">
            <p className="text-sm uppercase text-muted-foreground tracking-widest font-headline">{project.category}</p>
            <h1 className="text-4xl md:text-5xl font-bold font-headline mt-2 mb-4">{project.title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allImages.map((imageUrl, index) => (
              <Card key={index} className="overflow-hidden group">
                 <div className="aspect-[4/3] relative">
                    <Image
                        src={imageUrl}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                 </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
