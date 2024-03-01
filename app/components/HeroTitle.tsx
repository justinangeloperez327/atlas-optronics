
interface Props {
	title: string;
}

const HeroTitle = ({ title }: Props) => {
	return (
		<p className="text-6xl font-bold tracking-tight text-slate-300 ">
      {title}
    </p>
	);
};

export default HeroTitle;
