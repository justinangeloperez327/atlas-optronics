import Image from "next/image";

import { insights, subtitle } from "@/constants/insights";

const Insights = () => {
	return (
		<div className="">
			<div className="container mx-auto p-6 mb-5 relative z-10">
				<div className="mb-2 md:mb-10 ml-2 lg:ml-32">
					<h1 className="text-4xl lg:text-6xl mb-2 md:mb-10">ATLAS OPTRONICS Insights</h1>
					<p className="text-sm pr-2 md:pr-32 lg:pr-40 xl:pr-96">{subtitle}</p>
				</div>
			</div>
		</div>
	);
};

export default Insights;
