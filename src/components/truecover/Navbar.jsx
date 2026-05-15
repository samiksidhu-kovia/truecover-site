import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LOGO = "https://media.base44.com/images/public/6a062eb19564fba54ebe0ce6/e91e0fd20_truecoverlogo.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Get Covered", href: "#get-covered" },
    { label: "Contact", href: "#contact" },
  ];

  const handleClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center shrink-0">
            <img src={LOGO} alt="TrueCover Assurance Agency" className="h-14 w-auto" />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="font-inter text-sm font-medium text-navy/70 hover:text-navy transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => handleClick("#get-covered")}
            className="hidden md:inline-flex font-inter font-medium text-sm bg-green text-white px-5 py-2.5 rounded-lg hover:bg-green/90 transition-colors"
          >
            Get Covered
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-navy"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-1">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="block w-full text-left font-inter text-base font-medium text-navy/80 hover:text-navy px-2 py-3 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleClick("#get-covered")}
              className="w-full font-inter font-medium text-base bg-green text-white px-5 py-3 rounded-lg hover:bg-green/90 transition-colors mt-2"
            >
              Get Covered
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}