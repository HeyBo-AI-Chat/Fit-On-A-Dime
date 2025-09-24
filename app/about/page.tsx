import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Mail, Target, Users, Award } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About Us - Fit on a Dime",
  description:
    "Learn about Fit on a Dime's mission to make fitness accessible and affordable for everyone. Meet our team of fitness experts and reviewers.",
  keywords: "about fit on a dime, budget fitness experts, affordable fitness mission, home workout specialists",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Fit on a Dime</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe fitness should be accessible to everyone, regardless of budget. Our mission is to help you
              achieve your health and fitness goals without breaking the bank.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To democratize fitness by providing honest reviews, practical tutorials, and budget-friendly
                    solutions for home workouts.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Our Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Over 50,000 readers trust our recommendations to build effective home gyms and maintain healthy
                    lifestyles on a budget.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Our Promise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every product we review is personally tested. We only recommend equipment and strategies that
                    deliver real results.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Story Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                Fit on a Dime was born from a simple frustration: why does staying fit have to be so expensive? Our
                founder, Sarah Johnson, was a college student struggling to maintain her fitness routine after
                graduation when gym memberships became unaffordable.
              </p>
              <p className="text-muted-foreground mb-6">
                After discovering that effective workouts could be done at home with minimal equipment, Sarah began
                documenting her journey and sharing budget-friendly fitness solutions with friends. What started as a
                personal blog quickly grew into a trusted resource for thousands of people seeking affordable fitness
                alternatives.
              </p>
              <p className="text-muted-foreground mb-6">
                Today, our team of certified trainers, nutritionists, and fitness enthusiasts continues to test, review,
                and recommend the best budget-friendly fitness solutions. We've helped our readers save over $1.2
                million on fitness equipment while achieving their health goals.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">SJ</span>
                  </div>
                  <CardTitle>Sarah Johnson</CardTitle>
                  <Badge variant="secondary">Founder & Editor</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    NASM-certified trainer with 8+ years of experience in budget fitness solutions and home gym design.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">MC</span>
                  </div>
                  <CardTitle>Mike Chen</CardTitle>
                  <Badge variant="secondary">Fitness Writer</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Former personal trainer specializing in bodyweight workouts and HIIT training for busy
                    professionals.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">ED</span>
                  </div>
                  <CardTitle>Emma Davis</CardTitle>
                  <Badge variant="secondary">Equipment Reviewer</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Exercise physiologist with expertise in biomechanics and equipment testing for home fitness
                    applications.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">LP</span>
                  </div>
                  <CardTitle>Lisa Park</CardTitle>
                  <Badge variant="secondary">Yoga Specialist</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    RYT-500 certified yoga instructor focused on accessible yoga practices and affordable equipment
                    reviews.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">DW</span>
                  </div>
                  <CardTitle>David Wilson</CardTitle>
                  <Badge variant="secondary">HIIT Expert</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Certified strength and conditioning specialist creating efficient workout routines for time-pressed
                    individuals.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">RG</span>
                  </div>
                  <CardTitle>Rachel Green</CardTitle>
                  <Badge variant="secondary">Nutrition Expert</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Registered dietitian specializing in budget-friendly meal planning and sports nutrition for home
                    athletes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Honesty & Transparency</h3>
                <p className="text-muted-foreground">
                  We test every product ourselves and provide honest reviews, including both pros and cons. Our
                  affiliate relationships never influence our recommendations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Accessibility</h3>
                <p className="text-muted-foreground">
                  Fitness should be available to everyone, regardless of income, space, or experience level. We focus on
                  solutions that work for real people with real constraints.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Evidence-Based</h3>
                <p className="text-muted-foreground">
                  Our recommendations are backed by scientific research and real-world testing. We don't promote fads or
                  quick fixes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Community First</h3>
                <p className="text-muted-foreground">
                  Our readers' success is our success. We actively listen to feedback and create content based on your
                  needs and questions.
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-muted rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-6">
              Have questions, suggestions, or want to share your fitness journey? We'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>
                <Mail className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
              <Button variant="outline">Join Our Newsletter</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
