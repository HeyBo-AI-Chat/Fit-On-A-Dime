import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fitonadime.com"

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]

  // Category pages
  const categories = ["reviews", "tutorials", "top-lists", "nutrition", "budget-tips"]
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/category/${category}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // Blog post pages
  const blogPosts = [
    {
      slug: "10-best-budget-home-gym-equipment-under-50",
      lastModified: "2024-01-15",
    },
    {
      slug: "complete-bodyweight-workout-no-equipment-needed",
      lastModified: "2024-01-12",
    },
    {
      slug: "resistance-bands-vs-dumbbells-honest-comparison",
      lastModified: "2024-01-10",
    },
    {
      slug: "5-yoga-mats-that-wont-slip-all-under-30",
      lastModified: "2024-01-08",
    },
    {
      slug: "15-minute-hiit-workout-for-busy-schedules",
      lastModified: "2024-01-05",
    },
    {
      slug: "budget-meal-prep-fuel-your-fitness-for-less",
      lastModified: "2024-01-03",
    },
  ]

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.lastModified),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }))

  return [...staticPages, ...categoryPages, ...blogPages]
}
