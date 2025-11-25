"use client";
import PrivetProvider from "@/component/AuthProvider/PrivetProvider";
import Loader from "@/component/Loader";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const manageProduct = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  //   console.log(data)
  useEffect(() => {
    const data = fetch("http://localhost:8001/products")
      .then((res) => res.json())
      .then((data) => setData(data));
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }
  const handledelete = () => {
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
        fetch(`http://localhost:8001/products/${data._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = data.filter((product) => product._id !== data._id);
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
            {data.map((product) => (
              <tr key={product.id} className="border gap-2">
                <td>
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-10 h-10 object-cover"
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price}</td>

                <td>{product.category}</td>
                <td>
                  <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                    View
                  </button>
                  <button
                    onClick={handledelete}
                    className="bg-red-500 text-white px-2 py-1 rounded"
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
