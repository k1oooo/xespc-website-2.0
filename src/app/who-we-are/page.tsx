"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowDown, FaPlus, FaMinus } from "react-icons/fa";

export default function WhoWeAre() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const values = [
    {
      question: "Innovation",
      answer:
        "We leverage the latest engineering technologies and creative thinking to deliver groundbreaking solutions.",
    },
    {
      question: "Integrity",
      answer:
        "Our team upholds the highest standards of ethics and professionalism in every project.",
    },
    {
      question: "Collaboration",
      answer:
        "We believe in building strong partnerships with our clients to achieve shared success.",
    },
    {
      question: "Sustainability",
      answer:
        "Our approach integrates sustainable practices that benefit your business and the environment.",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center bg-[hsla(44,84%,55%,0.3)]">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#7DCFCC]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl px-6"
        >
          <h1 className="text-6xl font-extrabold text-gray-900 mb-6 drop-shadow-lg">
            Who We Are
          </h1>
          <p className="text-2xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
            Learn more about XESPC — our story, our team, and what drives us to
            deliver engineering excellence.
          </p>
        </motion.div>

        <div className="absolute bottom-8">
          <FaArrowDown className="text-black text-3xl animate-bounce" />
        </div>
      </section>

      {/* About Company */}
      <section className="w-full flex flex-col md:flex-row max-w-6xl mx-auto py-20 px-6 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <Image
            src="/about-image.png"
            alt="About XESPC"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex flex-col justify-center"
        >
          <h2 className="text-4xl font-bold mb-6">About XESPC</h2>
          <p className="text-xl mb-4">
            At XESP Consulting, we combine decades of engineering expertise with
            a deep understanding of local and international standards to deliver
            tailored solutions.
          </p>
          <p className="text-xl">
            Our mission is simple — to help you achieve operational excellence
            through innovative designs, meticulous project management, and
            unwavering commitment to quality.
          </p>
        </motion.div>
      </section>

      {/* Our Team */}
      {/* Our Team */}
      <section className="w-full py-20 px-6 bg-[#7DCFCC] flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10"
        >
          Meet Our Leadership
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl">
          {[
            {
              name: "Ir. Ahmad",
              role: "Managing Director",
              img: "https://i.pravatar.cc/300?img=12",
              description:
                "Leads our strategic vision and ensures project excellence.",
            },
            {
              name: "Eng. Siti",
              role: "Project Lead",
              img: "https://i.pravatar.cc/300?img=32",
              description:
                "Manages engineering teams and oversees key deliverables.",
            },
            {
              name: "Mr. Lim",
              role: "Compliance Advisor",
              img: "https://i.pravatar.cc/300?img=45",
              description:
                "Ensures all operations meet rigorous industry standards.",
            },
          ].map((person, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white/80 p-6 rounded-xl shadow-md hover:-translate-y-2 transition-transform duration-300"
            >
              <Image
                src={person.img}
                alt={person.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold mb-1">{person.name}</h3>
              <p className="text-lg font-semibold mb-2">{person.role}</p>
              <p className="text-gray-700 text-base">{person.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Accordion */}
      <section className="w-full py-20 px-6 flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10"
        >
          Our Mission & Values
        </motion.h2>
        <div className="w-full max-w-3xl space-y-4 text-left">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 p-4 rounded-lg shadow-md cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-xl">{item.question}</span>
                <motion.div
                  initial={false}
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeIndex === index ? (
                    <FaMinus className="text-gray-700" />
                  ) : (
                    <FaPlus className="text-gray-700" />
                  )}
                </motion.div>
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden mt-2 text-gray-700 text-lg"
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-20 px-6 bg-[#7DCFCC] flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Ready to Partner With Us?
        </motion.h2>
        <Link
          href="/contact-us"
          className="bg-black text-white py-4 px-10 rounded-full text-xl hover:bg-[#444] transition-colors duration-300 shadow-md"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
