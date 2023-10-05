"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, Fragment } from "react";

const navigation = [
  { name: "who we are", href: "/who-we-are" },
  { name: "what we do", href: "/what-we-do" },
  { name: "products", href: "/products" },
  { name: "services", href: "/services" },
  { name: "contact us", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarBackground("white");
      } else {
        setNavbarBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{ backgroundColor: navbarBackground }}
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8 bg-white/[.5]"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              className="h-8 w-auto"
              src="/next.svg"
              alt=""
              width={400}
              height={400}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-10 w-10" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-extrabold leading-6 text-gray-900 uppercase p-3 rounded-lg hover:underline"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="lg:hidden"
          onClose={() => setMobileMenuOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-transform transition-opacity ease-in-out duration-1000"
            enterFrom="translate-x-full opacity-100"
            enterTo="translate-x-0 opacity-100"
            leave="transition-transform transition-opacity ease-in-out duration-1000"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="translate-x-full opacity-100"
          >
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 lg:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Atlas Optronics</span>
                  <Image
                    className="h-8 w-auto"
                    src="/next.svg"
                    alt=""
                    width={400}
                    height={400}
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-10 w-10" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-lg font-extrabold leading-7 text-gray-900 uppercase"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
};

export default Navbar;
