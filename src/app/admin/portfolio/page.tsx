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

// This is placeholder data. In a real application, this would come from a database.
const portfolioItems = [
  {
    category: "Living Room",
    title: "Modern Minimalist Living Room",
    image: "https://placehold.co/600x400.png",
  },
  {
    category: "Bedroom",
    title: "Cozy Scandinavian Bedroom",
    image: "https://placehold.co/600x400.png",
  },
  {
    category: "Kitchen",
    title: "Industrial Chic Kitchen",
    image: "https://placehold.co/600x400.png",
  },
  {
    category: "Bathroom",
    title: "Luxurious Bathroom Retreat",
    image: "https://placehold.co/600x400.png",
  },
];


export default function AdminPortfolioPage() {
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
                        {portfolioItems.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className="hidden sm:table-cell">
                                <Image
                                    alt={item.title}
                                    className="aspect-square rounded-md object-cover"
                                    height="64"
                                    src={item.image}
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
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>
                <div className="text-xs text-muted-foreground">
                    Showing <strong>1-{portfolioItems.length}</strong> of <strong>{portfolioItems.length}</strong> products
                </div>
            </CardFooter>
        </Card>
    </div>
  )
}
