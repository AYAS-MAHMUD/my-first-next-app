'use client'
import Loader from '@/component/Loader'
import Link from 'next/link'
import { use, useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'

const items = () => {
  const [loading, setLoading] = useState(true);
  const [data,setData] = useState([])
  // console.log(data)
  useEffect(()=>{
    const data = fetch('http://localhost:8001/products')
    .then(res=>res.json())
    .then(data=>setData(data))
    setLoading(false);
  },[data])

      if (loading) {
          return <Loader />;
      }
  return (
    <div className=" mt-30 text-center max-w-7xl mx-auto py-8">
      <h1 className='text-4xl font-bold py-5'>Our Products</h1>
      <p>Explore our curated collection of premium items designed to enhance your lifestyle.</p>
      <div className='grid grid-cols-1 md:grid-cols-3  gap-6 my-10'>
        {
          data.map(product=><div key={product.id} className="bg-white text-black p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-left">
                
                <div className=" bg-gray-200 rounded-2xl mb-3 text-left">
                    <img className="h-60" src={product.image} alt={product.title} />
                </div>
                <h1 className="font-bold text-xl my-3">{product.title}</h1>
                <p>{product.description}</p>
                <div className='flex justify-between my-4'>
                  <p className='font-bold text-xl'>Price : {product.price}</p>
                  <Link href={`/ProductsDetail/${product._id}`} className='text-blue-600 flex items-center gap-1 font-bold' >Details<FaArrowRight /></Link>
                </div>
            </div> )
        }
      </div>
    </div>
  )
}

export default items