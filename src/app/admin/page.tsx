import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdminDashboardPage() {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
            </div>
            <div
                className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm mt-4"
            >
                <div className="flex flex-col items-center gap-1 text-center py-20">
                    <h3 className="text-2xl font-bold tracking-tight">
                        Welcome to the Admin Panel
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        You can manage your portfolio content here.
                    </p>
                    <Button asChild className="mt-4">
                        <Link href="/admin/portfolio">Manage Portfolio</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
