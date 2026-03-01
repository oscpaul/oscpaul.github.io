'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: 'Service Areas', href: '/service-areas/lombard-il/' },
    { name: 'About', href: '/about' },
    { name: 'About Us', href: '/about-us' },

  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between h-16 px-0">
        {/* Left side: Navigation */}
        <nav className="flex space-x-[4px]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                pathname === link.href
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side: Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
        2 Brothers Auto/Muffler
        </Link>

        {/* Mobile Hamburger (appears on small screens) */}
        <button
          className="md:hidden text-gray-700 focus:outline-none ml-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-2xl">&times;</span>
          ) : (
            <span className="text-2xl">&#9776;</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t shadow-sm">
          <ul className="flex flex-col p-4 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block transition-colors ${
                    pathname === link.href
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
