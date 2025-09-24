import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Mail, MessageSquare, Clock } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Contact Us - Fit on a Dime",
  description:
    "Get in touch with the Fit on a Dime team. We'd love to hear from you about product suggestions, questions, or partnership opportunities.",
  keywords: "contact fit on a dime, fitness questions, product suggestions, partnership opportunities",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about budget fitness? Want to suggest a product review? We'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="product-suggestion">Product Review Suggestion</option>
                      <option value="question">General Question</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="feedback">Website Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      placeholder="Tell us more about your question or suggestion..."
                      required
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Direct Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">General Inquiries</h4>
                    <p className="text-muted-foreground">hello@fitonadime.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Product Reviews</h4>
                    <p className="text-muted-foreground">reviews@fitonadime.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Partnerships</h4>
                    <p className="text-muted-foreground">partnerships@fitonadime.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We typically respond to all inquiries within 24-48 hours during business days.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">How do you test products?</h4>
                    <p className="text-sm text-muted-foreground">
                      We personally test every product for at least 30 days before writing a review, focusing on
                      durability, effectiveness, and value for money.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Do you accept product submissions?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes! We're always looking for new budget-friendly fitness products to review. Email us at
                      reviews@fitonadime.com with details.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Can I suggest article topics?</h4>
                    <p className="text-sm text-muted-foreground">
                      We love hearing from our community about what topics would be most helpful.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
