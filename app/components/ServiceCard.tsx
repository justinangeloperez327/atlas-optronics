import React from "react";
import Image from "next/image";

interface Props {
	service: any;
}

const ServiceCard = ({ service }: Props) => {
	return (
		<div className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden">
			{service.image && (
				<div className="w-full h-64">
					<Image
						src={service.image}
						alt={service.name}
						style={{ objectFit: "contain" }}
						width={300}
						height={50}
					/>
				</div>
			)}
			<div className="p-6">
				<h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
				<p className="text-gray-600 text-sm">{service.description}</p>
			</div>
		</div>
	);
};

export default ServiceCard;
