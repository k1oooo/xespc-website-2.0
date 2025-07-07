"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowDown, FaPlus, FaMinus, FaArrowRight } from "react-icons/fa";
import {
  Settings,
  Briefcase,
  ShieldCheck,
  BarChart3,
  AlertTriangle,
  Wrench,
} from "lucide-react";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const whyChooseItems = [
    {
      question: "Expert Team",
      answer:
        "Our consultants and engineers bring decades of combined experience.",
    },
    {
      question: "Client-Focused Solutions",
      answer: "We tailor our solutions to drive your success.",
    },
    {
      question: "Comprehensive Services",
      answer: "From design to compliance, we handle it all.",
    },
    {
      question: "Proven Track Record",
      answer: "We have delivered across industries, earning trust.",
    },
    {
      question: "Innovative Approach",
      answer: "We use the latest technologies to keep you ahead.",
    },
    {
      question: "Local Knowledge, Global Standards",
      answer: "We blend local regulations with global best practices.",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center">
      {/* HERO SECTION */}
      <section className="w-full h-screen bg-[#00A19C] flex items-center justify-center px-6 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center max-w-6xl gap-10"
        >
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <Image
              src="/hero.jpg"
              alt="Engineering"
              width={500}
              height={500}
              className="rounded-xl shadow-md w-full aspect-[4/3] object-cover"
            />
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight text-[#EFB82C]">
              Welcome to <br />
              <span className="text-[#343333]">XESP Consulting</span>
            </h1>
            <p className="text-xl mb-10 text-white">
              Innovative engineering solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us"
                className="bg-[#EFB82C] text-[#343333] py-3 px-8 rounded-full hover:bg-[#d9a31f] transition-colors duration-300"
              >
                Get in Touch
              </Link>
              <Link
                href="/what-we-do"
                className="bg-[#343333] text-white py-3 px-8 rounded-full hover:bg-[#222] transition-colors duration-300"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </motion.div>
        <div className="absolute bottom-8">
          <FaArrowDown className="text-[#343333] text-2xl animate-bounce" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="w-full bg-[#343333] flex flex-col items-center text-center py-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold mb-4 text-[#00A19C]"
        >
          Who We Are
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-xl text-[#EFB82C]"
        >
          At XESPC Consulting, we deliver cutting-edge engineering and project
          consulting across Malaysia and beyond.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/who-we-are"
            className="mt-6 inline-block underline text-[#00A19C] hover:text-[#EFB82C] transition-colors duration-300 text-xl"
          >
            Learn More
          </Link>
        </motion.div>
      </section>

      {/* SERVICES SECTION */}
      <section className="w-full flex flex-col items-center text-center py-16 px-6 bg-[#EFB82C]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold mb-10 text-[#343333]"
        >
          What We Do
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          {[
            {
              title: "Engineering Design",
              desc: "Innovative, tailored technical solutions.",
              Icon: Settings,
            },
            {
              title: "Project Management",
              desc: "Delivering projects on time and on budget.",
              Icon: Briefcase,
            },
            {
              title: "Regulatory Compliance",
              desc: "Ensuring standards & regulatory alignment.",
              Icon: ShieldCheck,
            },
            {
              title: "Feasibility Studies",
              desc: "Assessing viability and project value.",
              Icon: BarChart3,
            },
            {
              title: "Risk & Safety Analysis",
              desc: "Identifying and mitigating operational risks.",
              Icon: AlertTriangle,
            },
            {
              title: "Maintenance Optimization",
              desc: "Maximizing asset performance & lifespan.",
              Icon: Wrench,
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-[#00A19C]/30 p-6 rounded-xl shadow-md hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between items-center h-full"
            >
              <div className="flex flex-col items-center flex-1">
                <s.Icon size={80} className="text-[#343333] mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-[#343333]">
                  {s.title}
                </h3>
                <p className="text-[#343333] mb-4 text-center">{s.desc}</p>
              </div>
              <Link
                href={`/what-we-do#${s.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center gap-2 border border-[#343333] text-[#343333] py-2 px-6 rounded-full hover:bg-[#343333] hover:text-white transition-colors duration-300 mt-4"
              >
                Learn More <FaArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            href="/what-we-do"
            className="mt-10 inline-block underline text-[#343333] hover:text-[#00A19C] transition-colors duration-300 text-xl"
          >
            View All Services
          </Link>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section className="w-full bg-[#00A19C] py-16 px-6 flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold mb-10 text-[#EFB82C]"
        >
          Our Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          {[
            {
              img: "/refinery-upgrade.jpg",
              title: "Refinery Upgrade",
              location: "Johor",
            },
            {
              img: "/gas-plant-design.jpg",
              title: "Gas Plant Design",
              location: "Terengganu",
            },
            {
              img: "/iso-compliance.jpg",
              title: "ISO Compliance",
              location: "Penang",
            },
            {
              img: "/offshore-platform.jpg",
              title: "Offshore Platform",
              location: "Labuan",
            },
            {
              img: "/pipeline-study.jpg",
              title: "Pipeline Study",
              location: "Sarawak",
            },
            {
              img: "/process-optimization.jpg",
              title: "Process Optimization",
              location: "Kuala Lumpur",
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.3 }}
              className="bg-[#343333]/80 p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 text-[#EFB82C] flex flex-col"
            >
              <Image
                src={p.img}
                alt={p.title}
                width={400}
                height={200}
                className="rounded-lg mb-4 w-full h-[200px] object-cover"
              />
              <h3 className="text-2xl font-bold">{p.title}</h3>
              <p className="text-base">{p.location}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* WHY CHOOSE US */}
      {/* WHY CHOOSE US */}
      <section className="w-full bg-[#343333] py-16 px-6 flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold mb-10 text-[#EFB82C]"
        >
          Why Choose XESPC
        </motion.h2>
        <div className="w-full max-w-3xl">
          {whyChooseItems.map((item, index) => {
            const IconComponent =
              index === 0
                ? Briefcase
                : index === 1
                  ? Settings
                  : index === 2
                    ? ShieldCheck
                    : index === 3
                      ? BarChart3
                      : index === 4
                        ? AlertTriangle
                        : Wrench;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-4 bg-[#00A19C]/20 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-[#EFB82C] font-semibold focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <IconComponent className="text-[#EFB82C]" size={24} />
                    <span>{item.question}</span>
                  </div>
                  {activeIndex === index ? (
                    <FaMinus className="text-[#EFB82C]" />
                  ) : (
                    <FaPlus className="text-[#EFB82C]" />
                  )}
                </button>
                {activeIndex === index && (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-6 pb-4 text-[#EFB82C] text-left"
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CONTACT */}
      <section className="w-full py-20 px-6 bg-[#EFB82C] flex flex-col items-center text-center ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-4 text-[#343333]"
        >
          Let’s Discuss Your Next Project
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl text-xl mb-8 text-[#00A19C]"
        >
          Have a question or want to work together? Get in touch and we’ll
          respond promptly.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/contact-us"
            className="bg-[#343333] text-white py-4 px-10 rounded-full text-xl hover:bg-[#222] transition-colors duration-300"
          >
            Contact Us Now
          </Link>
          <div className="mt-6 text-lg text-[#343333]">
            <p>
              Email:{" "}
              <a href="mailto:info@xespc.com" className="underline">
                info@xespc.com
              </a>
            </p>
            <p>Phone: 03-2300 9256</p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
