"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/who-we-are", label: "Who We Are" },
    { href: "/what-we-do", label: "What We Do" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="flex flex-col md:flex-row w-full font-semibold">
        {/* Logo */}
        <div className="bg-[#343333] w-full md:w-1/2 flex items-center justify-between md:justify-start px-4 py-2">
          <Link href="/">
            <Image
              src="/company logo.png"
              alt="Company Logo"
              width={200}
              height={100}
              className="cursor-pointer"
            />
          </Link>
          {/* Hamburger on mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none text-white"
            >
              <div className="space-y-1">
                <div
                  className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                />
                <div
                  className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`}
                />
                <div
                  className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Links desktop */}
        <ul className="hidden md:flex w-full md:w-1/2 bg-[#343333] items-center justify-around text-xl">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href} className="relative group">
                <Link
                  href={href}
                  className={`inline-block text-white transition-transform duration-300 group-hover:-translate-y-1
                  before:content-[''] before:absolute before:bottom-0 before:h-[2px]
                  before:bg-[#EFB82C] before:transition-all before:duration-300 before:ease-out
                  ${
                    isActive
                      ? "before:w-full before:left-0"
                      : "before:w-0 before:left-1/2 group-hover:before:w-full group-hover:before:left-0"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#343333] px-4 py-2 space-y-2 text-white text-lg">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block py-2 transition-colors duration-200 hover:text-[#EFB82C]
              ${pathname === href ? "text-[#EFB82C]" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
