import { Star } from 'lucide-react'
import React from 'react'

const Testimonial = () => {
  return (
    <div>
      <section className="container mx-auto  px-4 max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-center ">What Our Customers Say</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow-sm mt-20 ring-1 ring-gray-200">
              <div className="flex gap-1 mb-4 text-amber-300">
                <Star className='fill-yellow-400 text-yellow-400'/>
                <Star className='fill-yellow-400 text-yellow-400'/>
                <Star className='fill-yellow-400 text-yellow-400'/>
                <Star className='fill-yellow-400 text-yellow-400'/>
                <Star className='fill-yellow-400 text-yellow-400'/>
              </div>
              <p className="text-gray-600 mb-6">
                "Absolutely love the quality of the products! The shipping was fast and the customer service team was incredibly helpful"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">
                  U
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Happy Customer</div>
                  <div className="text-sm text-gray-500">Verified Buyer</div>
                </div>
              </div>
            </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm mt-20 ring-1 ring-gray-200">
              <div className="flex gap-1 mb-4 text-amber-300">
                <Star className='fill-yellow-400 text-yellow-400'/>
                <Star className='fill-yellow-400 text-yellow-400'/>
                <Star className='fill-yellow-400 text-yellow-400'/>
                <Star className='fill-yellow-400 text-yellow-400'/>
                <Star className='fill-yellow-400 text-yellow-400'/>
              </div>
              <p className="text-gray-600 mb-6">
                "Absolutely love the quality of the products! The shipping was fast and the customer service team was incredibly helpful"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">
                  U
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Happy Customer</div>
                  <div className="text-sm text-gray-500">Verified Buyer</div>
                </div>
              </div>
            </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm mt-20 ring-1 ring-gray-200">
              <div className="flex gap-1 mb-4 text-amber-300">
                <Star className='fill-yellow-400 text-yellow-400'/>
                <Star className='fill-yellow-400 text-yellow-400'/>
                <Star className='fill-yellow-400 text-yellow-400'/>
                <Star className='fill-yellow-400 text-yellow-400'/>
                <Star className='fill-yellow-400 text-yellow-400'/>
              </div>
              <p className="text-gray-600 mb-6">
                "Absolutely love the quality of the products! The shipping was fast and the customer service team was incredibly helpful"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">
                  U
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Happy Customer</div>
                  <div className="text-sm text-gray-500">Verified Buyer</div>
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonial
