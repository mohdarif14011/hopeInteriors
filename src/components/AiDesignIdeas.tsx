
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Wand2 } from 'lucide-react';
import { generateDesignIdeas, GenerateDesignIdeasOutput } from '@/ai/flows/generate-design-ideas';
import Image from 'next/image';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

export function AiDesignIdeas() {
  const [roomType, setRoomType] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerateDesignIdeasOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const ideas = await generateDesignIdeas({ roomType });
      setResult(ideas);
    } catch (err) {
      console.error(err);
      setError('Sorry, we couldn\'t generate ideas right now. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">AI POWERED</p>
            <h2 className="text-4xl lg:text-5xl font-bold font-headline mt-2">Get Instant Design Ideas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                Not sure where to start? Describe a room and our AI will generate unique design concepts and a stunning visual for you.
            </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
            <Input
              type="text"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              placeholder="e.g., 'A cozy living room with a fireplace'"
              className="flex-grow text-base"
              disabled={loading}
              required
            />
            <Button type="submit" size="lg" disabled={loading}>
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Wand2 className="w-5 h-5" />
              )}
              <span className="sr-only">Generate Ideas</span>
            </Button>
          </form>
        </div>

        {error && (
            <Alert variant="destructive" className="max-w-2xl mx-auto">
                <AlertTitle>Generation Failed</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}

        {loading && (
            <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
                <div className="animate-pulse bg-muted rounded-xl aspect-video w-full"></div>
                <div className="space-y-4">
                    <div className="animate-pulse bg-muted rounded-md h-8 w-1/2"></div>
                    <div className="space-y-2">
                        <div className="animate-pulse bg-muted rounded-md h-4 w-full"></div>
                        <div className="animate-pulse bg-muted rounded-md h-4 w-full"></div>
                        <div className="animate-pulse bg-muted rounded-md h-4 w-5/6"></div>
                    </div>
                </div>
            </div>
        )}

        {result && (
          <Card className="mt-12 overflow-hidden shadow-xl">
             <div className="grid md:grid-cols-2">
                <div className="relative aspect-video">
                    {result.imageUrl && 
                        <Image src={result.imageUrl} alt="AI generated design" fill className="object-cover"/>
                    }
                </div>
                <div className="p-8">
                    <h3 className="font-headline text-2xl font-bold mb-4">{result.title}</h3>
                    <p className="text-muted-foreground">{result.description}</p>
                </div>
             </div>
          </Card>
        )}

      </div>
    </section>
  );
}
