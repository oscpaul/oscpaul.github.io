export default function About() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">About 2 Brothers Auto Muffler</h2>
          <p className="text-gray-600 mb-6 text-lg">
            At 2 Brothers Auto Muffler, we believe car maintenance should be simple, honest, and stress-free. 
            Our team of expert technicians provides thoughtful repairs, transparent pricing, 
            and an experience that makes you feel confident on the road.
          </p>
          <p className="text-gray-600 text-lg">
            From routine check-ups to unexpected repairs, we’re committed to keeping your car running safely and smoothly. 
            Your trust is our top priority, and our services are designed with you in mind.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/images/2brothers-3.webp"
            alt="About 2 Brothers Auto Muffler"
            className="rounded-3xl shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
