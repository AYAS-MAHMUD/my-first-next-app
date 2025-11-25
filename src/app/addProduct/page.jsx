"use client";
import PrivetProvider from "@/component/AuthProvider/PrivetProvider";
import axios from "axios";
import React from "react";

const addProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const form = e.target;
    const title = form.title.value;
    const imageUrl = form.imageUrl.value;
    const price = form.price.value;
    const description = form.description.value;
    const category = form.category.value;
    const ProductData = { title, imageUrl, price, description, category };
    // console.log(formData);
    alert("Form submitted!");
    axios
      .post("http://localhost:8001/products", ProductData)
      .then((response) => {
        console.log("Product added successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  return (
    <PrivetProvider>
      <div>
        <h1 className="text-4xl font-bold py-5 text-center mt-40 mx-2" >
          Add Product Page
        </h1>
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
            name="imageUrl"
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

          <button type="submit" className="bg-blue-500 text-white p-2">
            Submit
          </button>
        </form>
      </div>
    </PrivetProvider>
  );
};

export default addProduct;
