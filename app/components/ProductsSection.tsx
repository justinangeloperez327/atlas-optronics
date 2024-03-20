
import Image from "next/image";
import { products } from "@/constants/products";
import Link from "next/link";

const ProductList = () => {
	return (
		<>
			{products && products.length > 0 && products.map((item, index) => (
				<div className="relative border border-blue-600 h-96 w-full text-gray-500 hover:text-slate-200 transition duration-400 ease-out hover:ease-in hover:bg-blue-600 hover:opacity-75" key={index}>
					<Link href={item.slug} className="hover:bg-blue-600">
						<div className="inset-0 bg-gray-300">

						</div>
						<span className="absolute z-20 px-5 py-3">
							<div className="transform font-bold uppercase text-xl p-2 drop-shadow-md">
								<div className="">{item.title}</div>
							</div>
							<div className="transform font-bold uppercase text-lg p-2 drop-shadow-md">
								<div className="">{item.subtitle}</div>
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
const ProductsSection = () => {
	return (
		<div className="h-screen">
			<div className="container mx-auto p-2 md:py-8 md:px-12">
				<div className=" p-5 mb-4">
					<p className="text-6xl font-bold tracking-tight text-slate-500 drop-shadow-md">
						<span className="">Our Products</span>
					</p>
					<p className="mt-4 text-lg leading-8 text-slate-500 mb-4">
						We offer our customers mission-critical sensor systems for protection, for surveillance and for situational awareness.
					</p>
				</div>
				<div className="grid grid-cols-2 gap-5">
					<ProductList></ProductList>
				</div>
			</div>
		</div>
	);
};

export default ProductsSection;
