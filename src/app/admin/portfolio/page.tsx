
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getPortfolioItems, Project } from '@/services/portfolio';
import { PlusCircle, MoreHorizontal } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export default function AdminPortfolioPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const items = await getPortfolioItems();
                setProjects(items);
            } catch (err) {
                console.error(err);
                setError("Failed to fetch projects. Please check your connection and permissions.");
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold font-headline">Manage Portfolio</h1>
                    <p className="text-muted-foreground">A list of all projects in your portfolio.</p>
                </div>
                <Button asChild>
                    <Link href="/admin/portfolio/new">
                        <PlusCircle className="mr-2 h-4 w-4" /> Add New Project
                    </Link>
                </Button>
            </div>

            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="hidden w-[100px] sm:table-cell">Image</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead className="hidden md:table-cell">Description</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {loading ? (
                                Array.from({ length: 5 }).map((_, i) => (
                                    <TableRow key={i}>
                                        <TableCell className="hidden sm:table-cell"><Skeleton className="h-16 w-16 rounded-md" /></TableCell>
                                        <TableCell><Skeleton className="h-5 w-32" /></TableCell>
                                        <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                                        <TableCell className="hidden md:table-cell"><Skeleton className="h-5 w-full" /></TableCell>
                                    </TableRow>
                                ))
                            ) : error ? (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center text-destructive">{error}</TableCell>
                                </TableRow>
                            ) : projects.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center text-muted-foreground">No projects found. Add your first project!</TableCell>
                                </TableRow>
                            ) : (
                                projects.map((project) => (
                                    <TableRow key={project.id}>
                                        <TableCell className="hidden sm:table-cell">
                                            <Image
                                                alt={project.title}
                                                className="aspect-square rounded-md object-cover"
                                                height="64"
                                                src={project.coverImageUrl}
                                                width="64"
                                            />
                                        </TableCell>
                                        <TableCell className="font-medium">{project.title}</TableCell>
                                        <TableCell>{project.category}</TableCell>
                                        <TableCell className="hidden md:table-cell max-w-sm truncate">
                                            {project.description}
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
