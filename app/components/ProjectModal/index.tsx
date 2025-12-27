// import React from "react";
// import Image from "next/image";
// import { ProjectProps } from "../ProjectCard";

// interface ProjectModalProps {
// 	project: ProjectProps;
// 	onClose: () => void;
// }

// const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
// 	if (!project) return null; // Don't render if no project is selected

// 	return (
// 		<div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
// 			<div className="bg-[#0b0b0b] scroller w-full h-full md:w-2/4 md:h-5/6 p-8 rounded-2xl overflow-y-auto relative">
// 				{/* Close Button */}
// 				<button
// 					onClick={onClose}
// 					className="absolute top-3 right-3 text-white hover:text-gray-400">
// 					<svg
// 						xmlns="http://www.w3.org/2000/svg"
// 						className="h-6 w-6"
// 						fill="none"
// 						viewBox="0 0 24 24"
// 						stroke="currentColor">
// 						<path
// 							strokeLinecap="round"
// 							strokeLinejoin="round"
// 							strokeWidth={2}
// 							d="M6 18L18 6M6 6l12 12"
// 						/>
// 					</svg>
// 				</button>

// 				{/* Grid Layout */}
// 				<div className="grid md:grid-cols-2 gap-6 mt-2">
// 					{/* Left Card - Title & Description */}
// 					<div className="bg-[#212121] border border-gray-800 p-4 rounded-xl">
// 						<h1 className="text-2xl font-bold">{project.title}</h1>
// 						<p className="mt-2 text-gray-400">{project.description}</p>

// 						{/* Tech Stack */}
// 						{project.techStack && (
// 							<div className="mt-6">
// 								<h2 className="text-lg font-semibold text-white">Tech Stack</h2>
// 								<div className="flex flex-wrap gap-2 mt-2">
// 									{project.techStack.map((tech, index) => (
// 										<span
// 											key={index}
// 											className="bg-gray-800 text-gray-300 px-3 py-1 text-sm rounded-lg">
// 											{tech}
// 										</span>
// 									))}
// 								</div>
// 							</div>
// 						)}
// 					</div>

// 					{/* Right Card - Tech Stack & Links */}
// 					<div className="bg-[#212121] border border-gray-800 p-4 rounded-xl flex flex-col justify-between">
// 						{/* Key Features (if available) */}
// 						{project.keyFeatures && (
// 							<div className="">
// 								<h2 className="text-lg font-semibold text-white">
// 									Key Features
// 								</h2>
// 								<ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
// 									{project.keyFeatures.map((feature, index) => (
// 										<li key={index}>{feature}</li>
// 									))}
// 								</ul>
// 							</div>
// 						)}

// 						{/* Links */}
// 						<div className="flex gap-4 mt-6">
// 							<a
// 								href={project.github}
// 								target="_blank"
// 								rel="noopener noreferrer"
// 								className="bg-[#1f1f1f] hover:bg-[#292929] text-white px-4 py-2 rounded-lg text-center w-full">
// 								GitHub
// 							</a>

// 							{project.demo && (
// 								<a
// 									href={project.demo}
// 									target="_blank"
// 									rel="noopener noreferrer"
// 									className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center w-full">
// 									Live Demo
// 								</a>
// 							)}
// 						</div>
// 					</div>
// 				</div>

// 				{/* Image Scroller (Full Width) */}
// 				{project.imagePaths && project.imagePaths.length > 0 && (
// 					<div className="mt-6">
// 						<h2 className="text-lg font-semibold text-white mb-2">
// 							Screenshots
// 						</h2>
// 						<div className="flex overflow-x-auto space-x-4 p-2">
// 							{project.imagePaths.map((image, index) => (
// 								<div key={index} className="flex-shrink-0 w-60">
// 									<Image
// 										src={image}
// 										alt={`Screenshot ${index + 1}`}
// 										width={240}
// 										height={150}
// 										className="rounded-lg"
// 									/>
// 								</div>
// 							))}
// 						</div>
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// export default ProjectModal;

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectProps } from "../ProjectCard";

interface ProjectModalProps {
	project: ProjectProps;
	onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
	const [activeImage, setActiveImage] = React.useState(0);

	if (!project) return null;

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: { delay: i * 0.1, duration: 0.5 },
		}),
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-50 p-4">
			<motion.div
				initial={{ scale: 0.9, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				className="bg-black w-full max-w-5xl rounded-3xl shadow-3xl relative overflow-hidden border border-white/10">
				{/* Close Button */}
				<button
					onClick={onClose}
					className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-50 border border-white/10">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 text-gray-300"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>

				<div className="p-6 scroller overflow-y-auto max-h-[80vh]">
					{/* Top Cards Grid */}
					<div className="mt-6 grid md:grid-cols-2 gap-6 mb-8">
						{/* Left Card */}
						<motion.div
							variants={cardVariants}
							custom={0}
							initial="hidden"
							animate="visible"
							className="bg-white/[0.02] p-8 rounded-2xl backdrop-blur-md border border-white/10">
							<h1 className="text-4xl font-bold text-white tracking-tight">
								{project.title}
							</h1>
							<p className="mt-6 text-white/50 leading-relaxed text-lg font-light">
								{project.description}
							</p>

							{project.techStack && (
								<div className="mt-10">
									<h2 className="text-sm uppercase tracking-widest text-white/30 font-semibold mb-4">
										Tech Stack
									</h2>
									<div className="flex flex-wrap gap-3">
										{project.techStack.map((tech, index) => (
											<motion.span
												key={index}
												whileHover={{ scale: 1.05 }}
												className="px-4 py-2 text-sm rounded-lg bg-white/5 border border-white/5 text-white/70 font-medium">
												{tech}
											</motion.span>
										))}
									</div>
								</div>
							)}
						</motion.div>

						{/* Right Card */}
						<motion.div
							variants={cardVariants}
							custom={1}
							initial="hidden"
							animate="visible"
							className="bg-white/[0.02] p-8 rounded-2xl backdrop-blur-md border border-white/10 flex flex-col justify-between">
							{project.keyFeatures && (
								<div>
									<h2 className="text-sm uppercase tracking-widest text-white/30 font-semibold mb-6">
										Key Features
									</h2>
									<ul className="space-y-4">
										{project.keyFeatures.map((feature, index) => (
											<li
												key={index}
												className="flex items-start text-white/50 font-light">
												<span className="text-white/20 mr-3 mt-1 text-xs">●</span>
												{feature}
											</li>
										))}
									</ul>
								</div>
							)}

							<div className="flex gap-4 mt-12">
								<motion.a
									whileHover={{ scale: 1.02 }}
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="flex-1 flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white px-6 py-4 rounded-xl border border-white/10 transition-all font-medium">
									<svg
										className="w-5 h-5"
										fill="currentColor"
										viewBox="0 0 24 24">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
									</svg>
									Source
								</motion.a>

								{project.demo && (
									<motion.a
										whileHover={{ scale: 1.02 }}
										href={project.demo}
										target="_blank"
										rel="noopener noreferrer"
										className="flex-1 flex items-center justify-center gap-3 bg-white text-black hover:bg-gray-200 px-6 py-4 rounded-xl transition-all font-bold">
										Live Demo
									</motion.a>
								)}
							</div>
						</motion.div>
					</div>

					{/* Image Carousel */}
					{project.imagePaths && project.imagePaths.length > 0 && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className="mt-8">
							{/* Main Image */}
							<div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group">
								<Image
									src={project.imagePaths[activeImage]}
									alt={`Screenshot ${activeImage + 1}`}
									fill
									className="object-cover transition-transform duration-700 group-hover:scale-105"
								/>
							</div>

							{/* Thumbnail Strip */}
							<div className="flex gap-4 mt-6 p-2 overflow-x-auto scroller custom-scrollbar-none">
								{project.imagePaths.map((image, index) => (
									<motion.div
										key={index}
										whileHover={{ scale: 1.05 }}
										onClick={() => setActiveImage(index)}
										className={`flex-shrink-0 w-32 h-20 cursor-pointer rounded-xl overflow-hidden border-2 ${
											activeImage === index
												? "border-white scale-105"
												: "border-white/10 hover:border-white/30"
										} transition-all duration-300`}>
										<Image
											src={image}
											alt={`Thumbnail ${index + 1}`}
											width={128}
											height={80}
											className={`object-cover h-full w-full transition-all duration-500 ${
												activeImage === index ? "grayscale-0" : "grayscale opacity-50"
											}`}
										/>
									</motion.div>
								))}
							</div>
						</motion.div>
					)}
				</div>
			</motion.div>
		</motion.div>
	);
};

export default ProjectModal;
