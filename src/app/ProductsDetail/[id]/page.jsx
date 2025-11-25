"use client";
import Loader from "@/component/Loader";
import { ShoppingCart } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const detailspage = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const router = useRouter();

//   console.log(id);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8001/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [id]);

  console.log(data);
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      {/* start */}
      <div className="my-20">
        <button
        onClick={() => router.back()}
          className="inline-flex md:ml-90 items-center text-sm text-gray-300 hover:underline mb-4"
        >
          ← Back To Products
        </button>

        <div className=" p-6 flex justify-center">
          <div className="w-full max-w-5xl bg-white rounded-xl shadow-xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Left Side */}
            <div>
              <img
                src={data?.image}
                alt={data?.title}
                className="w-full h-84 object-cover rounded-lg bg-amber-400"
              />
            </div>

            {/* Right Side */}
            <div className="space-y-6 mt-8">
              {/* Title & Category */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {data?.title}
                </h1>
                <p className="text-purple-600 text-sm font-medium mt-1">
                  {data?.category}
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Description
                </h3>
                <p className="text-gray-600 mt-2">{data?.description}</p>

                <div className="mt-3">
                  <p className="text-gray-900 font-semibold text-xl">
                    {data?.price}{" "}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">
                  <ShoppingCart className="h-5 w-5" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end */}
    </div>
  );
};

export default detailspage;
