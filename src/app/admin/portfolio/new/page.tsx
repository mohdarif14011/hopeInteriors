import Link from "next/link"
import { ChevronLeft, Upload } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function AddPortfolioItemPage() {
  return (
    <div className="mx-auto grid max-w-2xl flex-1 auto-rows-max gap-4">
      <div className="flex items-center gap-4">
        <Link href="/admin/portfolio">
          <Button variant="outline" size="icon" className="h-7 w-7">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
        </Link>
        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
          Add New Portfolio Item
        </h1>
        <div className="hidden items-center gap-2 md:ml-auto md:flex">
          <Link href="/admin/portfolio">
            <Button variant="outline" size="sm">
              Discard
            </Button>
          </Link>
          <Button size="sm">Save Project</Button>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>
                Fill in the details for your new portfolio item.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    type="text"
                    className="w-full"
                    defaultValue="Modern Minimalist Living Room"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    defaultValue="A serene living space combining clean lines, a neutral color palette, and natural materials."
                    className="min-h-32"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category" aria-label="Select category">
                      <SelectValue placeholder="Select category" />
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
                 <Card>
                    <CardHeader>
                        <CardTitle>Project Image</CardTitle>
                        <CardDescription>Upload an image for the portfolio item.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-2">
                            <div className="grid h-48 w-full cursor-pointer grid-cols-1 items-center justify-center rounded-md border-2 border-dashed">
                                <div className="flex flex-col items-center gap-1 text-center">
                                    <Upload className="h-8 w-8 text-muted-foreground" />
                                    <p className="text-sm font-medium text-muted-foreground">
                                        Click to upload or drag and drop
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex items-center justify-center gap-2 md:hidden">
            <Link href="/admin/portfolio">
                <Button variant="outline" size="sm">
                    Discard
                </Button>
            </Link>
          <Button size="sm">Save Project</Button>
        </div>
      </div>
    </div>
  )
}
