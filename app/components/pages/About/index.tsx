"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GlassButton from "../../GlassButton";
import { usePageContext } from "../../PageManager";
import AboutContent from "../../About";
import Skills from "../../Skills";
import Contact from "../../Contact";

const About = () => {
	const { navigateTo } = usePageContext();
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		container: scrollContainerRef,
		target: scrollContainerRef,
		offset: ["start start", "end end"],
	});
	const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);

	const [showResumeAlert, setShowResumeAlert] = useState(false);

	useEffect(() => {
		if (showResumeAlert) {
			const timer = setTimeout(() => setShowResumeAlert(false), 3000);
			return () => clearTimeout(timer);
		}
	}, [showResumeAlert]);

	const handleResumeDownload = () => {
		setShowResumeAlert(true);
	};

	return (
		<div className="h-full w-full relative">
			<motion.div
				style={{ opacity }}
				className="h-full w-full flex flex-col">
				<motion.button
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.5, duration: 0.5 }}
					onClick={() => navigateTo("landing")}
					className="absolute top-6 left-6 z-20">
					<GlassButton size="small" variant="secondary">
						← Back
					</GlassButton>
				</motion.button>

				<div
					ref={scrollContainerRef}
					className="flex-1 overflow-y-auto custom-scrollbar px-6 md:px-10 py-20 md:py-24">
					<div className="max-w-4xl mx-auto flex flex-col gap-16 md:gap-20">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}>
							<AboutContent />
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}>
							<Skills />
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="flex flex-col items-center gap-6">
							<h2 className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-bold">
								Resume
							</h2>
							<p className="text-gray-400 text-center max-w-md">
								Download my resume to learn more about my experience and
								qualifications.
							</p>
							<GlassButton
								size="large"
								variant="primary"
								onClick={handleResumeDownload}>
								Download Resume
							</GlassButton>

							{showResumeAlert && (
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									className="mt-4 px-6 py-3 bg-cyan-500/20 border border-cyan-400/30 rounded-lg text-cyan-300">
									Resume coming soon!
								</motion.div>
							)}
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}>
							<Contact />
						</motion.div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default About;
