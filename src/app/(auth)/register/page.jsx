"use client";

import Image from "next/image";
import { Mail, Lock, User, ShoppingCart } from "lucide-react";

export default function RegisterForm() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      
      {/* Logo */}
      <div className="mb-6">
        <ShoppingCart className="h-10 w-10"/>
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center">
        Create your account
      </h1>

      <p className="text-gray-400 mt-2 text-center">
        Already have an account?{" "}
        <a href="/login" className="text-indigo-600 font-medium hover:underline">
          Sign in
        </a>
      </p>

      {/* Card */}
      <div className="w-full max-w-md mt-10 border-1 shadow-md rounded-xl p-8 space-y-6">
        
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium ">
            Full Name
          </label>
          <div className="mt-2 flex items-center border rounded-md px-3 py-2">
            <User className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="John Doe"
              className="flex-1 ml-3 outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium ">
            Email address
          </label>
          <div className="mt-2 flex items-center border rounded-md px-3 py-2">
            <Mail className="h-5 w-5 text-gray-400" />
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 ml-3 outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium ">
            Password
          </label>
          <div className="mt-2 flex items-center border rounded-md px-3 py-2">
            <Lock className="h-5 w-5 text-gray-400" />
            <input
              type="password"
              placeholder="••••••••"
              className="flex-1 ml-3 outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium ">
            Confirm Password
          </label>
          <div className="mt-2 flex items-center border rounded-md px-3 py-2">
            <Lock className="h-5 w-5 " />
            <input
              type="password"
              placeholder="••••••••"
              className="flex-1 ml-3 outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Button */}
        <button className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-500 transition">
          Create account
        </button>
      </div>
    </div>
  );
}
