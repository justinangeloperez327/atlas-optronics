import React from "react";
import type { Metadata } from "next";
import { description } from "@/constants/products";
import HeroSection from "@/app/components/HeroSection";
import ProductList from "./product-list";
import Content from "@/app/components/Content";
import Title from "@/app/components/TitleSection";

export const metadata: Metadata = {
  title: "Atlas Optronics Products Page",
  description: "Atlas Optronics Products Page",
};

const ProductsPage = () => {
  return (
    <>
      <Content>
        <Title title='Products' />
        <p className="text-lg leading-8">{description}</p>
      <ProductList></ProductList>
      </Content>
    </>
  );
};

export default ProductsPage;
