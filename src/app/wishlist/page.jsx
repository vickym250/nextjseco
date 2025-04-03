'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import img from "../image/laptop.png"
 



const products = [
  {
    name: "Gucci duffle bag",
    price: "$900",
    oldPrice: "$1200",
    discount: "25%",
    image: img,
  },
  {
    name: "Gucci duffle bag",
    price: "$900",
    oldPrice: "$1200",
    discount: "25%",
    image: img,
  },
  {
    name: "Gucci duffle bag",
    price: "$900",
    oldPrice: "$1200",
    discount: "25%",
    image: img,
  },
  {
    name: "Gucci duffle bag",
    price: "$900",
    oldPrice: "$1200",
    discount: "25%",
    image: img,
  },
  {
    name: "Gucci duffle bag",
    price: "$900",
    oldPrice: "$1200",
    discount: "25%",
    image: img,
  },
  
];

const Wishlist = () => {
  return (
    <div className=" container mx-auto  ">
      <h2 className="text-xl font-semibold my-4">Wishlist ({products.length})</h2>
      <div className="grid  grid-cols-1  md:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="relative p-4 border rounded-lg shadow-md bg-white">
            {product.discount && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {product.discount}
              </span>
            )}
            <Image
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
              className="mx-auto"
            />
            <div className="text-center mt-2">
              <p className="font-medium text-gray-800">{product.name}</p>
              <p className="text-red-500 font-bold">
                {product.price} {product.oldPrice && (
                  <span className="line-through text-gray-500 text-sm ml-2">
                    {product.oldPrice}
                  </span>
                )}
              </p>
              <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
        Move All To Bag
      </button>
    </div>
  );
};

export default Wishlist;
