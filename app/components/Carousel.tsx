'use client';
import React from 'react';
import { Transition } from "@headlessui/react";
import { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

interface Props {
  items: Array<any>;
}

const Carousel = ({ items }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative">
      {items.map((item, index) => (
        <Transition
          key={index}
          show={activeIndex === index}
          enter="transition ease-out duration-200"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition ease-in duration-200"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Image src={item.src} alt="" className="absolute inset-0 w-full h-full object-cover" />
        </Transition>
      ))}
      <button
        className="absolute left-0 p-2"
        onClick={() => setActiveIndex((activeIndex - 1 + items.length) % items.length)}
      >
        <ChevronLeftIcon></ChevronLeftIcon>
      </button>
      <button
        className="absolute right-0 p-2"
        onClick={() => setActiveIndex((activeIndex + 1) % items.length)}
      >
        <ChevronRightIcon></ChevronRightIcon>
      </button>
    </div>
  );
};

export default Carousel;