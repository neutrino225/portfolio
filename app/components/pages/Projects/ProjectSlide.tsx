"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectProps } from "../../ProjectCard";
import GlassButton from "../../GlassButton";

interface ProjectSlideProps {
	project: ProjectProps;
	onViewDetails: () => void;
}

const ProjectSlide: React.FC<ProjectSlideProps> = ({
	project,
	onViewDetails,
}) => {
	return (
		<div className="w-full flex flex-col items-center justify-center">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="w-full flex flex-col items-center gap-8 md:gap-12">
				
				<div className="flex flex-col items-center gap-6">
					<h1 className="text-5xl md:text-8xl font-bold text-white text-center tracking-tight">
						{project.title}
					</h1>
					<div className="w-32 h-1 bg-white/10 rounded-full" />
				</div>

				{project.imagePaths && project.imagePaths.length > 0 && (
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1, delay: 0.2 }}
						className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-white/5 shadow-3xl shadow-white/5 group">
						<Image
							src={project.imagePaths[0]}
							alt={project.title}
							fill
							className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
						/>
						<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-1000" />
					</motion.div>
				)}

				<p className="text-lg md:text-2xl text-white/40 text-center max-w-3xl leading-relaxed font-light px-4">
					{project.description}
				</p>

				{project.techStack && (
					<div className="flex flex-wrap justify-center gap-3">
						{project.techStack.map((tech, index) => (
							<span
								key={index}
								className="px-5 py-2 rounded-full bg-white/[0.03] border border-white/5 text-white/50 text-sm md:text-base font-light hover:bg-white/5 hover:border-white/20 transition-all cursor-default">
								{tech}
							</span>
						))}
					</div>
				)}

				<div className="flex items-center gap-8 mt-4">
					<motion.a
						whileHover={{ scale: 1.1, color: "#fff" }}
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						className="text-white/20 transition-colors"
						aria-label="GitHub repository">
						<svg
							className="w-10 h-10"
							fill="currentColor"
							viewBox="0 0 24 24">
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
						</svg>
					</motion.a>

					<GlassButton size="large" onClick={onViewDetails} className="!bg-white !text-black !rounded-full !px-12 !py-4 hover:!scale-105 transition-transform font-bold tracking-tight">
						Explore Project
					</GlassButton>
				</div>
			</motion.div>
		</div>
	);
};

export default ProjectSlide;
