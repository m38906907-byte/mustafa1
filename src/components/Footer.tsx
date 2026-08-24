import React from 'react';

export default function Footer() {
  return (
    <footer
      className="border-t border-border py-10 md:py-12 px-6 md:px-12"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <span className="font-display text-primary font-black text-base tracking-tight italic text-shadow-red">
          Mustafa
        </span>

        {/* Links */}
        <div className="flex items-center gap-6 md:gap-8">
          <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium">
            Home
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium">
            About
          </a>
          <a href="#service" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium">
            Services
          </a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium">
            Projects
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <p className="text-muted-foreground text-sm font-medium">
          © 2026 Mustafa · <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
        </p>
      </div>
    </footer>
  );
}