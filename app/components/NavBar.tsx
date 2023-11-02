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
								className="flex items-center hover:text-blue-300"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
									/>
								</svg>
								<span className="hidden md:inline ml-2">
									info@atlastelecom.ae
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
									stroke-width="1.5"
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
									/>
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
									stroke-width="1.5"
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
									/>
								</svg>

								<span className="hidden md:inline ml-2">
									Fax: +971 2 612 7599
								</span>
							</span>
						</div>

						<div className="flex space-x-4">
							<a
								href="https://www.facebook.com/AtlasGroupUAE"
								target="_blank"
								className="hover:text-blue-300"
							>
								<i className="fab fa-facebook-f"></i>
							</a>
							<a
								href="https://www.instagram.com/atlasgroupuae/"
								target="_blank"
								className="hover:text-blue-300"
							>
								<i className="fab fa-instagram"></i>
							</a>
							<a
								href="https://www.youtube.com/channel/UCbvh4DssPmH1ia5OCSlxEjg"
								target="_blank"
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
											className="px-3 py-2 rounded-md text-lg font-extrabold text-gray-600 hover:text-gray-800 hover:bg-gray-50"
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
