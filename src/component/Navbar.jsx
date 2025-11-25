"use client";
import { FaUserAlt } from "react-icons/fa";
import React, { use, useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { AuthContext } from "./AuthProvider/AuthProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [photoOpen, setPhotoOpen] = useState(false);
  // console.log(photoOpen)
  // const pathname = usePathname();
  const { user, signOutUser } = useContext(AuthContext);
  // console.log("navbar user:", user);

  const links = [
    { name: "Home", href: "/" },
    { name: "Items", href: "/items" },
    { name: "Add Product", href: "/addProduct" },
    { name: "Manage Product", href: "/manageProduct" },
  ];

  const handleLogout = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <nav className="w-full bg-transparent backdrop-blur  shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2 text-2xl font-bold text-blue-600">
          <span>YouStore</span>
        </div>
        <ul className="hidden md:flex gap-6 text-lg font-medium">
          {links.map((link) => (
            <li
              key={link.name}
              className="hover:text-blue-600 cursor-pointer transition"
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex gap-4 items-center relative">

          {user ? (
            <button
                onClick={() => setPhotoOpen(!photoOpen)}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer bg-gray-100"
              >
                {user.photoURL ? (
                      <img src={user.photoURL} alt={user.displayName} className="h-10 w-10 rounded-full" />
                ) : (
                      <FaUserAlt className="w-6 h-6 text-gray-600" />
                )}
              </button>
          ) : (
            <Link href="/login">
              <button className="px-4 py-2 border rounded-lg transition">
                Login
              </button>
            </Link>
          )}          
          {
            // dropdown
            photoOpen && (
              <div className="absolute flex flex-col gap-2 right-4 md:mt-60 w-40  border rounded shadow-lg p-2 z-50">
                <button className="bg-green-500 hover:bg-green-700 transition rounded-lg ease-in-out w-full text-left p-0 m-0">
                  <Link
                  href="/profile"
                  onClick={() => setPhotoOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition `}
                >
                  Profile
                </Link>
                </button>

                <button
                  onClick={() => {
                    handleLogout();
                    setPhotoOpen(false);
                  }}
                  className="w-full transition ease-in-out text-left px-4 py-2 hover:bg-red-700 bg-red-500 rounded-lg text-white"
                >
                  Logout
                </button>
                <Link className="bg-blue-500 px-4 py-2 rounded-lg transition ease-in-out hover:bg-blue-700" href="/addProduct">Add Product</Link>
                <Link className="bg-blue-500 px-2 py-2 rounded-lg transition ease-in-out hover:bg-blue-700" href="/manageProduct">Manage Product</Link>
              </div>
            )
          }
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-transparent backdrop-blur text-center flex flex-col items-center justify-center  shadow-lg px-6 pb-4">
          <ul className="flex flex-col gap-4 text-lg font-medium mt-2">
            {links.map((link) => (
              <li
                key={link.name}
                className="hover:text-blue-600 cursor-pointer transition"
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 mt-4">
             {user ? (
            <button
                onClick={() => setPhotoOpen(!photoOpen)}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer bg-gray-100"
              >
                {user.photoURL ? (
                      <img src={user.photoURL} alt={user.displayName} className="h-10 w-10 rounded-full" />
                ) : (
                      <FaUserAlt className="w-6 h-6 text-gray-600" />
                )}
              </button>
          ) : (
            <Link href="/login">
              <button className="px-4 py-2 border rounded-lg transition">
                Login
              </button>
            </Link>
          )}          
          {
            // dropdown
            photoOpen && (
              <div className="absolute flex flex-col gap-2 mt-10  border rounded shadow-lg p-2 z-50">
                <button className="bg-green-500 hover:bg-green-700 transition rounded-lg ease-in-out w-full text-left p-0 m-0">
                  <Link
                  href="/profile"
                  onClick={() => setPhotoOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition `}
                >
                  Profile
                </Link>
                </button>

                <button
                  onClick={() => {
                    handleLogout();
                    setPhotoOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-red-700 bg-red-500 rounded-lg text-white"
                >
                  Logout
                </button>
                <Link className="bg-blue-500 px-2 py-2 rounded-lg transition ease-in-out hover:bg-blue-700" href="/addProduct">Add Product</Link>
                <Link className="bg-blue-500 px-2 py-2 rounded-lg transition ease-in-out hover:bg-blue-700" href="/manageProduct">Manage Product</Link>
              </div>
            )
          }
          </div>
        </div>
      )}
    </nav>
  );
}
