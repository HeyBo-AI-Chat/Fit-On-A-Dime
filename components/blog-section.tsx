import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, User } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "10 Best Budget Home Gym Equipment Under $50",
    excerpt:
      "Transform your living room into a fitness haven without breaking the bank. We've tested and reviewed the most effective budget equipment.",
    category: "Top Lists",
    author: "Sarah Johnson",
    readTime: "8 min read",
    image: "/home-gym-equipment-resistance-bands-dumbbells.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Complete Bodyweight Workout: No Equipment Needed",
    excerpt:
      "Master these 12 bodyweight exercises for a full-body workout that costs absolutely nothing but delivers incredible results.",
    category: "Tutorials",
    author: "Mike Chen",
    readTime: "6 min read",
    image: "/person-doing-bodyweight-exercises-push-ups-squats.jpg",
  },
  {
    id: 3,
    title: "Resistance Bands vs Dumbbells: Honest Comparison",
    excerpt:
      "Which budget-friendly option gives you more bang for your buck? We break down the pros, cons, and best use cases.",
    category: "Reviews",
    author: "Emma Davis",
    readTime: "10 min read",
    image: "/resistance-bands-and-dumbbells-comparison.jpg",
  },
  {
    id: 4,
    title: "5 Yoga Mats That Won't Slip (All Under $30)",
    excerpt:
      "Stop sliding around during your practice. These affordable yoga mats provide the grip and comfort you need.",
    category: "Reviews",
    author: "Lisa Park",
    readTime: "5 min read",
    image: "/colorful-yoga-mats-rolled-up.jpg",
  },
  {
    id: 5,
    title: "15-Minute HIIT Workout for Busy Schedules",
    excerpt:
      "Maximize your fitness gains with this time-efficient, equipment-free HIIT routine perfect for any fitness level.",
    category: "Tutorials",
    author: "David Wilson",
    readTime: "4 min read",
    image: "/person-doing-hiit-workout-jumping-jacks-burpees.jpg",
  },
  {
    id: 6,
    title: "Budget Meal Prep: Fuel Your Fitness for Less",
    excerpt:
      "Eat clean and support your fitness goals without overspending. Simple, nutritious meal prep ideas under $5 per serving.",
    category: "Nutrition",
    author: "Rachel Green",
    readTime: "12 min read",
    image: "/healthy-meal-prep-containers-with-vegetables-and-p.jpg",
  },
]

export function BlogSection() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Latest Articles</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert reviews, practical tutorials, and money-saving fitness tips to help you achieve your goals on any
            budget.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Post */}
            {featuredPost && (
              <Card className="mb-8 overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Featured</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                      <Clock className="h-4 w-4 ml-3 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{featuredPost.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{featuredPost.excerpt}</p>
                  <Link href={`/blog/${createSlug(featuredPost.title)}`}>
                    <Button>Read Full Article</Button>
                  </Link>
                </CardContent>
              </Card>
            )}

            {/* Regular Posts Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {regularPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                      <Link href={`/blog/${createSlug(post.title)}`}>
                        <Button variant="ghost" size="sm">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Newsletter Signup */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Join Our Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get weekly budget fitness tips, exclusive deals, and early access to our latest reviews.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
                    />
                    <Button className="w-full">Subscribe Free</Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    No spam, unsubscribe anytime. Powered by Mailchimp.
                  </p>
                </CardContent>
              </Card>

              {/* Popular Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Popular Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      { name: "Equipment Reviews", path: "/category/reviews" },
                      { name: "Home Workouts", path: "/category/tutorials" },
                      { name: "Budget Tips", path: "/category/budget-tips" },
                      { name: "Nutrition", path: "/category/nutrition" },
                      { name: "Top 10 Lists", path: "/category/top-lists" },
                    ].map((category) => (
                      <Link
                        key={category.name}
                        href={category.path}
                        className="block py-2 px-3 rounded-md hover:bg-muted transition-colors text-sm"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">By the Numbers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground">Products Reviewed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">$25</div>
                      <div className="text-sm text-muted-foreground">Average Savings per Review</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">50K+</div>
                      <div className="text-sm text-muted-foreground">Happy Readers</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
