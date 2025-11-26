"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative mt-20 bg-gray-900 py-24 sm:py-32">
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            Discover <span className="text-indigo-500">Premium</span> Items for Your Workspace
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            Elevate your productivity with our curated collection of
            high-quality office essentials and tech accessories.
          </motion.p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            {/* Browse Items Button */}
            <Link
              href="/items"
              className="rounded-md  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center"
            >
              <motion.button
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#4f46e5",
                  color: "#fff",
                }}
                whileTap={{
                  scale: 0.9,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  padding: "12px 25px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#6366f1",
                  color: "#fff",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
                className="flex"
              >
                Browse Items <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
