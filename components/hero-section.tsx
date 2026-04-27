import Link from "next/link"
import Image from "next/image"

const heroButtons = [
  { href: "#menu", label: "View Menu" },
  { href: "#find-us", label: "Find Us" },
  { href: "#catering", label: "Catering" },
  { href: "#order", label: "Order Now" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
        alt="Warm café interior with natural light"
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-charcoal/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-cream leading-tight text-balance">
          Where Every Morning Feels Like a Treat
        </h1>
        
        {/* Pill Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-8 md:mt-10">
          {heroButtons.map((button) => (
            <Link
              key={button.href}
              href={button.href}
              className="inline-flex items-center rounded-full border-2 border-cream/80 bg-transparent px-5 py-2.5 text-sm font-medium text-cream hover:bg-cream hover:text-charcoal transition-all"
            >
              {button.label}
            </Link>
          ))}
        </div>
        
        {/* Welcome Text */}
        <p className="mt-8 text-cream/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Welcome to Mila Cafe — your cozy neighborhood spot for craft coffee, all-day brunch, and good vibes. 
          Pull up a chair, stay awhile.
        </p>
      </div>
    </section>
  )
}
