import Image from "next/image"

const photos = [
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1470&auto=format&fit=crop",
    alt: "Latte art coffee",
    className: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1470&auto=format&fit=crop",
    alt: "Delicious breakfast plate",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?q=80&w=1470&auto=format&fit=crop",
    alt: "Cozy café corner",
    className: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=1470&auto=format&fit=crop",
    alt: "Fresh pastries",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1374&auto=format&fit=crop",
    alt: "Coffee being poured",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop",
    alt: "Restaurant interior",
    className: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=1470&auto=format&fit=crop",
    alt: "Avocado toast",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1374&auto=format&fit=crop",
    alt: "Coffee cup on table",
    className: "",
  },
]

export function WelcomeSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Heading and Description */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal mb-6">
            Welcome to Mila Cafe
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            We&apos;re your neighborhood spot for all-day brunch, craft espresso, and feel-good food. 
            From loaded bowls and fresh paninis to hand-crafted lattes and vegan-friendly options — 
            there&apos;s a seat here for everyone.
          </p>
        </div>

        {/* Masonry Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-lg ${photo.className} ${
                photo.className.includes('row-span-2') ? 'h-64 md:h-80' : 'h-32 md:h-40'
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
