import React from "react";
import Content from "@/app/components/Content";
import TitleSection from "@/app/components/TitleSection"; // Assuming you have a TitleSection component
import HeroSection from "../components/HeroSection";

export const metadata = {
	title: "Who We Are",
	description: "Providing cutting-edge solutions in the realm of Optronics.",
};

const WhoWeArePage = () => {
	return (
		<>
			<HeroSection imageSrc="/who-we-are.png">
				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						Crafting Excellence in Optronics
					</h1>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Embark on a journey through our story, mission, and the minds that
						drive innovation at Atlas Optronics JV.
					</p>
				</div>
			</HeroSection>
			<Content>
				<TitleSection title="Who We Are" />

				<div className="mt-3 text-zinc-700 space-y-6">
					<p className="text-lg leading-8">
						At{" "}
						<span className="font-semibold text-gray-900">
							{" "}
							Atlas Optronics JV
						</span>
						, we`re more than just a company; we`re your definitive ally in the
						realm of advanced sensor solutions. Our presence spans land, sea,
						and air — fortified by a robust foundation in the UAE and the
						formidable Atlas Group. Innovation is our compass, driving us to
						ensure paramount security and surveillance with our pioneering
						optronics technologies.
					</p>

					<TitleSection title="About Us" />

					<div className="space-y-6">
						<div className="border-l-4 border-slate-500 pl-4">
							<h3 className="text-xl font-semibold mt-2 mb-3">
								Company History
							</h3>
							<p className="text-lg">
								As a vanguard of the
								<a
									href="https://atlasgroup.ae/"
									className="text-slate-600 hover:underline"
									target="_blank"
									rel="noopener noreferrer"
								>
									Atlas Group of Companies
								</a>
								, we stand tall on a legacy of over thirty years. This legacy is
								etched with the pursuit of excellence and a rich history of
								transforming challenges into landmarks of innovation and quality
								within the UAE and the broader Gulf Region.
							</p>
						</div>
						<div className="border-l-4 border-slate-500 pl-4">
							<h3 className="text-xl font-semibold mt-2 mb-3">
								Mission and Values
							</h3>
							<p className="text-lg">
								Our mission soars beyond conventional horizons — to furnish
								unparalleled optoelectronic and sensor solutions that equip our
								clients with unrivaled security capabilities. Core values such
								as integrity, innovation, and a steadfast commitment to our
								customers illuminate our path forward.
							</p>
						</div>
						<div className="border-l-4 border-slate-500 pl-4">
							<h3 className="text-xl font-semibold mt-2 mb-3">Our Team</h3>
							<p className="text-lg">
								Our fortress is our people, an assembly of professionals each
								with a saga of expertise. Their unwavering dedication forms the
								cornerstone of Atlas Optronics JV, all united under a singular
								pledge to deliver nothing but extraordinary.
							</p>
						</div>
					</div>
				</div>
			</Content>
		</>
	);
};

export default WhoWeArePage;