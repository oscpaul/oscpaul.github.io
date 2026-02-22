import Link from "next/link";

export default function Footer() {
  return (
    <footer className="min-h-[50vh] bg-neutral-900 text-neutral-200 flex flex-col justify-between">
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto w-full px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <address className="not-italic text-sm leading-relaxed">
            <strong>2 Brothers Auto & Muffler</strong><br />
            915 S Westwood Ave<br />
            Addison, IL 60101<br />

            <a
              href="tel:+16302297330"
              className="block mt-4 hover:underline"
            >
              (630) 229-7330
            </a>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=915+S+Westwood+Ave,+Addison,+IL+60101"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-sm text-neutral-400 hover:text-white"
            >
              Get Directions
            </a>
          </address>

          {/* Map */}
          <div className="mt-6 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=915+S+Westwood+Ave,+Addison,+IL+60101&output=embed"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Service Areas */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            <Link href="/service-areas">
              Service Areas
            </Link>
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/service-areas/lombard-il" className="hover:text-white">
                Lombard, IL
              </Link>
            </li>
            <li>
              <Link href="/service-areas/villa-park-il" className="hover:text-white">
                Villa Park, IL
              </Link>
            </li>
            <li>
              <Link href="/service-areas/elmhurst-il" className="hover:text-white">
                Elmhurst, IL
              </Link>
            </li>
            <li>
              <Link href="/service-areas/bensenville-il" className="hover:text-white">
                Bensenville, IL
              </Link>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Reliable auto repair serving Addison and nearby communities.
            Honest work, fair pricing, and dependable service.
          </p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800 py-6 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} 2 Brothers Auto & Muffler. All rights reserved.
      </div>

    </footer>
  );
}
