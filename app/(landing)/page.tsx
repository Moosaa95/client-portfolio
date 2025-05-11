import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Briefcase,
  Building,
  FileCheck,
  Globe,
  Handshake,
  Scale,
  Shield,
  ChevronRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedGradient } from "../components/AnimatedGradient"
import { SocialLinks } from "../components/SocialLinks"
import { StatCard } from "../components/StatCard"
import { ExperienceCard } from "../components/ExperienceCard"
import { ServiceCard } from "../components/ServiceCard"
import { TestimonialCard } from "../components/TestimonialCard"
import { BlogPreview } from "../components/BlogPreview"


export const metadata = {
  title: "Abiola Jimoh | Fintech Consultant & Business Advisor",
  description:
    "Abiola Jimoh is a seasoned fintech consultant with over a decade of experience in regulatory compliance, business growth, and strategic partnerships.",
  openGraph: {
    title: "Abiola Jimoh | Fintech Consultant & Business Advisor",
    description:
      "Abiola Jimoh is a seasoned fintech consultant with over a decade of experience in regulatory compliance, business growth, and strategic partnerships.",
    type: "website",
    url: "https://abiolajimoh.com",
    images: [
      {
        url: "/images/abiola-jimoh.jpeg",
        width: 1200,
        height: 630,
        alt: "Abiola Jimoh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abiola Jimoh | Fintech Consultant & Business Advisor",
    description:
      "Abiola Jimoh is a seasoned fintech consultant with over a decade of experience in regulatory compliance, business growth, and strategic partnerships.",
    images: ["/images/abiola-jimoh.jpeg"],
  },
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 lg:py-36 overflow-hidden">
        <AnimatedGradient />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px] items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Empowering Fintech, Agri-Financing & Digital Marketplaces
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
                  Navigating the Future of <span className="text-primary">Fintech</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl">
                With over a decade of experience, I help innovators in financial services and agriculture unlock new revenue streams, meet complex regulations, and build marketplaces that connect producers, buyers, and investors at scale.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="rounded-full px-8 font-medium" asChild>
                  <Link href="/services">
                    Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8 font-medium" asChild>
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
              <div className="pt-4">
                <SocialLinks className="flex gap-5" />
              </div>
            </div>
            <div className="relative mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 blur-3xl" />
              <div className="relative aspect-square max-w-[400px] overflow-hidden rounded-full border-8 border-background shadow-xl">
                <Image
                  alt="Abiola Jimoh"
                  className="object-cover"
                  fill
                  src="/images/abiola-jimoh.jpeg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-16 border-y bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <StatCard value="10+" label="Years Experience" />
            <StatCard value="50+" label="Clients Served" />
            <StatCard value="99+" label="Endorsements" />
            <StatCard value="20+" label="Partnerships" />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="w-full py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Core Expertise
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Specialized Knowledge</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              My expertise spans across critical areas in fintech, regulatory compliance, and business development.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group relative overflow-hidden border-none bg-gradient-to-br from-background to-muted/80 shadow-md transition-all hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <CardHeader>
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Regulatory Compliance</CardTitle>
                <CardDescription className="text-base">
                  Navigating complex regulatory frameworks to ensure your fintech business remains compliant while
                  innovating.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/services/regulatory-compliance"
                  className="inline-flex items-center text-sm font-medium text-primary"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden border-none bg-gradient-to-br from-background to-muted/80 shadow-md transition-all hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <CardHeader>
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Strategic Partnerships</CardTitle>
                <CardDescription className="text-base">
                  Building valuable alliances and networks that drive collaborative success and business growth.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/services/strategic-partnerships"
                  className="inline-flex items-center text-sm font-medium text-primary"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden border-none bg-gradient-to-br from-background to-muted/80 shadow-md transition-all hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <CardHeader>
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Business Growth</CardTitle>
                <CardDescription className="text-base">
                  Identifying opportunities and implementing strategies that fuel sustainable company expansion.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/services/business-growth"
                  className="inline-flex items-center text-sm font-medium text-primary"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden border-none bg-gradient-to-br from-background to-muted/80 shadow-md transition-all hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <CardHeader>
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Risk Evaluation</CardTitle>
                <CardDescription className="text-base">
                  Assessing and mitigating potential risks to ensure sustainable growth and protect business interests.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/services/risk-evaluation"
                  className="inline-flex items-center text-sm font-medium text-primary"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden border-none bg-gradient-to-br from-background to-muted/80 shadow-md transition-all hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <CardHeader>
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <FileCheck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Legal Advisory</CardTitle>
                <CardDescription className="text-base">
                  Providing expert legal guidance on corporate governance, compliance, and contractual matters.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/services/legal-advisory"
                  className="inline-flex items-center text-sm font-medium text-primary"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden border-none bg-gradient-to-br from-background to-muted/80 shadow-md transition-all hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <CardHeader>
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Business Expansion</CardTitle>
                <CardDescription className="text-base">
                  Helping companies scale regionally and globally with strategic market entry and growth plans.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/services/business-expansion"
                  className="inline-flex items-center text-sm font-medium text-primary"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="w-full py-20 md:py-28 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Professional Journey
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Key Experience</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              A selection of my most impactful roles and achievements in the fintech and business advisory space.
            </p>
          </div>
          <div className="mx-auto max-w-5xl">
            <Tabs defaultValue="professional" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 p-1 rounded-full">
                <TabsTrigger
                  value="professional"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Professional
                </TabsTrigger>
                <TabsTrigger
                  value="advisory"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Advisory Roles
                </TabsTrigger>
              </TabsList>
              <TabsContent value="professional" className="space-y-8">
                <ExperienceCard
                  title="Principal Consultant"
                  company="StartUps Consulting"
                  period="Oct 2024 - Present"
                  description="Providing hands-on services to entrepreneurs, startups, and growth-stage businesses to develop and refine their business models. Focus areas include regulatory compliance, fundraising, partnerships, and team development."
                  icon={<Briefcase className="h-6 w-6" />}
                />
                <ExperienceCard
                  title="Co-Founder & Co-CEO"
                  company="XCHANGEBOX"
                  period="May 2024 - Present"
                  description="Leading a fintech platform focused on payments, collections, and SME support, providing access to financial products including health insurance, pensions, micro-credit, and payment services for traders and farmers across Northern Nigeria."
                  icon={<Building className="h-6 w-6" />}
                />
                <ExperienceCard
                  title="Head of Strategy Development"
                  company="Digital Bridge Institute"
                  period="Mar 2017 - Feb 2024"
                  description="Supported management with strategic inputs for partnerships and stakeholder management, providing capacity building for the sustainable drive of the digital economy in Nigeria."
                  icon={<BookOpen className="h-6 w-6" />}
                />
              </TabsContent>
              <TabsContent value="advisory" className="space-y-8">
                <ExperienceCard
                  title="Governing Council Member"
                  company="Fintech Association Of Nigeria"
                  period="Oct 2024 - Present"
                  description="Serving on the executive arm of FintechNGR tasked with the overall management of the Association, shaping policy and industry standards."
                  icon={<Award className="h-6 w-6" />}
                />
                <ExperienceCard
                  title="Non-Executive Director"
                  company="Unlimit"
                  period="Dec 2023 - Present"
                  description="Providing strategic guidance to a global payments company that helps businesses enter new markets, explore new industries, and reach new milestones through borderless payment solutions."
                  icon={<Globe className="h-6 w-6" />}
                />
                <ExperienceCard
                  title="Advisor"
                  company="Extension Africa"
                  period="Oct 2024 - Present"
                  description="Providing legal advisory services and serving as Company Secretary to an agritech startup supporting farmers across Africa with extension services, financial inclusion, and access to inputs."
                  icon={<Handshake className="h-6 w-6" />}
                />
              </TabsContent>
            </Tabs>
            <div className="flex justify-center mt-12">
              <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
                <Link href="/experience">
                  View Full Experience <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Services
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">How I Can Help</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              Comprehensive consulting services tailored to the unique needs of fintech startups and established
              businesses.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Regulatory Compliance"
              description="Navigate complex regulatory frameworks"
              icon={<Shield className="h-6 w-6" />}
              features={[
                "Licensing application support",
                "Compliance framework development",
                "Regulatory audit preparation",
                "Policy documentation",
              ]}
              link="/services/regulatory-compliance"
            />
            <ServiceCard
              title="Business Development"
              description="Accelerate growth and expansion"
              icon={<BarChart3 className="h-6 w-6" />}
              features={[
                "Market entry strategy",
                "Partnership development",
                "Business model refinement",
                "Growth planning",
              ]}
              link="/services/business-development"
            />
            <ServiceCard
              title="Fundraising Support"
              description="Secure investment for your venture"
              icon={<Building className="h-6 w-6" />}
              features={[
                "Investor documentation",
                "Pitch deck development",
                "Due diligence preparation",
                "Investor networking",
              ]}
              link="/services/fundraising"
            />
          </div>
          <div className="flex justify-center mt-12">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-20 md:py-28 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Client Success Stories</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              Hear from the businesses and entrepreneurs I've had the privilege of working with.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <TestimonialCard
              quote="Samuel's expertise in regulatory compliance was instrumental in helping us secure our fintech license in record time. His guidance throughout the process was invaluable."
              name="Aisha Mohammed"
              title="CEO, PayTech Solutions"
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="Working with Samuel transformed our business model. His strategic insights and industry connections helped us pivot and scale in ways we hadn't imagined possible."
              name="Michael Okonkwo"
              title="Founder, CreditLink"
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="Samuel's deep understanding of both legal and business aspects of fintech made him the perfect advisor for our startup. He helped us navigate complex regulations while focusing on growth."
              name="Sarah Chen"
              title="COO, GlobalPay Africa"
              image="/placeholder.svg?height=100&width=100"
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="w-full py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Insights
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Latest Articles</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              Thoughts and insights on fintech, regulatory compliance, and business growth.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <BlogPreview
              title="Navigating Fintech Regulations in Africa"
              excerpt="A comprehensive guide to understanding and complying with the evolving regulatory landscape for fintech companies in Africa."
              date="April 10, 2025"
              image="/placeholder.svg?height=200&width=300"
              slug="/blog/fintech-regulations-africa"
              category="Regulatory"
            />
            <BlogPreview
              title="Building Sustainable Business Models for Fintech Startups"
              excerpt="Key considerations for developing business models that are not only profitable but also sustainable in the long term."
              date="March 22, 2025"
              image="/placeholder.svg?height=200&width=300"
              slug="/blog/sustainable-fintech-business-models"
              category="Business"
            />
            <BlogPreview
              title="The Role of Strategic Partnerships in Fintech Growth"
              excerpt="How strategic alliances and partnerships can accelerate growth and market penetration for fintech companies."
              date="February 15, 2025"
              image="/placeholder.svg?height=200&width=300"
              slug="/blog/strategic-partnerships-fintech"
              category="Strategy"
            />
          </div>
          <div className="flex justify-center mt-12">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/blog">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-20 md:py-28 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Get In Touch</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              Have a project in mind or want to learn more about my services? I'd love to hear from you.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 shadow-lg">
                <div className="absolute inset-0 bg-grid-white/10" />
                <div className="relative space-y-6">
                  <h3 className="text-2xl font-bold">Contact Information</h3>
                  <p className="text-muted-foreground">
                    Feel free to reach out to discuss how I can help your business navigate the complex fintech
                    landscape and achieve sustainable growth.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
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
                          className="h-5 w-5 text-primary"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <p>+234 123 456 7890</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
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
                          className="h-5 w-5 text-primary"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                      </div>
                      <p>contact@abiolajimoh.com</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
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
                          className="h-5 w-5 text-primary"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <p>Abuja, Nigeria</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-lg font-bold mb-3">Connect With Me</h3>
                    <SocialLinks className="flex gap-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-background p-8 shadow-lg">
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your company"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-md">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
