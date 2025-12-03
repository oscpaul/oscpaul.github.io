import { Great_Vibes, Cormorant_Garamond } from "next/font/google";
   import localFont from 'next/font/local';
   const myCustomFont = localFont({
      src: [
        {
          path: '../../../public/fonts/Regular.woff2',
          weight: '400',
          style: 'normal',
        }
      ]

    });

const titleFont = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-title",
});

const bodyFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata = {
  title: "Golden Lantern Menu",
};

export default function MenuPage() {
  return (
    <main
      className={`${titleFont.variable} globalMarginTopClass main-1 min-h-screen bg-cover bg-center bg-no-repeat flex justify-center px-4 py-12`}
      style={{
        backgroundImage: "url('/images/golden-bg.jpg')",
      }}
    >
   
      <div className={`${myCustomFont.className} max-w-2xl text-center text-black`}>

        {/* Title */}
        <h1
          className="text-5xl md:text-6xl mb-10"
          style={{ fontFamily: "var(--font-title)" }}
        >
          The Golden <br /> Lantern Menu
        </h1>

        {/* FRIED RICE */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-2 tracking-wide">
            FRIED RICE $9
          </h2>
          <p>
            Classic wok-fried rice tossed with vegetables, soy, and a hint of
            garlic.
          </p>
          <p className="italic mt-1">+$1 for Chicken</p>
          <p className="italic">+2 for Salmon or Shrimp</p>
        </section>

        {/* RICE BOWL */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-2 tracking-wide">
            RICE BOWL $14
          </h2>
          <p>
            Steamed rice topped with your choice of protein, seasonal
            vegetables.
          </p>
          <p className="italic mt-1">+$1 for Chicken</p>
          <p className="italic">+2 for Salmon or Shrimp</p>
        </section>

        {/* CLASSIC SIDES */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 tracking-wide">
            CLASSIC SIDES
          </h2>
          <ul className="space-y-2">
            <li>• Shrimp and Pork Dumplings $7</li>
            <li>• Miso Soup $6</li>
            <li>• Edamame, plain $6 or wasabi garlic +$1</li>
          </ul>
        </section>

        {/* Contact */}
        <p className="mt-8 font-medium">
          Email us: goldenlanterndc.com
        </p>
      </div>
    </main>
  );
}
