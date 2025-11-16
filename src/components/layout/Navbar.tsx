'use client';

import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* ✅ Floating Mobile Menu Button */}
      <button
        className="
          md:hidden
          fixed top-6 right-6
          w-12 h-12 
          flex items-center justify-center
          rounded-full
          border border-gray-500/40
          bg-[#0f182a]/40 backdrop-blur-xl
          shadow-lg shadow-black/20
          text-gray-300
          hover:text-white transition
          z-50
        "
        onClick={() => setIsOpen(true)}
      >
        <HiMenu size={20} />
      </button>

      {/* ✅ Desktop Navbar */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-40 w-full max-w-4xl px-4 hidden md:block">
        <div className="bg-[#0a1628]/80 backdrop-blur-md border border-gray-700/50 rounded-full px-8 py-4 flex items-center justify-between">
          
          {/* Logo only on desktop */}
          <a
            href="#"
            className="text-cyan-400 text-xl font-semibold hover:text-cyan-300 transition-colors hidden md:block"
          >
            Surya P
          </a>

          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ✅ Mobile Fullscreen Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-[#0a1628]/95 backdrop-blur-lg">
            <button
              className="absolute top-8 right-8 text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <HiX size={32} />
            </button>

            <div className="flex flex-col items-center justify-center h-full gap-8">
              <a
                href="#"
                className="text-cyan-400 text-2xl font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-xl"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
