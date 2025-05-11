import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, MapPin, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { AnimatedGradient } from "@/app/components/AnimatedGradient"
import { EventFilter } from "@/app/components/EventFilter"
import { EventCard } from "@/app/components/EventCard"
import { Suspense } from "react"

export const metadata = {
  title: "Events & Speaking | Abiola Jimoh",
  description: "Explore Abiola Jimoh's speaking engagements, workshops, and industry events in the fintech space.",
}

export default function EventsPage() {
  // In a real implementation, these would come from a CMS or database
  const upcomingEvents = [
    {
      title: "African Fintech Summit",
      description: "Keynote speech on 'The Future of Regulatory Frameworks for Fintech in Africa'",
      date: "June 15-16, 2025",
      location: "Kigali, Rwanda",
      image: "/placeholder.svg?key=9o2fg",
      eventUrl: "#",
      type: "Conference",
      role: "Keynote Speaker",
    },
    {
      title: "Fintech Regulation Masterclass",
      description: "A comprehensive workshop on navigating regulatory compliance for fintech startups",
      date: "May 22, 2025",
      location: "Lagos, Nigeria",
      image: "/fintech-workshop.png",
      eventUrl: "#",
      type: "Workshop",
      role: "Host",
    },
    {
      title: "Digital Financial Inclusion Forum",
      description: "Panel discussion on expanding financial access through innovative fintech solutions",
      date: "May 5-6, 2025",
      location: "Nairobi, Kenya",
      image: "/financial-inclusion-panel.png",
      eventUrl: "#",
      type: "Forum",
      role: "Panelist",
    },
  ]

  const pastEvents = [
    // {
    //   title: "West African Fintech Week",
    //   description: "Presented on 'Strategic Partnerships for Fintech Growth' to an audience of industry leaders",
    //   date: "March 10-12, 2025",
    //   location: "Accra, Ghana",
    //   image: "/placeholder.svg?key=m9717",
    //   eventUrl: "#",
    //   type: "Conference",
    //   role: "Speaker",
    // },
    {
      title: "Regulatory Innovation Roundtable",
      description: "Facilitated discussion between regulators and fintech leaders on creating enabling environments",
      date: "February 25, 2025",
      location: "Abuja, Nigeria",
      image: "/placeholder.svg?key=tn4z0",
      eventUrl: "#",
      type: "Roundtable",
      role: "Facilitator",
    },
    {
      title: "Fintech Founders Bootcamp",
      description: "Led a session on 'Regulatory Compliance as a Competitive Advantage' for early-stage founders",
      date: "January 18, 2025",
      location: "Virtual Event",
      image: "/placeholder.svg?height=400&width=600&query=virtual fintech bootcamp",
      eventUrl: "#",
      type: "Workshop",
      role: "Speaker",
    },
    // {
    //   title: "Global Payments Innovation Summit",
    //   description: "Participated in expert panel on cross-border payment regulations in emerging markets",
    //   date: "December 5-7, 2024",
    //   location: "Dubai, UAE",
    //   image: "/placeholder.svg?height=400&width=600&query=payments summit",
    //   eventUrl: "#",
    //   type: "Summit",
    //   role: "Panelist",
    // },
    // {
    //   title: "Africa Fintech Policy Conference",
    //   description: "Delivered presentation on harmonizing fintech regulations across African markets",
    //   date: "November 15, 2024",
    //   location: "Cape Town, South Africa",
    //   image: "/placeholder.svg?height=400&width=600&query=fintech policy conference",
    //   eventUrl: "#",
    //   type: "Conference",
    //   role: "Speaker",
    // },
    // {
    //   title: "Financial Inclusion Hackathon",
    //   description: "Served as judge and mentor for teams developing inclusive fintech solutions",
    //   date: "October 22-24, 2024",
    //   location: "Kampala, Uganda",
    //   image: "/placeholder.svg?height=400&width=600&query=fintech hackathon",
    //   eventUrl: "#",
    //   type: "Hackathon",
    //   role: "Judge",
    // },
  ]

  const eventTypes = [
    { name: "All Types", value: "all" },
    { name: "Conference", value: "conference" },
    { name: "Workshop", value: "workshop" },
    { name: "Forum", value: "forum" },
    { name: "Summit", value: "summit" },
    { name: "Roundtable", value: "roundtable" },
    { name: "Hackathon", value: "hackathon" },
  ]

  const eventRoles = [
    { name: "All Roles", value: "all" },
    { name: "Speaker", value: "speaker" },
    { name: "Panelist", value: "panelist" },
    { name: "Host", value: "host" },
    { name: "Facilitator", value: "facilitator" },
    { name: "Judge", value: "judge" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 overflow-hidden">
        <AnimatedGradient />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Speaking & Engagements
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
              Events & <span className="text-primary">Speaking</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Discover where I've been sharing insights on fintech regulation, business growth, and industry trends
              across Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      {upcomingEvents.length > 0 && (
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight">Next Appearance</h2>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-background shadow-md transition-all hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="grid gap-6 md:grid-cols-2">
                <div className="relative aspect-[16/9] overflow-hidden md:aspect-auto md:h-full">
                  <Image
                    src={upcomingEvents[0].image || "/placeholder.svg"}
                    alt={upcomingEvents[0].title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary hover:bg-primary/90">
                    {upcomingEvents[0].role}
                  </Badge>
                </div>
                <div className="relative p-6 md:p-8 flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold tracking-tight md:text-3xl">{upcomingEvents[0].title}</h3>
                  <p className="text-muted-foreground">{upcomingEvents[0].description}</p>
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{upcomingEvents[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{upcomingEvents[0].location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{upcomingEvents[0].type}</Badge>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <Button className="rounded-full" asChild>
                      <Link href={upcomingEvents[0].eventUrl} target="_blank" rel="noopener noreferrer">
                        Event Details <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="rounded-full" asChild>
                      <Link href="/contact">
                        Book for Your Event <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Events Tabs and Filters */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="upcoming" className="w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <TabsList className="w-full md:w-auto">
                <TabsTrigger value="upcoming" className="rounded-full">
                  Upcoming Events
                </TabsTrigger>
                <TabsTrigger value="past" className="rounded-full">
                  Past Events
                </TabsTrigger>
              </TabsList>
              <Suspense fallback={<p>Loading filters…</p>}>
        
                    <div className="flex flex-wrap gap-3">
                        <EventFilter label="Type" options={eventTypes} />
                        <EventFilter label="Role" options={eventRoles} />
                    </div>
                </Suspense>
            </div>

            <TabsContent value="upcoming" className="space-y-8">
              {upcomingEvents.length > 0 ? (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {upcomingEvents.map((event, index) => (
                    <EventCard key={index} event={event} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No upcoming events scheduled</h3>
                  <p className="text-muted-foreground mb-6">Check back soon for new speaking engagements and events.</p>
                  <Button className="rounded-full" asChild>
                    <Link href="/contact">
                      Book for Your Event <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="past" className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {pastEvents.map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="w-full py-12 md:py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Expertise
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Speaking Topics</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              Popular topics I speak on at conferences, workshops, and industry events.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl bg-background p-6 shadow-md transition-all hover:shadow-lg">
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
                <h3 className="text-xl font-bold">Regulatory Compliance Frameworks</h3>
                <p className="text-muted-foreground">
                  Navigating complex regulatory landscapes while fostering innovation in fintech businesses across
                  African markets.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-background p-6 shadow-md transition-all hover:shadow-lg">
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
                <h3 className="text-xl font-bold">Sustainable Fintech Business Models</h3>
                <p className="text-muted-foreground">
                  Building fintech businesses that balance profitability with long-term sustainability and positive
                  social impact.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-background p-6 shadow-md transition-all hover:shadow-lg">
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Strategic Partnerships in Fintech</h3>
                <p className="text-muted-foreground">
                  Leveraging strategic alliances to accelerate growth, enter new markets, and enhance product offerings.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-background p-6 shadow-md transition-all hover:shadow-lg">
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
                <h3 className="text-xl font-bold">Fundraising for African Fintech Startups</h3>
                <p className="text-muted-foreground">
                  Strategies for securing investment at different stages of growth in the unique African funding
                  landscape.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-background p-6 shadow-md transition-all hover:shadow-lg">
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
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Financial Inclusion Through Fintech</h3>
                <p className="text-muted-foreground">
                  Harnessing technology to extend financial services to underserved populations and drive economic
                  empowerment.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-background p-6 shadow-md transition-all hover:shadow-lg">
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
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Cross-Border Fintech Regulations</h3>
                <p className="text-muted-foreground">
                  Navigating the complexities of operating fintech businesses across multiple African jurisdictions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Feedback
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Event Testimonials</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              What event organizers and attendees say about my presentations and workshops.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl bg-background p-8 shadow-md transition-all hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex flex-col items-center space-y-4">
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
                  className="h-8 w-8 text-primary/20"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
                <blockquote className="text-center text-muted-foreground italic">
                  "Abiola's keynote at our fintech summit was exceptional. His deep understanding of regulatory
                  frameworks combined with practical business insights made for a compelling presentation that our
                  attendees rated as the highlight of the event."
                </blockquote>
                <div className="text-center">
                  <h4 className="font-semibold">Adeola Adeyemi</h4>
                  <p className="text-sm text-muted-foreground">Event Director, West African Fintech Week</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-background p-8 shadow-md transition-all hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex flex-col items-center space-y-4">
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
                  className="h-8 w-8 text-primary/20"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
                <blockquote className="text-center text-muted-foreground italic">
                  "The workshop Abiola conducted for our fintech founders was transformative. His ability to break down
                  complex regulatory concepts into actionable strategies gave our startups a clear roadmap for
                  compliance."
                </blockquote>
                <div className="text-center">
                  <h4 className="font-semibold">Kwame Osei</h4>
                  <p className="text-sm text-muted-foreground">Program Director, Fintech Founders Bootcamp</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-background p-8 shadow-md transition-all hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex flex-col items-center space-y-4">
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
                  className="h-8 w-8 text-primary/20"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
                <blockquote className="text-center text-muted-foreground italic">
                  "Abiola's panel moderation at our policy forum brought together diverse perspectives in a cohesive and
                  insightful discussion. His expertise in both the regulatory and business aspects of fintech made for a
                  balanced and productive conversation."
                </blockquote>
                <div className="text-center">
                  <h4 className="font-semibold">Fatima Diallo</h4>
                  <p className="text-sm text-muted-foreground">Chairperson, Digital Financial Inclusion Forum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Invite Me to Speak</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Looking for an expert speaker on fintech regulation, business growth, or financial inclusion for your next
              event? Let's discuss how I can add value to your conference, workshop, or panel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 font-medium" asChild>
                <Link href="/contact">
                  Book for Your Event <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 font-medium" asChild>
                <Link href="/services">View My Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
