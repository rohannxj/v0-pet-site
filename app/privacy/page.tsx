"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use", label: "How We Use Your Information" },
  { id: "legal-basis", label: "Legal Basis for Processing" },
  { id: "information-sharing", label: "Information Sharing" },
  { id: "data-security", label: "Data Security" },
  { id: "data-retention", label: "Data Retention" },
  { id: "your-rights", label: "Your Rights" },
  { id: "cookies", label: "Cookies" },
  { id: "third-party-links", label: "Third-Party Links" },
  { id: "childrens-privacy", label: "Children's Privacy" },
  { id: "policy-changes", label: "Changes to This Policy" },
  { id: "contact", label: "Contact Us" },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Two-column layout: sticky TOC sidebar + prose */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="lg:grid lg:gap-16" style={{ gridTemplateColumns: "220px minmax(0, 1fr)" }}>

            {/* Sidebar TOC — hidden on mobile */}
            <aside className="hidden lg:block">
              <nav
                className="sticky top-8"
                aria-label="Page sections"
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "oklch(0.50 0 0)", letterSpacing: "0.08em" }}
                >
                  Contents
                </p>
                <ul className="space-y-1">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="block text-sm py-1 leading-snug transition-colors duration-150"
                        style={{ color: "oklch(0.50 0 0)" }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.55 0.15 170)"
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.50 0 0)"
                        }}
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Prose */}
            <div className="max-w-[70ch]">

              {/* Document heading */}
              <div className="mb-12">
                <p
                  className="text-xs font-semibold uppercase mb-4"
                  style={{ color: "oklch(0.55 0.15 170)", letterSpacing: "0.08em" }}
                >
                  Legal
                </p>
                <h1
                  className="text-4xl font-bold tracking-tight mb-4"
                  style={{ color: "oklch(0.25 0.01 240)", lineHeight: 1.1 }}
                >
                  Privacy Policy
                </h1>
                <p
                  className="text-sm"
                  style={{ color: "oklch(0.50 0 0)" }}
                >
                  Last updated: April 2026
                </p>
                <div
                  className="mt-8"
                  style={{ height: 1, backgroundColor: "oklch(0.90 0 0)" }}
                />
              </div>

              <Section id="introduction" number="1" heading="Introduction" first>
                <p>
                  Vital Pet Group (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when you visit our
                  website and use our services.
                </p>
              </Section>

              <Section id="information-we-collect" number="2" heading="Information We Collect">
                <h3 className="text-base font-semibold mb-2" style={{ color: "oklch(0.25 0.01 240)" }}>
                  Personal Information
                </h3>
                <p>We may collect personal information that you voluntarily provide, including:</p>
                <ul>
                  <li>Name and contact details</li>
                  <li>Business name and registration number</li>
                  <li>Email address and phone number</li>
                  <li>Billing and delivery addresses</li>
                  <li>Payment information</li>
                  <li>Order history and preferences</li>
                </ul>
                <h3 className="text-base font-semibold mt-6 mb-2" style={{ color: "oklch(0.25 0.01 240)" }}>
                  Automatically Collected Information
                </h3>
                <p>When you visit our website, we automatically collect:</p>
                <ul>
                  <li>IP address and browser type</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring website</li>
                  <li>Cookies and similar technologies</li>
                </ul>
              </Section>

              <Section id="how-we-use" number="3" heading="How We Use Your Information">
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Process and fulfil your orders</li>
                  <li>Manage your trade account</li>
                  <li>Communicate with you about orders and services</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud and enhance security</li>
                </ul>
              </Section>

              <Section id="legal-basis" number="4" heading="Legal Basis for Processing">
                <p>We process your personal data based on:</p>
                <ul>
                  <li><strong>Contract:</strong> To fulfil orders and manage your account</li>
                  <li><strong>Legitimate interests:</strong> To improve our services and marketing</li>
                  <li><strong>Consent:</strong> For marketing communications</li>
                  <li><strong>Legal obligation:</strong> To comply with laws and regulations</li>
                </ul>
              </Section>

              <Section id="information-sharing" number="5" heading="Information Sharing">
                <p>We may share your information with:</p>
                <ul>
                  <li>Delivery partners to fulfil orders</li>
                  <li>Payment processors for transactions</li>
                  <li>IT service providers</li>
                  <li>Professional advisors</li>
                  <li>Regulatory authorities when required by law</li>
                </ul>
                <p>We do not sell your personal information to third parties.</p>
              </Section>

              <Section id="data-security" number="6" heading="Data Security">
                <p>
                  We implement appropriate technical and organisational measures to protect your personal
                  data against unauthorised access, alteration, disclosure, or destruction. However, no
                  internet transmission is completely secure, and we cannot guarantee absolute security.
                </p>
              </Section>

              <Section id="data-retention" number="7" heading="Data Retention">
                <p>
                  We retain your personal data for as long as necessary to fulfil the purposes for which
                  it was collected, comply with legal obligations, resolve disputes, and enforce agreements.
                  Account information is typically retained for 7 years after account closure.
                </p>
              </Section>

              <Section id="your-rights" number="8" heading="Your Rights">
                <p>Under data protection laws, you have the right to:</p>
                <ul>
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Restrict processing of your data</li>
                  <li>Data portability</li>
                  <li>Object to processing</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p>To exercise these rights, please contact us using the details below.</p>
              </Section>

              <Section id="cookies" number="9" heading="Cookies">
                <p>
                  We use cookies and similar technologies to enhance your experience. For more information,
                  please see our Cookie Policy.
                </p>
              </Section>

              <Section id="third-party-links" number="10" heading="Third-Party Links">
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the
                  privacy practices of these websites and encourage you to read their privacy policies.
                </p>
              </Section>

              <Section id="childrens-privacy" number="11" heading="Children's Privacy">
                <p>
                  Our services are intended for businesses and are not directed at children under 18.
                  We do not knowingly collect personal information from children.
                </p>
              </Section>

              <Section id="policy-changes" number="12" heading="Changes to This Policy">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material
                  changes by posting the new policy on this page and updating the effective date.
                </p>
              </Section>

              {/* Contact — tinted, visually separated */}
              <div
                id="contact"
                className="mt-10 rounded-xl p-8 scroll-mt-8"
                style={{ backgroundColor: "oklch(0.97 0.01 170)" }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-1"
                  style={{ color: "oklch(0.55 0.15 170)", letterSpacing: "0.08em" }}
                >
                  13
                </p>
                <h2
                  className="text-lg font-bold mb-4"
                  style={{ color: "oklch(0.25 0.01 240)" }}
                >
                  Contact Us
                </h2>
                <p className="text-sm mb-4" style={{ color: "oklch(0.40 0 0)" }}>
                  If you have questions about this Privacy Policy or wish to exercise your rights,
                  please contact our Data Protection Officer:
                </p>
                <ul className="space-y-1 text-sm" style={{ color: "oklch(0.40 0 0)" }}>
                  <li>
                    <span className="font-medium" style={{ color: "oklch(0.25 0.01 240)" }}>Email: </span>
                    <a
                      href="mailto:privacy@vitalpetgroup.co.uk"
                      style={{ color: "oklch(0.55 0.15 170)" }}
                      className="hover:underline underline-offset-2"
                    >
                      privacy@vitalpetgroup.co.uk
                    </a>
                  </li>
                  <li>
                    <span className="font-medium" style={{ color: "oklch(0.25 0.01 240)" }}>Phone: </span>
                    01902 924266
                  </li>
                  <li>
                    <span className="font-medium" style={{ color: "oklch(0.25 0.01 240)" }}>Address: </span>
                    Wolverhampton, UK
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function Section({
  id,
  number,
  heading,
  children,
  first = false,
}: {
  id: string
  number: string
  heading: string
  children: React.ReactNode
  first?: boolean
}) {
  return (
    <div
      id={id}
      className="scroll-mt-8"
      style={first ? {} : {
        paddingTop: "2.5rem",
        marginTop: "2.5rem",
        borderTop: "1px solid oklch(0.90 0 0)",
      }}
    >
      <p
        className="text-xs font-semibold uppercase mb-1"
        style={{ color: "oklch(0.55 0.15 170)", letterSpacing: "0.08em" }}
      >
        {number}
      </p>
      <h2
        className="text-xl font-bold mb-4"
        style={{ color: "oklch(0.25 0.01 240)" }}
      >
        {heading}
      </h2>
      <div
        className="prose prose-sm max-w-none"
        style={
          {
            color: "oklch(0.40 0 0)",
            "--tw-prose-body": "oklch(0.40 0 0)",
            "--tw-prose-headings": "oklch(0.25 0.01 240)",
            "--tw-prose-bold": "oklch(0.25 0.01 240)",
            "--tw-prose-bullets": "oklch(0.55 0.15 170)",
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </div>
  )
}
