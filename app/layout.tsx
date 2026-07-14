/** @format */
import type { Metadata } from "next";
import { Almarai, Instrument_Serif } from "next/font/google";
import "./globals.css";

const almarai = Almarai({
	subsets: ["arabic"],
	weight: ["300", "400", "700", "800"],
	variable: "--font-almarai",
	display: "swap",
});

const instrumentSerif = Instrument_Serif({
	subsets: ["latin"],
	weight: "400",
	style: ["italic"],
	variable: "--font-instrument-serif",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Faizan Karamat - Product-minded Software Engineer",
	description:
		"Faizan Karamat builds product interfaces, backend systems, and practical AI workflows, from research tools to protocol-level projects.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="bg-black">
			<body
				className={`${almarai.className} ${almarai.variable} ${instrumentSerif.variable} bg-black`}>
				{children}
			</body>
		</html>
	);
}
