
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/toast';
import { addPortfolioItem } from '@/services/portfolio';
import { Loader2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function NewPortfolioItemPage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { toast } = useToast();

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !description || !category || !image) {
            toast({ variant: 'destructive', title: 'Please fill all fields and upload an image.' });
            return;
        }

        setLoading(true);
        const result = await addPortfolioItem({ title, description, category, image });

        if (result.success) {
            toast({ title: 'Success', description: 'New project added to portfolio.' });
            router.push('/admin/portfolio');
        } else {
            toast({ variant: 'destructive', title: 'Error', description: result.error });
            setLoading(false);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold font-headline mb-4">Add New Project</h1>
            <Card>
                <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="title">Project Title</Label>
                            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                             <Select onValueChange={setCategory} required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Living Room">Living Room</SelectItem>
                                    <SelectItem value="Bedroom">Bedroom</SelectItem>
                                    <SelectItem value="Kitchen">Kitchen</SelectItem>
                                    <SelectItem value="Bathroom">Bathroom</SelectItem>
                                    <SelectItem value="Outdoor">Outdoor</SelectItem>
                                    <SelectItem value="Office">Office</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="image">Project Image</Label>
                            <Input id="image" type="file" onChange={handleImageChange} accept="image/*" required />
                             {image && <img src={image} alt="Preview" className="mt-4 rounded-md max-h-48" />}
                        </div>
                        <div className="flex justify-end">
                            <Button type="submit" disabled={loading}>
                                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Add Project
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
