"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard";
import { ProjectProps } from "../ProjectCard";
import ProjectModal from "../ProjectModal";

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
	const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
		null
	);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	const titleVariants = {
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0 },
	};

	return (
		<section
			id="work"
			className="mx-auto w-full md:w-3/4 h-full flex flex-col gap-10">
			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="text-xl text-center md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
				[ Featured Projects ]
			</motion.h1>

			<motion.div
				className="grid grid-cols-1 md:grid-cols-2 gap-12"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}>
				{projects.map((project, index) => (
					<motion.div
						key={index}
						variants={itemVariants}
						whileHover={{ scale: 1.01 }}
						transition={{ type: "spring", stiffness: 300 }}
						className="cursor-pointer"
						onClick={() => setSelectedProject(project)}>
						<ProjectCard
							title={project.title}
							description={project.description}
							github={project.github}
							demo={project.demo}
							imagePaths={project.imagePaths}
							techStack={project.techStack}
						/>
					</motion.div>
				))}
			</motion.div>

			{selectedProject && (
				<ProjectModal
					project={selectedProject}
					onClose={() => setSelectedProject(null)}
				/>
			)}
		</section>
	);
};

export default Projects;
