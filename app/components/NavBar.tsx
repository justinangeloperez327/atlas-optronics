"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, Fragment } from "react";
import Logo from "./Logo";

const navigation = [
	{ name: "Who We Are", href: "/who-we-are" },
	{ name: "What We Do", href: "/what-we-do" },
	{ name: "Products", href: "/products" },
	{ name: "Services", href: "/services" },
	{ name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathname = usePathname();
	return (
		<>
			<header className="fixed inset-x-0 top-0 z-50 bg-white shadow">
				<section className="bg-primary p-3">
					<div className="max-w mx-auto flex items-center justify-between">
						<div className="flex text-white text-xs mx-auto">
							<div className="flex space-x-6">
								<a
									href="mailto:info@atlastelecom.ae"
									className="flex items-center hover:text-blue-300"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										
										className="w-4 h-4"
									>
										<path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
									</svg>
									<span className="hidden md:inline ml-2">
										info@atlasoptronics.ae
									</span>
								</a>

								<a
									href="tel:+97126127500"
									className="hover:text-blue-300 flex items-center"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										
										className="w-4 h-4"
									>
										<path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
									</svg>
									<span className="hidden md:inline ml-2">
										Tel: +971 2 612 7500
									</span>
								</a>

								<span className="flex items-center hover:text-blue-300">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										
										className="w-4 h-4"
									>
										<path d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
									</svg>

									<span className="hidden md:inline ml-2">
										Fax: +971 2 612 7599
									</span>
								</span>
							</div>
							<div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
								<div className="hidden lg:flex w-full -mx-2">
									<div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-1 shadow-md">
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="24"
											height="24"
										>
											<path fill="none" d="M0 0h24v24H0z"></path>
											<path
												d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"
												fill="rgba(255, 255, 255)"
											></path>
										</svg>
									</div>
									<div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-1 shadow-md">
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="24"
											height="24"
										>
											<path fill="none" d="M0 0h24v24H0z"></path>
											<path
												d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
												fill="rgba(255, 255, 255)"
											></path>
										</svg>
									</div>
									<div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-1 shadow-md">
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="24"
											height="24"
										>
											<path fill="none" d="M0 0h24v24H0z"></path>
											<path
												d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
												fill="rgba(255, 255, 255)"
											></path>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<nav className="bg-gradient-to-r from-slate-200 from-10% via-slate-300 via-30% to-slate-500 to-60%" aria-label="Global">
					<div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-28">
						<div className="flex items-center justify-between h-16">
							<div className="flex-shrink-0">
								<a href="/" className="block">
									<Logo />
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
										<Link
											key={item.name}
											href={item.href}
											className={`px-3 py-2 transition-transform duration-300 ${
												pathname === item.href
													? "text-blue-500 hover:scale-110"
													: "hover:text-blue-500"
											}`}
										>
											{item.name}
										</Link>
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
										<a href="/" className="block">
											<Logo />
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
														className="mx-3 block rounded-lg px-3 py-2 text-lg font-extrabold leading-7 text-gray-900 uppercase"
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
