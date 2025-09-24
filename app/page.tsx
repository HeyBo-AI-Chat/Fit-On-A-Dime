import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BlogSection } from "@/components/blog-section"
import { AffiliateProducts } from "@/components/affiliate-products"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fit on a Dime - Get Fit at Home Without Breaking the Bank",
  description:
    "Discover budget-friendly home fitness solutions, equipment reviews, and workout tutorials. Save money while achieving your fitness goals with our expert-tested recommendations.",
  keywords: [
    "budget fitness",
    "home workouts",
    "affordable gym equipment",
    "fitness on a budget",
    "home gym reviews",
    "cheap exercise equipment",
    "bodyweight workouts",
    "fitness equipment under $50",
    "budget meal prep",
    "home fitness solutions",
  ],
  openGraph: {
    title: "Fit on a Dime - Get Fit at Home Without Breaking the Bank",
    description:
      "Discover budget-friendly home fitness solutions, equipment reviews, and workout tutorials. Save money while achieving your fitness goals.",
    url: "https://fitonadime.com",
    siteName: "Fit on a Dime",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fit on a Dime - Budget Home Fitness Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fit on a Dime - Get Fit at Home Without Breaking the Bank",
    description:
      "Discover budget-friendly home fitness solutions, equipment reviews, and workout tutorials. Save money while achieving your fitness goals.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://fitonadime.com",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BlogSection />
        <AffiliateProducts />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Fit on a Dime",
            description:
              "Budget-friendly home fitness solutions, equipment reviews, and workout tutorials for staying fit without expensive gym memberships.",
            url: "https://fitonadime.com",
            author: {
              "@type": "Organization",
              name: "Fit on a Dime Team",
            },
            publisher: {
              "@type": "Organization",
              name: "Fit on a Dime",
              logo: {
                "@type": "ImageObject",
                url: "https://fitonadime.com/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://fitonadime.com",
            },
          }),
        }}
      />
    </div>
  )
}
