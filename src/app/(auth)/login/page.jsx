"use client";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import { Mail, Lock, ShoppingCart } from "lucide-react";
import { signIn } from "next-auth/react";
import { use } from "react";
import { AuthContext } from "@/component/AuthProvider/AuthProvider";
import { useRouter } from "next/navigation";
import { toast } from 'react-hot-toast';

export default function Login() {
  const {signInUser ,signInGoogle} = use(AuthContext)
  const router = useRouter();
  const handleUserLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Login successful");
        router.push("/");
      })
      .catch((error) => {
        toast.error("error:", error);
      });
  };
  const handleGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login successful");
        router.push("/");
      })
      .catch((error) => {
        toast.error("error:", error);
      });
  };

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

      <form onSubmit={handleUserLogin} className="w-full max-w-md mt-10 border-1 rounded-xl shadow-md p-8">
        {/* Email */}
        <div className="mb-6">
          <label className="block text-sm font-medium  mb-2">Email address</label>
          <div className="flex items-center border border-gray-200 rounded-md px-3 py-2">
            <Mail className="h-5 w-5 text-gray-400" />
            <input
              type="email"
              name="email"
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
              name="password"
              placeholder="••••••••"
              className="ml-3 w-full bg-transparent outline-none  placeholder-gray-400"
              aria-label="Password"
            />
          </div>
        </div>

        {/* Sign in button */}
        <button
          type="submit"
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
        onClick={handleGoogleLogin}
          type="button"
          className="w-full border border-gray-200 rounded-md py-3 flex items-center justify-center gap-3 hover:shadow-sm transition"
        >
          <FcGoogle/>
          <span className="ont-medium">Sign in with Google</span>
        </button>
      </form>

    </div>
  );
}
