"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/libs/utils";

// Logo component
const Logo = () => (
  <button
    onClick={() => {
      const section = document.getElementById("Home");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }}
    className="flex items-center gap-2"
  >
    <span className="text-xl font-bold font-cascadia bg-gradient-to-r from-[#333399] to-[#FF00CC] bg-clip-text text-transparent">
      Hiraeth
    </span>
  </button>
);

// Navigation items
const navItems = [
  { name: "Home", href: "#Home" },
  { name: "About", href: "#About" },
  { name: "Portfolio", href: "#Portfolio" },
  { name: "Contact", href: "#Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("Home");

  // Observer for section visibility
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // 60% visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Scroll to section
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="bg-transparent">
        <div className="flex h-16 w-full items-center justify-between px-8 sm:px-12 lg:px-16">
          {/* Logo */}
          <Logo />

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    className={cn(
                      "relative py-2 text-md font-cascadia transition-colors duration-300 ease-in-out font-bold",
                      item.name === activeSection
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#333399] to-[#FF00CC]"
                        : "text-slate-400"
                    )}
                    onClick={() => scrollToSection(item.href.replace("#", ""))}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {item.name}
                    <span
                      className={cn(
                        "absolute inset-x-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-[#333399] to-[#FF00CC] rounded-full transition-all duration-300",
                        hoveredItem === item.name || activeSection === item.name
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-0"
                      )}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden bg-white/80 transition-all duration-300 ease-in-out",
          mobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <ul className="space-y-1 px-4 pb-5 pt-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToSection(item.href.replace("#", ""));
                }}
                className={cn(
                  "block w-full text-left rounded-md px-3 py-2 text-base font-medium font-cascadia transition-colors",
                  item.name === activeSection
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#333399] to-[#FF00CC]"
                    : "text-slate-600 hover:bg-white/50"
                )}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
