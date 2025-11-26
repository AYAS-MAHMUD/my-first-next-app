"use client";
import Loader from "@/component/Loader";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const items = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Pagination start
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  // Pagination end

  // Sorting Start
  const [sort,setSort] = useState('price');
  const [order,setOrder] = useState('');
  // Sorting End

  //Serch Start
  const [searchTerm, setSearchTerm] = useState('');
  //Serch End
  // console.log("searchTerm:", searchTerm);
  const limit = 6;
  useEffect(() => {
    const data = fetch(
      `https://firstnextjs-khaki.vercel.app/products?limit=${limit}&skip=${(currentPage - 1) * limit}&sort=${sort}&order=${order}&search=${searchTerm}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.result);
        setTotalProducts(data.count);
        setTotalPages(Math.ceil(data.count / limit));
        setLoading(false);
      });
  }, [searchTerm,currentPage,sort,order]);

  if (loading) {
    return <Loader />;
  }


  const handleSelect = (e) => {
    const value = e.target.value;
    // setSort(value.split("-")[0]);
    setOrder(value.split("-")[1]);

  }
  const searchItem = (e) => {
    setSearchTerm(e.target.value);
  }
  return (
    <div className=" mt-20  max-w-7xl mx-auto py-8">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-bold py-5 text-center "
      >
        Our Products ({totalProducts})
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center px-5"
      >
        Explore our curated collection of premium items designed to enhance your
        lifestyle.
      </motion.p>
      <div className="flex flex-col md:flex-row justify-between items-left mx-2 ">
        <input
          onChange={searchItem}
          type="text"
          placeholder="Search products..."
          className="mb-4 mt-5 p-2 border w-full md:w-74  rounded"
        />
        <select onChange={handleSelect} className="mb-4 mt-2 p-2 border rounded">
          <option value="">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-3 md:mx-0 gap-6 my-10">
        {data.map((product) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            key={product._id}
            className="bg-white text-black p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-left"
          >
            <div className=" bg-gray-200 rounded-2xl mb-3 text-left">
              <img
                className="h-60 w-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
                src={product.image}
                alt={product.title}
              />
            </div>
            <h1 className="font-bold text-xl my-3">{product.title}</h1>
            <p>{product.description}</p>
            <div className="flex justify-between my-4">
              <p className="font-bold text-xl">Price : {product.price}</p>
              <Link
                href={`/ProductsDetail/${product._id}`}
                className="text-blue-600 flex items-center gap-1 font-bold"
              >
                Details
                <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center items-center my-13">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="mx-2 px-4 py-2 border bg-indigo-600 active:bg-indigo-700 hover:bg-indigo-500 rounded border-none text-white"
        >
          Prev
        </button>
        {[...Array(totalPages).keys()].map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num + 1)}
            className={`mx-2 px-4 py-2 border ${
              currentPage === num + 1
                ? "bg-indigo-500 rounded border-none text-white"
                : "bg-white rounded border-none text-black"
            }`}
          >
            {num + 1}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="mx-2 px-4 py-2 border active:bg-indigo-700 hover:bg-indigo-500 bg-indigo-600 rounded border-none text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default items;
