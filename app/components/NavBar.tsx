"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState, Fragment } from "react";

const navigation = [
	{ name: "Who We Are", href: "/who-we-are" },
	{ name: "What We Do", href: "/what-we-do" },
	{ name: "Products", href: "/products" },
	{ name: "Services", href: "/services" },
	{ name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<header className="fixed inset-x-0 top-0 z-50 bg-white shadow">
				<section className="bg-gradient-to-r from-blue-800 to-gray-800 p-3">
					<div className="max-w-7xl mx-auto flex items-center justify-between">
						<div className="flex space-x-6 text-white">
							<a
								href="mailto:info@atlastelecom.ae"
								className="hover:text-blue-300"
							>
								<i className="lnr lnr-envelope align-middle"></i>
								<span className="hidden md:inline ml-2">
									info@atlastelecom.ae
								</span>
							</a>
							<a href="tel:+97126127500" className="hover:text-blue-300">
								<i className="icon icon-phone-call2 align-middle"></i>
								<span className="hidden md:inline ml-2">
									Tel: +971 2 612 7500
								</span>
							</a>
							<span className="hidden lg:inline">
								<i className="fas fa-fax align-middle"></i>
								<span className="ml-2">Fax: +971 2 612 7599</span>
							</span>
						</div>

						<div className="flex space-x-4">
							<a
								href="https://www.facebook.com/AtlasGroupUAE"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-blue-300"
							>
								<i className="fab fa-facebook-f"></i>
							</a>
							<a
								href="https://www.instagram.com/atlasgroupuae/"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-blue-300"
							>
								<i className="fab fa-instagram"></i>
							</a>
							<a
								href="https://www.youtube.com/channel/UCbvh4DssPmH1ia5OCSlxEjg"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-blue-300"
							>
								<i className="fab fa-youtube"></i>
							</a>
						</div>
					</div>
				</section>
				<nav className="bg-white border-b border-gray-200" aria-label="Global">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex items-center justify-between h-16">
							<div className="flex-shrink-0">
								<a href="/" className="block">
									<Image
										src="/atlas-optronics-logo.png"
										alt="Atlas Optronics"
										width={140}
										height={48}
										objectFit="contain"
										priority
									/>
								</a>
							</div>
							<div className="flex lg:hidden">
								<button
									type="button"
									className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
									onClick={() => setMobileMenuOpen(true)}
									aria-controls="mobile-menu"
									aria-expanded="false"
								>
									<span className="sr-only">Open main menu</span>
									<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
								</button>
							</div>
							<div className="hidden lg:block lg:ml-6">
								<div className="flex space-x-4">
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50"
										>
											{item.name}
										</a>
									))}
								</div>
							</div>
						</div>
					</div>

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
											{/* <Image
                    className="h-8 w-auto"
                    src="/next.svg"
                    alt=""
                    width={400}
                    height={400}
                  /> */}
											<a href="/" className="-m-1.5 p-1.5">
												<span className="sr-only">Atlas Optronics</span>
												<h1
													className={`text-xl font-black tracking-wide text-gray-700 sm:text-3xl`}
												>
													ATLAS OPTRONICS
												</h1>
											</a>
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
				</nav>
			</header>
		</>
	);
};

export default Navbar;
``;
