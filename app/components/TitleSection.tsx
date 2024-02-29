import React from "react";

interface Props {
	title?: string;
}

const TitleSection = ({ title }: Props) => {
	return <h1 className="text-4xl font-bold text-zinc-700 py-4">{title}</h1>;
};

export default TitleSection;
