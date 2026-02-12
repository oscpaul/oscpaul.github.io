import Image from "next/image"

export default function TopHero() {
  return (
    <section className="w-full h-[75vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
        
        {/* Left Image */}
        <div className="relative w-full h-full aspect-square md:aspect-auto">
          <Image
            src="/images/hero/hero-left.jpg"
            alt="Auto shop craftsmanship"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="relative w-full h-full aspect-square md:aspect-auto">
          <Image
            src="/images/hero/hero-right.jpg"
            alt="Detail-oriented auto service"
            fill
            priority
            className="object-cover"
          />
        </div>

      </div>
    </section>
  )
}
