"use client";

import React from "react";
import { motion } from "framer-motion";
import Plasma from "../../Plasma";
import GlassButton from "../../GlassButton";
import { usePageContext } from "../../PageManager";

const parentVariants = {
	hidden: { x: "-10vw", opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 1, staggerChildren: 0.2 },
	},
};

const parentVariants2 = {
	hidden: { x: "10vw", opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 1, staggerChildren: 0.2 },
	},
};

const barVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5 },
	},
};

const Landing = () => {
	const { navigateTo } = usePageContext();

	return (
		<div className="relative h-screen w-screen overflow-hidden bg-[#050505]">
			<div className="absolute inset-0 z-0 opacity-40">
				<Plasma color="#ffffff" speed={0.15} opacity={1.0} scale={1.2} />
			</div>

			<div className="relative z-10 h-full flex flex-col items-center justify-center p-10 gap-16 md:gap-24 pt-20">
				<motion.div
					className="w-min flex flex-col justify-start items-start gap-5"
					initial="hidden"
					animate="visible"
					variants={parentVariants}>
					{Array(3).fill(0).map((_, i) => (
						<motion.div
							key={`left-${i}`}
							variants={barVariants}
							className="w-full flex gap-1">
							<span
								className={`h-2 md:h-3 rounded-3xl bg-white/10`}
								style={{
									width: `${Math.random() * 80 + 40}px`,
								}}
							/>
							<span
								className={`h-2 md:h-3 rounded-3xl bg-white/5`}
								style={{
									width: `${Math.random() * 120 + 40}px`,
								}}
							/>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						ease: [0.61, 1, 0.88, 1],
						duration: 1,
						delay: 0.2,
					}}
					className="flex flex-col items-center justify-center gap-6">
					<h1 className="text-6xl sm:text-7xl md:text-9xl text-white font-bold text-center tracking-tighter leading-none">
						Faizan Karamat
					</h1>
					<div className="flex flex-col md:flex-row items-center gap-3 md:gap-8 mt-2">
						<h2 className="text-lg sm:text-xl md:text-2xl text-white/30 font-light tracking-[0.2em] uppercase text-center">
							Full Stack Developer
						</h2>
						<span className="hidden md:inline text-white/10 text-xl font-thin">/</span>
						<h2 className="text-lg sm:text-xl md:text-2xl text-white/30 font-light tracking-[0.2em] uppercase text-center">
							AI/ML Engineer
						</h2>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
					className="flex flex-col sm:flex-row gap-6 items-center">
					<GlassButton
						size="large"
						variant="primary"
						className="!bg-white !text-black !rounded-full !px-14 !py-5 font-bold hover:!scale-105 transition-transform"
						onClick={() => navigateTo("home")}>
						<span className="relative z-10 text-black">View Projects</span>
					</GlassButton>
					<GlassButton
						size="large"
						variant="secondary"
						className="!rounded-full !px-14 !py-5 !border-white/10 hover:!bg-white/5 hover:!border-white/20 transition-all"
						onClick={() => navigateTo("home")}>
						About Me
					</GlassButton>
				</motion.div>

				<motion.div
					className="w-min flex flex-col justify-start items-start gap-5"
					initial="hidden"
					animate="visible"
					variants={parentVariants2}>
					{Array(3).fill(0).map((_, i) => (
						<motion.div
							key={`right-${i}`}
							variants={barVariants}
							className="w-full flex gap-1">
							<span
								className={`h-2 md:h-3 rounded-3xl bg-white/5`}
								style={{
									width: `${Math.random() * 120 + 40}px`,
								}}
							/>
							<span
								className={`h-2 md:h-3 rounded-3xl bg-white/10`}
								style={{
									width: `${Math.random() * 80 + 40}px`,
								}}
							/>
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default Landing;
