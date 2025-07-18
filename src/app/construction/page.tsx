import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";

const products = [
  {
    name: 'Sofa',
    price: 5199,
    description: 'Modern Sectional Sofa',
    category: 'Spacious and comfortable for the whole family.',
    image: 'https://placehold.co/400x400.png',
    hint: 'modern sofa'
  },
  {
    name: 'Bed',
    price: 1788,
    description: 'Upholstered Platform Bed',
    category: 'Elegant design with a comfortable headboard.',
    image: 'https://placehold.co/400x400.png',
    hint: 'platform bed'
  },
  {
    name: 'Table',
    price: 2045,
    description: 'Marble Dining Table',
    category: 'Luxurious and durable centerpiece.',
    image: 'https://placehold.co/400x400.png',
    hint: 'marble table'
  },
  {
    name: 'Dining Set',
    price: 3099,
    description: 'Modern Dining Set',
    category: 'Seats four comfortably, perfect for small spaces.',
    image: 'https://placehold.co/400x400.png',
    hint: 'dining table chairs'
  },
  {
    name: 'Office Chair',
    price: 3799,
    description: 'Ergonomic Office Chair',
    category: 'Supportive and stylish for your home office.',
    image: 'https://placehold.co/400x400.png',
    hint: 'office chair'
  },
  {
    name: 'Sideboard',
    price: 1289,
    description: 'Fluted Sideboard',
    category: 'Ample storage with a touch of elegance.',
    image: 'https://placehold.co/400x400.png',
    hint: 'wood sideboard'
  },
   {
    name: 'Lounge Chair',
    price: 1450,
    description: 'Leather Lounge Chair',
    category: 'A statement piece for any modern living room.',
    image: 'https://placehold.co/400x400.png',
    hint: 'leather chair'
  },
  {
    name: 'Bookshelf',
    price: 899,
    description: 'Minimalist Bookshelf',
    category: 'Display your collection with understated style.',
    image: 'https://placehold.co/400x400.png',
    hint: 'modern bookshelf'
  },
  {
    name: 'Coffee Table',
    price: 750,
    description: 'Oak Coffee Table',
    category: 'Solid wood construction with a natural finish.',
    image: 'https://placehold.co/400x400.png',
    hint: 'oak coffee table'
  },
];


export default function ProductsPage() {
  return (
    <div className="bg-background">
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-12">
        <p className="text-sm uppercase text-muted-foreground tracking-widest font-headline">Shop</p>
        <h1 className="text-4xl md:text-5xl font-bold font-headline mt-2 mb-4">Our Products</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover a curated selection of high-quality furniture designed to bring style and comfort to your home.
        </p>
      </div>

      <div className="flex justify-end mb-8">
        <Select>
          <SelectTrigger className="w-[180px] bg-background">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">Most Popular</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
            <Card key={product.name} className="overflow-hidden group bg-background border-none shadow-none">
              <div className="bg-secondary aspect-square relative overflow-hidden rounded-2xl">
                <Image src={product.image} alt={product.description} data-ai-hint={product.hint} fill className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-2xl"/>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="font-headline text-xl">{product.description}</CardTitle>
                  <p className="text-lg font-semibold">${product.price}</p>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <CardDescription>{product.category}</CardDescription>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
    </div>
  );
}
