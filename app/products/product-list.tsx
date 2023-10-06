"use client";

import React, { useState, useEffect } from "react";
import { products } from "@/constants/products";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const ProductList = () => {
  const [productListVisible, setProductListVisible] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setProductListVisible(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`container justify-center mx-auto mt-10 mb-20 ${
        productListVisible
          ? "opacity-100 transform translate-x-0 transition-opacity duration-1000 ease-in-out"
          : "opacity-0 transform translate-x-5 transition-opacity duration-1000 ease-in-out"
      }`}
    >
      <ul className="flex flex-wrap justify-center">
        {products.map((product) => (
          <li
            key={product.id}
            className={`flex flex-col p-4 mb-6 bg-white drop-shadow-lg md:flex-row`}
          >
            <div className="p-2 mb-4 md:w-1/3 md:mb-0">
              <Image
                src={product.image || "/empty-image-sample.jpg"}
                alt={product.name}
                className="w-full h-auto"
                width={800}
                height={800}
              />
            </div>
            <div className="md:w-2/3 md:pl-4">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
