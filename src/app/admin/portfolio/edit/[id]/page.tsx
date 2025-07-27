
'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
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
import { getPortfolioItem, updatePortfolioItem, Project } from '@/services/portfolio';
import Link from 'next/link';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Skeleton } from '@/components/ui/skeleton';

const categories = ["Living Room", "Bedroom", "Kitchen", "Bathroom", "Outdoor", "Office", "Other"];

const formSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters long.'),
  description: z.string().min(10, 'Description must be at least 10 characters long.'),
  category: z.string({ required_error: 'Please select a category.' }),
  coverImageUrl: z.string().url({ message: "Please enter a valid cover image URL." }),
  imageUrls: z.string(), // Can be empty if no additional images
});

type FormValues = z.infer<typeof formSchema>;

const EditProjectSkeleton = () => (
    <div className="space-y-6">
        <Skeleton className="h-10 w-1/2" />
        <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-24 w-full" />
        </div>
        <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-24 w-full" />
        </div>
        <div className="flex justify-end gap-2">
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-24" />
        </div>
    </div>
)


export default function EditProjectPage() {
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      coverImageUrl: '',
      imageUrls: '',
    },
  });

  useEffect(() => {
    if (typeof id !== 'string') return;

    const fetchProject = async () => {
        setFetching(true);
        const project = await getPortfolioItem(id);
        if (project) {
            form.reset({
                ...project,
                imageUrls: project.imageUrls.join('\n'),
            });
        } else {
            toast({
                variant: 'destructive',
                title: 'Project not found',
                description: 'The requested project could not be found.',
            });
            router.push('/admin/portfolio');
        }
        setFetching(false);
    }
    fetchProject();
  }, [id, form, router, toast]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (typeof id !== 'string') return;
    setLoading(true);
    const imageUrlsArray = data.imageUrls.split('\n').filter(url => url.trim() !== '');

    const result = await updatePortfolioItem(id, {
        title: data.title,
        description: data.description,
        category: data.category,
        coverImageUrl: data.coverImageUrl,
        imageUrls: imageUrlsArray,
    });
    setLoading(false);

    if (result.success) {
      toast({
        title: "Project Updated!",
        description: "The project has been successfully updated.",
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
            <h1 className="text-3xl font-bold font-headline">Edit Project</h1>
            <p className="text-muted-foreground">Update the details for this project.</p>
        </div>
      </div>
      <Card>
        <CardContent className="pt-6">
            {fetching ? <EditProjectSkeleton /> : (
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
                            <Select onValueChange={field.onChange} value={field.value}>
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
                        name="coverImageUrl"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Cover Image URL</FormLabel>
                            <FormControl>
                            <Input placeholder="https://example.com/cover-image.png" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                        />
                    
                    <FormField
                        control={form.control}
                        name="imageUrls"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Additional Image URLs</FormLabel>
                            <FormControl>
                            <Textarea placeholder="https://example.com/image1.png\nhttps://example.com/image2.png" {...field} rows={4}/>
                            </FormControl>
                            <FormDescription>
                                Enter one image URL per line.
                            </FormDescription>
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
                        Save Changes
                        </Button>
                    </div>
                    </form>
                </Form>
            )}
        </CardContent>
      </Card>
    </div>
  );
}
