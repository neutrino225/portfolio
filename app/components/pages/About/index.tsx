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
					onClick={() => navigateTo("home")}
					className="absolute top-8 left-8 z-30">
					<GlassButton size="small" variant="secondary" className="!bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/30 !rounded-full">
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
							className="flex flex-col items-center gap-8 py-10">
							<h2 className="text-sm uppercase tracking-[0.3em] text-white/30 font-bold">
								Resume
							</h2>
							<p className="text-white/40 text-center max-w-md font-light text-lg">
								Download my resume to learn more about my experience and
								qualifications.
							</p>
							<GlassButton
								size="large"
								variant="primary"
								className="!bg-white !text-black !rounded-full !px-12 !py-4 font-bold hover:!scale-105 transition-transform"
								onClick={handleResumeDownload}>
								Download Resume
							</GlassButton>

							{showResumeAlert && (
								<motion.div
									initial={{ opacity: 0, y: 20, scale: 0.95 }}
									animate={{ opacity: 1, y: 0, scale: 1 }}
									exit={{ opacity: 0, y: 20, scale: 0.95 }}
									className="fixed bottom-10 left-1/2 -translate-x-1/2 px-8 py-4 bg-white text-black rounded-full font-bold shadow-[0_0_40px_rgba(255,255,255,0.2)] z-50 flex items-center gap-3">
									<div className="w-2 h-2 bg-black rounded-full animate-pulse" />
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
