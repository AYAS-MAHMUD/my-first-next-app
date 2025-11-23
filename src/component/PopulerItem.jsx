import React from 'react'

const PopulerItem = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Popular Items</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* card */}
            <div className='bg-white text-black p-6 rounded-2xl'>
                {/* for image */}
                <div className='h-50 bg-gray-200 rounded-2xl mb-3'>
                    {/* <img src="" alt="" />  */}
                    img
                </div>
                <h1 className='font-bold text-xl my-3'>Premium Desk Organizer</h1>
                <p>Keep your workspace tidy and efficient with this elegant organizer.</p>
            </div>
            <div className='bg-white text-black p-6 rounded-2xl'>
                {/* for image */}
                <div className='h-50 bg-gray-200 rounded-2xl mb-3'>
                    {/* <img src="" alt="" />  */}
                    img
                </div>
                <h1 className='font-bold text-xl my-3'>Minimalist Planner 2025</h1>
                <p>Stay on top of your goals with our structured daily planner.</p>
            </div>
            <div className='bg-white text-black p-6 rounded-2xl'>
                {/* for image */}
                <div className='h-50 bg-gray-200 rounded-2xl mb-3'>
                    {/* <img src="" alt="" />  */}
                    img
                </div>
                <h1 className='font-bold text-xl my-3'>Ergonomic Laptop Stand</h1>
                <p>Improve your posture and comfort with this adjustable stand.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PopulerItem