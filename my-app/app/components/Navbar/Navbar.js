import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="text-2xl font-bold">
          <Link href="/">BlogPost</Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition">
            Contact
          </Link>
          <Link href="/blog" className="hover:text-gray-300 transition">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
