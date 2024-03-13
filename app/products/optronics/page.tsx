import ItemCard from "@/app/components/ItemCard";
import Image from "next/image";
import { optronicsProducts } from "@/constants/products";

export const metadata = {
	title: "Optronics",
	description:"For a clear view, day and night.",
};

const Products = () =>{
	return(
		<>
			{optronicsProducts?.map((product, index) => (
				<ItemCard
					key={index}
					title={product.title}
					subtitle={product.subtitle}
					imageSrc={product.image}
					descriptions={product.descriptions}
					portfolio={product.portfolio}
				/>
		))}
		</>
	)
}

const Optronics = () => {
	return (
		<>
		<div className="relative bg-primary text-slate-300">
			<div className="container relative mx-auto mt-36 p-4">
				<div className="pt-10 md:mb-10 ml-2 lg:ml-32">
					<h1 className="text-4xl lg:text-6xl font-bold mb-2 md:mb-10">Optronics</h1>
					<div className="mx-auto px-4 mt-4">
						<p className="text-4xl pr-2 md:pr-32 lg:pr-40 xl:pr-96">For a clear view, day and night</p>
              <p className="text-lg pr-2 mt-10 md:pr-24 lg:pr-40 xl:pr-96">We design, develop and manufacture optical, optronic and precision-engineered products for defence and non-defence applications.</p>
              <p className="text-lg pr-2 mt-10 md:pr-24 lg:pr-40 xl:pr-96">These optronic products are used globally by armed forces and security personnel for monitoring, identification and classification purposes, as well as for highly precise measurement, evaluation, targeting and self-protection.</p>
              <p className="text-lg pr-2 mt-10 md:pr-24 lg:pr-40 xl:pr-96">They are deployed on various platforms, including submarines, armoured vehicles, manned and unmanned aircraft and satellites, for land, air, sea and space missions.</p>
					</div>
				</div>
			</div>
		</div>
		<div className="relative">
			<Products></Products>
		</div>
		</>
	);
};

export default Optronics;