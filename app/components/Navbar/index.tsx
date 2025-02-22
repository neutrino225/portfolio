/** @format */
"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navItems = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#aboutme" },
	{ name: "Work", href: "#work" },
	{ name: "Contact", href: "#contact" },
];

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		setIsScrolled(latest > 50);
	});

	return (
		<motion.nav
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, ease: "easeInOut" }}
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${
				isScrolled ? "bg-gray-900/20 backdrop-blur-lg" : "bg-transparent"
			}`}>
			<div className="container mx-auto px-4 md:px-8 py-6">
				<div className="flex justify-center md:justify-center">
					<ul className="flex flex-wrap justify-center items-center gap-5 md:gap-10">
						{navItems.map((item, index) => (
							<motion.li
								key={item.name}
								initial={{ y: -20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: index * 0.1 }}
								className="relative">
								<a
									href={item.href}
									className="relative px-3 md:px-4 py-2.5 text-sm md:text-base font-medium text-gray-300 hover:text-cyan-200 transition-colors">
									{item.name}
								</a>
							</motion.li>
						))}
					</ul>
				</div>
			</div>

			{/* Scrolling Indicator */}
			<motion.div
				className="h-[3px] bg-gradient-to-r from-blue-400 to-cyan-300"
				initial={{ scaleX: 0 }}
				style={{ scaleX: useScroll().scrollYProgress }}
			/>
		</motion.nav>
	);
};

export default Navbar;
