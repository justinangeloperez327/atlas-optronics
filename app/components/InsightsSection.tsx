import Image from "next/image";

import { description, insights, subtitle } from "@/constants/insights";

const InsightsSection = () => {
	return (
		<div className="">
			<div className="container mx-auto px-6 pt-10 mb-5 bg-emerald-600">
				<div className="relative mb-2 md:mb-10 ml-2 lg:ml-32 z-10">
					<h1 className="text-xl lg:text-2xl xl:text-4xl mb-2 md:mb-10">ATLAS OPTRONICS Insights</h1>
				</div>
				<div className="grid grid-flow-row-dense grid-cols-3 grid-rows-2 gap-2 mx-auto px-36">
						<div className="row-span-2">
						<Image
								src={'/insights.jpg'}
								alt='insights'
								width={600}
								height={600}
								className="w-full h-100"
							/>
						</div>
						<div className="col-span-2">
							<h2 className="text-xl mb-2">{subtitle}</h2>
							<h2 className="text-lg">{description}</h2>
						</div>
				</div>
			</div>
		</div>
	);
};

export default InsightsSection;
