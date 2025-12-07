'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { name: 'Surya P', href: '#home', id: 'home', isLogo: true },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress for top gradient line
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);

      // Determine active section based on scroll position
      const sections = navItems.filter(item => !item.isLogo).map(item => item.id);
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Section is considered active when it's in the top half of viewport
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }

      // If at the very top, set home as active
      if (scrolled < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    setActiveSection(id);
  };

  return (
    <>
      {/* Animated gradient line that moves with scroll */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40">
        <div className="bg-[#0d1b2a]/90 backdrop-blur-md border border-gray-700/50 rounded-full px-6 py-3 shadow-xl">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => handleClick(item.id)}
                className={`relative px-3 py-1 text-sm transition-colors ${
                  item.isLogo
                    ? 'text-white font-semibold'
                    : activeSection === item.id
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {item.name}
                {/* Underline indicator for active section */}
                {!item.isLogo && activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
