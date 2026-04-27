import Image from "next/image"
import { Instagram } from "lucide-react"

const socialImages = [
  {
    src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1469&auto=format&fit=crop",
    alt: "Coffee drink",
  },
  {
    src: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1498&auto=format&fit=crop",
    alt: "Brunch plate",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1470&auto=format&fit=crop",
    alt: "Latte art",
  },
  {
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1374&auto=format&fit=crop",
    alt: "Café atmosphere",
  },
]

export function SocialSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-2">
            Follow Along
          </h2>
          <div className="w-16 h-1 bg-terracotta mx-auto rounded-full" />
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {socialImages.map((image, index) => (
            <a
              key={index}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="h-8 w-8 text-cream" />
              </div>
            </a>
          ))}
        </div>

        {/* Instagram Handle */}
        <div className="text-center mt-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-terracotta font-semibold hover:underline"
          >
            @milacafe
          </a>
        </div>
      </div>
    </section>
  )
}
