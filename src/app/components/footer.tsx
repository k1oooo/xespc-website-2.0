"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="flex flex-col md:flex-row w-full font-semibold bg-[#343333] text-white">
      {/* Left side with logo & about */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center py-8 px-4 text-left">
        <Link href="/">
          <Image
            src="/company logo.png"
            alt="Company Logo"
            width={180}
            height={80}
            className="cursor-pointer"
          />
        </Link>
        <p className="mt-4 max-w-sm text-xl text-justify">
          At XESP Consulting, we provide innovative engineering and consulting
          services tailored to your needs.
        </p>
      </div>

      {/* Right side with links and contact */}
      <div className="w-full md:w-1/2 flex flex-col justify-center py-8 px-8">
        {/* Links */}
        <ul className="flex flex-wrap gap-6 mb-6 justify-center md:justify-start">
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
                  className={`inline-block transition-transform duration-300 group-hover:-translate-y-1
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

        {/* Contact info and address */}
        <div className="flex flex-col gap-2 text-sm mb-4 items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <FaPhoneAlt /> <span>03-2300 9256</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope /> <span>info@xespc.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaLinkedin />
            <Link
              href="https://www.linkedin.com/company/xespc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#EFB82C] transition-colors duration-300"
            >
              linkedin.com/company/xespc
            </Link>
          </div>
          <div className="flex items-start gap-2 mt-2 max-w-xs">
            <FaMapMarkerAlt className="mt-1" />
            <span>
              Level 23A, Co-Labs Coworking KL Platinum Park, Naza Tower, Suite
              49, Persiaran KLCC, Kuala Lumpur, 50088 Kuala Lumpur, Wilayah
              Persekutuan Kuala Lumpur
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-xs text-center md:text-left">
          © {new Date().getFullYear()} XESP Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
