/** @format */
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
	{ name: "Home", section: "landing" },
	{ name: "About", section: "about" },
	{ name: "Work", section: "projects" },
	{ name: "Contact", section: "contact" },
];

const Navbar = () => {
	const [activeSection, setActiveSection] = useState("landing");

	useEffect(() => {
		const handleScroll = () => {
			const current = [...navItems]
				.reverse()
				.find(({ section }) => {
					const element = document.getElementById(section);
					return element ? window.scrollY >= element.offsetTop - 240 : false;
				});

			setActiveSection(current?.section ?? "landing");
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleNavClick = (section: string) => {
		document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="fixed left-1/2 top-3 z-40 w-[calc(100vw-1.5rem)] -translate-x-1/2 sm:w-auto md:top-5">
			<motion.nav
				initial={{ y: -18, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
				className="liquid-nav mx-auto flex w-full items-center justify-center rounded-xl px-2 py-1.5 sm:w-auto sm:px-4 md:px-6">
				<ul className="relative z-10 flex w-full items-center justify-around gap-0 sm:w-auto sm:gap-3 md:gap-6 lg:gap-9">
					{navItems.map((item) => {
						const isActive = activeSection === item.section;
						return (
							<li key={item.name}>
								<button
									type="button"
									onClick={() => handleNavClick(item.section)}
									className={`focus-ring relative min-h-11 rounded-full px-3 py-2 text-[10px] font-bold uppercase tracking-[0.1em] transition-colors sm:text-xs ${
										isActive
											? "text-cream"
											: "text-primary/60 hover:text-cream"
									}`}>
									{isActive && (
										<motion.span
											layoutId="nav-active"
											className="absolute inset-0 rounded-full bg-primary/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.09)]"
											transition={{ type: "spring", bounce: 0.18, duration: 0.55 }}
										/>
									)}
									<span className="relative z-10">{item.name}</span>
								</button>
							</li>
						);
					})}
				</ul>
			</motion.nav>
		</div>
	);
};

export default Navbar;
