
import Image from "next/image";
import { solutions } from "@/constants/solutions";
import Link from "next/link";

const SolutionList = () => {
	return (
		<>
			{solutions && solutions.length > 0 && solutions.map((item, index) => (
				<div className="relative border border-blue-600 h-96 w-full text-gray-500 hover:text-slate-200 transition duration-400 ease-out hover:ease-in hover:bg-blue-600 hover:opacity-75" key={index}>
					<Link href={item.href} className="hover:bg-blue-600">
						<div className="inset-0 bg-gray-300">

						</div>
						<span className="absolute z-20 px-5 py-3">
							<div className="transform font-bold uppercase text-lg p-2  drop-shadow-md">
								<div className="">{item.name}</div>
							</div>
						</span>
						<div className="absolute inset-0">
							{/* <Image
								className="w-full h-full object-cover"
								src={item.image || "/empty-image-placeholder.png"}
								width={1920}
								height={1080}
								alt="Atlas hero section background"
							/> */}
						</div>
						
					</Link>
				</div>
			))}
		</>
	)
}
const SolutionsSection = () => {
	return (
		<div className="h-screen">
			<div className="container mx-auto p-2 md:py-8 md:px-12">
				<div className=" p-5 mb-4">
					<p className="text-6xl font-bold tracking-tight text-slate-500 drop-shadow-md">
						<span className="">Our Solutions</span>
					</p>
					<p className="mt-4 text-lg leading-8 text-slate-500 mb-4">
						Where Vision Meets Security.
					</p>
				</div>
				<div className="grid grid-cols-3 gap-5">
					<SolutionList></SolutionList>
				</div>
			</div>
		</div>
	);
};

export default SolutionsSection;
