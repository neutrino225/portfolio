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
			className="mx-auto w-full md:w-3/4 flex flex-col justify-center items-center gap-7">
			<h1 className="text-base md:text-lg uppercase text-blue-400 font-bold flex justify-center items-center gap-2">
				[ Contact ]
			</h1>

			<div className="w-full flex max-md:flex-col justify-start items-start gap-10">
				<div className="w-full flex flex-col justify-start items-start gap-4">
					<p className="text-base md:text-lg text-slate-200">
						Got a question, proposal, project, or want to work together on
						something?
					</p>
					<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-7">
						{/* <motion.button
							onClick={handleCopy}
							className="inline-block bg-gradient-to-r from-[#232526] to-[#414345] text-white rounded px-3 py-2 hover:bg-blue-500/50 text-center font-bold"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}></motion.button> */}

						<motion.button
							onClick={handleCopy}
							className="flex flex-row justify-start items-center group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16  w-full md:w-96 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
							{!copied ? "Copy email" : "Copied"}
						</motion.button>

						<motion.a
							href="https://www.linkedin.com/in/faizan-karamat/"
							target="_blank"
							className="flex flex-row justify-start items-center group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16  w-full md:w-96 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
							LinkedIn
						</motion.a>

						<motion.a
							href="https://github.com/neutrino225/"
							target="_blank"
							className="flex flex-row justify-start items-center group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16  w-full md:w-96 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
							Github
						</motion.a>
					</div>
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
