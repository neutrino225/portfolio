"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Plasma from "../../Plasma";
import GridBackground from "../../GridBackground";
import GlassButton from "../../GlassButton";
import { usePageContext } from "../../PageManager";
import AboutContent from "../../About";
import Skills from "../../Skills";
import Contact from "../../Contact";
import ProjectSlide from "../Projects/ProjectSlide";
import Footer from "../../Footer";

type Project = {
	title: string;
	slug: string;
	description: string;
	techStack: string[];
	keyFeatures: string[];
	github: string;
	demo?: string;
	imagePaths: string[];
};

const projectData: Project[] = [
	{
		title: "Pixel Arrays",
		slug: "pixel-arrays",
		description:
			"This is a personal hobby website where I showcase images I've captured. Built with minimal UI philosophy focusing on the imagery itself, the site provides a clean, distraction-free experience for viewing photography.",
		techStack: ["Next.js", "Tailwind CSS", "Vercel"],
		keyFeatures: [
			"Minimal UI for pure image showcasing",
			"Optimized image loading with Next.js Image component",
			"Fully responsive design across all devices",
			"Fast page loads with static generation",
		],
		github: "https://github.com/neutrino225/pixelarrays",
		demo: "https://pixelarrays.vercel.app/",
		imagePaths: [
			"/pixel_arrays_ss/1.png",
			"/pixel_arrays_ss/2.png",
			"/pixel_arrays_ss/3.png",
			"/pixel_arrays_ss/4.png",
		],
	},
	{
		title: "BTC Conversa",
		slug: "btc-conversa",
		description:
			"BTC Conversa uses conversational AI to simplify your banking experience. The application provides an intelligent chat interface that helps users understand their transactions, get insights about their spending patterns, and receive personalized financial advice.",
		techStack: ["React", "Node.js", "Express", "MongoDB"],
		keyFeatures: [
			"Conversational AI-powered banking assistant",
			"Secure authentication and user management system",
			"Banking transaction insights and categorization",
			"Real-time chat with context awareness",
			"Personalized financial recommendations",
		],
		github: "https://github.com/neutrino225/BTCConversa.git",
		imagePaths: [
			"/btc_conversa_ss/1.png",
			"/btc_conversa_ss/2.png",
			"/btc_conversa_ss/3.png",
			"/btc_conversa_ss/4.png",
			"/btc_conversa_ss/5.png",
			"/btc_conversa_ss/6.png",
		],
	},
	{
		title: "Context-Aware PDF Question Answering",
		slug: "pdf-qa-system",
		description:
			"A sophisticated Retrieval-Augmented Generation (RAG) system using LangChain, ChromaDB, and Google's Gemini Flash model. This system enables intelligent Q&A over PDF documents with minimal hallucination and high accuracy in responses.",
		techStack: ["Python", "LangChain", "ChromaDB", "Gemini Flash"],
		keyFeatures: [
			"Retrieval-Augmented Generation for better context awareness",
			"Handles large PDF documents efficiently",
			"Accurate responses with minimal hallucination",
			"Vector-based semantic search",
			"Document chunking and intelligent retrieval",
		],
		github: "https://github.com/neutrino225/RAG-System",
		imagePaths: [],
	},
	{
		title: "DNS Client",
		slug: "dns-client",
		description:
			"A powerful command-line application that parses domain names into A (IPv4), AAAA (IPv6), and CNAME records. Built from scratch using Python sockets, this lightweight tool demonstrates deep understanding of DNS protocol.",
		techStack: ["Python", "Sockets", "DNS Protocol"],
		keyFeatures: [
			"Resolves A, AAAA, and CNAME records accurately",
			"Lightweight and fast query processing",
			"Command-line interface for ease of use",
			"Custom DNS packet construction and parsing",
			"Caching support for improved performance",
		],
		github: "https://github.com/neutrino225/dns-client",
		imagePaths: [],
	},
	{
		title: "Forth Interpreter",
		slug: "forth-interpreter",
		description:
			"A hobby project where I created an interpreter for a small subset of Forth programming language. Forth is a stack-based language known for its simplicity and efficiency in embedded systems.",
		techStack: ["Python", "Interpreters", "Stack-based Languages"],
		keyFeatures: [
			"Custom interpreter for a subset of Forth language",
			"Supports stack-based operations",
			"Implements basic arithmetic operations",
			"Supports control flow structures",
			"Interactive REPL for immediate execution",
		],
		github: "https://github.com/neutrino225/Forth-Interpreter",
		imagePaths: [],
	},
];

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

const Home = () => {
	const { navigateTo } = usePageContext();
	const [showResumeAlert, setShowResumeAlert] = useState(false);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const handleResumeDownload = () => {
		setShowResumeAlert(true);
	};

	useEffect(() => {
		if (showResumeAlert) {
			const timer = setTimeout(() => setShowResumeAlert(false), 3000);
			return () => clearTimeout(timer);
		}
	}, [showResumeAlert]);

	const handleProjectClick = (project: Project) => {
		window.location.href = `/projects/${project.slug}`;
	};

	return (
		<div className="relative w-full overflow-hidden bg-[#050505]">
			<div className="relative z-10">
				{/* Landing Section */}
				<section
					id="landing"
					className="relative min-h-screen w-screen flex flex-col items-center justify-center p-10 gap-16 md:gap-24 pt-20 overflow-hidden">
					<GridBackground gridSize={40} gridColor="rgba(255, 255, 255, 0.05)" />

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
						className="flex flex-col items-center justify-center gap-6 relative z-10">
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
						className="flex flex-col sm:flex-row gap-6 items-center relative z-10">
						<GlassButton
							size="large"
							variant="primary"
							className="!bg-white !text-black !rounded-full !px-14 !py-5 font-bold hover:!scale-105 transition-transform"
							onClick={() => scrollToSection("projects")}>
							View Projects
						</GlassButton>
						<GlassButton
							size="large"
							variant="secondary"
							className="!rounded-full !px-14 !py-5 !border-white/10 hover:!bg-white/5 hover:!border-white/20 transition-all !text-white"
							onClick={() => scrollToSection("about")}>
							About Me
						</GlassButton>
					</motion.div>

					<motion.div
						className="w-min flex flex-col justify-start items-start gap-5 relative z-10"
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
				</section>

				{/* About Section */}
				<section
					id="about"
					className="min-h-screen w-full px-6 md:px-10 py-20 md:py-24 bg-[#050505]">
					<div className="max-w-4xl mx-auto flex flex-col gap-16 md:gap-20">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}>
							<AboutContent />
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}>
							<Skills />
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
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
								className="!bg-white/5 !text-white !rounded-full !px-12 !py-4 font-bold hover:!bg-white/10 hover:!scale-105 transition-all !border-white/10"
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
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.6 }}>
							<Contact />
						</motion.div>
					</div>
				</section>

				{/* Projects Section */}
				<section
					id="projects"
					className="min-h-screen w-screen px-8 md:px-24 py-20 bg-[#050505]">
					<motion.div
						className="max-w-7xl mx-auto h-full"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}>
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-20 tracking-tighter">
							Featured Projects
						</motion.h2>
						<div className="flex flex-col gap-24">
							{projectData.map((project: Project, index: number) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, margin: "-100px" }}
									transition={{ duration: 0.8, delay: index * 0.1 }}
									className="flex flex-col items-center">
									<ProjectSlide
										project={project}
										index={index}
										onClick={() => handleProjectClick(project)}
									/>
									{index < projectData.length - 1 && (
										<div className="w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />
									)}
								</motion.div>
							))}
						</div>
					</motion.div>
				</section>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
