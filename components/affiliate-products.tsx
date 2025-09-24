import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink, TrendingUp } from "lucide-react"
import Link from "next/link"

const affiliateProducts = [
  {
    id: 1,
    name: "Resistance Bands Set (11-Piece)",
    price: "$24.99",
    originalPrice: "$39.99",
    rating: 4.8,
    reviews: 2847,
    image: "/resistance-bands-set-with-handles.jpg",
    description: "Complete home gym in a bag. Perfect for strength training, stretching, and rehabilitation.",
    pros: ["Versatile workout options", "Space-saving design", "Includes door anchor"],
    badge: "Best Seller",
    affiliate: "Amazon",
    affiliateUrl: "https://amazon.com/dp/B08R5QYJ7P?tag=fitonadime-20",
  },
  {
    id: 2,
    name: "Adjustable Dumbbells (20lbs Each)",
    price: "$89.99",
    originalPrice: "$129.99",
    rating: 4.6,
    reviews: 1523,
    image: "/adjustable-dumbbells-black.jpg",
    description: "Space-efficient dumbbells that replace an entire weight set. Quick weight changes.",
    pros: ["Saves space", "Quick adjustments", "Durable construction"],
    badge: "Editor's Choice",
    affiliate: "Amazon",
    affiliateUrl: "https://amazon.com/dp/B0787BQZPX?tag=fitonadime-20",
  },
  {
    id: 3,
    name: "Premium Yoga Mat (6mm Thick)",
    price: "$28.99",
    originalPrice: "$45.99",
    rating: 4.7,
    reviews: 3241,
    image: "/thick-yoga-mat-purple-non-slip.jpg",
    description: "Extra-thick, non-slip yoga mat perfect for all types of floor exercises and stretching.",
    pros: ["Extra cushioning", "Non-slip surface", "Easy to clean"],
    badge: "Top Rated",
    affiliate: "Amazon",
    affiliateUrl: "https://amazon.com/dp/B01LXQZQZQ?tag=fitonadime-20",
  },
  {
    id: 4,
    name: "Foam Roller for Recovery",
    price: "$19.99",
    originalPrice: "$34.99",
    rating: 4.5,
    reviews: 987,
    image: "/foam-roller-blue-textured.jpg",
    description: "High-density foam roller for muscle recovery, pain relief, and improved flexibility.",
    pros: ["Muscle recovery", "Improves flexibility", "Compact storage"],
    badge: "Great Value",
    affiliate: "Amazon",
    affiliateUrl: "https://amazon.com/dp/B00XM2MRGI?tag=fitonadime-20",
  },
]

export function AffiliateProducts() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-3xl lg:text-4xl font-bold">Top Picks This Month</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hand-picked, tested, and approved budget-friendly fitness equipment that delivers real results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {affiliateProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">{product.badge}</Badge>
                {product.originalPrice && (
                  <Badge variant="destructive" className="absolute top-3 right-3">
                    Save{" "}
                    {Math.round(
                      ((Number.parseFloat(product.originalPrice.slice(1)) - Number.parseFloat(product.price.slice(1))) /
                        Number.parseFloat(product.originalPrice.slice(1))) *
                        100,
                    )}
                    %
                  </Badge>
                )}
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews.toLocaleString()})
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">{product.description}</p>

                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground font-medium">Key Benefits:</div>
                  <ul className="text-xs space-y-1">
                    {product.pros.map((pro, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-1 w-1 bg-primary rounded-full"></div>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">{product.price}</div>
                    {product.originalPrice && (
                      <div className="text-sm text-muted-foreground line-through">{product.originalPrice}</div>
                    )}
                  </div>
                </div>

                <a
                  href={product.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block w-full"
                >
                  <Button className="w-full" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Check Price on {product.affiliate}
                  </Button>
                </a>

                <p className="text-xs text-muted-foreground text-center">
                  *As an affiliate, we earn from qualifying purchases
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/category/reviews">
            <Button variant="outline" size="lg">
              View All Recommendations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
