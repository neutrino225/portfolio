/** @format */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion/dom";

const variants = {
	hidden: { opacity: 0, y: 200 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			ease: [0.5, 1, 0.89, 1],
		},
	},
};

const About = () => {
	return (
		<motion.section
			initial="hidden"
			animate="visible"
			variants={variants}
			id="aboutme"
			className="mx-auto w-full md:w-3/4  flex flex-col justify-start items-center gap-5">
			<h1 className="text-base md:text-lg uppercase text-blue-400 font-bold flex justify-center items-center gap-2">
				[ About Me ]
			</h1>

			<div className="w-full flex flex-col justify-center items-start gap-3">
				<h1 className="text-xl md:text-2xl text-slate-100 font-semibold">
					Hi I&apos;m Faizan
				</h1>
				<p className="text-pretty text-base md:text-xl text-slate-200">
					I&apos;m a self-taught Full Stack Developer with a focus on the MERN
					stack (that&apos;s fancy talk for MongoDB, Express, React, and
					Node.js). I&apos;ve been at it for over 2 years now, and I&apos;m
					especially pumped about building user interfaces with tools like
					Next.js and Svelte. My code isn&apos;t just functional, it&apos;s fun
					to use! <br />
					Beyond web development, I&apos;m diving into the world of AI – machine
					learning and deep learning specifically. I&apos;m passionate about
					using technology to make things not just new, but better, more
					efficient, and way more user-friendly.
				</p>
			</div>
		</motion.section>
	);
};

export default About;
