"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import { useEffect } from "react";

export default function WhatWeDo() {
  const services = [
    {
      title: "Engineering Design",
      desc: "We provide cutting-edge engineering design solutions, ensuring safety, efficiency, and innovation are at the core of your projects. From conceptual layouts to detailed schematics, our team leverages modern tools and vast experience.",
      icon: "/engineering-design.jpg",
    },
    {
      title: "Project Management",
      desc: "Our project management team ensures your initiatives are delivered on time and within budget. We coordinate all phases from planning to execution, minimizing risks and maximizing ROI.",
      icon: "/project-management.jpg",
    },
    {
      title: "Regulatory Compliance",
      desc: "Navigating complex regulations can be daunting. We simplify the process, ensuring your projects comply with local and international standards, such as ISO, API, and OSHA.",
      icon: "/regulatory-compliance.jpg",
    },
    {
      title: "Feasibility Studies",
      desc: "Before investing millions, validate your ideas with our in-depth feasibility studies. We analyze technical, financial, and operational aspects to help you make confident decisions.",
      icon: "/feasibility-studies.jpg",
    },
    {
      title: "Risk & Safety Analysis",
      desc: "Protect your assets and people with comprehensive HAZOP, SIL, and safety assessments. We identify and mitigate risks before they escalate into costly incidents.",
      icon: "/safety.jpg",
    },
    {
      title: "Maintenance Optimization",
      desc: "Extend the life of your assets and reduce unplanned downtime. Our data-driven maintenance strategies ensure optimal performance and cost savings over the asset lifecycle.",
      icon: "/maintenance-optimization.jpg",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -80; // adjust for fixed navbar
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });

          el.classList.add("highlight-pulse");
          setTimeout(() => el.classList.remove("highlight-pulse"), 2000);
        }
      }, 1000);
    }
  }, []);

  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#7DCFCC]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7DCFCC]/80 via-[#7DCFCC]/50 to-[#7DCFCC]/80 opacity-70 z-0" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl px-6"
        >
          <h1 className="text-6xl font-extrabold text-gray-900 mb-6 drop-shadow-lg tracking-wide">
            What We Do
          </h1>
          <p className="text-2xl text-gray-800 mb-10 max-w-3xl mx-auto leading-relaxed">
            Explore how our specialized engineering and consulting services
            drive innovation and deliver success — from design to compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact-us"
              className="bg-black text-white py-4 px-10 rounded-full text-xl hover:scale-105 hover:bg-[#333] transition-all duration-300 shadow-md"
            >
              Start Your Project
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 border border-black py-4 px-10 rounded-full text-xl hover:bg-black hover:text-white transition-colors duration-300 shadow-md"
            >
              Back Home <FaArrowRight />
            </Link>
          </div>
        </motion.div>
        <div className="absolute bottom-8 z-10">
          <FaArrowDown className="text-black text-3xl animate-bounce" />
        </div>
      </section>

      {/* Services */}
      <section className="w-full py-20 px-6 bg-[hsla(44,84%,55%,0.3)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              id={service.title.toLowerCase().replace(/\s+/g, "-")}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white/80 p-8 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 flex flex-col items-center text-center"
            >
              <div className="relative w-full aspect-[3/2] overflow-hidden rounded-xl shadow-md mb-6">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
              <p className="text-lg mb-6">{service.desc}</p>
              <Link
                href="/contact-us"
                className="flex items-center gap-2 border border-black py-2 px-6 rounded-full hover:bg-black hover:text-white transition-colors duration-300"
              >
                Enquire Now <FaArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-[#7DCFCC] py-20 flex flex-col items-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Ready to Start Your Project?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl max-w-2xl mb-8"
        >
          Partner with XESPC Consulting to bring your vision to life with
          industry-leading expertise and innovative solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/contact-us"
            className="bg-black text-white py-4 px-10 rounded-full text-lg hover:bg-[#444] transition-colors duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
