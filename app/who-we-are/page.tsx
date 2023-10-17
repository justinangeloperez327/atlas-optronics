import React from "react";
import HeroSection from "@/app/components/HeroSection";
import Content from "@/app/components/Content";
import Title from "@/app/components/TitleSection";

const links = [
  { title: "About Us", href: "who-we-are/about-us", description: "" },
  { title: "Where We Operate", href: "where-we-operate", description: "" },
  { title: "Our Commitment", href: "our-commitment", description: "" },
  { title: "Quality Management", href: "quality-management", description: "" },
];

const linksList = links.map((link) => {
  return (
    <div key={link.title} className="p-6 mx-auto w-full">
      <h2 className="mb-4 text-2xl font-semibold">{link.title}</h2>
      <p>{link.description}</p>
      <a href={link.href} className="mt-4 text-blue-900 hover:underline">
        Read More
      </a>
    </div>
  );
});

const WhoWeArePage = () => {
  return (
    <>
      
      <Content>
        <Title title="Who we are" />
            <p className="text-lg leading-8 mt-4">
              HENSOLDT’s main areas of activity include intelligence and
              reconnaissance sensors, solutions for controlling the
              electromagnetic spectrum and mission avionics systems. Our broadly
              diversified product portfolio is geared towards customers in the
              defence and security arenas and covers the entire spectrum for
              air, sea and land missions. HENSOLDT’s solutions are deployed on
              various platforms, including helicopters, fixed-wing aircraft,
              unmanned aerial vehicles, ships and submarines, armoured vehicles
              and satellites.
            </p>
        <div className="my-6 mx-auto">{linksList}</div>
      </Content>
    </>
  );
};

export default WhoWeArePage;
