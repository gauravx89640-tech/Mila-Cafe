"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

function useScrollReveal() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    const sections = document.querySelectorAll("[data-reveal]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return visibleSections
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const visibleSections = useScrollReveal()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isVisible = (id: string) => visibleSections.has(id)

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-background"
        } border-b border-border`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="font-serif text-2xl lg:text-3xl font-light tracking-wide text-foreground">
              Mila
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#menu" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                Menu
              </Link>
              <Link href="#story" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                Our Story
              </Link>
              <Link href="#visit" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                Visit
              </Link>
              <Link
                href="#reserve"
                className="px-5 py-2 bg-primary text-primary-foreground text-sm font-light rounded-lg hover:bg-primary/90 transition-colors"
              >
                Reserve
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-foreground transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`w-full h-0.5 bg-foreground transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`w-full h-0.5 bg-foreground transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-6 py-4 space-y-4">
              <Link href="#menu" className="block text-sm font-light text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>
                Menu
              </Link>
              <Link href="#story" className="block text-sm font-light text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>
                Our Story
              </Link>
              <Link href="#visit" className="block text-sm font-light text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>
                Visit
              </Link>
              <Link
                href="#reserve"
                className="inline-block px-5 py-2 bg-primary text-primary-foreground text-sm font-light rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reserve
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-card">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/hero-cafe.jpg"
            alt="Mila Café interior with specialty coffee"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-light leading-tight text-foreground text-balance">
              Slow down. Sip something good.
            </h1>
            <p className="mt-6 lg:mt-8 text-lg lg:text-xl font-light text-foreground/80 max-w-xl leading-relaxed">
              A neighbourhood café in Brooklyn serving specialty coffee, seasonal plates and good conversation.
            </p>
            <div className="mt-8 lg:mt-10 flex flex-wrap gap-4">
              <Link
                href="#menu"
                className="px-8 py-3 bg-primary text-primary-foreground text-sm font-light rounded-lg hover:bg-primary/90 transition-colors"
              >
                View Menu
              </Link>
              <Link
                href="#reserve"
                className="px-8 py-3 border border-primary text-primary text-sm font-light rounded-lg hover:bg-primary/5 transition-colors"
              >
                Reserve a Table
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section
        id="menu"
        data-reveal
        className={`py-24 lg:py-32 bg-background transition-all duration-700 ${
          isVisible("menu") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-5xl font-light text-foreground">What We Serve</h2>
            <div className="mt-4 w-16 h-px bg-secondary mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Coffee & Drinks */}
            <div>
              <h3 className="font-serif text-xl lg:text-2xl font-medium text-foreground mb-6">Coffee & Drinks</h3>
              <div className="space-y-4">
                {[
                  { name: "Espresso", price: "$3.50" },
                  { name: "Flat White", price: "$4.50" },
                  { name: "Matcha Latte", price: "$5.00" },
                  { name: "Cold Brew", price: "$5.50" },
                  { name: "Herbal Tea", price: "$4.00" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-baseline border-b border-border pb-3">
                    <span className="text-foreground font-light">{item.name}</span>
                    <span className="text-muted-foreground font-light">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Food */}
            <div>
              <h3 className="font-serif text-xl lg:text-2xl font-medium text-foreground mb-6">Food</h3>
              <div className="space-y-4">
                {[
                  { name: "Avocado Toast", price: "$12" },
                  { name: "Eggs Benedict", price: "$14" },
                  { name: "Seasonal Grain Bowl", price: "$13" },
                  { name: "Croissant", price: "$4.50" },
                  { name: "Banana Bread", price: "$5.00" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-baseline border-b border-border pb-3">
                    <span className="text-foreground font-light">{item.name}</span>
                    <span className="text-muted-foreground font-light">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specials */}
            <div>
              <h3 className="font-serif text-xl lg:text-2xl font-medium text-foreground mb-6">Specials</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Ask our team about today&apos;s specials — we rotate our seasonal menu weekly using local produce.
              </p>
              <div className="mt-6 p-4 bg-card rounded-lg border border-border">
                <p className="text-sm text-muted-foreground font-light italic">
                  &quot;Every cup tells a story. We brew with patience, passion and the finest specialty beans.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section
        id="story"
        data-reveal
        className={`py-24 lg:py-32 bg-card transition-all duration-700 ${
          isVisible("story") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-serif text-3xl lg:text-5xl font-light text-foreground mb-8">A Little About Us</h2>
              <p className="text-muted-foreground font-light leading-relaxed text-lg">
                Mila started as a dream of a quieter kind of café — somewhere you could actually sit, think and feel at home. We opened our Brooklyn doors in 2019 and haven&apos;t looked back. Everything we serve is made carefully, sourced locally and offered with genuine warmth.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-6">
                {[
                  { label: "Est. 2019", sublabel: "Brooklyn" },
                  { label: "100%", sublabel: "Specialty Coffee" },
                  { label: "Daily", sublabel: "Locally Sourced" },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 border border-border rounded-lg bg-background">
                    <div className="font-serif text-xl lg:text-2xl font-medium text-primary">{stat.label}</div>
                    <div className="text-xs text-muted-foreground mt-1 font-light">{stat.sublabel}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/story-cafe.jpg"
                alt="Barista preparing specialty coffee with latte art"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        data-reveal
        className={`py-24 lg:py-32 bg-background transition-all duration-700 ${
          isVisible("gallery") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-5xl font-light text-foreground">Our Space</h2>
            <div className="mt-4 w-16 h-px bg-secondary mx-auto" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { src: "/images/gallery-bar.jpg", caption: "The Bar" },
              { src: "/images/gallery-morning.jpg", caption: "Morning Light" },
              { src: "/images/gallery-menu.jpg", caption: "Seasonal Menu" },
              { src: "/images/gallery-corner.jpg", caption: "The Corner Table" },
            ].map((image, i) => (
              <div key={i} className="group relative">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                </div>
                <p className="mt-3 text-sm text-muted-foreground font-light text-center">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Section */}
      <section
        id="visit"
        data-reveal
        className={`py-24 lg:py-32 bg-card transition-all duration-700 ${
          isVisible("visit") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-5xl font-light text-foreground">Find Us</h2>
            <div className="mt-4 w-16 h-px bg-secondary mx-auto" />
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">Address</h3>
                <p className="text-muted-foreground font-light">38 Vine Street, Brooklyn, NY 11201</p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">Hours</h3>
                <p className="text-muted-foreground font-light">Mon – Fri: 7:30am – 5pm</p>
                <p className="text-muted-foreground font-light">Sat – Sun: 9am – 4pm</p>
              </div>
              <p className="text-sm text-secondary font-light italic">
                Reservations recommended on weekends
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Reserve Section */}
      <section
        id="reserve"
        data-reveal
        className={`py-24 lg:py-32 bg-background transition-all duration-700 ${
          isVisible("reserve") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl lg:text-5xl font-light text-foreground">Come Say Hello</h2>
              <p className="mt-4 text-muted-foreground font-light">We&apos;d love to see you</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-light text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground font-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-light text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground font-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-light text-foreground mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground font-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="party" className="block text-sm font-light text-foreground mb-2">
                    Party Size
                  </label>
                  <select
                    id="party"
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground font-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Select size</option>
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                    <option value="5+">5+ people</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-light text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground font-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="Any special requests..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-primary text-primary-foreground text-sm font-light rounded-lg hover:bg-primary/90 transition-colors"
              >
                Send Request
              </button>
            </form>

            <div className="mt-10 text-center space-y-2">
              <p className="text-muted-foreground font-light">
                Or call us: <a href="tel:+17185550167" className="text-primary hover:underline">(718) 555-0167</a>
              </p>
              <p className="text-muted-foreground font-light">
                <a href="mailto:hello@milacafe.com" className="text-primary hover:underline">hello@milacafe.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground font-light">
              © 2026 Mila Café. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/60 font-light">
              Website by{" "}
              <a
                href="https://forgestudio.one"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-muted-foreground transition-colors"
              >
                Forge Studio
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
