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
    title: "Absolutely in love with my new sofa!",
    comment: "The quality is outstanding, and it has completely transformed my living room. The delivery team was professional and courteous. I'll definitely be shopping here again."
  },
  {
    name: "Michael B.",
    location: "Austin, TX",
    avatar: "https://placehold.co/100x100.png",
    fallback: "MB",
    rating: 5,
    title: "The best online furniture shopping experience.",
    comment: "From the easy-to-navigate website to the fast shipping, everything was top-notch. The dining table is even more beautiful in person. Highly recommend FRNITURE."
  },
  {
    name: "Emily C.",
    location: "San Francisco, CA",
    avatar: "https://placehold.co/100x100.png",
    fallback: "EC",
    rating: 4,
    title: "Great design and solid construction.",
    comment: "My new office chair is both stylish and comfortable, perfect for long workdays. There was a slight delay in shipping, but customer service was very helpful and kept me updated."
  },
  {
    name: "David R.",
    location: "Chicago, IL",
    avatar: "https://placehold.co/100x100.png",
    fallback: "DR",
    rating: 5,
    title: "Five stars for quality and style.",
    comment: "We furnished our entire bedroom from FRNITURE and couldn't be happier. The pieces are timeless, well-made, and create such a serene atmosphere. Worth every penny."
  },
  {
    name: "Jessica P.",
    location: "Miami, FL",
    avatar: "https://placehold.co/100x100.png",
    fallback: "JP",
    rating: 5,
    title: "Beautiful and unique pieces.",
    comment: "I was looking for a statement armchair and found the perfect one here. It's a true conversation starter. The fabric is luxurious and the craftsmanship is evident."
  },
  {
    name: "Kevin T.",
    location: "Seattle, WA",
    avatar: "https://placehold.co/100x100.png",
    fallback: "KT",
    rating: 5,
    title: "Seamless process and a fantastic product.",
    comment: "The modular sofa we ordered is perfect for our space. It was easy to configure online, and the delivery was seamless. The quality is exceptional for the price."
  },
];

const renderStars = (rating: number) => {
  return (
    <div className="flex gap-1 text-yellow-500">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={i < rating ? "fill-current" : "text-muted-foreground/30"} />
      ))}
    </div>
  )
}

export default function TestimonialsPage() {
  return (
    <div className="bg-background">
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-12">
         <p className="text-sm uppercase text-muted-foreground tracking-widest font-headline">Reviews</p>
        <h1 className="text-4xl md:text-5xl font-bold font-headline mt-2 mb-4">Customer Testimonials</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          See what our happy customers have to say about their FRNITURE experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="flex flex-col text-left bg-secondary p-4 rounded-2xl">
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
               <p className="font-semibold text-foreground">{testimonial.title}</p>
              <p className="text-muted-foreground text-sm">{testimonial.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    </div>
  );
}
