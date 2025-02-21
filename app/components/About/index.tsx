"use client";

import React from "react";
import { motion } from "framer-motion";

const textVariants = (i: number) => ({
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.1,
			duration: 0.7,
			ease: [0.25, 0.46, 0.45, 0.94],
		},
	},
});

const cardVariants = {
	hover: {
		y: -5,
		transition: { duration: 0.3, ease: "easeInOut" },
	},
};

const highlights = [
	{
		title: "Full-Stack Development",
		description:
			"MERN Stack · Next.js · TypeScript · Modern UI/UX · Scalable Architectures",
	},
	{
		title: "AI & Generative Technologies",
		description:
			"NLP · RAG Systems · Deep Learning · AI Chatbots · Model Optimization",
	},
];

const About = () => {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			id="aboutme"
			className="mx-auto w-full md:w-3/4 flex flex-col gap-8 py-9">
			{/* Section Title */}
			<motion.h1
				variants={textVariants(0)}
				className="text-base md:text-lg uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-bold text-center tracking-wider">
				[ About Me ]
			</motion.h1>

			{/* Introduction */}
			<motion.p
				variants={textVariants(1)}
				className="text-base md:text-lg leading-relaxed text-slate-300 text-center max-w-3xl mx-auto">
				I&apos;m Faizan, a self-taught full-stack developer and AI researcher
				passionate about building intuitive digital experiences and advancing
				NLP & Generative AI technologies.
			</motion.p>

			{/* Skills / Highlights */}
			<div className="grid gap-5 md:grid-cols-2">
				{highlights.map((item, i) => (
					<motion.div
						key={i}
						variants={textVariants(i + 2)}
						whileHover="hover"
						initial="hidden"
						animate="visible"
						className="group relative p-px rounded-xl overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

						<motion.div
							variants={cardVariants}
							className="relative h-full p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-900 backdrop-blur-sm border border-gray-700 hover:border-cyan-400/30 transition-all duration-300">
							<h3 className="mb-3 text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
								{item.title}
							</h3>
							<p className="text-base text-slate-300 leading-6">
								{item.description.split(" · ").map((point, index) => (
									<React.Fragment key={index}>
										<span className="inline-block mr-2 opacity-80">▹</span>
										{point}
										<br />
									</React.Fragment>
								))}
							</p>
						</motion.div>
					</motion.div>
				))}
			</div>

			{/* Closing Statement */}
			<motion.p
				variants={textVariants(4)}
				className="text-base md:text-lg leading-relaxed text-slate-400 text-center italic max-w-2xl mx-auto">
				&quot;When I&apos;m not architecting digital solutions, I&apos;m
				exploring neural networks or optimizing user experiences through
				data-driven design principles.&quot;
			</motion.p>
		</motion.section>
	);
};

export default About;
