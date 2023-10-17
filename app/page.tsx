import React from "react";
import HeroSection from "@/app/components/HeroSection"
import Content from "@/app/components/Content"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atlas Optronics",
  description: "Atlas Optronics",
};

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Content>
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="mb-8 text-3xl font-semibold text-center">
              Our Key Services
            </h2>
            {/* Add content for key services here */}
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="mb-8 text-3xl font-semibold text-center">
              Latest Blog Posts
            </h2>
            {/* Add content for latest blog posts here */}
          </div>
        </section>
      </Content>
    </>
  );
};

export default HomePage;
