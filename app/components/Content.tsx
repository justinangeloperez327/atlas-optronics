import React from "react";

interface Props {
	children: React.ReactNode;
}

const Content = ({ children }: Props) => {
	return (
		<>
			<div className="w-full h-screen p-3 py-20 max-w-[1280px] m-auto lg:p-0 lg:py-24 mt-8">
				{children}
			</div>
		</>
	);
};

export default Content;
