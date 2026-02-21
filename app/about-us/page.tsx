export default function About() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">About 2 Brothers 
          Auto and Muffler</h2>
          <p className="text-gray-600 mb-6 text-lg">
  Full-Service Auto Repair in Addison, IL

At 2 Brothers Auto & Muffler, we understand how important your vehicle is to your daily life. Whether you’re commuting, running a business, or transporting your family, you need reliable transportation. That’s why we provide comprehensive automotive repair and maintenance services designed to keep your vehicle running safely and efficiently.

Our Auto Repair Services Include:

Muffler repair & replacement

Exhaust system repair

Catalytic converter replacement

Brake repair & brake pad replacement

Engine diagnostics & check engine light repair

Suspension & steering repair

Struts & shocks

Oil changes & preventative maintenance

Custom exhaust work

Welding & fabrication

No job is too big or too small. From minor repairs to major engine and exhaust work, we deliver honest diagnostics and high-quality workmanship every time.
          </p>
          <p className="text-gray-600 text-lg">
We are conveniently located in Addison, IL, making us the trusted auto repair shop for drivers throughout DuPage County. Customers visit us from:

Addison, IL

Lombard, IL

Villa Park, IL

Bensenville, IL

Elmhurst, IL

Wood Dale, IL

If you’re searching for:

“Muffler repair near me”

“Auto repair Addison IL”

“Brake repair Addison Illinois”

“Exhaust shop near Addison”

“Catalytic converter replacement Addison IL”

2 Brothers Auto & Muffler is your go-to local repair shop.          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/images/2brother2.png"
            alt="About AutoCare"
            className="rounded-3xl shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>
      
    </section>
  );
}
