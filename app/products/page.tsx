import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { products, description } from "@/constants/products";
import HeroSection from "@/app/components/HeroSection";

export const metadata: Metadata = {
  title: "Atlas Optronics Products Page",
  description: "Atlas Optronics Products Page",
};

const productList = products.map((product) => {
  return (
    <li
      key={product.id}
      className="flex flex-col p-4 mb-6 bg-white drop-shadow-lg md:flex-row"
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
  );
});

const ProductsPage = () => {
  return (
    <>
      <HeroSection title="Products" backgroundImage="/drone.svg"></HeroSection>
      <div className="container mx-auto mt-5 px-4 sm:px-6 md:px-8">
        <div className="flex">
          <div className="p-2">
            <p className="text-lg leading-8">{description}</p>
          </div>
        </div>
      </div>
      <div className="container justify-center mx-auto mt-10 mb-20">
        <ul>{productList}</ul>
      </div>
    </>
  );
};

export default ProductsPage;
