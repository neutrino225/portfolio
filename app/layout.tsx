/** @format */
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Faizan Karamat | Portfolio",
	description: "Full Stack Developer & AI/ML Engineer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="bg-black">
			<body className={`${poppins.className} bg-black`}>{children}</body>
		</html>
	);
}
