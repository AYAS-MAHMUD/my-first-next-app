'use client';
import { RefreshCw, ShieldCheck, Truck } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion';

const Feature = () => {

  return (
    <div className='max-w-7xl mx-auto mt-10'>
        <section className="container mx-auto px-4 py-10">
        <div className="text-center mb-18">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Us</motion.h2>
          <p className="mt-4 text-lg text-gray-600">We provide the best experience for our customers.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div  className='hover:shadow-2xl bg-[#D2DCB6] hover:scale-105 transition ease-in-out text-black p-10 rounded-2xl'>
                <div className='flex gap-5 items-center mb-4' >
                    <div className='bg-blue-200 p-3 rounded-full'><Truck className='text-blue-900'/></div>
                    <h1 className='font-bold text-xl'>Free Shipping</h1>
                </div>
                <div>
                    <h1>Enjoy free shipping on all orders over $50. We deliver worldwide with reliable partners.</h1>
                </div>
            </motion.div>
            <div className='hover:shadow-2xl hover:scale-105 transition ease-in-out bg-[#A1BC98] text-black p-10 rounded-2xl'>
                <div className='flex gap-5 items-center mb-4' >
                    <div className='bg-blue-200 p-3 rounded-full'><ShieldCheck className='text-blue-900'/></div>
                    <h1 className='font-bold text-xl'>Secure Payment</h1>
                </div>
                <div>
                    <h1>Your transactions are safe with us. We use industry-standard encryption for all payments.</h1>
                </div>
            </div>
            <div className='hover:shadow-2xl hover:scale-105 transition ease-in-out bg-[#D2DCB6] text-black p-10 rounded-2xl'>
                <div className='flex gap-5 items-center mb-4' >
                    <div className='bg-blue-200 p-3 rounded-full'><RefreshCw className='text-blue-900'/></div>
                    <h1 className='font-bold text-xl'>Easy Returns</h1>
                </div>
                <div>
                    <h1>Not satisfied? Return your items within 30 days for a full refund, no questions asked.</h1>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Feature