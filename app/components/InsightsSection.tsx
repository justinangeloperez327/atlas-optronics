import Image from "next/image";

import { description, insights, subtitle } from "@/constants/insights";

const InsightsSection = () => {
	return (
		<div className="px-4 pt-10 pb-4">
			<div className="container mx-auto px-6 pt-10 mb-5 bg-secondary relative z-30">
				<div className="relative mb-2 md:mb-10 ml-2 lg:ml-32 z-10">
					<h1 className="text-xl lg:text-2xl xl:text-4xl mb-2 md:mb-10">ATLAS OPTRONICS Insights</h1>
				</div>
				<div className="flex flex-col xl:flex-row ">
					<div className="basis-full p-2">
						<Image
							src={'/insights.jpg'}
							alt='insights'
							width={300}
							height={300}
							className="w-full h-80 mb-4"
						/>
					</div>
					<div className="p-2 ml-2">
						<p className="text-2xl mb-2 text-bold">{subtitle}</p>
						<p className="text-lg">{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InsightsSection;
