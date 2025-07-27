
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getTestimonials, deleteTestimonial, Testimonial } from '@/services/testimonials';
import { PlusCircle, MoreHorizontal, Trash2, Pencil, Star } from 'lucide-react';
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


const renderStars = (rating: number) => {
    return (
        <div className="flex gap-1 text-yellow-500">
        {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-current" : ""}`} />
        ))}
        </div>
    )
}

export default function AdminTestimonialsPage() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [testimonialToDelete, setTestimonialToDelete] = useState<Testimonial | null>(null);
    const { toast } = useToast();

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                setLoading(true);
                const items = await getTestimonials();
                setTestimonials(items);
            } catch (err) {
                console.error(err);
                setError("Failed to fetch testimonials.");
            } finally {
                setLoading(false);
            }
        };
        fetchTestimonials();
    }, []);

    const openDeleteDialog = (testimonial: Testimonial) => {
        setTestimonialToDelete(testimonial);
        setIsDeleteDialogOpen(true);
    };

    const handleDeleteTestimonial = async () => {
        if (!testimonialToDelete) return;
        
        const result = await deleteTestimonial(testimonialToDelete.id);
        
        if (result.success) {
            setTestimonials(testimonials.filter(p => p.id !== testimonialToDelete.id));
            toast({
                title: "Testimonial Deleted",
                description: `The testimonial from "${testimonialToDelete.name}" has been removed.`,
            });
        } else {
             toast({
                variant: "destructive",
                title: "Error Deleting Testimonial",
                description: result.error || "An unknown error occurred.",
            });
        }
        
        setIsDeleteDialogOpen(false);
        setTestimonialToDelete(null);
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold font-headline">Manage Testimonials</h1>
                    <p className="text-muted-foreground">A list of all testimonials from your clients.</p>
                </div>
                <Button asChild>
                    <Link href="/admin/testimonials/new">
                        <PlusCircle className="mr-2 h-4 w-4" /> Add New Testimonial
                    </Link>
                </Button>
            </div>

            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Rating</TableHead>
                                <TableHead className="hidden md:table-cell">Comment</TableHead>
                                <TableHead>
                                    <span className="sr-only">Actions</span>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {loading ? (
                                Array.from({ length: 5 }).map((_, i) => (
                                    <TableRow key={i}>
                                        <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                                        <TableCell><Skeleton className="h-5 w-20" /></TableCell>
                                        <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                                        <TableCell className="hidden md:table-cell"><Skeleton className="h-5 w-full" /></TableCell>
                                        <TableCell><Skeleton className="h-8 w-8" /></TableCell>
                                    </TableRow>
                                ))
                            ) : error ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center text-destructive py-12">{error}</TableCell>
                                </TableRow>
                            ) : testimonials.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center text-muted-foreground py-12">No testimonials found. Add your first one!</TableCell>
                                </TableRow>
                            ) : (
                                testimonials.map((testimonial) => (
                                    <TableRow key={testimonial.id}>
                                        <TableCell className="font-medium">{testimonial.name}</TableCell>
                                        <TableCell>{testimonial.location}</TableCell>
                                        <TableCell>{renderStars(testimonial.rating)}</TableCell>
                                        <TableCell className="hidden md:table-cell max-w-sm truncate">
                                            {testimonial.comment}
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
                                                        <Link href={`/admin/testimonials/edit/${testimonial.id}`} className="flex items-center gap-2 cursor-pointer">
                                                            <Pencil className="h-4 w-4"/> Edit
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem 
                                                        className="flex items-center gap-2 text-destructive focus:text-destructive cursor-pointer"
                                                        onClick={() => openDeleteDialog(testimonial)}>
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
                        This action cannot be undone. This will permanently delete the testimonial from
                        <span className="font-bold"> {testimonialToDelete?.name}</span>.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDeleteTestimonial} className="bg-destructive hover:bg-destructive/90">
                        Delete
                    </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
