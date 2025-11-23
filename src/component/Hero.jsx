"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative mt-20 bg-gray-900 py-24 sm:py-32">
      {/* Background Image */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/g1442ad29be385.jpg" 
          alt="Office workspace background"
          fill
          className="object-cover object-center opacity-30"
        />
      </div> */}

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Discover Premium Items for Your Workspace
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Elevate your productivity with our curated collection of high-quality office essentials and tech accessories.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            {/* Browse Items Button */}
            <Link
              href="/items"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center"
            >
              Browse Items <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            {/* Learn More */}
            <Link href="/about" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
