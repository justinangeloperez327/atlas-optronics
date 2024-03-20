
interface Props {
	title: string;
}

const HeroTitle = ({ title }: Props) => {
	return (
		<p className="text-6xl font-bold tracking-tight text-slate-100"><span className="drop-shadow-md">{title}</span></p>
	);
};

export default HeroTitle;
