import React from "react";

const Footer = () => {
	return (
		<footer className="mt-auto bg-gray-900 text-white">
			<div className="container mx-auto py-8 px-4 lg:px-8">
				<div className="flex w-full justify-center">
					<ul className="flex space-x-4">
						{/* TODO: Replace # with actual URLs */}
						<li>
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Facebook"
								className="text-white hover:text-gray-400"
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
								className="text-white hover:text-gray-400"
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
								className="text-white hover:text-gray-400"
							>
								{/* TODO: Replace text with SVG Icon */}
								LinkedIn
							</a>
						</li>
					</ul>
				</div>
				<p className="mt-4 text-center">
					&copy; {new Date().getFullYear()} Atlas Optronics. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
