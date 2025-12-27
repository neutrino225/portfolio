"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// @ts-ignore
import { Project } from "../../../lib/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface ProjectDetailProps {
	project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
	return (
		<div className="min-h-screen w-full bg-[#050505] px-6 md:px-10 py-32 md:py-40">
			<div className="max-w-7xl mx-auto">
				{/* Back Button */}
				<motion.button
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					onClick={() => window.history.back()}
					className="mb-12 flex items-center gap-3 text-white/40 hover:text-white transition-colors group">
					<span className="group-hover:-translate-x-1 transition-transform">←</span>
					<span>Back to Projects</span>
				</motion.button>

				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="mb-20">
					<motion.h1
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-none mb-8">
						{project.title}
					</motion.h1>
					<div className="flex flex-wrap gap-3">
						{project.techStack.map((tech, index) => (
							<motion.span
								key={index}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
								className="px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 text-white/50 text-sm font-light tracking-wide uppercase">
								{tech}
							</motion.span>
						))}
					</div>
				</motion.div>

				{/* Image Gallery */}
				{project.imagePaths && project.imagePaths.length > 0 && (
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="mb-20">
						{project.imagePaths.length === 1 ? (
							<div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
								<Image
									src={project.imagePaths[0]}
									alt={project.title}
									fill
									className="object-cover"
								/>
							</div>
						) : (
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{project.imagePaths.map((img, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, scale: 0.95 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
										className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group bg-white/[0.02]">
										<Image
											src={img}
											alt={`${project.title} screenshot ${index + 1}`}
											fill
											className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
										/>
									</motion.div>
								))}
							</div>
						)}
					</motion.div>
				)}

				{/* Description */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="mb-20">
					<h2 className="text-xl md:text-2xl text-white/40 font-light tracking-widest uppercase mb-8">
						About
					</h2>
					<p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-4xl font-light">
						{project.description}
					</p>
				</motion.div>

				{/* Key Features */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					className="mb-20">
					<h2 className="text-xl md:text-2xl text-white/40 font-light tracking-widest uppercase mb-8">
						Key Features
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
						{project.keyFeatures.map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
								className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
								<div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-3 shrink-0" />
								<p className="text-base md:text-lg text-white/60 leading-relaxed font-light">
									{feature}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Tech Stack Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="mb-20">
					<h2 className="text-xl md:text-2xl text-white/40 font-light tracking-widest uppercase mb-8">
						Technologies Used
					</h2>
					<div className="flex flex-wrap gap-4 max-w-5xl">
						{project.techStack.map((tech, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
								className="px-8 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white/50 text-lg font-light tracking-wide hover:bg-white/[0.05] transition-all">
								{tech}
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Links Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.7 }}
					className="flex flex-col sm:flex-row gap-6 items-center pt-8">
					<motion.a
						whileHover={{ scale: 1.05 }}
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-4 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-white/90 transition-all">
						<FiGithub className="text-xl" />
						<span>View on GitHub</span>
					</motion.a>
					{project.demo && (
						<motion.a
							whileHover={{ scale: 1.05 }}
							href={project.demo}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-4 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-white/90 transition-all">
							<FiExternalLink className="text-xl" />
							<span>Live Demo</span>
						</motion.a>
					)}
				</motion.div>
			</div>
		</div>
	);
};

export default ProjectDetail;
