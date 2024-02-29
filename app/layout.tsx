import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Atlas Optronics",
	description: "Atlas Optronics",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<html lang="en">
				<head></head>
				<body className={`${inter.className} `}>
					<Navbar />
					<div className="relative">
						<main>{children}</main>
					</div>
					<Footer />
				</body>
			</html>
		</>
	);
}
