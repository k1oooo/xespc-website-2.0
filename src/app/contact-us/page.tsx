"use client";

import { motion } from "framer-motion";
import {
  FaArrowDown,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";

export default function ContactUs() {
  return (
    <main className="flex flex-col items-center justify-center bg-[#7DCFCC]">
      {/* Hero Section */}
      <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-[#7DCFCC]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl px-6"
        >
          <h1 className="text-6xl font-extrabold text-gray-900 mb-6 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-2xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
            We’d love to hear from you. Whether you have a question or want to
            discuss a project, our team is ready to help.
          </p>
        </motion.div>

        <div className="absolute bottom-8">
          <FaArrowDown className="text-black text-3xl animate-bounce" />
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="w-full max-w-7xl py-20 px-6 flex flex-col md:flex-row gap-12">
        {/* Contact Details */}
        <div className="flex flex-col space-y-8 flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 p-8 rounded-xl shadow-md flex items-center gap-6"
          >
            <FaPhoneAlt className="text-4xl text-[#7DCFCC]" />
            <div>
              <h3 className="text-2xl font-bold mb-1">Call Us</h3>
              <p className="text-lg">+03-2300 9256</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 p-8 rounded-xl shadow-md flex items-center gap-6"
          >
            <FaEnvelope className="text-4xl text-[#7DCFCC]" />
            <div>
              <h3 className="text-2xl font-bold mb-1">Email Us</h3>
              <p className="text-lg">info@xespc.com</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/80 p-8 rounded-xl shadow-md flex items-center gap-6"
          >
            <FaMapMarkerAlt className="text-4xl text-[#7DCFCC]" />
            <div>
              <h3 className="text-2xl font-bold mb-1">Visit Us</h3>
              <p className="text-lg">
                Level 23A, Naza Tower,
                <br />
                KL Platinum Park, Kuala Lumpur
              </p>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-[2] bg-white/80 p-8 rounded-xl shadow-lg space-y-6 w-full"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white py-4 px-8 rounded-full hover:bg-[#444] transition-colors duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </section>

      {/* Google Map */}
      <section className="w-full max-w-7xl px-6 pb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-10"
        >
          Find Us Here
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="rounded-xl overflow-hidden shadow-lg mx-auto"
          style={{ maxWidth: "100%", width: "100%", height: "500px" }}
        >
          <div style={{ height: "100%", width: "100%" }}>
            <iframe
              style={{ height: "100%", width: "100%", border: 0 }}
              frameBorder="0"
              src="https://www.google.com/maps/embed/v1/place?q=Level+23A,+Co-Labs+Coworking+KL+Platinum+Park,+Naza+Tower,+Suite+49,+Persiaran+KLCC,+Kuala+Lumpur,+50088+Kuala+Lumpur,+Wilayah+Persekutuan+Kuala+Lumpur&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
