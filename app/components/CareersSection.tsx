import Image from "next/image";

import { careers, subtitle } from "@/constants/careers";

const CareersSection = () => {
	return (
		<div className="">
			<div className="container mx-auto p-6 mb-5 z-0">
				<div className="relative mb-2 md:mb-10 ml-2 lg:ml-32 z-10">
					<h1 className="text-4xl lg:text-6xl mb-2 md:mb-10">Careers</h1>
					<p className="text-sm pr-2 md:pr-32 lg:pr-40 xl:pr-96">{subtitle}</p>
				</div>
				<div className="absolute top-5 right-0 w-2/3 h-full bg-gray-100 z-0"></div>
			</div>
		</div>
	);
};

export default CareersSection;
