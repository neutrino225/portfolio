/** @format */
"use client";
import { useEffect } from "react";
import Lenis from "lenis";

import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
	useEffect(() => {
		const lenis = new Lenis();

		lenis.on("scroll", (e: any) => {
			console.log(e);
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy(); // Cleanup Lenis instance when the component unmounts
		};
	}, []);

	return (
		<main className="flex min-h-screen flex-col items-start justify-start p-10 md:p-24 gap-16 md:gap-28 overflow-hidden">
			{/* main section */}
			<Main />

			{/* about section */}
			<About />

			{/* projects section */}
			<Projects />

			{/* skills section */}
			<Skills />

			{/* contact section */}
			<Contact />
		</main>
	);
}
