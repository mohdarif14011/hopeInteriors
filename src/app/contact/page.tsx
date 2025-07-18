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
         <p className="text-sm uppercase text-muted-foreground tracking-widest font-headline">Get in touch</p>
        <h1 className="text-4xl md:text-5xl font-bold font-headline mt-2 mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Have a project in mind or a question for our team? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Card className="bg-secondary p-4 md:p-8 rounded-2xl">
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
                  <Label htmlFor="service">Inquiry Topic</Label>
                  <Select>
                      <SelectTrigger id="service">
                          <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                          <SelectItem value="product-question">Product Question</SelectItem>
                          <SelectItem value="order-support">Order Support</SelectItem>
                          <SelectItem value="press-inquiry">Press Inquiry</SelectItem>
                          <SelectItem value="collaboration">Collaboration</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
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
           <div className="relative aspect-video w-full rounded-2xl overflow-hidden">
              <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="Map to office" data-ai-hint="modern office interior" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4">
                  <Mail className="w-6 h-6 text-primary"/>
                  <div>
                      <h3 className="font-semibold font-headline">Email</h3>
                      <p className="text-muted-foreground">contact@frniture.com</p>
                  </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-4">
                  <Phone className="w-6 h-6 text-primary"/>
                  <div>
                      <h3 className="font-semibold font-headline">Phone</h3>
                      <p className="text-muted-foreground">(123) 456-7890</p>
                  </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-4">
                  <MapPin className="w-6 h-6 text-primary"/>
                  <div>
                      <h3 className="font-semibold font-headline">Office</h3>
                      <p className="text-muted-foreground">123 Design Avenue, Creativity City</p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
