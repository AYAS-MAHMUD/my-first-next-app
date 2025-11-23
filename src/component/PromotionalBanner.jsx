import React from 'react'

const PromotionalBanner = () => {
  return (
    <div>
          {/* Promotional Banner */}
      <section className="container mt-20 px-4 max-w-7xl mx-auto rounded-2xl">
        <div className="relative overflow-hidden rounded-5xl bg-indigo-600 px-6 py-24 shadow-2xl sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get 20% off your first order
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-indigo-200">
            Join our newsletter and start shopping with an exclusive discount today.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <button
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PromotionalBanner