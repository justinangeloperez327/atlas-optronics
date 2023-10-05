import React from "react";
import HeroSection from "@/app/components/HeroSection";

const links = [
  {title: 'About Us', href: "about-us", description: ''},
  {title: 'Where We Operate', href: "where-we-operate", description: ''},
  {title: 'Our Commitment', href: "our-commitment", description: ''},
  {title: 'Quality Management', href: "quality-management", description: ''},
]

const linksList = links.map((link) => {
  return (
    <div key={link.title} className="p-6 mb-8 bg-white rounded-lg shadow-md">
    <h2 className="mb-4 text-2xl font-semibold">{link.title}</h2>
    <p>
    {link.description}
    </p>
    <a href={link.href} className="mt-4 text-blue-900 hover:underline">
      Read More
    </a>
  </div>
  );
});

const WhoWeArePage = () => {
  return (
    <>
      <HeroSection title="Who We Are" backgroundImage="/helicopter.svg"></HeroSection>
      <div className="container justify-center h-screen mx-auto mt-5">
        <div className="mb-5">
        <h1 className="mb-8 text-3xl font-bold">Atlas Optronics</h1>
        <p>HENSOLDT’s main areas of activity include intelligence and reconnaissance sensors, solutions for controlling the electromagnetic spectrum and mission avionics systems. Our broadly diversified product portfolio is geared towards customers in the defence and security arenas and covers the entire spectrum for air, sea and land missions. HENSOLDT’s solutions are deployed on various platforms, including helicopters, fixed-wing aircraft, unmanned aerial vehicles, ships and submarines, armoured vehicles and satellites.</p>
        </div>  
        {linksList}
      </div>
    </>
  );
};

export default WhoWeArePage;
