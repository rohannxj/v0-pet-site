"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex items-center gap-2 text-white bg-white/10 rounded-md px-4 py-2 md:w-80">
        <Check className="h-5 w-5 text-white flex-shrink-0" />
        <span className="text-sm font-medium">Thanks! You&apos;re subscribed.</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto" aria-label="Newsletter signup">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 md:w-64"
        required
      />
      <Button type="submit" className="bg-white text-primary hover:bg-white/90 font-semibold transition-colors duration-200">
        Subscribe
      </Button>
    </form>
  )
}
