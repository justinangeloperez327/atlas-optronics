import React from "react";

interface Props {
	title?: string;
}

const TitleSection = ({ title }: Props) => {
	return <h1 className="text-4xl font-bold text-slate-300 py-4">{title}</h1>;
};

export default TitleSection;
