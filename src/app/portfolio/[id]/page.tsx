import { getPortfolioItem, Project } from '@/services/portfolio';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default async function ProjectDetailPage({ params: { id } }: { params: { id: string } }) {
  const project: Project | null = await getPortfolioItem(id);

  if (!project) {
    notFound();
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
