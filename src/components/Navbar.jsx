import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = ["About", "Features", "Pricing", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 },
    );

    // Also observe 'home' for when at top of page, even though it's not in navItems explicitly
    const idsToObserve = ["home", ...navItems.map((item) => item.toLowerCase())];

    idsToObserve.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Map 'home' to 'about' since there is no 'about' section but 'home' is the top
  const currentActive = activeSection === "home" ? "about" : activeSection;

  return (
    <div className="absolute md:fixed top-0 md:top-4 left-0 right-0 z-50 w-full max-w-[1400px] mx-auto px-4 md:px-8 py-4 md:py-2">
      <header className="relative flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] md:gap-4 w-full">
        {/* Brand Logo */}
        <a className="inline-flex items-center" href="/" aria-label="Gym X home">
          <img src="/gymx.png" alt="Gym X Logo" className="h-10 md:h-16 w-auto object-contain " />
        </a>

        {/* Desktop Glass Navigation */}
        <nav
          className="hidden md:flex mx-auto items-center justify-between rounded-full 
                     bg-gradient-to-b from-white/[0.12] to-white/[0.03] 
                     border border-white/20 
                     shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_1px_0_rgba(255,255,255,0.3)] 
                     backdrop-blur-xl backdrop-saturate-150 
                     px-25 py-4 gap-15 transition-all duration-300 hover:border-white/30"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase() === "about" ? "home" : item.toLowerCase()}`}
              className={`relative text-xs sm:text-xs font-medium transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] ${
                currentActive === item.toLowerCase()
                  ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                  : "text-gray-300"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop CTA / Balancing Spacer */}
        <div className="hidden md:flex justify-end"></div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden items-center justify-center p-2.5 rounded-full 
                     bg-white/10 border border-white/20 backdrop-blur-md text-white 
                     focus:outline-none transition-transform active:scale-95"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </header>

      {/* Mobile Glass Dropdown Menu */}
      {isOpen && (
        <div
          className="md:hidden mt-3 w-full rounded-2xl bg-gradient-to-b from-[#0a1120]/90 to-[#020617]/95 
                        border border-white/20 backdrop-blur-2xl backdrop-saturate-200 
                        shadow-[0_10px_40px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)] 
                        p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-300"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase() === "about" ? "home" : item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium transition-colors duration-200 py-1 ${
                currentActive === item.toLowerCase()
                  ? "text-[#1d70fd]"
                  : "text-gray-200 hover:text-[#1d70fd]"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
