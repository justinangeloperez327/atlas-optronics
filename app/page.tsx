import Link from "next/link";
import HeroSection from "@/app/components/HeroSection";

// import Content from "@/app/components/Content";

export const metadata = {
	title: "Atlas Optronics",
	description: "Atlas Optronics",
};

const HomePage = () => {
	return (
		<>
			<HeroSection imageSrc="/home-2.png">
				<h1 className="text-4xl font-bold text-white mx-2">
					Welcome to Atlas Optronics
				</h1>
				<p className="mt-4 text-lg text-white mx-2">
					Where Vision Meet Security <span className="text-blue">.</span>
				</p>
				<Link
					href="/who-we-are"
					className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out"
				>
					Get Started
				</Link>
			</HeroSection>
			{/* <Content /> */}
		</>
	);
};

export default HomePage;
