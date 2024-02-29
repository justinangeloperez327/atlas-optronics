import React from "react";
import Image from "next/image";

interface Props {
	product: any;
}

const FeaturedProduct = ({ product }: Props) => {
	if (!product) return null;

	return (
		<div className="featured-product-container bg-blue-100 p-4 rounded-lg">
			<div className="featured-product-image">
				<Image
					src={product.image || "/default-jpg"}
					alt={product.name}
					width={500}
					height={500}
					objectFit="cover"
				/>
			</div>
			<div className="featured-product-info mt-3">
				<h2 className="text-2xl font-bold">{product.name}</h2>
				<p className="text-lg">{product.description}</p>
			</div>
		</div>
	);
};

export default FeaturedProduct;
