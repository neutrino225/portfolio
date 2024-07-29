/** @format */
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

	return (
		<section
			id="contact"
			className="mx-auto w-full md:w-3/4 flex flex-col justify-start items-center gap-5">
			<h1 className="text-lg md:text-xl uppercase text-blue-400 font-bold flex justify-center items-center gap-2">
				Contact <span className="w-4 h-1 bg-blue-400 rounded-2xl"></span>
			</h1>

			<div className="w-full flex max-md:flex-col justify-start items-start gap-10">
				<div className="w-full flex flex-col justify-start items-start gap-4">
					<p className="text-base md:text-lg text-slate-200">
						Got a question, proposal, project, or want to work together on
						something?
					</p>
					<motion.button
						onClick={handleCopy}
						className="inline-block bg-blue-400/50 text-white rounded px-3 py-2 hover:bg-blue-500/50 text-center font-bold"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}>
						{!copied ? "Copy email" : "Copied"}
					</motion.button>
				</div>
			</div>

			<AnimatePresence>
				{copied && (
					<motion.div
						className="fixed top-5 right-5 bg-card text-green-500 text-base font-semibold rounded-full py-4 px-7 shadow-lg"
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 100 }}>
						Email copied! 🎉
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default Contact;
