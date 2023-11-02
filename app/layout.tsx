import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";

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
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>{metadata.title}</title>
			</Head>
			<body className={`${inter.className} flex flex-col min-h-screen`}>
				<Navbar />
				<main className="flex-grow">{children}</main>
				<Footer />
			</body>
		</>
	);
}
