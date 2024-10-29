/** @format */
"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface ProjectProps {
	title: string;
	description: string;
	github: string;
	demo?: string;
	imagePaths?: string[];
}

const ProjectCard = ({
	title,
	description,
	github,
	demo,
	imagePaths,
}: ProjectProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.1 1"],
	});
	const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentImage, setCurrentImage] = useState(0);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setCurrentImage(0);
		setIsModalOpen(false);
	};

	return (
		<div className="bg-transparent rounded-3xl hover:shadow-[0_0px_10px_rgba(8,_112,_184,_0.7)]">
			<motion.div
				ref={ref}
				style={{
					scale: scale,
					opacity: scrollYProgress,
				}}
				className="w-full bg-card rounded-3xl p-6 flex flex-col justify-start items-start gap-5"
				onClick={handleOpenModal}>
				{imagePaths && imagePaths[0] && (
					<Image
						src={imagePaths[0]}
						alt={`${title} cover`}
						layout="responsive" // Makes the image adapt to its container
						width={800} // Set to a higher resolution
						height={500} // Adjust the height accordingly
						className="w-full h-auto rounded-xl object-cover" // Ensures clear scaling
					/>
				)}
				<div className="w-full flex justify-between items-center">
					<h1 className="text-xl md:text-2xl text-slate-200 font-semibold">
						{title}
					</h1>
					<div className="flex justify-center items-center gap-3">
						<div className="relative group">
							<a
								href={github}
								target="_blank"
								rel="noreferrer"
								className="text-slate-200 hover:text-gray-400 transition-colors">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={32}
									height={32}
									viewBox="0 0 24 24">
									<path
										fill="currentColor"
										d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path>
								</svg>
							</a>
						</div>

						{demo && (
							<div className="relative group">
								<a
									href={demo}
									target="_blank"
									rel="noreferrer"
									className="text-slate-200 hover:text-orange-500 transition-colors">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width={30}
										height={30}
										viewBox="0 0 24 24">
										<path
											fill="currentColor"
											d="M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 0 0-7.071-7.071L9.878 7.05L8.464 5.636l1.414-1.414a7 7 0 0 1 9.9 9.9zm-2.829 2.828l-1.414 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 0 0 7.07 7.071l1.415-1.414zm-.707-10.607l1.415 1.415l-7.072 7.07l-1.414-1.414z"></path>
									</svg>
								</a>
							</div>
						)}
					</div>
				</div>
				<p className="text-slate-200 text-base md:text-lg">{description}</p>
			</motion.div>

			{isModalOpen && (
				<motion.div
					className="fixed inset-0 flex items-center justify-center z-50"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}>
					<div className="bg-gray-900 rounded-lg p-8 w-full max-w-6xl relative overflow-hidden shadow-lg transition-transform transform">
						<button
							onClick={handleCloseModal}
							className="absolute top-4 right-4 text-white hover:text-gray-400 text-2xl transition-colors duration-200">
							&times;
						</button>

						<h2 className="text-4xl text-slate-200 font-bold mb-4 text-center leading-tight">
							{title}
						</h2>
						<p className="text-slate-300 mb-6 text-center text-lg leading-relaxed">
							{description}
						</p>

						{/* Display current image */}
						{imagePaths && imagePaths[currentImage] && (
							<div className="w-full h-full flex flex-col gap-4 justify-center items-center overflow-hidden">
								<Image
									src={imagePaths[currentImage]}
									alt={`${title} image`}
									layout="intrinsic"
									width={800}
									height={500}
									className="rounded-xl transition-transform duration-300 transform hover:scale-105 shadow-lg"
								/>

								{/* Stack of thumbnails */}
								<div className="w-full flex justify-center items-center gap-4 max-h-[50vh] overflow-y-hidden mt-4">
									{imagePaths.map((image, index) => (
										<motion.div
											key={index}
											className="rounded-xl cursor-pointer transition-transform duration-300"
											whileHover={{ scale: 1.05 }}
											onClick={() => setCurrentImage(index)}>
											<Image
												src={image}
												alt={`${title} thumbnail`}
												layout="fixed"
												width={200}
												height={200}
												className="rounded-xl shadow-md"
											/>
										</motion.div>
									))}
								</div>
							</div>
						)}

						{/* Links for GitHub and Demo */}
						<div className="flex justify-center mt-8 gap-4">
							<a
								href={github}
								target="_blank"
								rel="noreferrer"
								className="text-blue-500 text-lg hover:underline transition-all duration-200">
								GitHub
							</a>
							{demo && (
								<a
									href={demo}
									target="_blank"
									rel="noreferrer"
									className="text-orange-500 text-lg hover:underline transition-all duration-200">
									Demo
								</a>
							)}
						</div>
					</div>
				</motion.div>
			)}
		</div>
	);
};

export default ProjectCard;
