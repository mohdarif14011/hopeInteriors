
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminDashboardPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold font-headline mb-4">Admin Dashboard</h1>
            <p className="text-muted-foreground mb-8">Welcome to the DesignVerse admin panel. Manage your content here.</p>

             <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Portfolio Management</CardTitle>
                        <CardDescription>Add, edit, or delete projects from your portfolio.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>You can manage all your projects in the portfolio section.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
