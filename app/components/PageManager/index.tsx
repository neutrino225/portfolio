"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Landing from "../pages/Landing";
import About from "../pages/About";
import Projects from "../pages/Projects";
import HamburgerMenu from "../HamburgerMenu";

type PageType = "landing" | "about" | "projects";

type TransitionVariant = "split" | "curtains" | "wipe";

interface PageContextType {
	currentPage: PageType;
	navigateTo: (page: PageType) => void;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

const usePageContext = () => {
	const context = useContext(PageContext);
	if (!context) {
		throw new Error("usePageContext must be used within PageManager");
	}
	return context;
};

interface PageManagerProps {
	transitionVariant?: TransitionVariant;
}

const PageManager: React.FC<PageManagerProps> = ({
	transitionVariant = "split",
}) => {
	const [currentPage, setCurrentPage] = useState<PageType>("landing");

	const navigateTo = (page: PageType) => {
		setCurrentPage(page);
	};

	return (
		<PageContext.Provider value={{ currentPage, navigateTo }}>
			<div className="h-screen w-screen overflow-hidden bg-[#0b0b0b]">
				<HamburgerMenu
					currentPage={currentPage}
					onNavigate={navigateTo}
				/>

				<AnimatePresence mode="wait">
					{currentPage === "landing" && (
						<motion.div
							key="landing"
							initial="hidden"
							animate="visible"
							exit="exit"
							variants={getPageTransitionVariants(transitionVariant)}
							className="absolute inset-0">
							<Landing />
						</motion.div>
					)}

					{currentPage === "about" && (
						<motion.div
							key="about"
							initial="hidden"
							animate="visible"
							exit="exit"
							variants={getPageTransitionVariants(transitionVariant)}
							className="absolute inset-0">
							<About />
						</motion.div>
					)}

					{currentPage === "projects" && (
						<motion.div
							key="projects"
							initial="hidden"
							animate="visible"
							exit="exit"
							variants={getPageTransitionVariants(transitionVariant)}
							className="absolute inset-0">
							<Projects />
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</PageContext.Provider>
	);
};

const getPageTransitionVariants = (variant: TransitionVariant) => {
	switch (variant) {
		case "split":
			return {
				hidden: { scaleX: 0, originX: 0.5 },
				visible: {
					scaleX: 1,
					transition: { duration: 0.8, ease: [0.87, 0, 0.13, 1] },
				},
				exit: {
					scaleX: 0,
					transition: { duration: 0.6, ease: [0.87, 0, 0.13, 1] },
				},
			};

		case "curtains":
			return {
				hidden: { scale: 0.8, opacity: 0 },
				visible: {
					scale: 1,
					opacity: 1,
					transition: { duration: 0.8, ease: [0.87, 0, 0.13, 1] },
				},
				exit: {
					scale: 1.2,
					opacity: 0,
					transition: { duration: 0.6, ease: [0.87, 0, 0.13, 1] },
				},
			};

		case "wipe":
			return {
				hidden: { x: "100%", opacity: 0 },
				visible: {
					x: "0%",
					opacity: 1,
					transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
				},
				exit: {
					x: "-100%",
					opacity: 0,
					transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
				},
			};

		default:
			return {
				hidden: { opacity: 0 },
				visible: { opacity: 1 },
				exit: { opacity: 0 },
			};
	}
};

export default PageManager;
export { usePageContext };
