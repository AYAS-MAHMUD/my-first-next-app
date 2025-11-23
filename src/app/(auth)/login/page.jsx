"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Lock, ShoppingCart } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 ">
      {/* Top logo */}
      <div className="mb-6">
        <ShoppingCart className="h-10 w-10"/>
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-extrabold  text-center">
        Sign in to your account
      </h1>
      <p className="mt-3 text-center text-gray-600">
        Or{" "}
        <Link href="/register" className="text-indigo-600 font-medium hover:underline">
          create a new account
        </Link>
      </p>

      {/* Card */}
      <div className="w-full max-w-md mt-10 border-1 rounded-xl shadow-md p-8">
        {/* Email */}
        <div className="mb-6">
          <label className="block text-sm font-medium  mb-2">Email address</label>
          <div className="flex items-center border border-gray-200 rounded-md px-3 py-2">
            <Mail className="h-5 w-5 text-gray-400" />
            <input
              type="email"
              placeholder="you@example.com"
              className="ml-3 w-full bg-transparent outline-none  placeholder-gray-400"
              aria-label="Email address"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium  mb-2">Password</label>
          <div className="flex items-center border border-gray-200 rounded-md px-3 py-2">
            <Lock className="h-5 w-5 text-gray-400" />
            <input
              type="password"
              placeholder="••••••••"
              className="ml-3 w-full bg-transparent outline-none  placeholder-gray-400"
              aria-label="Password"
            />
          </div>
        </div>

        {/* Sign in button */}
        <button
          type="button"
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-md font-semibold transition"
        >
          Sign in
        </button>

        {/* OR divider */}
        <div className="mt-6 mb-6 flex items-center">
          <div className="flex-1 h-px bg-gray-200" />
          <div className="px-4 text-sm text-gray-500">Or continue with</div>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Social: Google */}
        <button
          type="button"
          className="w-full border border-gray-200 rounded-md py-3 flex items-center justify-center gap-3 hover:shadow-sm transition"
        >
          {/* Google "G" SVG */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M21.35 11.1h-9.18v2.92h5.26c-.23 1.25-.98 2.31-2.1 3.02v2.5h3.4c1.99-1.83 3.14-4.56 3.14-7.86 0-.64-.06-1.27-.52-1.6z" fill="#4285F4"/>
            <path d="M12.17 22c2.7 0 4.96-.9 6.61-2.44l-3.4-2.5c-.94.64-2.15 1.02-3.21 1.02-2.47 0-4.56-1.66-5.31-3.9H3.36v2.45C4.99 19.9 8.33 22 12.17 22z" fill="#34A853"/>
            <path d="M6.86 13.18a6.02 6.02 0 0 1 0-3.36V7.36H3.36a9.98 9.98 0 0 0 0 9.28l3.5-3.42z" fill="#FBBC05"/>
            <path d="M12.17 6.5c1.47 0 2.79.5 3.82 1.47l2.86-2.86C17.11 3.48 14.86 2.5 12.17 2.5 8.33 2.5 4.99 4.6 3.36 7.36l3.5 2.32C7.61 8.16 9.7 6.5 12.17 6.5z" fill="#EA4335"/>
          </svg>
          <span className="ont-medium">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}
