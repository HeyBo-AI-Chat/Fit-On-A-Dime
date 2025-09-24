import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const categoryData = {
  reviews: {
    title: "Equipment Reviews",
    description:
      "Honest, detailed reviews of budget-friendly fitness equipment to help you make informed purchasing decisions.",
    posts: [
      {
        id: 3,
        title: "Resistance Bands vs Dumbbells: Honest Comparison",
        excerpt:
          "Which budget-friendly option gives you more bang for your buck? We break down the pros, cons, and best use cases.",
        author: "Emma Davis",
        readTime: "10 min read",
        image: "/resistance-bands-and-dumbbells-comparison.jpg",
        slug: "resistance-bands-vs-dumbbells-honest-comparison",
      },
      {
        id: 4,
        title: "5 Yoga Mats That Won't Slip (All Under $30)",
        excerpt:
          "Stop sliding around during your practice. These affordable yoga mats provide the grip and comfort you need.",
        author: "Lisa Park",
        readTime: "5 min read",
        image: "/colorful-yoga-mats-rolled-up.jpg",
        slug: "5-yoga-mats-that-wont-slip-all-under-30",
      },
    ],
  },
  tutorials: {
    title: "Home Workouts",
    description: "Step-by-step workout guides and fitness tutorials you can do at home without expensive equipment.",
    posts: [
      {
        id: 2,
        title: "Complete Bodyweight Workout: No Equipment Needed",
        excerpt:
          "Master these 12 bodyweight exercises for a full-body workout that costs absolutely nothing but delivers incredible results.",
        author: "Mike Chen",
        readTime: "6 min read",
        image: "/person-doing-bodyweight-exercises-push-ups-squats.jpg",
        slug: "complete-bodyweight-workout-no-equipment-needed",
      },
      {
        id: 5,
        title: "15-Minute HIIT Workout for Busy Schedules",
        excerpt:
          "Maximize your fitness gains with this time-efficient, equipment-free HIIT routine perfect for any fitness level.",
        author: "David Wilson",
        readTime: "4 min read",
        image: "/person-doing-hiit-workout-jumping-jacks-burpees.jpg",
        slug: "15-minute-hiit-workout-for-busy-schedules",
      },
    ],
  },
  "top-lists": {
    title: "Top 10 Lists",
    description: "Curated lists of the best budget fitness equipment, ranked and reviewed by our expert team.",
    posts: [
      {
        id: 1,
        title: "10 Best Budget Home Gym Equipment Under $50",
        excerpt:
          "Transform your living room into a fitness haven without breaking the bank. We've tested and reviewed the most effective budget equipment.",
        author: "Sarah Johnson",
        readTime: "8 min read",
        image: "/home-gym-equipment-resistance-bands-dumbbells.jpg",
        slug: "10-best-budget-home-gym-equipment-under-50",
      },
    ],
  },
  nutrition: {
    title: "Nutrition",
    description:
      "Budget-friendly nutrition tips and meal prep ideas to fuel your fitness goals without breaking the bank.",
    posts: [
      {
        id: 6,
        title: "Budget Meal Prep: Fuel Your Fitness for Less",
        excerpt:
          "Eat clean and support your fitness goals without overspending. Simple, nutritious meal prep ideas under $5 per serving.",
        author: "Rachel Green",
        readTime: "12 min read",
        image: "/healthy-meal-prep-containers-with-vegetables-and-p.jpg",
        slug: "budget-meal-prep-fuel-your-fitness-for-less",
      },
    ],
  },
  "budget-tips": {
    title: "Budget Tips",
    description:
      "Money-saving strategies and tips to stay fit without spending a fortune on expensive gym memberships or equipment.",
    posts: [],
  },
}

export async function generateStaticParams() {
  return Object.keys(categoryData).map((category) => ({
    category: category,
  }))
}

export async function generateMetadata({ params }: { params: { category: string } }) {
  const category = categoryData[params.category as keyof typeof categoryData]

  if (!category) {
    return {
      title: "Category Not Found - Fit on a Dime",
    }
  }

  return {
    title: `${category.title} - Fit on a Dime`,
    description: category.description,
    keywords: `${category.title.toLowerCase()}, budget fitness, home workouts, affordable fitness equipment`,
  }
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = categoryData[params.category as keyof typeof categoryData]

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          {/* Category Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{category.title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{category.description}</p>
          </div>

          {/* Posts Grid */}
          {category.posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.posts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{category.title}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="ghost" size="sm">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold mb-4">Coming Soon!</h2>
              <p className="text-muted-foreground mb-8">
                We're working on more {category.title.toLowerCase()} content. Check back soon for new articles!
              </p>
              <Link href="/">
                <Button>Browse All Articles</Button>
              </Link>
            </div>
          )}

          {/* Newsletter CTA */}
          <div className="mt-16 bg-muted rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Get notified when we publish new {category.title.toLowerCase()} articles and reviews.
            </p>
            <div className="flex max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-input rounded-md bg-background"
              />
              <Link href="/subscribe">
                <Button>Subscribe</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
