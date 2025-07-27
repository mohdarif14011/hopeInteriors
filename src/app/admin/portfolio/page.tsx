
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getPortfolioItems, deletePortfolioItem, Project } from '@/services/portfolio';
import { PlusCircle, MoreHorizontal, Trash2, Pencil } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useToast } from '@/components/ui/toast';


export default function AdminPortfolioPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [projectToDelete, setProjectToDelete] = useState<Project | null>(null);
    const { toast } = useToast();

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

    const openDeleteDialog = (project: Project) => {
        setProjectToDelete(project);
        setIsDeleteDialogOpen(true);
    };

    const handleDeleteProject = async () => {
        if (!projectToDelete) return;
        
        const result = await deletePortfolioItem(projectToDelete.id);
        
        if (result.success) {
            setProjects(projects.filter(p => p.id !== projectToDelete.id));
            toast({
                title: "Project Deleted",
                description: `"${projectToDelete.title}" has been removed from your portfolio.`,
            });
        } else {
             toast({
                variant: "destructive",
                title: "Error Deleting Project",
                description: result.error || "An unknown error occurred.",
            });
        }
        
        setIsDeleteDialogOpen(false);
        setProjectToDelete(null);
    };

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
                                <TableHead>
                                    <span className="sr-only">Actions</span>
                                </TableHead>
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
                                        <TableCell><Skeleton className="h-8 w-8" /></TableCell>
                                    </TableRow>
                                ))
                            ) : error ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center text-destructive py-12">{error}</TableCell>
                                </TableRow>
                            ) : projects.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center text-muted-foreground py-12">No projects found. Add your first project!</TableCell>
                                </TableRow>
                            ) : (
                                projects.map((project) => (
                                    <TableRow key={project.id}>
                                        <TableCell className="hidden sm:table-cell">
                                            <Image
                                                alt={project.title}
                                                className="aspect-square rounded-md object-cover"
                                                height="64"
                                                src={project.coverImageUrl || 'https://placehold.co/64x64.png'}
                                                width="64"
                                            />
                                        </TableCell>
                                        <TableCell className="font-medium">{project.title}</TableCell>
                                        <TableCell>{project.category}</TableCell>
                                        <TableCell className="hidden md:table-cell max-w-sm truncate">
                                            {project.description}
                                        </TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button aria-haspopup="true" size="icon" variant="ghost">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                        <span className="sr-only">Toggle menu</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem asChild>
                                                        <Link href={`/admin/portfolio/edit/${project.id}`} className="flex items-center gap-2 cursor-pointer">
                                                            <Pencil className="h-4 w-4"/> Edit
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem 
                                                        className="flex items-center gap-2 text-destructive focus:text-destructive cursor-pointer"
                                                        onClick={() => openDeleteDialog(project)}>
                                                        <Trash2 className="h-4 w-4"/> Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the project
                        <span className="font-bold"> {projectToDelete?.title}</span> and remove its data from our servers.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDeleteProject} className="bg-destructive hover:bg-destructive/90">
                        Delete
                    </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
