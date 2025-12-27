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
				className="text-sm md:text-base uppercase tracking-[0.3em] text-white/30 font-bold">
				[ Get In Touch ]
			</motion.h1>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				className="w-full max-w-4xl text-center">
				<p className="text-white/40 text-lg md:text-2xl mb-12 leading-relaxed font-light">
					Whether you have a project idea, need consultation, or just want to
					connect - I&apos;m always open to new opportunities and conversations.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* Email Button */}
					<motion.button
						variants={buttonVariants}
						whileHover="hover"
						whileTap="tap"
						onClick={handleCopy}
						className="flex items-center justify-center gap-4 p-6 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/5 hover:border-white/20 transition-all group">
						<FiMail className="text-xl text-white/20 group-hover:text-white transition-colors" />
						<span className="text-white/60 font-medium tracking-wide">Copy Email</span>
					</motion.button>

					{/* LinkedIn Button */}
					<motion.a
						variants={buttonVariants}
						whileHover="hover"
						whileTap="tap"
						href="https://www.linkedin.com/in/faizan-karamat/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center gap-4 p-6 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/5 hover:border-white/20 transition-all group">
						<FiLinkedin className="text-xl text-white/20 group-hover:text-white transition-colors" />
						<span className="text-white/60 font-medium tracking-wide">LinkedIn</span>
					</motion.a>

					{/* GitHub Button */}
					<motion.a
						variants={buttonVariants}
						whileHover="hover"
						whileTap="tap"
						href="https://github.com/neutrino225/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center gap-4 p-6 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/5 hover:border-white/20 transition-all group">
						<FiGithub className="text-xl text-white/20 group-hover:text-white transition-colors" />
						<span className="text-white/60 font-medium tracking-wide">GitHub</span>
					</motion.a>
				</div>
			</motion.div>

			<AnimatePresence>
				{copied && (
					<motion.div
						className="fixed bottom-12 right-12 bg-white text-black px-8 py-4 rounded-full flex items-center gap-3 shadow-2xl z-50 font-bold"
						initial={{ opacity: 0, y: 20, scale: 0.9 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 20, scale: 0.9 }}>
						<FiCopy className="text-lg" />
						<span>Email copied!</span>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default Contact;
