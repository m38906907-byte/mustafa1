'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Service', href: '#service' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      {/* Desktop & Tablet Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-5 animate-header-entrance header-shimmer"
        role="banner"
      >
        <nav
          className={`
            hidden md:flex items-center gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 3xl:gap-24
            px-8 lg:px-12 xl:px-16 2xl:px-20
            h-16 lg:h-18 xl:h-20 2xl:h-24 3xl:h-28
            bg-card border border-border
            rounded-b-[40px] lg:rounded-b-[50px]
            relative overflow-hidden
            transition-all duration-500
            ${scrolled ? 'shadow-[0_8px_32px_rgba(0,0,0,0.8)]' : ''}
          `}
          aria-label="Main navigation"
        >
          {/* Logo / Name */}
          <Link
            href="/"
            className="font-display text-primary text-shadow-red font-black text-base lg:text-lg xl:text-xl 2xl:text-2xl tracking-tight italic hover:tracking-widest transition-all duration-300 whitespace-nowrap"
            aria-label="Mustafa - Home"
          >
            Mustafa
          </Link>

          {/* Nav Links */}
          <ul className="flex items-center gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 list-none" role="list">
            {navItems?.map((item, i) => (
              <li
                key={item?.label}
                className="animate-item-slide"
                style={{ animationDelay: `${0.35 + i * 0.1}s` }}
              >
                <a
                  href={item?.href}
                  className="nav-link text-xs lg:text-sm xl:text-base 2xl:text-lg font-medium whitespace-nowrap"
                  onClick={handleNavClick}
                >
                  {item?.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Header */}
        <div
          className="md:hidden flex items-center justify-between w-[92%] mx-auto px-5 py-4 bg-card border border-border rounded-b-[30px] relative overflow-hidden"
          style={{ boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.8)' : 'none' }}
        >
          <Link
            href="/"
            className="font-display text-primary font-black text-base tracking-tight italic"
            aria-label="Mustafa - Home"
          >
            Mustafa
          </Link>

          <button
            className="flex flex-col gap-1.5 p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className="hamburger-line"
              style={{
                transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              }}
            />
            <span
              className="hamburger-line"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="hamburger-line"
              style={{
                transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              }}
            />
          </button>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ backdropFilter: 'blur(16px)', backgroundColor: 'rgba(8,8,8,0.96)' }}
          onClick={() => setMenuOpen(false)}
        >
          <nav
            className="flex flex-col items-center justify-center h-full gap-8"
            onClick={(e) => e?.stopPropagation()}
            aria-label="Mobile navigation"
          >
            {navItems?.map((item, i) => (
              <a
                key={item?.label}
                href={item?.href}
                className="font-display text-2xl font-bold text-foreground hover:text-primary transition-colors duration-300 uppercase tracking-widest"
                onClick={handleNavClick}
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                {item?.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}