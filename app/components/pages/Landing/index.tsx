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
		<div className="relative h-screen w-screen overflow-hidden bg-black">
			<div className="absolute inset-0 z-0 opacity-40">
				<Plasma color="#ffffff" speed={0.2} opacity={1.0} scale={2.0} />
			</div>

			<div className="relative z-10 h-full flex flex-col items-center justify-center p-10 gap-16 md:gap-24">
				<motion.div
					className="w-min flex flex-col justify-start items-start gap-5"
					initial="hidden"
					animate="visible"
					variants={parentVariants}>
					{Array(4).fill(0).map((_, i) => (
						<motion.div
							key={`left-${i}`}
							variants={barVariants}
							className="w-full flex gap-1">
							<span
								className={`h-3 md:h-4 rounded-3xl bg-white/20`}
								style={{
									width: `${Math.random() * 100 + 50}px`,
								}}
							/>
							<span
								className={`h-3 md:h-4 rounded-3xl bg-white/10`}
								style={{
									width: `${Math.random() * 150 + 50}px`,
								}}
							/>
							<span
								className={`h-3 md:h-4 rounded-3xl bg-white/30`}
								style={{
									width: `${Math.random() * 80 + 20}px`,
								}}
							/>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						ease: [0.61, 1, 0.88, 1],
						duration: 1,
						delay: 0.5,
					}}
					className="flex flex-col items-center justify-center gap-4">
					<h1 className="text-5xl md:text-8xl lg:text-9xl text-white font-bold text-center tracking-tighter">
						Faizan Karamat
					</h1>
					<div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mt-2">
						<h2 className="text-xl md:text-3xl text-white/40 font-light tracking-widest uppercase">
							Full Stack Developer
						</h2>
						<span className="hidden md:inline text-white/10 text-2xl">|</span>
						<h2 className="text-xl md:text-3xl text-white/40 font-light tracking-widest uppercase">
							AI/ML Engineer
						</h2>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 1.2 }}
					className="flex flex-col sm:flex-row gap-8 items-center">
					<GlassButton
						size="large"
						variant="primary"
						className="!bg-white !text-black !rounded-full !px-12 !py-4 font-bold"
						onClick={() => navigateTo("projects")}>
						View Projects
					</GlassButton>
					<GlassButton
						size="large"
						variant="secondary"
						className="!rounded-full !px-12 !py-4 !border-white/20 hover:!bg-white/5"
						onClick={() => navigateTo("about")}>
						About Me
					</GlassButton>
				</motion.div>

				<motion.div
					className="w-min flex flex-col justify-start items-start gap-5"
					initial="hidden"
					animate="visible"
					variants={parentVariants2}>
					{Array(4).fill(0).map((_, i) => (
						<motion.div
							key={`right-${i}`}
							variants={barVariants}
							className="w-full flex gap-1">
							<span
								className={`h-3 md:h-4 rounded-3xl bg-white/20`}
								style={{
									width: `${Math.random() * 100 + 50}px`,
								}}
							/>
							<span
								className={`h-3 md:h-4 rounded-3xl bg-white/30`}
								style={{
									width: `${Math.random() * 80 + 20}px`,
								}}
							/>
							<span
								className={`h-3 md:h-4 rounded-3xl bg-white/10`}
								style={{
									width: `${Math.random() * 150 + 50}px`,
								}}
							/>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 1.2 }}
					className="flex flex-col sm:flex-row gap-6">
					<GlassButton
						size="large"
						variant="primary"
						onClick={() => navigateTo("projects")}>
						View Projects
					</GlassButton>
					<GlassButton
						size="large"
						variant="secondary"
						onClick={() => navigateTo("about")}>
						About Me
					</GlassButton>
				</motion.div>
			</div>
		</div>
	);
};

export default Landing;
