"use client";
import PrivetProvider from "@/component/AuthProvider/PrivetProvider";
import axios from "axios";
import React from "react";
import { motion } from 'framer-motion';
import toast from "react-hot-toast";

const addProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const price = form.price.value;
    const description = form.description.value;
    const category = form.category.value;
    const ProductData = { title, image, price, description, category };
    // console.log(formData);
    toast.success("Form submitted!");
    axios
      .post("https://firstnextjs-khaki.vercel.app/products", ProductData)
      .then((response) => {
        console.log("Product added successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        toast.error("Failed to add product.");
      });
  };

  return (
    <PrivetProvider>
      <div>
        <motion.h1 initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }} className="text-4xl font-bold py-5 text-center mt-40 mx-2" >
          Add Product 
        </motion.h1>
        <form
          onSubmit={handleSubmit}
          className="flex border rounded-2xl mx-2 p-5 flex-col gap-4 max-w-md mx-auto"
        >
          <label>Title</label>
          <input required placeholder="Title" name="title" className="border p-2" />
          <label>Image URL</label>
          <input
            required
            placeholder="image url"
            name="image"
            className="border p-2"
          />
          <label>Price</label>
          <input required placeholder="Price" name="price" className="border p-2" />
          <label>Description</label>
          <textarea
            required
            placeholder="Description"
            name="description"
            className="border p-2"
          />
          <label>Category</label>
          <select required name="category" className="border p-2">
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
            <option value="books">Books</option>
          </select>

          <motion.button whileHover={{
                  scale: 1,
                  backgroundColor: "#4f46e5",
                  color: "#fff",
                }}
                whileTap={{
                  scale: 1.1,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  padding: "12px 25px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#6366f1",
                  color: "#fff",
                  fontSize: "16px",
                  cursor: "pointer",
                }} type="submit" className="bg-blue-500 text-white p-2">
            Submit
          </motion.button>
        </form>
      </div>
    </PrivetProvider>
  );
};

export default addProduct;
