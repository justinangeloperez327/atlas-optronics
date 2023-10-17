import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { services, description } from "@/constants/services";
import HeroSection from "@/app/components/HeroSection";

export const metadata: Metadata = {
  title: "Atlas Optronics Services Page",
  description: "Atlas Optronics Services Page",
};

const ServicesList = services.map((service) => {
  return (
    <li
      key={service.id}
      className="flex flex-col p-4 mb-6 bg-white rounded-lg drop-shadow-lg md:flex-row"
    >
      <div className="p-2 mb-4 md:w-1/3 md:mb-0">
        <Image
          src={service.image || "/empty-image-sample.jpg"}
          alt={service.name}
          className="w-full h-auto"
          width={800}
          height={800}
        />
      </div>
      <div className="md:w-2/3 md:pl-4">
        <h3 className="text-xl font-semibold">{service.name}</h3>
        <p className="text-gray-600">{service.description}</p>
      </div>
    </li>
  );
});

const ServicesPage = () => {
  return (
    <>
      <div className="container justify-center h-screen mx-auto">
        <ul>{ServicesList}</ul>
      </div>
    </>
  );
};

export default ServicesPage;
