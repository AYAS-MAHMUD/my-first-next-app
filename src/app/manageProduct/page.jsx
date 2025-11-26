"use client";
import PrivetProvider from "@/component/AuthProvider/PrivetProvider";
import Loader from "@/component/Loader";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const manageProduct = () => {
  const [loading, setLoading] = useState(true);
  const [Data, setData] = useState([]);
  //   console.log(data)
  useEffect(() => {
    const data = fetch("https://firstnextjs-khaki.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setData(data.result));
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }
  
  const handledelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://firstnextjs-khaki.vercel.app/products/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = Data.filter((product) => product._id !== id);
              setData(remaining);
            }
          });
      }
    });
  };
  return (
    <PrivetProvider>
      <div className=" text-center max-w-7xl mx-auto py-8 mt-10">
        <h1 className="text-4xl font-bold py-5 text-center ">
          Manage Product Page
        </h1>
        <table className="min-w-full ">
          <thead className="my-3">
            <tr className="text-xl py-3">
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((product) => (
              <tr key={product._id} className="border gap-2">
                <td>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-15 h-15 object-cover p-2"
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price}</td>

                <td>{product.category}</td>
                <td>
                  <Link href={`/ProductsDetail/${product._id}`}><button
                  
                    className="bg-indigo-500 hover:bg-indigo-700 text-white px-2 py-1 rounded mr-2"
                  >
                    View
                  </button></Link>
                  
                  <button
                    onClick={() => handledelete(product._id)}
                    className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PrivetProvider>
  );
};

export default manageProduct;

// 6. Protected Page: Manage Products
// List all products in a table/grid
// Each row/card with actions: View, Delete
// Layout should be clean, readable, and responsive
