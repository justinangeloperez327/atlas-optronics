import React from "react";
import type { Metadata } from "next";
import { description } from "@/constants/products";
import HeroSection from "@/app/components/HeroSection";
import ProductList from "./product-list";

export const metadata: Metadata = {
  title: "Atlas Optronics Products Page",
  description: "Atlas Optronics Products Page",
};

const ProductsPage = () => {
  return (
    <>
      <HeroSection
        title="Products"
        backgroundImage="/museum-airplane.svg"
      ></HeroSection>
      <div className="container mx-auto mt-5 mb-5 px-4 sm:px-6 md:px-8">
        <div className="flex">
          <div className="p-2">
            <p className="text-lg leading-8">{description}</p>
          </div>
        </div>
      </div>
      <ProductList></ProductList>
    </>
  );
};

export default ProductsPage;
