import ItemCard from "@/app/components/ItemCard";
import Image from "next/image";
import { avionics } from "@/constants/products";

export const metadata = {
	title: "Radars, IFF and Comms",
	description:"Core competence meets innovative strength",
};

const Products = () =>{
	return(
		<>
			{avionics?.map((product, index) => (
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

const Avionics = () => {
	return (
		<>
		<div className="relative bg-primary text-slate-300">
			<div className="container relative mx-auto mt-60 p-4">
				<div className="pt-10 md:mb-10 ml-2 lg:ml-32">
					<h1 className="text-4xl lg:text-6xl font-bold mb-2 md:mb-10">Avionics</h1>
					<div className="mx-auto px-4 mt-4">
						<p className="text-4xl pr-2 md:pr-32 lg:pr-40 xl:pr-96">Your operational benefits.</p>
						<p className="text-lg pr-2 mt-10 md:pr-24 lg:pr-40 xl:pr-96">Our portfolio ranges from certified avionic components and systems to complex integrated airborne mission systems and unmanned solutions for defense and non-defense applications.</p>
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

export default Avionics;