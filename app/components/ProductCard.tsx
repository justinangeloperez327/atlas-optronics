import React from "react";
import Image from "next/image";

interface Props {
	product: any;
}

const ProductCard = ({ product }: Props) => {
	return (
		<>
			<li className="m-4 bg-white drop-shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
				<div className="aspect-w-1 aspect-h-1">
					<Image
						src={product.image || "/empty-image-placeholder.png"}
						alt={product.name}
						width={400}
						height={400}
					/>
				</div>
				<div className="p-4">
					<h3 className="text-xl font-semibold">{product.name}</h3>
					<p className="text-gray-600">{product.description}</p>
				</div>
			</li>
		</>
	);
};

export default ProductCard;
