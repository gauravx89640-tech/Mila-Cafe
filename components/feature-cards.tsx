import Link from "next/link"
import { ArrowRight } from "lucide-react"

const features = [
  {
    title: "Get To Know Mila",
    href: "#about",
  },
  {
    title: "Craft Coffee & Drinks",
    href: "#menu",
  },
  {
    title: "Brunch All Day",
    href: "#menu",
  },
]

export function FeatureCards() {
  return (
    <section className="py-16 md:py-24 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.href}
              className="group block bg-warm-beige border border-terracotta/30 rounded-xl p-8 md:p-10 hover:border-terracotta hover:shadow-lg transition-all duration-300"
            >
              {/* Decorative Asterisk */}
              <div className="text-terracotta text-4xl md:text-5xl font-serif mb-6">✻</div>
              
              {/* Title */}
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-charcoal mb-4">
                {feature.title}
              </h3>
              
              {/* Arrow Link */}
              <div className="flex items-center text-terracotta font-medium">
                <span className="mr-2">Learn More</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
