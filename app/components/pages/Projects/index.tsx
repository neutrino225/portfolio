"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectSlide from "./ProjectSlide";
import ProjectModal from "../../ProjectModal";
import { ProjectProps } from "../../ProjectCard";
import GlassButton from "../../GlassButton";
import { usePageContext } from "../../PageManager";

const projects = [
	{
		title: "Pixel Arrays",
		description:
			"This is a personal hobby website where I showcase images I've captured.",
		techStack: ["Next.js", "Tailwind", "Vercel"],
		keyFeatures: [
			"Minimal UI for image showcasing",
			"Optimized image loading",
			"Responsive design",
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
		description:
			"BTC Conversa uses conversational AI to simplify your banking experience.",
		techStack: ["React", "Node.js", "Express", "MongoDB"],
		keyFeatures: [
			"Conversational AI-powered banking assistant",
			"Secure authentication and user management",
			"Banking transaction insights",
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
		description:
			"RAG system using LangChain, Chroma, and Gemini Flash for PDF-based Q&A.",
		techStack: ["Python", "LangChain", "ChromaDB", "Gemini Flash"],
		keyFeatures: [
			"Retrieval-Augmented Generation (RAG) for better context awareness",
			"Handles large PDF documents efficiently",
			"Accurate responses with minimal hallucination",
		],
		github: "https://github.com/neutrino225/RAG-System",
	},
	{
		title: "DNS Client",
		description:
			"This powerful application parses domain names into A, AAAA, and CNAME records.",
		techStack: ["Python", "Sockets"],
		keyFeatures: [
			"Resolves A, AAAA, and CNAME records",
			"Lightweight and fast query processing",
			"Command-line interface for ease of use",
		],
		github: "https://github.com/neutrino225/dns-client",
	},
	{
		title: "Forth Interpreter",
		description:
			"This was a hobby project. I created an interpreter for a small subset of Forth.",
		techStack: ["Python"],
		keyFeatures: [
			"Custom interpreter for a subset of the Forth language",
			"Supports stack-based operations",
			"Implements basic arithmetic and control flow",
		],
		github: "https://github.com/neutrino225/Forth-Interpreter",
	},
];

const Projects = () => {
	const { navigateTo } = usePageContext();
	const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
		null
	);
	const [activeProject, setActiveProject] = useState(0);
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const scrollToProject = (index: number) => {
		setActiveProject(index);
		scrollContainerRef.current?.scrollTo({
			top: index * scrollContainerRef.current.clientHeight,
			behavior: "smooth",
		});
	};

	const handleScroll = () => {
		if (!scrollContainerRef.current) return;
		const containerHeight = scrollContainerRef.current.clientHeight;
		const scrollTop = scrollContainerRef.current.scrollTop;
		const newIndex = Math.round(scrollTop / containerHeight);
		setActiveProject(newIndex);
	};

	useEffect(() => {
		const container = scrollContainerRef.current;
		if (container) {
			container.addEventListener("scroll", handleScroll);
		}
		return () => {
			if (container) {
				container.removeEventListener("scroll", handleScroll);
			}
		};
	}, []);

	return (
		<div className="h-screen w-screen relative bg-black overflow-hidden">
			<motion.button
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.5, duration: 0.5 }}
				onClick={() => navigateTo("landing")}
				className="absolute top-8 left-8 z-30">
				<GlassButton size="small" variant="secondary" className="!bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/30">
					← Back
				</GlassButton>
			</motion.button>

			<div className="h-full w-full flex">
				<div
					ref={scrollContainerRef}
					className="flex-1 overflow-y-auto snap-y snap-mandatory custom-scrollbar-none"
					style={{ scrollSnapType: "y mandatory" }}>
					{projects.map((project, index) => (
						<motion.section
							key={index}
							className="h-screen w-full flex items-center justify-center snap-start px-8 md:px-24 py-32">
							<div className="w-full max-w-6xl h-full flex items-center justify-center">
								<ProjectSlide
									project={project}
									onViewDetails={() => setSelectedProject(project)}
								/>
							</div>
						</motion.section>
					))}
				</div>

				<div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-20">
					<div className="flex flex-col gap-4 bg-white/5 backdrop-blur-3xl p-3 rounded-full border border-white/10">
						{projects.map((_, index) => (
							<motion.button
								key={index}
								onClick={() => scrollToProject(index)}
								className={`w-1 transition-all duration-500 rounded-full ${
									activeProject === index
										? "bg-white h-12"
										: "bg-white/20 h-8 hover:bg-white/40"
								}`}
								whileHover={{ scale: 1.5 }}
								whileTap={{ scale: 0.9 }}
							/>
						))}
					</div>
				</div>
			</div>

			<AnimatePresence>
				{selectedProject && (
					<ProjectModal
						project={selectedProject}
						onClose={() => setSelectedProject(null)}
					/>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Projects;
