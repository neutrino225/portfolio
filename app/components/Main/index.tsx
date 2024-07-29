/** @format */
"use client";
import React from "react";

import { motion } from "framer-motion";

const parentVariants = {
	hidden: { x: "-10vw", opacity: 0 }, // Start off-screen to the left
	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 1, staggerChildern: 1 },
	}, // Animate to the center
};

const parentVariants2 = {
	hidden: { x: "10vw", opacity: 0 }, // Start off-screen to the left
	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 1, staggerChildern: 1 },
	}, // Animate to the center
};

const Main = () => {
	return (
		<section
			id="home"
			className="mx-auto w-full md:w-3/4 h-full flex flex-col gap-10 mt-28 md:mt-16">
			<motion.div
				className="w-min flex flex-col justify-start items-start gap-5"
				initial="hidden"
				animate="visible"
				variants={parentVariants}>
				{/* Color Bars */}
				<div className="w-full flex gap-1">
					<span className="w-24 h-3 md:h-4 rounded-3xl bg-blue-300/70"></span>
					<span className="w-28 md:w-96 h-3 md:h-4 rounded-3xl bg-red-300/70"></span>
					<span className="w-20 h-3 md:h-4 rounded-3xl bg-green-300/70"></span>
					<span className="w-5 h-3 md:h-4 rounded-3xl bg-purple-300/70"></span>
				</div>

				<div className="w-full flex gap-1">
					<span className="w-5 h-3 md:h-4 rounded-full bg-transparent"></span>
					<span className="w-32 h-3 md:h-4 rounded-full bg-yellow-300/70"></span>
					<span className="w-14 h-3 md:h-4 rounded-full bg-blue-300/70"></span>
					<span className="w-28 h-3 md:h-4 rounded-full bg-teal-300/70"></span>
				</div>

				<div className="w-full flex gap-1">
					<span className="w-20 h-3 md:h-4 rounded-full bg-green-300/70"></span>
					<span className="w-24 h-3 md:h-4 rounded-full bg-red-300/70"></span>
					<span className="w-16 h-3 md:h-4 rounded-full bg-blue-300/70"></span>
					<span className="w-20 h-3 md:h-4 rounded-full bg-purple-300/70"></span>
				</div>

				<div className="w-full flex gap-1">
					<span className="w-10 h-3 md:h-4 rounded-full bg-transparent"></span>
					<span className="w-56 md:w-96 h-3 md:h-4 rounded-full bg-red-300/70"></span>
					<span className="w-10 h-3 md:h-4 rounded-full bg-purple-300/70"></span>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ ease: [0.61, 1, 0.88, 1], duration: 1 }}
				className="w-full flex flex-col justify-start items-start ml-5 md:ml-10">
				<h1 className="text-3xl md:text-5xl text-slate-200 font-bold">
					Faizan Karamat
				</h1>
				<h2 className="text-xl md:text-2xl text-slate-200 font-light">
					FullStack Developer
				</h2>
			</motion.div>

			{/* Color Bars */}
			<motion.div
				className="w-min flex flex-col justify-start items-start gap-5"
				initial="hidden"
				animate="visible"
				variants={parentVariants2}>
				<div className="w-full flex gap-1">
					<span className="w-24 md:w-24 h-3 md:h-4 rounded-3xl bg-blue-300/70"></span>
					<span className="w-5 md:w-5 h-3 md:h-4 rounded-3xl bg-purple-300/70"></span>
					<span className="w-40 md:w-80 h-3 md:h-4 rounded-3xl bg-red-300/70"></span>
					<span className="w-10 md:w-20 h-3 md:h-4 rounded-3xl bg-green-300/70"></span>
				</div>
				<div className="w-full flex gap-1">
					<span className="w-10 h-3 md:h-4 rounded-full bg-transparent"></span>
					<span className="w-56 md:w-96 h-3 md:h-4 rounded-full bg-red-300/70"></span>
					<span className="w-10 h-3 md:h-4 rounded-full bg-purple-300/70"></span>
				</div>
				<div className="w-full flex gap-1">
					<span className="w-5 h-3 md:h-4 rounded-full bg-transparent"></span>
					<span className="w-32 h-3 md:h-4 rounded-full bg-yellow-300/70"></span>
					<span className="w-14 h-3 md:h-4 rounded-full bg-blue-300/70"></span>
					<span className="w-28 h-3 md:h-4 rounded-full bg-teal-300/70"></span>
				</div>
				<div className="w-full flex gap-1">
					<span className="w-20 h-3 md:h-4 rounded-full bg-green-300/70"></span>
					<span className="w-24 h-3 md:h-4 rounded-full bg-red-300/70"></span>
					<span className="w-16 h-3 md:h-4 rounded-full bg-blue-300/70"></span>
					<span className="w-20 h-3 md:h-4 rounded-full bg-purple-300/70"></span>
				</div>
			</motion.div>
		</section>
	);
};

export default Main;
