import Link from "next/link";
import HeroSection from "@/app/components/HeroSection";
import ProductsSection from "@/app/components/ProductsSection";
import ServicesSection from "@/app/components/ServicesSection";
import SolutionsSection from "./components/SolutionsSection";
import ImageCarousel from "./components/ImageCarousel";

export const metadata = {
	title: "Atlas Optronics",
	description: "Atlas Optronics",
};

const HomePage = () => {
	return (
		<>
			<HeroSection imageSrc="/home.jpg">
				<div className="text-center">
					<h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-300 ">
						Welcome to Atlas Optronics
					</h1>
					<p className="mt-4 text-lg leading-8 text-slate-300 mb-4">
						Where Vision Meet Security.
					</p>
					<Link
						href="/who-we-are"
						className="mt-6 bg-blue-500 hover:bg-blue-600 text-xl text-white font-semibold py-4 px-8 transition duration-300 ease-in-out"
					>
						Read More
					</Link>
				</div>
			</HeroSection>
			<div className="relative">
				<SolutionsSection />
			</div>
			<div className="relative mb-20">
				<ProductsSection />
			</div>
			<div className="relative">
				<ImageCarousel />
			</div>
			<div className="relative mt-20">
				<ServicesSection />
			</div>
		</>
	);
};

export default HomePage;
