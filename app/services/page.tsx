import HeroSection from "@/app/components/HeroSection";
import HeroTitle from "../components/HeroTitle";
import ServicesSection from "../components/ServicesSection";

export const metadata = {
	title: 'Services',
	description:
		"Maximum system performance and affordable life cycle cost. We understand your requirements and help you meet them efficiently.",
};

const ServicesPage = () => {
	return (
		<>
			<HeroSection imageSrc="/services/background.png">
				<div className="text-center">
					<HeroTitle title={metadata.title} />
					<div className="container mx-auto">
						<p className="mt-4 text-lg leading-8 text-slate-200 mb-4">
							{metadata.description}
						</p>
					</div>
				</div>
			</HeroSection>
			<div className="relative mt-20">
				<ServicesSection />
			</div>
		</>
	);
};

export default ServicesPage;
