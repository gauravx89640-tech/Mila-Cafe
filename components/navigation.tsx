"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#about", label: "About Us" },
  { href: "#menu", label: "Menu" },
  { href: "#catering", label: "Catering" },
  { href: "#contact", label: "Contact" },
  { href: "#find-us", label: "Find Us" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="inline-flex items-center rounded-full bg-terracotta px-4 py-1.5"
          >
            <span className="font-serif text-lg font-semibold text-cream">Mila Cafe</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal hover:text-terracotta transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Order Now Button */}
          <div className="hidden md:block">
            <Link
              href="#order"
              className="inline-flex items-center rounded-full bg-terracotta px-5 py-2 text-sm font-semibold text-cream hover:bg-terracotta/90 transition-colors"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-base font-medium text-charcoal hover:text-terracotta transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#order"
              className="block w-full text-center rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-cream hover:bg-terracotta/90 transition-colors mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
