/** @format */

"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const variants = {
	hidden: { opacity: 0, y: "-100%" },
	visible: {
		opacity: 1,
		y: "0%",
		transition: {
			duration: 0.7,
		},
	},
};

const Navbar = () => {
	const [lastScrollTop, setLastScrollTop] = useState(0);
	const [navVisible, setNavVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollTop = window.pageYOffset;
			if (currentScrollTop > lastScrollTop) {
				// Scroll down
				setNavVisible(false);
			} else {
				// Scroll up
				setNavVisible(true);
			}
			setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollTop]);

	return (
		<motion.nav
			initial="hidden"
			animate={navVisible ? "visible" : "hidden"}
			variants={variants}
			className="w-full fixed inset-0 p-5 transform -translate-x-1/2 h-16 bg-transparent backdrop-blur-lg flex items-center justify-center px-10 md:px-24 z-50">
			<div className="flex items-center gap-10">
				<ul className="flex gap-5 md:gap-10">
					<li>
						<a
							href="#home"
							className="text-slate-200 text-base md:text-lg font-medium">
							Home
						</a>
					</li>
					<li>
						<a
							href="#aboutme"
							className="text-slate-200 text-base md:text-lg font-medium">
							About
						</a>
					</li>
					<li>
						<a
							href="#work"
							className="text-slate-200 text-base md:text-lg font-medium">
							Work
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className="text-slate-200 text-base md:text-lg font-medium">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</motion.nav>
	);
};

export default Navbar;
