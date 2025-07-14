'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateDesignIdeas, GenerateDesignIdeasOutput } from '@/ai/flows/generate-design-ideas';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Bot, Loader2, Sparkles } from 'lucide-react';

const formSchema = z.object({
  stylePreferences: z.string().min(10, {
    message: 'Please describe your style in at least 10 characters.',
  }),
});

export default function AiDesignerPage() {
  const [designIdeas, setDesignIdeas] = useState<GenerateDesignIdeasOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stylePreferences: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setDesignIdeas(null);
    try {
      const result = await generateDesignIdeas(values);
      setDesignIdeas(result);
    } catch (error) {
      console.error("Error generating design ideas:", error);
      // Here you could add a toast notification to inform the user of the error
    }
    setIsLoading(false);
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-12">
        <Bot className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">AI Design Assistant</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Describe your dream space, and let our AI generate personalized interior design ideas just for you.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Your Style Preferences</CardTitle>
            <CardDescription>
              Tell us what you're looking for. For example: "a cozy, minimalist living room with natural light and Scandinavian furniture."
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="stylePreferences"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Style Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., modern, industrial, boho chic, with a touch of vintage..."
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate Ideas
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {designIdeas && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center font-headline mb-8">Your Design Concept</h2>
            <Card className="bg-accent/50">
              <CardHeader>
                <CardTitle className="font-headline">AI-Generated Ideas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-stone dark:prose-invert max-w-none">
                  <p>{designIdeas.designIdeas}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
