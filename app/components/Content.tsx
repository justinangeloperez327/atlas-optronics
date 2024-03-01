import React from "react";

interface Props {
	children: React.ReactNode;
}

const Content = ({ children }: Props) => {
	return (
		<>
			<div className="container mx-auto px-4 md:px-12 py-10 text-white">{children}</div>
		</>
	);
};

export default Content;
