import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { AnimatedGradient } from "@/app/components/AnimatedGradient"
import { BlogCategoryFilter } from "@/app/components/BlogCategoryFilter"
import { BlogCard } from "@/app/components/BlogCard"
import { NewsletterSignup } from "@/app/components/NewsLetterSignup"


export const metadata = {
  title: "Blog | Abiola Jimoh",
  description: "Insights and articles on fintech, regulatory compliance, and business growth strategies.",
}

export default function BlogPage() {
  // In a real implementation, these would come from a CMS or database
  const featuredPost = {
    title: "The Future of Fintech Regulation in Africa",
    excerpt:
      "An in-depth analysis of emerging regulatory frameworks across African markets and how they will shape the future of fintech innovation and growth.",
    date: "April 15, 2025",
    image: "/placeholder.svg?height=600&width=1200",
    slug: "/blog/future-of-fintech-regulation-africa",
    category: "Regulation",
    readTime: "8 min read",
  }

  const blogPosts = [
    {
      title: "Navigating Fintech Regulations in Africa",
      excerpt:
        "A comprehensive guide to understanding and complying with the evolving regulatory landscape for fintech companies in Africa.",
      date: "April 10, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "/blog/fintech-regulations-africa",
      category: "Regulatory",
      readTime: "6 min read",
    },
    {
      title: "Building Sustainable Business Models for Fintech Startups",
      excerpt:
        "Key considerations for developing business models that are not only profitable but also sustainable in the long term.",
      date: "March 22, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "/blog/sustainable-fintech-business-models",
      category: "Business",
      readTime: "5 min read",
    },
    {
      title: "The Role of Strategic Partnerships in Fintech Growth",
      excerpt:
        "How strategic alliances and partnerships can accelerate growth and market penetration for fintech companies.",
      date: "February 15, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "/blog/strategic-partnerships-fintech",
      category: "Strategy",
      readTime: "7 min read",
    },
    {
      title: "Fundraising Strategies for African Fintech Startups",
      excerpt:
        "Practical approaches to securing investment for fintech ventures in African markets, from seed to Series A and beyond.",
      date: "January 28, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "/blog/fundraising-strategies-african-fintech",
      category: "Fundraising",
      readTime: "9 min read",
    },
    {
      title: "Compliance as a Competitive Advantage",
      excerpt:
        "How fintech companies can transform regulatory compliance from a cost center to a strategic advantage in the marketplace.",
      date: "January 10, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "/blog/compliance-competitive-advantage",
      category: "Regulatory",
      readTime: "6 min read",
    },
    {
      title: "Digital Financial Inclusion: Challenges and Opportunities",
      excerpt:
        "Exploring the barriers to financial inclusion and how fintech innovations can help overcome them across African markets.",
      date: "December 12, 2024",
      image: "/placeholder.svg?height=400&width=600",
      slug: "/blog/digital-financial-inclusion",
      category: "Inclusion",
      readTime: "8 min read",
    },
  ]

  const categories = [
    { name: "All", slug: "all" },
    { name: "Regulatory", slug: "regulatory" },
    { name: "Business", slug: "business" },
    { name: "Strategy", slug: "strategy" },
    { name: "Fundraising", slug: "fundraising" },
    { name: "Inclusion", slug: "inclusion" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 overflow-hidden">
        <AnimatedGradient />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Insights & Perspectives
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
              The <span className="text-primary">Fintech Frontier</span> Blog
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Expert insights on fintech innovation, regulatory compliance, and business growth strategies for the
              African market and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="w-full py-8 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search articles..." className="pl-10 h-12 rounded-full" />
            </div>
            <BlogCategoryFilter categories={categories} />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Featured Article</h2>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-background shadow-md transition-all hover:shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative aspect-[16/9] overflow-hidden md:aspect-auto md:h-full">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="relative p-6 md:p-8 flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-2">
                  <Badge className="bg-primary hover:bg-primary/90">{featuredPost.category}</Badge>
                  <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight md:text-3xl">{featuredPost.title}</h3>
                <p className="text-muted-foreground">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-2">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Abiola Jimoh"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Abiola Jimoh</p>
                    <p className="text-xs text-muted-foreground">{featuredPost.date}</p>
                  </div>
                </div>
                <Button className="mt-4 w-fit rounded-full" asChild>
                  <Link href={featuredPost.slug}>
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Latest Articles</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                image={post.image}
                slug={post.slug}
                category={post.category}
                readTime={post.readTime}
              />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Load More Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <NewsletterSignup />
        </div>
      </section>

      {/* Popular Topics */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Popular Topics</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Explore our most discussed subjects and gain valuable insights on these key areas.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/blog?category=regulatory"
              className="group relative overflow-hidden rounded-2xl bg-background p-6 shadow-md transition-all hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Regulatory Compliance</h3>
                <p className="text-muted-foreground">
                  Navigate complex regulatory frameworks and ensure your fintech business remains compliant while
                  innovating.
                </p>
                <div className="flex items-center text-sm text-primary">
                  Explore Articles <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link
              href="/blog?category=business"
              className="group relative overflow-hidden rounded-2xl bg-background p-6 shadow-md transition-all hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Business Growth</h3>
                <p className="text-muted-foreground">
                  Strategies and insights for scaling your fintech business, entering new markets, and driving
                  sustainable growth.
                </p>
                <div className="flex items-center text-sm text-primary">
                  Explore Articles <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link
              href="/blog?category=fundraising"
              className="group relative overflow-hidden rounded-2xl bg-background p-6 shadow-md transition-all hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Fundraising</h3>
                <p className="text-muted-foreground">
                  Expert advice on securing investment, preparing for due diligence, and navigating the fundraising
                  landscape.
                </p>
                <div className="flex items-center text-sm text-primary">
                  Explore Articles <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Have a Topic in Mind?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              If you'd like me to cover a specific topic or have questions about fintech regulation, business growth, or
              fundraising, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 font-medium" asChild>
                <Link href="/contact">
                  Suggest a Topic <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 font-medium" asChild>
                <Link href="/services">Explore My Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
