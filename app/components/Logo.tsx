import React from "react";
import Image from "next/image";

const Logo = () => {
	return (
		<>
			<Image
				src="/atlas-optronics-logo.png"
				alt="Atlas Optronics"
				width={140}
				height={48}
				priority
			/>
		</>
	);
};

export default Logo;
