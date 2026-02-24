export default function About() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Why Choose 2 Brothers Auto Service?</h2>
          <p className="text-gray-600 mb-6 text-lg">
        At 2 Brothers Auto Service, Addison drivers trust us for honest, reliable, and fast auto repairs. Here’s why our customers keep coming back.
          </p>
          <ul>
  <li><strong>Experienced Technicians:</strong> Our team has years of hands-on experience with mufflers, brakes, and full-service auto repair.</li>
  <li><strong>Transparent Pricing:</strong> No surprises—just fair, upfront pricing for every repair.</li>
  <li><strong>Fast, Efficient Service:</strong> We value your time and aim to get you back on the road quickly.</li>
  <li><strong>Local & Accessible:</strong> Conveniently located at 915 S Westwood Ave, we serve Addison and nearby neighborhoods.</li>
  <li><strong>Community-Focused:</strong> We’re a locally-owned shop dedicated to keeping Addison drivers safe and satisfied.</li>
</ul>
                    <h2 className="text-4xl font-bold mb-4">Conveniently Located in Addison, IL</h2>

          <p className="text-gray-600 text-lg">
Finding reliable auto service near you in Addison has never been easier. Our shop is located at 915 S Westwood Ave, just off Lake Street and minutes from Army Trail Rd. Whether you’re coming from the downtown area, nearby neighborhoods, or commuting through Addison, our location is quick and easy to reach.
Stop by today for a muffler inspection, brake service, or full auto repair—experience local service you can trust, right in the heart of Addison.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/images/2brother2.png"
            alt="About 2 Brothers Auto Muffler"
            className="rounded-3xl shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
