
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/toast';
import { addTestimonial } from '@/services/testimonials';
import Link from 'next/link';
import { ArrowLeft, Loader2, Star } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  location: z.string().min(2, 'Location is required.'),
  title: z.string().min(3, 'Title is required.'),
  comment: z.string().min(10, 'Comment must be at least 10 characters.'),
  rating: z.coerce.number().min(1).max(5),
});

type FormValues = z.infer<typeof formSchema>;

export default function NewTestimonialPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      location: '',
      title: '',
      comment: '',
      rating: 5,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    
    const result = await addTestimonial(data);
    setLoading(false);

    if (result.success) {
      toast({
        title: "Testimonial Added!",
        description: "The new testimonial has been successfully added.",
      });
      router.push('/admin/testimonials');
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error || "An unknown error occurred.",
      });
    }
  };
  
  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="outline" size="icon" asChild>
          <Link href="/admin/testimonials">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
            <h1 className="text-3xl font-bold font-headline">Add New Testimonial</h1>
            <p className="text-muted-foreground">Fill in the details for the new testimonial.</p>
        </div>
      </div>
      <Card>
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Client Name</FormLabel>
                        <FormControl>
                        <Input placeholder="e.g., Jane Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                 <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                        <Input placeholder="e.g., New York, NY" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
              </div>

               <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Testimonial Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., A dream come true!" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Comment</FormLabel>
                    <FormControl>
                      <Textarea placeholder="The client's feedback..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            
                <FormField
                    control={form.control}
                    name="rating"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                        <FormLabel>Rating</FormLabel>
                        <FormControl>
                            <RadioGroup
                            onValueChange={(value) => field.onChange(Number(value))}
                            defaultValue={String(field.value)}
                            className="flex items-center space-x-2"
                            >
                                {[1,2,3,4,5].map(rating => (
                                    <FormItem key={rating} className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value={String(rating)} id={`rating-${rating}`} className="sr-only" />
                                        </FormControl>
                                        <FormLabel htmlFor={`rating-${rating}`} className="cursor-pointer">
                                            <Star className={`w-6 h-6 transition-colors ${form.watch('rating') >= rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
                                        </FormLabel>
                                    </FormItem>
                                ))}
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />

              <div className="flex justify-end gap-2">
                <Button variant="outline" asChild>
                    <Link href="/admin/testimonials">Cancel</Link>
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Add Testimonial
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
