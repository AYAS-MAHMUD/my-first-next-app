"use client";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { Mail, Lock, User, ShoppingCart } from "lucide-react";
import { AuthContext } from "@/component/AuthProvider/AuthProvider";
import { use } from "react";
import { useNavigate } from "next/navigation";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function RegisterForm() {
  const router = useRouter();
  const {signInGoogle ,loading , createUser} = use(AuthContext);


  const handleSubmitRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(name, email, password, confirmPassword);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Registration successful");
        router.push("/");
      })
      .catch((error) => {
        toast.error(error.message);
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
        toast.error(error.message);
      });
  }
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
      <form onSubmit={handleSubmitRegister} className="w-full max-w-md mt-10 border-1 shadow-md rounded-xl p-8 space-y-6">
        
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium ">
            Full Name
          </label>
          <div className="mt-2 flex items-center border rounded-md px-3 py-2">
            <User className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="name"
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
              name="email"
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
              name="password"
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
              name="confirmPassword"
              placeholder="••••••••"
              className="flex-1 ml-3 outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Button */}
        <button className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-500 transition">
          Create account
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
