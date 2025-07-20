'use client';
import Image from "next/image"
import Link from "next/link"
import { PlusCircle, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Skeleton } from "@/components/ui/skeleton";

interface PortfolioItem {
    id: string;
    title: string;
    category: string;
    imageUrl: string;
}

export default function AdminPortfolioPage() {
    const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPortfolioItems = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "portfolio"));
                const items: PortfolioItem[] = [];
                querySnapshot.forEach((doc) => {
                    items.push({ id: doc.id, ...doc.data() } as PortfolioItem);
                });
                setPortfolioItems(items);
            } catch (error) {
                console.error("Error fetching portfolio items: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPortfolioItems();
    }, []);

  return (
    <div>
        <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Portfolio</h1>
            <div className="ml-auto flex items-center gap-2">
                <Link href="/admin/portfolio/new">
                    <Button size="sm" className="h-8 gap-1">
                        <PlusCircle className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                            Add Item
                        </span>
                    </Button>
                </Link>
            </div>
        </div>
        <Card className="mt-4">
            <CardHeader>
                <CardTitle>Portfolio Items</CardTitle>
                <CardDescription>Manage your projects here. Add, edit, or delete items.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="hidden w-[100px] sm:table-cell">
                                <span className="sr-only">Image</span>
                            </TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>
                                <span className="sr-only">Actions</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            Array.from({ length: 4 }).map((_, index) => (
                                <TableRow key={index}>
                                    <TableCell className="hidden sm:table-cell">
                                        <Skeleton className="aspect-square rounded-md h-16 w-16" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-5 w-48" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-5 w-24" />
                                    </TableCell>
                                    <TableCell>
                                        <div className="h-8 w-8" />
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : portfolioItems.length > 0 ? (
                            portfolioItems.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="hidden sm:table-cell">
                                        <Image
                                            alt={item.title}
                                            className="aspect-square rounded-md object-cover"
                                            height="64"
                                            src={item.imageUrl || "https://placehold.co/64x64.png"}
                                            width="64"
                                            data-ai-hint="portfolio image"
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">{item.title}</TableCell>
                                    <TableCell>{item.category}</TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    aria-haspopup="true"
                                                    size="icon"
                                                    variant="ghost"
                                                >
                                                    <MoreHorizontal className="h-4 w-4" />
                                                    <span className="sr-only">Toggle menu</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                           <TableRow>
                                <TableCell colSpan={4} className="text-center h-24">
                                    No portfolio items found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>
                <div className="text-xs text-muted-foreground">
                    Showing <strong>{portfolioItems.length}</strong> of <strong>{portfolioItems.length}</strong> projects
                </div>
            </CardFooter>
        </Card>
    </div>
  )
}
