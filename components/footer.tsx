import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

const footerLinks1 = [
  { href: "#find-us", label: "Find Us" },
  { href: "#menu", label: "Menu" },
  { href: "#catering", label: "Catering" },
  { href: "#rewards", label: "Loyalty" },
]

const footerLinks2 = [
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
  { href: "#careers", label: "Careers" },
  { href: "#franchise", label: "Franchising" },
]

const socialLinks = [
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-cream">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-semibold text-terracotta">Mila Cafe</span>
            </Link>
            <address className="not-italic text-cream/70 text-sm leading-relaxed">
              <p>123 Main Street</p>
              <p>Brooklyn, NY 11201</p>
              <p className="mt-3">hello@milacafe.com</p>
              <p>(555) 123-4567</p>
            </address>
          </div>

          {/* Nav Links Column 1 */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Visit</h4>
            <ul className="space-y-3">
              {footerLinks1.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-terracotta transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Links Column 2 */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks2.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-terracotta transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 hover:text-terracotta transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 mt-10 pt-6">
          <p className="text-cream/50 text-sm text-center">
            © 2026 Mila Cafe. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
