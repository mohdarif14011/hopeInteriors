import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="bg-background">
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-12">
         <p className="text-sm uppercase text-muted-foreground tracking-widest font-semibold">Let's Connect</p>
        <h1 className="text-4xl md:text-5xl font-bold font-headline mt-2 mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Have a project in mind or a question for our team? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Card className="p-4 md:p-8 border-none bg-secondary">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Send a Message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                  <Label htmlFor="service">I'm interested in...</Label>
                  <Select>
                      <SelectTrigger id="service">
                          <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                          <SelectItem value="design">Full-Service Design</SelectItem>
                          <SelectItem value="construction">Construction & Renovation</SelectItem>
                          <SelectItem value="consultation">AI Design Consultation</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                  </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Please describe your project or question." rows={5} />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-8">
           <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden">
              <Image src="https://placehold.co/600x450.png" width={600} height={450} alt="Map to office" data-ai-hint="modern office interior" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6 text-left">
              <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1"/>
                  <div>
                      <h3 className="font-semibold font-headline text-lg">Email</h3>
                      <p className="text-muted-foreground">contact@designverse.com</p>
                  </div>
              </div>
              <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1"/>
                  <div>
                      <h3 className="font-semibold font-headline text-lg">Phone</h3>
                      <p className="text-muted-foreground">(123) 456-7890</p>
                  </div>
              </div>
              <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1"/>
                  <div>
                      <h3 className="font-semibold font-headline text-lg">Studio</h3>
                      <p className="text-muted-foreground">123 Design Lane, Creative District</p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
