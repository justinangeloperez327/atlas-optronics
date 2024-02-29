
import Image from "next/image";
import { solutions } from "@/constants/solutions";

const SolutionList = () => {
	return (
		<>
			{solutions.map((item, index) => (
					<div className="relative group max-h-64 transition-transform duration-300 hover:scale-110" key={index}>
							<a href={item.href} className="">
								<Image
									src={item.image}
									alt={item.name}
									width={250}
									height={250}
									className="w-full h-64"
								/>
								<span className="absolute top-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-75 text-white text-xl p-2 drop-shadow-lg">
									{item.name}
								</span>
							</a>
				</div>
				))}
		</>
	)
}
const SolutionsSection = () => {
	return (
		<div className="">
			<div className="container mx-auto p-2 md:py-8 md:px-12">
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 my-5 mx-8 lg:-mt-52">
					<SolutionList></SolutionList>
				</div>
			</div>
		</div>
	);
};

export default SolutionsSection;
