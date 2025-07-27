
'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { getTestimonials, Testimonial } from "@/services/testimonials";
import { Skeleton } from "@/components/ui/skeleton";

const renderStars = (rating: number) => {
  return (
    <div className="flex gap-1 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={i < rating ? "fill-current w-4 h-4" : "text-muted-foreground/30 w-4 h-4"} />
      ))}
    </div>
  )
}

const TestimonialSkeleton = () => (
    <Card className="flex flex-col text-left p-4">
        <CardHeader>
            <div className="flex items-center gap-4">
                <div className="w-full">
                    <Skeleton className="h-5 w-1/2 mb-2" />
                    <Skeleton className="h-4 w-1/4" />
                </div>
            </div>
        </CardHeader>
        <CardContent className="flex-grow space-y-4">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-5 w-3/4 mb-2" />
            <Skeleton className="h-16 w-full" />
        </CardContent>
    </Card>
)

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
      const fetchTestimonials = async () => {
          try {
              setLoading(true);
              const items = await getTestimonials();
              setTestimonials(items);
          } catch (err) {
              console.error(err);
              setError("Failed to load testimonials.");
          } finally {
              setLoading(false);
          }
      };
      fetchTestimonials();
  }, []);

  return (
    <>
    <Header />
    <div className="bg-background pt-20">
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-12">
         <p className="text-sm uppercase text-muted-foreground tracking-widest font-headline">Reviews</p>
        <h1 className="text-4xl md:text-5xl font-bold font-headline mt-2 mb-4">What Our Clients Say</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Hear from satisfied clients who have transformed their spaces with us.
        </p>
      </div>

        {error && <p className="text-center text-destructive">{error}</p>}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
                Array.from({ length: 6 }).map((_, index) => <TestimonialSkeleton key={index} />)
            ) : (
                testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="flex flex-col text-left p-4">
                    <CardHeader>
                    <div className="flex items-center gap-4">
                        <div>
                        <CardTitle className="font-headline text-lg">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.location}</CardDescription>
                        </div>
                    </div>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                    {renderStars(testimonial.rating)}
                    <p className="font-semibold">{testimonial.title}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.comment}</p>
                    </CardContent>
                </Card>
                ))
            )}
        </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}
