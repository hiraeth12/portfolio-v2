"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/libs/utils";

// Logo component
const Logo = () => (
  <Link href="/" className="flex items-center gap-2">
    <span className="text-xl font-bold font-cascadia bg-gradient-to-r from-[#333399] to-[#FF00CC] bg-clip-text text-transparent">
      Hiraeth
    </span>
  </Link>
);

// Navigation items
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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
                  <Link
                    href={item.href}
                    className="relative py-2 text-md transition-colors duration-300 ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#333399] to-[#FF00CC] font-cascadia"
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {item.name}
                    <span
                      className={cn(
                        "absolute inset-x-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-[#333399] to-[#FF00CC] rounded-full transition-all duration-300",
                        hoveredItem === item.name
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-0"
                      )}
                    />
                  </Link>
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
        <div className="space-y-1 px-4 pb-5 pt-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-white/50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
