import Link from "next/link";
import HeroSection from "@/app/components/HeroSection";
import ProductsSection from "@/app/components/ProductsSection";
import ServicesSection from "@/app/components/ServicesSection";
import SolutionsSection from "@/app/components/SolutionsSection";
import InsightsSection from "@/app/components/InsightsSection";
import HeroTitle from "@/app/components/HeroTitle";

export const metadata = {
	title: "Welcome to Atlas Optronics",
	description: "Where Vision Meet Security.",
};

const HomePage = () => {
	return (
		<>
			<HeroSection imageSrc="/atlas-bg.png">
				<div className="text-center">
					<p className="text-6xl font-bold tracking-tight text-slate-100 drop-shadow-md">
						<span className="">Welcome</span><br />
						<span className="">to</span><br />
						<span className="">Atlas Optronics</span>
					</p>
					<p className="mt-4 text-lg leading-8 text-slate-200 mb-4">
						{metadata.description}
					</p>
					<Link
						href="/who-we-are"
						className="mt-6 border-solid border-2 border-blue-500 bg-white text-slate-800 hover:bg-blue-600 text-xl hover:text-slate-200 font-semibold py-4 px-8 transition duration-300 ease-in-out"
					>
						Read More
					</Link>
				</div>
			</HeroSection>
			<div className="relative">
				<SolutionsSection />
			</div>
			{/* <div className="relative mb-20">
				<InsightsSection />
			</div> */}
			<div className="relative mb-20">
				<ProductsSection />
			</div>
			<div className="relative mt-28">
				<ServicesSection />
			</div>
		</>
	);
};

export default HomePage;
