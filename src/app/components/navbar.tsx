"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down, hide
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-transform duration-300
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="flex w-full font-semibold">
        <div className="bg-[#343333] w-1/2 flex items-start">
          <Link href="/">
            <Image
              src="/company logo.png"
              alt="Company Logo"
              width={200}
              height={100}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <ul className="flex w-1/2 bg-[#343333] items-center justify-around text-xl">
          {[
            { href: "/", label: "Home" },
            { href: "/who-we-are", label: "Who We Are" },
            { href: "/what-we-do", label: "What We Do" },
            { href: "/contact-us", label: "Contact Us" },
          ].map(({ href, label }) => {
            const isActive = pathname === href;

            return (
              <li key={href} className="relative group">
                <Link
                  href={href}
                  className={`
                    inline-block text-white transition-transform duration-300
                    group-hover:-translate-y-1
                    before:content-[''] before:absolute before:bottom-0 before:h-[2px]
                    before:bg-[#EFB82C] before:transition-all before:duration-300 before:ease-out
                    ${
                      isActive
                        ? "before:w-full before:left-0"
                        : "before:w-0 before:left-1/2 group-hover:before:w-full group-hover:before:left-0"
                    }
                  `}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
