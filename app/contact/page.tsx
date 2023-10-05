import React from "react";
import type { Metadata } from "next";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import HeroSection from "@/app/components/HeroSection";

export const metadata: Metadata = {
  title: "Atlas Optronics Contact Page",
  description: "Atlas Optronics Contact Page",
};

const ContactPage = () => {
  return (
    <>
      <HeroSection
        title="Contact us"
        backgroundImage="/telephone.svg"
      ></HeroSection>
      <div className="container justify-center mb-20 mx-auto">
        <div className="py-3 px-5 box-content border items-center bg-white rounded-lg drop-shadow-lg">
          <Input label="Name" name="name" placeholder="Name"></Input>
          <Input label="Email" name="email" placeholder="Email Address"></Input>
          <Input
            label="Phone Number"
            name="phone_number"
            placeholder="Phone Number"
          ></Input>
          <Input label="Company" name="company" placeholder="Company"></Input>
          <TextArea
            label="Message"
            name="message"
            placeholder="Message"
          ></TextArea>
          <button
            type="submit"
            className="px-4 py-2 mt-5 text-white bg-blue-950 rounded-md hover:bg-gray-800"
          >
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
