import React from "react";
import Input from "../components/Input";
import TextArea from "../components/TextArea";

export const metadata = {
	title: "Atlas Optronics Contact Page",
	description: "Atlas Optronics Contact Page",
};

const ContactPage = () => {
	return (
		<div className="container mx-auto pt-40 pb-12 px-4 sm:px-6 lg:px-8">
			<div className="flex flex-wrap justify-center lg:justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8">
				<div className="max-w-md w-full lg:w-1/2">
					<div className="h-96"> {/* Map container */}</div>
					<div>
						{" "}
						{/* Address container */}
						<div className="text-lg font-semibold">Our Head Office</div>
						<p className="text-gray-600">Atlas Optronics</p>
						<p className="text-gray-600">8th Floor Sheikha Jameela Tower,</p>
						<p className="text-gray-600">Al Falah St., Al Danah</p>
						<p className="text-gray-600">Abu Dhabi, United Arab Emirate</p>
						<div className="text-lg font-semibold mt-4">Our Service Centre</div>
						<p className="text-gray-600">Atlas Optronics Service Centre</p>
						<p className="text-gray-600">Business Park - ICAD 3</p>
						<p className="text-gray-600">Muṣaffah South, Abu Dhabi, UAE</p>
					</div>
				</div>
				<div className="max-w-md w-full lg:w-1/2">
					<div className="max-w-md w-full space-y-8 shadow-lg border-2 border-blue-900 p-3 border-radius rounded-lg">
						<div>
							<h1 className="text-center text-3xl font-extrabold text-gray-900">
								Contact Us
							</h1>
							<p className="mt-2 text-center text-sm text-gray-600">
								You have questions? Send us a message!
							</p>
						</div>
						<form className="mt-8 space-y-6">
							<Input
								label="Name"
								name="name"
								type="text"
								placeholder="Your Name"
							/>
							<Input
								label="Email"
								name="email"
								type="email"
								placeholder="Your Email Address"
							/>
							<Input
								label="Phone Number"
								name="phone_number"
								type="tel"
								placeholder="Your Phone Number"
							/>
							<Input
								label="Company"
								name="company"
								type="text"
								placeholder="Your Company"
							/>
							<TextArea
								label="Message"
								name="message"
								placeholder="Your Message"
							/>
							<div>
								<button
									type="submit"
									className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
								>
									Send Message
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
