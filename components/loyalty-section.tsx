import Image from "next/image"
import Link from "next/link"

export function LoyaltySection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-forest">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-cream mb-6 text-balance">
              The Mila Rewards Club
            </h2>
            <p className="text-cream/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Our regulars are our favorites. Earn points on every order and redeem them for free food 
              and drinks. Because good things should come to those who stay.
            </p>
            <Link
              href="#rewards"
              className="inline-flex items-center rounded-full bg-cream px-6 py-3 text-sm font-semibold text-forest hover:bg-cream/90 transition-colors"
            >
              Join Today
            </Link>
          </div>

          {/* Image */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1471&auto=format&fit=crop"
              alt="Coffee cup with latte art"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
