import Image from "next/image"
import Link from "next/link"

export function VisitSection() {
  return (
    <section id="find-us" className="py-16 md:py-24 px-4 bg-warm-beige">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative h-80 md:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1471&auto=format&fit=crop"
              alt="Cozy café seating area"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal mb-6 text-balance">
              Come Find Your Table
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              Whether you&apos;re looking for a quiet corner to work, a sunny spot to catch up with friends, 
              or a cozy table to enjoy your morning coffee — we&apos;ve got you covered. Our all-day menu 
              means there&apos;s always something delicious waiting for you, from sunrise to sunset.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream hover:bg-forest/90 transition-colors"
            >
              Find Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
