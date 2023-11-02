import React from "react";

interface Props {
	title?: string;
}

const TitleSection = ({ title }: Props) => {
	return (
		<h1 className="text-4xl font-bold text-center text-blue-900 py-4 border-b-2 border-blue-900">
			{title}
		</h1>
	);
};

export default TitleSection;
