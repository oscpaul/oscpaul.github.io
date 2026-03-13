import Image from "next/image";

export default function About() {
  return (
    <section className="w-full px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Responsive Lazy-Loaded Image */}
        <div className="w-full mx-auto">
          <Image
            src="/images/2brother2.png" // replace with your image path
            alt="2 Brothers Auto & Muffler Shop in Addison, IL"
            width={1200}           // original image width
            height={600}           // original image height
            className="w-full h-auto rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1200px"
            priority={false}       // keep lazy-loaded
          />
        </div>

        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Muffler, Exhaust, and Brake Repair in Addison, IL
        </h2>

        <p className="text-center max-w-3xl mx-auto">
          At 2 Brothers Auto & Muffler, we specialize in professional muffler repair,
          exhaust system service, and brake repair for drivers in Addison and across
          DuPage County. Our experienced mechanics provide reliable and affordable
          auto repair to keep your vehicle safe, quiet, and running efficiently.
          If you are searching for muffler repair near me, brake repair near me, or
          exhaust repair near me, our local auto shop is here to help.
        </p>

        {/* Grid of services */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service items here... */}
        </div>

        <p className="text-center max-w-3xl mx-auto">
          Conveniently located in Addison, our shop proudly serves drivers from
          surrounding areas throughout DuPage County looking for trusted muffler,
          exhaust, and brake repair near them.
        </p>

        {/* Service Area Line */}
        <p className="text-center text-sm md:text-base font-medium">
   If you’re searching for:

“Muffler repair near me”

“Auto repair Addison IL”

“Brake repair Addison Illinois”

“Exhaust shop near Addison”

“Catalytic converter replacement Addison IL”

2 Brothers Auto & Muffler is your go-to local repair shop. 
        </p>

      </div>
    </section>
  );
}
