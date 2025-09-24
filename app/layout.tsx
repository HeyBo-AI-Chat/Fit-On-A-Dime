import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Fit on a Dime - Get Fit at Home Without Breaking the Bank",
    template: "%s | Fit on a Dime",
  },
  description:
    "Discover budget-friendly home fitness solutions, equipment reviews, and workout tutorials that help you stay fit without expensive gym memberships.",
  keywords: [
    "budget fitness",
    "home workouts",
    "affordable gym equipment",
    "fitness on a budget",
    "home gym reviews",
    "cheap exercise equipment",
    "bodyweight workouts",
    "fitness tips",
    "workout tutorials",
    "budget meal prep",
  ],
  authors: [{ name: "Fit on a Dime Team" }],
  creator: "Fit on a Dime",
  publisher: "Fit on a Dime",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://fitonadime.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fitonadime.com",
    title: "Fit on a Dime - Get Fit at Home Without Breaking the Bank",
    description:
      "Discover budget-friendly home fitness solutions, equipment reviews, and workout tutorials that help you stay fit without expensive gym memberships.",
    siteName: "Fit on a Dime",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fit on a Dime - Budget Home Fitness Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fit on a Dime - Get Fit at Home Without Breaking the Bank",
    description:
      "Discover budget-friendly home fitness solutions, equipment reviews, and workout tutorials that help you stay fit without expensive gym memberships.",
    images: ["/og-image.jpg"],
    creator: "@fitonadime",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Fit on a Dime",
              url: "https://fitonadime.com",
              logo: "https://fitonadime.com/logo.png",
              description:
                "Budget-friendly home fitness solutions, equipment reviews, and workout tutorials for staying fit without expensive gym memberships.",
              sameAs: [
                "https://twitter.com/fitonadime",
                "https://facebook.com/fitonadime",
                "https://instagram.com/fitonadime",
                "https://youtube.com/fitonadime",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "hello@fitonadime.com",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Fit on a Dime",
              url: "https://fitonadime.com",
              description:
                "Budget-friendly home fitness solutions, equipment reviews, and workout tutorials for staying fit without expensive gym memberships.",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://fitonadime.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
