

'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { generateDesignIdeas, GenerateDesignIdeasOutput } from "@/ai/flows/generate-design-ideas";
import { Loader2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export default function AIDesignerPage() {
    const [style, setStyle] = useState('');
    const [result, setResult] = useState<GenerateDesignIdeasOutput | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResult(null);
        try {
            const response = await generateDesignIdeas({ stylePreferences: style });
            setResult(response);
        } catch (error) {
            console.error("Error generating design ideas:", error);
            // You might want to show an error message to the user here
        }
        setLoading(false);
    };

    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-12 md:py-24">
                <div className="text-center mb-12">
                    <p className="text-sm uppercase text-muted-foreground tracking-widest font-semibold">AI-Powered Creativity</p>
                    <h1 className="text-4xl md:text-5xl font-bold font-headline mt-2 mb-4">AI Design Idea Generator</h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Stuck for inspiration? Describe your dream style, and let our AI generate unique interior design concepts for you in seconds.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <Card className="p-4 md:p-8 bg-secondary border-none">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Describe Your Style</CardTitle>
                            <CardDescription>Tell us about the colors, textures, and moods you love.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="style">Style Preferences</Label>
                                    <Textarea
                                        id="style"
                                        placeholder="e.g., 'A cozy, minimalist living room with natural light, oak wood, and a neutral color palette with a touch of green.'"
                                        rows={5}
                                        value={style}
                                        onChange={(e) => setStyle(e.target.value)}
                                        className="bg-background"
                                    />
                                </div>
                                <Button type="submit" className="w-full" disabled={loading}>
                                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    Generate Ideas
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <Card className="p-4 md:p-8 bg-secondary border-none">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Generated Ideas</CardTitle>
                            <CardDescription>Your AI-crafted design concepts will appear here.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {loading && (
                                <div className="space-y-4">
                                    <Skeleton className="h-4 w-3/4" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-1/2" />
                                </div>
                            )}
                            {result && (
                                <div className="prose prose-sm max-w-none text-muted-foreground">
                                    <p>{result.designIdeas}</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
