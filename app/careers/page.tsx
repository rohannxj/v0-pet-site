"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Clock } from "lucide-react"
import Link from "next/link"

const benefits = [
  { label: "Staff discount", body: "Generous discounts across the full Pet Vital range." },
  { label: "Pet-friendly office", body: "Bring your dog in. We mean it." },
  { label: "Flexible hours", body: "We work around you where the role allows." },
  { label: "Free refreshments", body: "Tea, coffee, snacks on the house." },
  { label: "Career progression", body: "Internal promotions before external hires — always." },
  { label: "Team events", body: "Quarterly socials, annual away days, no mandatory fun." },
]

const openPositions = [
  {
    title: "Warehouse Operative",
    department: "Operations",
    location: "Wolverhampton",
    type: "Full-time",
    posted: "2 days ago",
  },
  {
    title: "Customer Service Representative",
    department: "Customer Support",
    location: "Wolverhampton",
    type: "Full-time",
    posted: "5 days ago",
  },
  {
    title: "Digital Marketing Executive",
    department: "Marketing",
    location: "Hybrid",
    type: "Full-time",
    posted: "1 week ago",
  },
  {
    title: "Sales Account Manager",
    department: "Sales",
    location: "Remote",
    type: "Full-time",
    posted: "1 week ago",
  },
  {
    title: "Junior Web Developer",
    department: "IT",
    location: "Hybrid",
    type: "Full-time",
    posted: "2 weeks ago",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section style={{ background: "oklch(0.22 0.06 170)" }}>
        <div className="container mx-auto px-6 py-20 md:py-28">
          <p
            className="text-xs font-semibold tracking-[0.18em] uppercase mb-8"
            style={{ color: "oklch(0.65 0.08 170)" }}
          >
            Careers at Pet Vital
          </p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-7 max-w-2xl"
            style={{ color: "oklch(0.97 0.01 170)", letterSpacing: "-0.02em" }}
          >
            A team that&nbsp;ships a million orders a year.
          </h1>
          <p
            className="text-lg leading-relaxed max-w-lg mb-10"
            style={{ color: "oklch(0.76 0.05 170)" }}
          >
            We're a UK wholesale and retail pet supplies distributor. 25 years in business. 150 people based in Wolverhampton. Stable, growing, no hype.
          </p>
          <a href="#open-roles">
            <Button
              size="lg"
              className="font-semibold"
              style={{
                background: "oklch(0.55 0.15 170)",
                color: "oklch(0.99 0.005 170)",
                transition: "background-color 150ms ease-out",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "oklch(0.62 0.15 170)"
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "oklch(0.55 0.15 170)"
              }}
            >
              See open roles
            </Button>
          </a>
        </div>
      </section>

      {/* Why join */}
      <section className="py-20 border-b" style={{ borderColor: "oklch(0.90 0 0)" }}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-[220px_1fr] gap-12 md:gap-20 max-w-5xl">
            <div>
              <h2
                className="text-2xl font-bold"
                style={{ color: "oklch(0.25 0.01 240)", letterSpacing: "-0.01em" }}
              >
                Why here
              </h2>
            </div>
            <dl className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
              {benefits.map((b, i) => (
                <div key={b.label}>
                  <dt className="flex items-baseline gap-3 mb-1">
                    <span
                      className="text-xs font-semibold tabular-nums"
                      style={{ color: "oklch(0.55 0.15 170)", minWidth: "1.5rem" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-semibold" style={{ color: "oklch(0.25 0.01 240)" }}>
                      {b.label}
                    </span>
                  </dt>
                  <dd
                    className="pl-9 text-sm leading-relaxed"
                    style={{ color: "oklch(0.50 0 0)" }}
                  >
                    {b.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Who we are — context strip */}
      <section
        className="py-14"
        style={{ background: "oklch(0.97 0.01 170)" }}
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <p
            className="text-base leading-relaxed max-w-3xl"
            style={{ color: "oklch(0.38 0.03 170)" }}
          >
            Pet Vital is not a startup. We don&apos;t have a ping-pong table or a mission to disrupt pet care. We have a well-run warehouse, a sales team that knows the industry, and a customer base that&apos;s been with us for years. If that sounds like somewhere you&apos;d do good work, we&apos;d like to hear from you.
          </p>
        </div>
      </section>

      {/* Open positions */}
      <section id="open-roles" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-[220px_1fr] gap-12 md:gap-20 max-w-5xl">
            <div>
              <h2
                className="text-2xl font-bold"
                style={{ color: "oklch(0.25 0.01 240)", letterSpacing: "-0.01em" }}
              >
                Open roles
              </h2>
            </div>
            <div>
              {openPositions.map((job, i) => (
                <div
                  key={job.title}
                  className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  style={{
                    borderTop: i === 0 ? "1px solid oklch(0.90 0 0)" : undefined,
                    borderBottom: "1px solid oklch(0.90 0 0)",
                  }}
                >
                  <div>
                    <p
                      className="font-semibold mb-1"
                      style={{ color: "oklch(0.25 0.01 240)" }}
                    >
                      {job.title}
                    </p>
                    <p className="text-sm flex flex-wrap items-center gap-x-3 gap-y-1" style={{ color: "oklch(0.50 0 0)" }}>
                      <span>{job.department}</span>
                      <span
                        className="inline-block w-1 h-1 rounded-full"
                        style={{ background: "oklch(0.80 0 0)" }}
                        aria-hidden
                      />
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </span>
                      <span
                        className="inline-block w-1 h-1 rounded-full"
                        style={{ background: "oklch(0.80 0 0)" }}
                        aria-hidden
                      />
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {job.type}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-xs" style={{ color: "oklch(0.65 0 0)" }}>
                      Posted {job.posted}
                    </span>
                    <Button
                      size="sm"
                      style={{
                        background: "oklch(0.55 0.15 170)",
                        color: "oklch(0.99 0.005 170)",
                        transition: "background-color 150ms ease-out",
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "oklch(0.62 0.15 170)"
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "oklch(0.55 0.15 170)"
                      }}
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Speculative CTA */}
      <section
        className="py-16"
        style={{ background: "oklch(0.25 0.10 170)" }}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-[220px_1fr] gap-12 md:gap-20 max-w-5xl items-start">
            <h2
              className="text-2xl font-bold"
              style={{ color: "oklch(0.97 0.01 170)", letterSpacing: "-0.01em" }}
            >
              Nothing suitable?
            </h2>
            <div>
              <p
                className="text-base leading-relaxed mb-8 max-w-md"
                style={{ color: "oklch(0.78 0.05 170)" }}
              >
                Send your CV anyway. We keep speculative applications on file and reach out when relevant roles open. No automated rejection emails.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    style={{
                      background: "oklch(0.97 0.01 170)",
                      color: "oklch(0.25 0.10 170)",
                      transition: "background-color 150ms ease-out",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = "oklch(0.90 0.02 170)"
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = "oklch(0.97 0.01 170)"
                    }}
                  >
                    Send your CV
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    style={{
                      background: "transparent",
                      color: "oklch(0.97 0.01 170)",
                      border: "1px solid oklch(0.50 0.06 170)",
                      transition: "background-color 150ms ease-out, border-color 150ms ease-out",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLButtonElement
                      el.style.backgroundColor = "oklch(0.97 0.01 170 / 0.08)"
                      el.style.borderColor = "oklch(0.65 0.06 170)"
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLButtonElement
                      el.style.backgroundColor = "transparent"
                      el.style.borderColor = "oklch(0.50 0.06 170)"
                    }}
                  >
                    About Pet Vital
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
