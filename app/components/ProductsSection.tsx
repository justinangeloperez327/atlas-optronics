import Image from "next/image";

import { products, subtitle } from "@/constants/products";

const ProductsSection = () => {
	return (
		<div className="">
			<div className="container mx-auto p-6 mb-5 relative z-10">
				<div className="mb-2 md:mb-10 ml-2 lg:ml-32">
					<h1 className="text-4xl lg:text-6xl mb-2 md:mb-10">Products</h1>
					<p className="text-sm pr-2 md:pr-32 lg:pr-40 xl:pr-96">{subtitle}</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5 mx-2 md:mx-4 lg:mx-40 xl:mx-72">
					{products.map((item, index) => (
						<div className={`relative group text-white ${index > 1 ? 'lg:-ml-16 lg:mr-16' : ''} `} key={item.title}>
							<div className="absolute inset-0 transition-opacity duration-300 ease-in-out backdrop-grayscale bg-grayscale/30 group-hover:opacity-0"></div>
							<Image
								src={item.image}
								alt={item.title}
								width={600}
								height={600}
								className="w-full h-100"
							/>
							<div className="absolute inset-0 flex flex-col ml-5 mt-4">
								<h3 className="text-lg md:text-xl font-bold">{item.title}</h3>
								<p className="opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
									{item.subtitle}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="absolute top-0 left-0 w-full lg:w-4/5 xl:w-2/3 h-full bg-gray-100 z-0"></div>
		</div>
	);
};

export default ProductsSection;
