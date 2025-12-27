/** @format */
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePageContext } from "../PageManager";

const navItems = [
	{ name: "Home", id: "landing", section: null },
	{ name: "About", id: "home", section: "about" },
	{ name: "Projects", id: "home", section: "projects" },
];

const Navbar = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const aboutSection = document.getElementById("about");
			const projectsSection = document.getElementById("projects");
			const scrollY = window.scrollY;

			if (projectsSection && scrollY >= projectsSection.offsetTop - 200) {
				setActiveIndex(2);
			} else if (aboutSection && scrollY >= aboutSection.offsetTop - 200) {
				setActiveIndex(1);
			} else {
				setActiveIndex(0);
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleNavClick = (item: typeof navItems[0]) => {
		if (item.section) {
			const element = document.getElementById(item.section);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		} else {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	return (
		<div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-auto">
			<motion.nav
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full px-2 py-2 flex items-center justify-center shadow-2xl">
				<ul className="flex items-center gap-1">
					{navItems.map((item, index) => (
						<li key={item.name}>
							<button
								onClick={() => handleNavClick(item)}
								className={`px-4 py-2 rounded-full text-sm font-medium transition-all relative ${
									activeIndex === index
										? "text-white"
										: "text-white/40 hover:text-white/70"
								}`}>
								{activeIndex === index && (
									<motion.div
										layoutId="active-pill"
										className="absolute inset-0 bg-white/10 rounded-full"
										transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
									/>
								)}
								<span className="relative z-10">{item.name}</span>
							</button>
						</li>
					))}
				</ul>
			</motion.nav>
		</div>
	);
};

export default Navbar;
