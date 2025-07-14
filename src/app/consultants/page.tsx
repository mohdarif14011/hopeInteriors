import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const consultants = [
  {
    name: "Dr. Elena Vance",
    specialty: "Sustainable Architecture",
    avatar: "https://placehold.co/100x100.png",
    fallback: "EV",
    bio: "With over 20 years of experience, Dr. Vance is a leading expert in green building materials and energy-efficient design.",
  },
  {
    name: "Marcus Thorne",
    specialty: "Commercial Space Planning",
    avatar: "https://placehold.co/100x100.png",
    fallback: "MT",
    bio: "Marcus specializes in optimizing corporate and retail environments for productivity and customer experience.",
  },
  {
    name: "Isabella Rossi",
    specialty: "Luxury Residential Design",
    avatar: "https://placehold.co/100x100.png",
    fallback: "IR",
    bio: "Isabella's portfolio includes high-end homes and estates, known for her opulent yet tasteful aesthetic.",
  },
  {
    name: "Chen Wei",
    specialty: "Structural Engineering",
    avatar: "https://placehold.co/100x100.png",
    fallback: "CW",
    bio: "A certified structural engineer, Chen provides critical analysis for complex construction projects, ensuring safety and integrity.",
  },
  {
    name: "Jamal Williams",
    specialty: "Project Management",
    avatar: "https://placehold.co/100x100.png",
    fallback: "JW",
    bio: "Jamal ensures projects are delivered on time and on budget, managing logistics from groundbreaking to handover.",
  },
  {
    name: "Sofia Gonzalez",
    specialty: "Lighting Design",
    avatar: "https://placehold.co/100x100.png",
    fallback: "SG",
    bio: "Sofia crafts immersive lighting schemes that enhance mood, functionality, and architectural features.",
  },
];

export default function ConsultantsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Our Consultants</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Meet our team of experienced professionals, ready to provide expert guidance for your project.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {consultants.map((consultant, index) => (
          <Card key={index} className="flex flex-col text-center">
            <CardHeader className="items-center">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src={consultant.avatar} alt={consultant.name} data-ai-hint="professional portrait" />
                <AvatarFallback>{consultant.fallback}</AvatarFallback>
              </Avatar>
              <CardTitle className="font-headline text-2xl">{consultant.name}</CardTitle>
              <CardDescription>
                <Badge variant="secondary" className="mt-2">{consultant.specialty}</Badge>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{consultant.bio}</p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button asChild>
                <Link href="/contact">Request Consultation</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
