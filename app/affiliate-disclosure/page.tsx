import { ArrowLeft, DollarSign, Shield } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Affiliate Disclosure - Fit on a Dime",
  description:
    "Learn about our affiliate relationships and how we maintain editorial independence while recommending budget fitness products.",
  keywords: "affiliate disclosure, transparency, product recommendations, editorial independence",
}

export default function AffiliateDisclosurePage() {
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Affiliate Disclosure</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparency is important to us. Here's how our affiliate relationships work and how we maintain editorial
              independence.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-muted/50 p-6 rounded-lg mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold m-0">Our Commitment to You</h2>
              </div>
              <p className="text-muted-foreground m-0">
                We only recommend products we've personally tested and believe provide genuine value to our readers. Our
                affiliate relationships never influence our honest opinions or recommendations.
              </p>
            </div>

            <h2>What Are Affiliate Links?</h2>
            <p>
              Affiliate links are special URLs that allow us to earn a small commission when you purchase a product
              through our recommendation. These links don't cost you anything extra – the price you pay is exactly the
              same whether you use our link or go directly to the retailer.
            </p>

            <h2>How We Use Affiliate Links</h2>
            <p>
              When we recommend a product on Fit on a Dime, we may include affiliate links to retailers like Amazon,
              where you can purchase that item. If you click on one of these links and make a purchase, we may receive a
              small commission (typically 1-4% of the purchase price).
            </p>

            <div className="bg-primary/5 p-6 rounded-lg my-8">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold m-0">How Commissions Work</h3>
              </div>
              <ul className="space-y-2 m-0">
                <li>You click an affiliate link on our site</li>
                <li>You're taken to the retailer's website (like Amazon)</li>
                <li>You make a purchase (of any item, not just what we linked to)</li>
                <li>We receive a small commission from the retailer</li>
                <li>You pay the same price you would have paid anyway</li>
              </ul>
            </div>

            <h2>Our Editorial Independence</h2>
            <p>Here's what you can count on from us:</p>

            <h3>We Test Everything</h3>
            <p>
              Every product we recommend has been personally tested by our team for at least 30 days. We don't recommend
              products based on specifications or marketing materials alone.
            </p>

            <h3>Honest Reviews</h3>
            <p>
              We share both the pros and cons of every product we review. If something doesn't work well or isn't worth
              the money, we'll tell you – even if it means losing potential commission.
            </p>

            <h3>No Pay-to-Play</h3>
            <p>
              Companies cannot pay us to feature their products or guarantee positive reviews. Our recommendations are
              based solely on our testing experience and assessment of value for our readers.
            </p>

            <h3>Alternative Options</h3>
            <p>
              We often recommend multiple options at different price points and always suggest alternatives, including
              non-affiliate options when they're the best choice.
            </p>

            <h2>Affiliate Partners</h2>
            <p>We currently participate in affiliate programs with:</p>
            <ul>
              <li>
                <strong>Amazon Associates:</strong> We earn from qualifying purchases made through Amazon links
              </li>
              <li>
                <strong>Other Retailers:</strong> We may add other reputable fitness equipment retailers as partners
              </li>
            </ul>

            <h2>How Affiliate Income Supports Our Mission</h2>
            <p>
              The small commissions we earn help us continue providing free, high-quality content to our readers. This
              income allows us to:
            </p>
            <ul>
              <li>Purchase and test new fitness equipment</li>
              <li>Maintain and improve our website</li>
              <li>Create detailed workout tutorials and guides</li>
              <li>Keep all our content free for everyone</li>
            </ul>

            <h2>Your Choice</h2>
            <p>
              Using our affiliate links is completely optional and helps support our work at no cost to you. However,
              you're always free to:
            </p>
            <ul>
              <li>Search for products directly on retailer websites</li>
              <li>Compare prices across multiple retailers</li>
              <li>Use coupon codes or cashback services</li>
              <li>Shop wherever you prefer</li>
            </ul>

            <h2>Questions or Concerns?</h2>
            <p>
              If you have any questions about our affiliate relationships or how we maintain editorial independence,
              please don't hesitate to{" "}
              <Link href="/contact" className="text-primary hover:underline">
                contact us
              </Link>
              . We're committed to transparency and are happy to address any concerns.
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mt-8">
              <p className="text-sm text-muted-foreground m-0">
                <strong>Last updated:</strong> January 2025. We may update this disclosure from time to time to reflect
                changes in our affiliate relationships or policies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
