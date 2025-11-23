"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Home", href: "/" },
    { name: "Items", href: "/items" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <nav className="w-full bg-transparent backdrop-blur  shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2 text-2xl font-bold text-blue-600">
          <span>YouStore</span>
        </div>
        <ul className="hidden md:flex gap-6 text-lg font-medium">
          {links.map((link) => (
            <li key={link.name} className="hover:text-blue-600 cursor-pointer transition">
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex gap-4 items-center">
          <Link href="/login">
            <button className="px-4 py-2 border rounded-lg transition">Login</button>
          </Link>
          <Link href="/register">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Register</button>
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-transparent backdrop-blur  shadow-lg px-6 pb-4">
          <ul className="flex flex-col gap-4 text-lg font-medium mt-2">
            {links.map((link) => (
              <li key={link.name} className="hover:text-blue-600 cursor-pointer transition">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 mt-4">
            <Link href="/login">
              <button className="w-full px-4 py-2 border rounded-lg hover:bg-blue-50 transition">Login</button>
            </Link>
            <Link href="/register">
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Register</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
