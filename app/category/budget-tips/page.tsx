import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, User, ArrowLeft } from "lucide-react"
import Link from "next/link"

const budgetTipsArticles = [
  {
    id: 1,
    title: "10 Ways to Save Money on Fitness Equipment",
    excerpt: "Smart shopping strategies to build your home gym without breaking the bank.",
    author: "Sarah Johnson",
    readTime: "5 min read",
    image: "/budget-fitness-equipment-shopping.jpg",
    publishDate: "2024-01-20",
    slug: "10-ways-save-money-fitness-equipment",
    content: `
      <p>Building a home gym doesn't have to cost thousands. Here are 10 proven strategies to save money while getting quality equipment.</p>
      
      <h2>1. Buy Used Equipment</h2>
      <p>Check Facebook Marketplace, Craigslist, and local gym closures for gently used equipment at 50-70% off retail prices.</p>
      
      <h2>2. Shop End-of-Season Sales</h2>
      <p>January and September offer the best deals as retailers clear inventory for new fitness trends.</p>
      
      <h2>3. Consider Multi-Purpose Equipment</h2>
      <p>Resistance bands, adjustable dumbbells, and suspension trainers replace multiple single-purpose items.</p>
      
      <h2>4. Start with Bodyweight Exercises</h2>
      <p>Master push-ups, squats, and planks before investing in equipment. You might find you need less than expected.</p>
      
      <h2>5. DIY Alternatives</h2>
      <p>Water jugs for weights, towels for sliders, and stairs for cardio can replace expensive equipment.</p>
      
      <h2>6. Buy Generic Brands</h2>
      <p>Store brands often offer 30-50% savings with similar quality to name brands.</p>
      
      <h2>7. Wait for Holiday Sales</h2>
      <p>Black Friday, New Year, and Memorial Day typically offer 20-40% discounts on fitness equipment.</p>
      
      <h2>8. Join Warehouse Clubs</h2>
      <p>Costco and Sam's Club offer bulk pricing on fitness equipment with generous return policies.</p>
      
      <h2>9. Check Return Policies</h2>
      <p>Buy from retailers with 30+ day return policies to test equipment at home before committing.</p>
      
      <h2>10. Prioritize Versatility Over Specialization</h2>
      <p>Choose equipment that works multiple muscle groups rather than single-purpose machines.</p>
    `,
  },
  {
    id: 2,
    title: "Free Fitness Apps That Actually Work",
    excerpt: "Skip expensive gym memberships with these proven free fitness apps that deliver real results.",
    author: "Mike Chen",
    readTime: "4 min read",
    image: "/free-fitness-apps-smartphone.jpg",
    publishDate: "2024-01-18",
    slug: "free-fitness-apps-that-work",
    content: `
      <p>Why pay for expensive fitness programs when these free apps offer professional-quality workouts and tracking?</p>
      
      <h2>Nike Training Club</h2>
      <p>Offers 200+ free workouts from 15-60 minutes, with options for all fitness levels and no equipment needed.</p>
      
      <h2>Adidas Training by Runtastic</h2>
      <p>Bodyweight workouts, running plans, and nutrition tracking all in one comprehensive free app.</p>
      
      <h2>FitOn</h2>
      <p>Live and on-demand classes including HIIT, yoga, pilates, and dance with celebrity trainers.</p>
      
      <h2>Seven - 7 Minute Workout</h2>
      <p>Science-based 7-minute workouts perfect for busy schedules, with achievement tracking and challenges.</p>
      
      <h2>Yoga with Adriene (YouTube)</h2>
      <p>Free yoga classes for all levels, with 30-day challenges and specialized programs for different needs.</p>
      
      <h2>Strava</h2>
      <p>Social fitness tracking for running and cycling, with segment challenges and community motivation.</p>
      
      <h2>MyFitnessPal</h2>
      <p>Comprehensive calorie and macro tracking with the world's largest food database.</p>
      
      <h2>Couch to 5K</h2>
      <p>Structured 9-week program to get non-runners completing a 5K race safely and effectively.</p>
    `,
  },
  {
    id: 3,
    title: "Budget-Friendly Protein Sources for Fitness",
    excerpt: "Meet your protein goals without expensive supplements using these affordable whole food options.",
    author: "Rachel Green",
    readTime: "6 min read",
    image: "/affordable-protein-sources-eggs-beans.jpg",
    publishDate: "2024-01-15",
    slug: "budget-protein-sources-fitness",
    content: `
      <p>Protein doesn't have to be expensive. These budget-friendly sources provide quality nutrition for muscle building and recovery.</p>
      
      <h2>Eggs - $0.25 per serving</h2>
      <p>Complete protein with all essential amino acids. Versatile, shelf-stable, and perfect for any meal.</p>
      
      <h2>Dried Beans and Lentils - $0.15 per serving</h2>
      <p>High in protein and fiber, beans provide sustained energy and can be bought in bulk for maximum savings.</p>
      
      <h2>Chicken Thighs - $2.50 per pound</h2>
      <p>More affordable than breasts, with better flavor and moisture. Buy in bulk and freeze portions.</p>
      
      <h2>Greek Yogurt - $0.75 per serving</h2>
      <p>Double the protein of regular yogurt, plus probiotics for digestive health. Buy large containers for savings.</p>
      
      <h2>Canned Tuna - $1.00 per serving</h2>
      <p>Convenient, shelf-stable protein that's perfect for quick meals and meal prep.</p>
      
      <h2>Cottage Cheese - $0.50 per serving</h2>
      <p>High in casein protein, perfect for nighttime muscle recovery. Mix with fruit for a complete snack.</p>
      
      <h2>Ground Turkey - $3.00 per pound</h2>
      <p>Lean protein that's versatile for burgers, meatballs, and stir-fries. Often on sale.</p>
      
      <h2>Protein Powder (when on sale) - $1.00 per serving</h2>
      <p>Buy during sales and use coupons. Whey protein offers the best value per gram of protein.</p>
    `,
  },
  {
    id: 4,
    title: "Creating a Home Gym for Under $100",
    excerpt:
      "Everything you need to build an effective home gym on a tight budget, with specific product recommendations.",
    author: "David Wilson",
    readTime: "7 min read",
    image: "/home-gym-under-100-dollars.jpg",
    publishDate: "2024-01-12",
    slug: "home-gym-under-100-dollars",
    content: `
      <p>You can create a complete home gym for under $100 that rivals expensive gym memberships. Here's exactly what to buy.</p>
      
      <h2>Essential Equipment ($85 total)</h2>
      
      <h3>Resistance Bands Set - $25</h3>
      <p>Provides variable resistance for strength training, stretching, and rehabilitation exercises.</p>
      
      <h3>Yoga Mat - $20</h3>
      <p>Foundation for floor exercises, stretching, and bodyweight workouts. Choose 6mm thickness for comfort.</p>
      
      <h3>Jump Rope - $15</h3>
      <p>Excellent cardio equipment that burns more calories per minute than running.</p>
      
      <h3>Suspension Trainer - $25</h3>
      <p>Bodyweight training system that uses gravity and your body weight for resistance.</p>
      
      <h2>Optional Additions ($15 budget remaining)</h2>
      
      <h3>Foam Roller - $15</h3>
      <p>Essential for recovery and injury prevention. Helps maintain flexibility and reduce soreness.</p>
      
      <h2>Free Resources to Maximize Your Equipment</h2>
      <ul>
        <li>YouTube workout channels for guided routines</li>
        <li>Fitness apps with bodyweight programs</li>
        <li>Online resistance band workout guides</li>
        <li>Jump rope training progressions</li>
      </ul>
      
      <h2>Sample Weekly Workout Schedule</h2>
      <ul>
        <li><strong>Monday:</strong> Upper body resistance bands</li>
        <li><strong>Tuesday:</strong> Jump rope cardio + core</li>
        <li><strong>Wednesday:</strong> Lower body suspension trainer</li>
        <li><strong>Thursday:</strong> Yoga/stretching on mat</li>
        <li><strong>Friday:</strong> Full body circuit</li>
        <li><strong>Weekend:</strong> Active recovery with foam rolling</li>
      </ul>
      
      <p>This setup provides everything needed for strength training, cardio, flexibility, and recovery - all for less than two months of gym membership!</p>
    `,
  },
]

export default function BudgetTipsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Budget Tips</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Smart strategies to achieve your fitness goals without breaking the bank. Practical advice for
              budget-conscious fitness enthusiasts.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {budgetTipsArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img
                    src={article.image || "/placeholder.svg?height=300&width=500&query=budget fitness tips"}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    Budget Tips
                  </Badge>
                  <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="h-4 w-4 mr-1" />
                    {article.author}
                    <Clock className="h-4 w-4 ml-3 mr-1" />
                    {article.readTime}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3 mb-4">{article.excerpt}</p>
                  <Link href={`/blog/${article.slug}`}>
                    <Button>Read Full Article</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
