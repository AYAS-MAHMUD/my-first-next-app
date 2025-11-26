"use client";

import { AuthContext } from "@/component/AuthProvider/AuthProvider";
import React, { use } from "react";
import { motion } from 'framer-motion';

export default function Profile({
  name = "Ayas Mahmud",
  email = "ayasmahmud48@gmail.com",
  imageUrl = "/mnt/data/Screenshot 2025-11-25 at 1.49.06 PM.png",
  lastLogin = "Mon, 17 Nov 2025 10:38:19 GMT",
  
})
 {
  const {user} = use(AuthContext)
  return (
    <div className="min-h-screen bg-gray-900 flex items-start justify-center py-30 px-4">
      <div className="w-full max-w-xl">
        <h2 className="text-center text-3xl font-semibold text-white">My Profile</h2>
        <div className="mt-8 rounded-xl overflow-hidden border border-gray-700 shadow-lg">
          {/* Top gradient band */}
          <div className="h-20 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900"></div>

          {/* Card body */}
          <div className="bg-gray-800 px-8 pb-8 pt-6 relative">
            {/* Avatar - centered and overlapping the gradient */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="rounded-full p-3 bg-white shadow-xl">
                <motion.div animate={{ scale: 1.2 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
 className="rounded-full overflow-hidden w-36 h-36 bg-gray-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                  
                    src={user?.photoURL || imageUrl}
                    alt={user?.displayName || name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Spacer to accommodate avatar overlap */}
            <div className="h-24" />

            <div className="text-center mt-2">
              <div className="text-white font-bold text-lg tracking-wide uppercase">{user?.displayName}</div>
              <div className="text-gray-400 text-sm mt-3">EMAIL: <span className="text-gray-300">{user?.email}</span></div>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
