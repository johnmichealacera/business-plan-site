'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Amenities', href: '/amenities' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-tropical-blue text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-wide">
          Isla Paraiso
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:underline transition">
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Desktop Book Now Button */}
        <Link href="/contact" className="hidden md:inline-block bg-tropical-sand text-tropical-blue font-semibold px-5 py-2 rounded-xl shadow hover:bg-yellow-200 transition">
          Book Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg hover:bg-tropical-blue/80 transition"
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-tropical-blue border-t border-tropical-blue/20">
          <nav className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="py-3 px-2 hover:bg-tropical-blue/80 rounded-lg transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 bg-tropical-sand text-tropical-blue font-semibold px-4 py-3 rounded-xl shadow text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
} 