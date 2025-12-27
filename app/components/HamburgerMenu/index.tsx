"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiX, FiDownload } from "react-icons/fi";
import GlassButton from "../GlassButton";

interface HamburgerMenuProps {
	onNavigate: (page: "landing" | "about" | "projects") => void;
	currentPage: string;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
	onNavigate,
	currentPage,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleNavigate = (page: "landing" | "about" | "projects") => {
		setIsOpen(false);
		onNavigate(page);
	};

	const handleResumeDownload = () => {
		alert("Resume coming soon!");
		setIsOpen(false);
	};

	const handleCopyEmail = async () => {
		try {
			await navigator.clipboard.writeText("fznkrmt22503@gmail.com");
			alert("Email copied to clipboard!");
		} catch (error) {
			console.error("Failed to copy email:", error);
		}
	};

	const handleContactClick = () => {
		setIsOpen(false);
		onNavigate("about");
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	const menuItems = [
		{ label: "Home", page: "landing" as const },
		{ label: "About", page: "about" as const },
		{ label: "Projects", page: "projects" as const },
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				staggerChildren: 0.05,
				staggerDirection: -1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
		},
		exit: {
			opacity: 0,
			y: 30,
			transition: { duration: 0.3 },
		},
	};

	return (
		<>
			<motion.button
				onClick={() => setIsOpen(!isOpen)}
				className="fixed top-6 right-6 z-50 p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all"
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}>
				<AnimatePresence mode="wait">
					{!isOpen ? (
						<motion.svg
							key="menu"
							initial={{ rotate: -180, opacity: 0 }}
							animate={{ rotate: 0, opacity: 1 }}
							exit={{ rotate: 180, opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="w-6 h-6 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</motion.svg>
					) : (
						<motion.div
							key="close"
							initial={{ rotate: -180, opacity: 0 }}
							animate={{ rotate: 0, opacity: 1 }}
							exit={{ rotate: 180, opacity: 0 }}
							transition={{ duration: 0.2 }}>
							<FiX className="w-6 h-6 text-white" />
						</motion.div>
					)}
				</AnimatePresence>
			</motion.button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl">
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate="visible"
							exit="exit"
							className="h-full flex flex-col items-center justify-center gap-8">
							{menuItems.map((item) => (
								<motion.button
									key={item.label}
									variants={itemVariants}
									onClick={() => handleNavigate(item.page)}
									className={`
										text-5xl md:text-7xl font-bold tracking-tighter
										transition-all duration-500
										${
											currentPage === item.page
												? "text-white"
												: "text-white/20 hover:text-white/60"
										}
									`}>
									{item.label}
								</motion.button>
							))}

							<motion.div
								variants={itemVariants}
								className="w-24 h-px bg-white/10 my-4"
							/>

							<motion.button
								variants={itemVariants}
								onClick={handleContactClick}
								className="text-2xl md:text-3xl font-light text-white/40 hover:text-white transition-all duration-300 tracking-widest uppercase">
								Contact
							</motion.button>

							<motion.button
								variants={itemVariants}
								onClick={handleResumeDownload}
								className="text-2xl md:text-3xl font-light text-white/40 hover:text-white transition-all duration-300 tracking-widest uppercase">
								Resume
							</motion.button>

							<motion.div
								variants={itemVariants}
								className="flex gap-10 mt-12">
								<motion.a
									whileHover={{ scale: 1.1, y: -2 }}
									href="https://www.linkedin.com/in/faizan-karamat/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white/20 hover:text-white transition-colors">
									<FiLinkedin className="w-7 h-7" />
								</motion.a>

								<motion.a
									whileHover={{ scale: 1.1, y: -2 }}
									href="https://github.com/neutrino225/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white/20 hover:text-white transition-colors">
									<FiGithub className="w-7 h-7" />
								</motion.a>

								<motion.button
									whileHover={{ scale: 1.1, y: -2 }}
									onClick={handleCopyEmail}
									className="text-white/20 hover:text-white transition-colors">
									<FiMail className="w-7 h-7" />
								</motion.button>
							</motion.div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default HamburgerMenu;
