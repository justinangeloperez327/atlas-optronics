import React from "react";
import Input from "../components/Input";
import TextArea from "../components/TextArea";

export const metadata = {
	title: "Atlas Optronics Contact Page",
	description: "Atlas Optronics Contact Page",
};

const ContactPage = () => {
	return (
		<div className="flex justify-center pt-32 sm:pt-16 md:pt-32 lg:pt-40 xl:pt-64 pb-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h1 className="text-center text-3xl font-extrabold text-gray-900">
						Contact Us
					</h1>
					<p className="mt-2 text-center text-sm text-gray-600">
						You have questions? Send us a message!
					</p>
				</div>
				<form className="mt-8 space-y-6">
					<Input label="Name" name="name" type="text" placeholder="Your Name" />
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
					<TextArea label="Message" name="message" placeholder="Your Message" />
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
	);
};

export default ContactPage;
