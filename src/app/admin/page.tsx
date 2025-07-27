import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { List, PlusCircle } from "lucide-react";
import Link from "next/link";

export default function AdminDashboardPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold font-headline mb-4">Admin Dashboard</h1>
            <p className="text-muted-foreground mb-8">Welcome to the DesignVerse admin panel. Use the links below to manage your site.</p>

             <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Link href="/admin/portfolio">
                    <Card className="hover:bg-secondary transition-colors">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Portfolio
                            </CardTitle>
                            <List className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                           <p className="text-xs text-muted-foreground">
                                View and manage all your portfolio projects.
                            </p>
                        </CardContent>
                    </Card>
                </Link>
                <Link href="/admin/portfolio/new">
                     <Card className="hover:bg-secondary transition-colors">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Add New Project
                            </CardTitle>
                            <PlusCircle className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                           <p className="text-xs text-muted-foreground">
                                Add a new project to your portfolio.
                            </p>
                        </CardContent>
                    </Card>
                </Link>
            </div>
        </div>
    )
}
