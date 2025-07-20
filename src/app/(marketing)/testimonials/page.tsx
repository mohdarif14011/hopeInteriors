import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah L.",
    location: "New York, NY",
    avatar: "https://placehold.co/100x100.png",
    fallback: "SL",
    rating: 5,
    title: "A dream come true!",
    comment: "DesignVerse captured my vision perfectly. Their design team is incredibly talented, and the entire process was a joy. My home finally feels like me."
  },
  {
    name: "Michael B.",
    location: "Austin, TX",
    avatar: "https://placehold.co/100x100.png",
    fallback: "MB",
    rating: 5,
    title: "Exceeded all expectations.",
    comment: "The construction was flawless and completed ahead of schedule. The quality of work and professionalism of the team were outstanding. Highly recommended."
  },
  {
    name: "Emily C.",
    location: "San Francisco, CA",
    avatar: "https://placehold.co/100x100.png",
    fallback: "EC",
    rating: 5,
    title: "Innovative and inspiring.",
    comment: "The AI design consultation was a fantastic starting point. It gave us new ideas and helped us visualize the potential of our space before committing to a full design."
  },
  {
    name: "David R.",
    location: "Chicago, IL",
    avatar: "https://placehold.co/100x100.png",
    fallback: "DR",
    rating: 5,
    title: "True professionals in every sense.",
    comment: "From the initial design concepts to the final construction walkthrough, DesignVerse was a pleasure to work with. They are organized, creative, and true experts."
  },
  {
    name: "Jessica P.",
    location: "Miami, FL",
    avatar: "https://placehold.co/100x100.png",
    fallback: "JP",
    rating: 5,
    title: "My forever home is perfect.",
    comment: "I was looking for a team that could handle both high-end design and the build-out. DesignVerse delivered on all fronts. I'm so grateful for their work."
  },
  {
    name: "Kevin T.",
    location: "Seattle, WA",
    avatar: "https://placehold.co/100x100.png",
    fallback: "KT",
    rating: 5,
    title: "Seamless process and a fantastic result.",
    comment: "The communication was excellent throughout the project. They listened to our needs and created a home that is both beautiful and functional for our family."
  },
];

const renderStars = (rating: number) => {
  return (
    <div className="flex gap-1 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={i < rating ? "fill-current w-4 h-4" : "text-muted-foreground/30 w-4 h-4"} />
      ))}
    </div>
  )
}

export default function TestimonialsPage() {
  return (
    <div className="bg-background pt-20">
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-12">
         <p className="text-sm uppercase text-muted-foreground tracking-widest font-headline">Reviews</p>
        <h1 className="text-4xl md:text-5xl font-bold font-headline mt-2 mb-4">What Our Clients Say</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Hear from satisfied clients who have transformed their spaces with us.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="flex flex-col text-left p-4">
            <CardHeader>
              <div className="flex items-center gap-4">
                 <Avatar className="w-12 h-12">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person portrait" />
                  <AvatarFallback>{testimonial.fallback}</AvatarFallback>
                </Avatar>
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
        ))}
      </div>
    </div>
    </div>
  );
}
