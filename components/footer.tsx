import { Facebook, Instagram, Twitter, Youtube, Mail, Heart } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-bold">Fit on a Dime</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Helping you achieve your fitness goals without breaking the bank. Honest reviews, practical tips, and
              budget-friendly solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/fitonadime"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/fitonadime"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/fitonadime"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/fitonadime"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@fitonadime.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/category/reviews" className="text-muted-foreground hover:text-primary transition-colors">
                  Equipment Reviews
                </Link>
              </li>
              <li>
                <Link href="/category/tutorials" className="text-muted-foreground hover:text-primary transition-colors">
                  Workout Tutorials
                </Link>
              </li>
              <li>
                <Link href="/category/top-lists" className="text-muted-foreground hover:text-primary transition-colors">
                  Top 10 Lists
                </Link>
              </li>
              <li>
                <Link
                  href="/category/budget-tips"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Budget Tips
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/category/reviews" className="text-muted-foreground hover:text-primary transition-colors">
                  Home Gym Setup
                </Link>
              </li>
              <li>
                <Link href="/category/reviews" className="text-muted-foreground hover:text-primary transition-colors">
                  Cardio Equipment
                </Link>
              </li>
              <li>
                <Link href="/category/reviews" className="text-muted-foreground hover:text-primary transition-colors">
                  Strength Training
                </Link>
              </li>
              <li>
                <Link href="/category/reviews" className="text-muted-foreground hover:text-primary transition-colors">
                  Yoga & Flexibility
                </Link>
              </li>
              <li>
                <Link href="/category/nutrition" className="text-muted-foreground hover:text-primary transition-colors">
                  Nutrition
                </Link>
              </li>
              <li>
                <Link href="/category/reviews" className="text-muted-foreground hover:text-primary transition-colors">
                  Recovery
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/affiliate-disclosure"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">© 2025 Fit on a Dime. All rights reserved.</div>
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p className="mb-1">
                <strong>Affiliate Disclaimer:</strong> This site contains affiliate links. We may earn a commission when
                you purchase through these links at no additional cost to you.
              </p>
              <p className="flex items-center justify-center md:justify-end gap-1">
                Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> for fitness enthusiasts on a budget
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
