import React from "react";
import ContactUsForm from "../components/ContactUsForm";

export const metadata = {
	title: "Atlas Optronics Contact Page",
	description: "Atlas Optronics Contact Page",
};

const ContactPage = () => {
	return (
		<div className="container mx-auto pt-40 pb-12 px-4 sm:px-6 lg:px-8">
			<div className="flex flex-wrap justify-center lg:justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8">
				<div className="max-w-md w-full lg:w-1/2">
					<div className="h-96"> </div>
					<div className="bg-secondary p-4">
						<div className="text-lg font-semibold">Our Head Office</div>
						<p className="text-slate-300">Atlas Optronics</p>
						<p className="text-slate-300">8th Floor Sheikha Jameela Tower,</p>
						<p className="text-slate-300">Al Falah St., Al Danah</p>
						<p className="text-slate-300">Abu Dhabi, United Arab Emirate</p>
						<div className="text-lg font-semibold mt-4">Our Service Centre</div>
						<p className="text-slate-300">Atlas Optronics Service Centre</p>
						<p className="text-slate-300">Business Park - ICAD 3</p>
						<p className="text-slate-300">Muṣaffah South, Abu Dhabi, UAE</p>
					</div>
				</div>
				<div className="max-w-md w-full lg:w-1/2">
					<ContactUsForm />
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
