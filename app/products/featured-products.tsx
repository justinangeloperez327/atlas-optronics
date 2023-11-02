import React from "react";
import Image from "next/image";

const FeaturedProduct = ({ product }) => {
	if (!product) return null;

	return (
		<div className="featured-product-container bg-blue-100 p-4 rounded-lg">
			<div className="featured-product-image">
				<Image
					src={product.image || "/default-product.jpg"}
					alt={product.name}
					width={500}
					height={500}
					objectFit="cover"
				/>
			</div>
			<div className="featured-product-info mt-3">
				<h2 className="text-2xl font-bold">{product.name}</h2>
				<p className="text-lg">{product.description}</p>
				{/* You can add more details such as price, reviews, etc. */}
			</div>
		</div>
	);
};

export default FeaturedProduct;
