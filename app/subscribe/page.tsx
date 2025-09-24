import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, Mail, Gift, Zap } from "lucide-react"

export default function SubscribePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Subscribe for Free Updates</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of fitness enthusiasts getting budget-friendly workout tips, equipment reviews, and
              exclusive deals delivered to their inbox.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Subscription Form */}
            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl">Get Started Today</CardTitle>
                <p className="text-muted-foreground">Enter your email below to start receiving our weekly newsletter</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="fitonadime@zohomail.com" className="h-12" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">First Name (Optional)</Label>
                    <Input id="name" type="text" placeholder="Your first name" className="h-12" />
                  </div>
                  <Button type="submit" className="w-full h-12 text-lg">
                    Subscribe Free
                  </Button>
                </form>
                <p className="text-sm text-muted-foreground text-center">
                  No spam, unsubscribe anytime. We respect your privacy.
                </p>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">What You'll Get</h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Weekly Equipment Reviews</h3>
                    <p className="text-muted-foreground">
                      Honest reviews of budget-friendly fitness equipment to help you make smart purchases.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-blue-500 mt-0.5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Free Workout Plans</h3>
                    <p className="text-muted-foreground">
                      New workout routines and fitness challenges delivered straight to your inbox.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Gift className="h-6 w-6 text-purple-500 mt-0.5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Exclusive Deals & Discounts</h3>
                    <p className="text-muted-foreground">
                      Early access to sales and special discount codes for fitness gear and supplements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Budget Fitness Tips</h3>
                    <p className="text-muted-foreground">
                      Money-saving strategies and budget-friendly nutrition advice to maximize your fitness journey.
                    </p>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-primary/5">
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-2">Join 10,000+ Subscribers</h3>
                  <p className="text-muted-foreground">
                    "The best budget fitness advice I've found. Saved me hundreds on equipment!" - Sarah M.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
