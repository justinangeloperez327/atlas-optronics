import React from "react";

const Footer = () => {
	return (
		<footer className="mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8 bg-gray-900  py-2">
			<div className="flex w-full justify-center">
				<ul className="flex space-x-4">
					{/* TODO: Replace # with actual URLs */}
					<li>
						<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Facebook"
							className=" hover:text-gray-400"
						>
							{/* TODO: Replace text with SVG Icon */}
							Facebook
						</a>
					</li>
					<li>
						<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Twitter"
							className=" hover:text-gray-400"
						>
							{/* TODO: Replace text with SVG Icon */}
							Twitter
						</a>
					</li>
					<li>
						<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
							className=" hover:text-gray-400"
						>
							{/* TODO: Replace text with SVG Icon */}
							LinkedIn
						</a>
					</li>
				</ul>
			</div>
			<p className="mt-4 text-center">
				&copy; {new Date().getFullYear()} Atlas Optronics. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
