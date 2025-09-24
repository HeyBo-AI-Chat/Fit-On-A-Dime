interface BlogPostStructuredDataProps {
  title: string
  description: string
  author: string
  publishDate: string
  image: string
  url: string
  content: string
}

export function BlogPostStructuredData({
  title,
  description,
  author,
  publishDate,
  image,
  url,
  content,
}: BlogPostStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: [image],
    datePublished: publishDate,
    dateModified: publishDate,
    author: {
      "@type": "Person",
      name: author,
      url: "https://fitonadime.com/about",
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
      "@id": url,
    },
    articleBody: content.replace(/<[^>]*>/g, "").substring(0, 1000) + "...",
    wordCount: content.replace(/<[^>]*>/g, "").split(" ").length,
    articleSection: "Fitness",
    inLanguage: "en-US",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

interface ProductReviewStructuredDataProps {
  productName: string
  reviewBody: string
  rating: number
  author: string
  datePublished: string
}

export function ProductReviewStructuredData({
  productName,
  reviewBody,
  rating,
  author,
  datePublished,
}: ProductReviewStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Product",
      name: productName,
      category: "Fitness Equipment",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: rating,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      "@type": "Person",
      name: author,
    },
    datePublished: datePublished,
    reviewBody: reviewBody,
    publisher: {
      "@type": "Organization",
      name: "Fit on a Dime",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}
