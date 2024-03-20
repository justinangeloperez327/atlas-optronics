/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

interface Props {
	href?: string;
	imageSrc: string;
	alternative: string;
	text?: string;
}

const ImageWithTextOverlay = ({ href, imageSrc, alternative, text }: Props) => {
	return (
		<div className="relative group transition-transform duration-300 hover:scale-110 max-h-64">
			<a href={href} className="relative">
				<Image
					src={imageSrc}
					alt={alternative}
					width={250}
					height={250}
					className="w-full h-64 rounded-md"
				/>
				<span className="absolute top-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-75  text-xl p-2 drop-shadow-lg">
					{text}
				</span>
			</a>
		</div>
	);
};

export default ImageWithTextOverlay;
