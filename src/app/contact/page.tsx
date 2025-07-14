import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Have a project in mind? We'd love to hear from you. Fill out the form below or reach out to us directly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Project Inquiry</CardTitle>
              <CardDescription>Tell us about your project, and we'll get back to you shortly.</CardDescription>
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
                    <Label htmlFor="service">Service of Interest</Label>
                    <Select>
                        <SelectTrigger id="service">
                            <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="interior-design">Interior Design</SelectItem>
                            <SelectItem value="construction">Construction</SelectItem>
                            <SelectItem value="consulting">Consulting</SelectItem>
                            <SelectItem value="ai-designer">AI Design Ideas</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea id="message" placeholder="Please describe your project or question." rows={5} />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-8">
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="font-headline">Direct Contact</CardTitle>
              <CardDescription>You can also reach us through these channels.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-primary"/>
                    <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">contact@designverse.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-primary"/>
                    <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-muted-foreground">(123) 456-7890</p>
                    </div>
                </div>
            </CardContent>
          </Card>
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="font-headline">Our Office</CardTitle>
              <CardDescription>Feel free to visit us during business hours.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">123 Design Avenue<br/>Creativity City, DC 12345</p>
                <div className="mt-4 aspect-video w-full rounded-md bg-background overflow-hidden">
                    <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="Map to office" data-ai-hint="city map" className="w-full h-full object-cover" />
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
