import SolutionLink from "./SolutionLink";

const SolutionLinks = () => {
	return (
		<div className="">
			<div className="container mx-auto p-2 md:py-8 md:px-12">
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 my-5 mx-8 lg:-mt-52">
					<SolutionLink
						href="/what-we-do/space"
						imageSrc="/space.png"
						alternative="Space"
						text="SPACE"
					/>
					<SolutionLink
						href="/what-we-do/air"
						imageSrc="/air.png"
						alternative="Air"
						text="AIR"
					/>
					<SolutionLink
						href="/what-we-do/land"
						imageSrc="/land.png"
						alternative="LAND"
						text="LAND"
					/>
					<SolutionLink
						href="/what-we-do/sea"
						imageSrc="/sea.png"
						alternative="SEA"
						text="SEA"
					/>
					<SolutionLink
						href="/what-we-do/security"
						imageSrc="/security.png"
						alternative="Air"
						text="SECURITY"
					/>
					<SolutionLink
						href="/what-we-do/cyber"
						imageSrc="/cyber.png"
						alternative="Cyber"
						text="CYBERSPACE"
					/>
				</div>
			</div>
		</div>
	);
};

export default SolutionLinks;
