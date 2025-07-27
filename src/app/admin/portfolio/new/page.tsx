
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/toast';
import { addPortfolioItem } from '@/services/portfolio';
import Link from 'next/link';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const categories = ["Living Room", "Bedroom", "Kitchen", "Bathroom", "Outdoor", "Office"];

const formSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters long.'),
  description: z.string().min(10, 'Description must be at least 10 characters long.'),
  category: z.string({ required_error: 'Please select a category.' }),
  imageUrl: z.string().url({ message: "Please enter a valid URL." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function NewProjectPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      imageUrl: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    const result = await addPortfolioItem(data);
    setLoading(false);

    if (result.success) {
      toast({
        title: "Project Added!",
        description: "The new project has been successfully added to your portfolio.",
      });
      router.push('/admin/portfolio');
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
          <Link href="/admin/portfolio">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
            <h1 className="text-3xl font-bold font-headline">Add New Project</h1>
            <p className="text-muted-foreground">Fill in the details below to add a new project.</p>
        </div>
      </div>
      <Card>
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Modern Downtown Loft" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe the project..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Image URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com/image.png" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />

              <div className="flex justify-end gap-2">
                <Button variant="outline" asChild>
                    <Link href="/admin/portfolio">Cancel</Link>
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Add Project
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
