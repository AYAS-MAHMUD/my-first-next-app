'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import Loader from './Loader';

const PopulerItem = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const data = fetch('http://localhost:8001/latest-products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
    setLoading(false);
  },[])
    if (loading) {
        return <Loader />;
    }

  return (
    <div>
      <section className="max-w-7xl mx-auto py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Popular Items</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* card */}
            {
              products.map(product=>(
              <div key={product._id} className="bg-white text-black p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                
                <div className=" bg-gray-200 rounded-2xl mb-3 text-left">
                    <img className="h-60" src={product.image} alt={product.title} />
                </div>
                <h1 className="font-bold text-xl my-3">{product.title}</h1>
                <p>{product.description}</p>
                <div className='flex justify-between my-4'>
                  <p className='font-bold text-xl'>Price : {product.price}</p>
                  <Link href={`/ProductsDetail/${product._id}`} className='text-blue-600 flex items-center gap-1 font-bold' >Details<FaArrowRight /></Link>
                </div>
            </div>  
              ))
            }
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default PopulerItem



{/* <div className='bg-white text-black p-6 rounded-2xl'>
                
                <div className=' bg-gray-200 rounded-2xl mb-3'>
                    <img className='h-full' src="https://i.ibb.co.com/NdhgNT8w/photo-1737408011230-995d7a7aca1b.jpg" alt="" /> 
                    
                </div>
                <h1 className='font-bold text-xl my-3'>Premium Desk Organizer</h1>
                <p>Keep your workspace tidy and efficient with this elegant organizer.</p>
            </div> */}