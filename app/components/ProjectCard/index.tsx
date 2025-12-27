/** @format */
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export interface ProjectProps {
  title: string;
	slug?: string;
  description: string;
  github: string;
  demo?: string;
  imagePaths?: string[];
  techStack?: string[];
  keyFeatures?: string[];
	onClick?: () => void;
}

const ProjectCard = ({
	title,
	description,
	github,
	demo,
	imagePaths,
	techStack,
}: ProjectProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.1 1"],
	});
	const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
	const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<motion.div
			ref={ref}
			style={{ scale, opacity }}
			className="group relative w-full rounded-3xl transition-all duration-300 hover:z-10">
			<div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/30 to-cyan-400/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

			<div className="relative h-full rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-900 backdrop-blur-sm border border-gray-700/30 p-6">
				{imagePaths?.[0] && (
					<motion.div
						whileHover={{ scale: 1.02 }}
						className="relative overflow-hidden rounded-xl mb-6 aspect-video">
						<Image
							src={imagePaths[0]}
							alt={`${title} cover`}
							fill
							className="object-cover transition-transform duration-300 group-hover:scale-105"
						/>
					</motion.div>
				)}

				<div className="flex flex-col gap-4">
					<div className="flex items-start justify-between gap-4">
						<h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
							{title}
						</h2>

						<div className="flex gap-3">
							<motion.a
								whileHover={{ scale: 1.1 }}
								href={github}
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
								aria-label="GitHub repository">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-gray-300"
									viewBox="0 0 24 24">
									<path
										fill="currentColor"
										d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
									/>
								</svg>
							</motion.a>

							{demo && (
								<motion.a
									whileHover={{ scale: 1.1 }}
									href={demo}
									target="_blank"
									rel="noopener noreferrer"
									className="p-2 rounded-lg bg-blue-600/50 hover:bg-blue-500/50 transition-colors"
									aria-label="Live demo">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 text-white"
										viewBox="0 0 24 24">
										<path
											fill="currentColor"
											d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82"
										/>
									</svg>
								</motion.a>
							)}
						</div>
					</div>

					<p className="text-gray-300 leading-relaxed">{description}</p>
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectCard;
