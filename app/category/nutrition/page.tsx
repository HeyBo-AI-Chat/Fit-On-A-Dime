import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, User } from "lucide-react"
import Link from "next/link"

const nutritionPosts = [
  {
    slug: "budget-meal-prep-fuel-your-fitness-for-less",
    title: "Budget Meal Prep: Fuel Your Fitness for Less",
    excerpt:
      "Eat clean and support your fitness goals without overspending. Simple, nutritious meal prep ideas under $5 per serving.",
    author: "Rachel Green",
    readTime: "12 min read",
    image: "/healthy-meal-prep-containers-with-vegetables-and-p.jpg",
    publishDate: "2024-01-03",
  },
]

export const metadata = {
  title: "Nutrition - Budget-Friendly Healthy Eating | Fit on a Dime",
  description:
    "Discover budget-friendly nutrition tips, meal prep ideas, and healthy eating strategies that support your fitness goals without breaking the bank.",
  keywords: "budget nutrition, healthy eating on a budget, meal prep, affordable healthy food, fitness nutrition",
}

export default function NutritionCategoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Nutrition
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Budget-Friendly Nutrition</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fuel your fitness journey with affordable, nutritious meal ideas and smart eating strategies that won't
              break the bank.
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid gap-8">
            {nutritionPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="aspect-video md:aspect-square relative">
                      <img
                        src={
                          post.image || `/placeholder.svg?height=300&width=400&query=${encodeURIComponent(post.title)}`
                        }
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                        <Clock className="h-4 w-4 ml-3 mr-1" />
                        {post.readTime}
                      </div>
                      <CardTitle className="text-2xl mb-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                      <Link href={`/blog/${post.slug}`}>
                        <Button>Read Full Article</Button>
                      </Link>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-primary/5">
              <h2 className="text-2xl font-bold mb-4">Want More Nutrition Tips?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter for weekly meal prep ideas, budget shopping tips, and nutrition advice
                tailored for home fitness enthusiasts.
              </p>
              <Button size="lg">Get Free Nutrition Guide</Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
