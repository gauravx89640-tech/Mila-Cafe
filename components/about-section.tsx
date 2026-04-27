import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content - Left on desktop */}
          <div className="order-2 lg:order-1 lg:pr-8">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal mb-6 text-balance">
              Our Story
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              Mila Cafe was born from a love of good food, great coffee, and genuine hospitality. 
              Our all-day menu spans savory breakfast sandwiches, fresh bowls, paninis, smoothies, 
              mocktails, house-made pastries, and specialty espresso — crafted to make every visit 
              feel like a little occasion.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              We believe the best mornings are the ones spent lingering over a perfectly pulled shot, 
              sharing a plate of something delicious, and feeling right at home.
            </p>
            <Link
              href="#about"
              className="inline-flex items-center text-terracotta font-semibold hover:underline group"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Image - Right on desktop */}
          <div className="order-1 lg:order-2 relative h-80 md:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=1471&auto=format&fit=crop"
              alt="Barista preparing coffee"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
