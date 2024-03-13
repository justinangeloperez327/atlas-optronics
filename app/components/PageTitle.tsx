
interface Props {
  title?: string;
  subtitle?: string;
  descriptions?: Array<string>;
}

const PageTitle = ({ title, subtitle, descriptions }: Props) => {
  return (
    <div className="relative text-slate-700">
			<div className="container relative mx-auto mt-36 p-4">
				<div className="pt-10 md:mb-10 ml-2 lg:ml-32">
          <h1 className="text-4xl lg:text-6xl font-bold mb-2 md:mb-10">{ title }</h1>
					<div className="mx-auto px-4 mt-4">
            <p className="text-4xl pr-2 md:pr-32 lg:pr-40 xl:pr-96">{ subtitle }</p>
            {descriptions.map((description, index) => (
              <p key={index} className="text-lg pr-2 mt-10 md:pr-24 lg:pr-40 xl:pr-96">{ description }</p>
            ))}
					</div>
				</div>
			</div>
		</div>
  );
};

export default PageTitle;
