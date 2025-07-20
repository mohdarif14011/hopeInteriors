
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getPortfolioItems } from "@/services/portfolio";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function AdminPortfolioPage() {
    const projects = await getPortfolioItems();

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
                                <TableHead>Image</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {projects.length > 0 ? (
                                projects.map((project) => (
                                    <TableRow key={project.id}>
                                        <TableCell>
                                            <Image src={project.imageUrl} alt={project.title} width={80} height={60} className="rounded-md object-cover" />
                                        </TableCell>
                                        <TableCell className="font-medium">{project.title}</TableCell>
                                        <TableCell>{project.category}</TableCell>
                                        <TableCell>
                                            <Button variant="outline" size="sm">Edit</Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center">No projects found.</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
