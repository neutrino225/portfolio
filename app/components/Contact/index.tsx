/** @format */
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCopy, FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

const Contact = () => {
	const [copied, setCopied] = useState<boolean>(false);
	const email = "fznkrmt22503@gmail.com";

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(email);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (error) {
			console.error("Failed to copy text: ", error);
		}
	};

	const buttonVariants = {
		hover: { scale: 1.05 },
		tap: { scale: 0.95 },
	};

	return (
		<section
			id="contact"
			className="mx-auto w-full max-w-4xl pb-12 px-4 md:px-6 flex flex-col items-center gap-10">
			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
				[ Get In Touch ]
			</motion.h1>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				className="w-full max-w-3xl text-center">
				<p className="text-gray-400 text-base md:text-lg mb-6 leading-relaxed">
					Whether you have a project idea, need consultation, or just want to
					connect - I&apos;m always open to new opportunities and conversations.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{/* Email Button */}
					<motion.button
						variants={buttonVariants}
						whileHover="hover"
						whileTap="tap"
						onClick={handleCopy}
						className="flex items-center justify-center gap-2 p-4 rounded-lg bg-gray-800/40 backdrop-blur-sm border border-gray-700/30 hover:border-cyan-400/30 transition-all">
						<FiMail className="text-lg text-cyan-400" />
						<span className="text-gray-300 font-normal">Copy Email</span>
					</motion.button>

					{/* LinkedIn Button */}
					<motion.a
						variants={buttonVariants}
						whileHover="hover"
						whileTap="tap"
						href="https://www.linkedin.com/in/faizan-karamat/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center gap-2 p-4 rounded-lg bg-gray-800/40 backdrop-blur-sm border border-gray-700/30 hover:border-cyan-400/30 transition-all">
						<FiLinkedin className="text-lg text-cyan-400" />
						<span className="text-gray-300 font-normal">LinkedIn</span>
					</motion.a>

					{/* GitHub Button */}
					<motion.a
						variants={buttonVariants}
						whileHover="hover"
						whileTap="tap"
						href="https://github.com/neutrino225/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center gap-2 p-4 rounded-lg bg-gray-800/40 backdrop-blur-sm border border-gray-700/30 hover:border-cyan-400/30 transition-all">
						<FiGithub className="text-lg text-cyan-400" />
						<span className="text-gray-300 font-normal">GitHub</span>
					</motion.a>
				</div>
			</motion.div>

			<AnimatePresence>
				{copied && (
					<motion.div
						className="fixed bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 bg-gray-800/80 backdrop-blur-sm text-green-400 px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}>
						<FiCopy className="text-base" />
						<span className="font-normal">Email copied to clipboard!</span>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default Contact;
