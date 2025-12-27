// "use client";

// import React from "react";
// import { FaReact, FaPython, FaNodeJs, FaAws } from "react-icons/fa";
// import {
// 	SiNextdotjs,
// 	SiTensorflow,
// 	SiFlask,
// 	SiMongodb,
// 	SiPostgresql,
// 	SiLangchain,
// 	SiDocker,
// 	SiKubernetes,
// 	SiMysql,
// } from "react-icons/si";

// const skills = [
// 	{
// 		category: "Frontend",
// 		items: [
// 			{ name: "React", icon: <FaReact className="text-2xl text-blue-400" /> },
// 			{
// 				name: "Next.js",
// 				icon: <SiNextdotjs className="text-2xl text-gray-100" />,
// 			},
// 			{ name: "TypeScript", icon: <span className="text-2xl">TS</span> },
// 		],
// 	},
// 	{
// 		category: "Backend",
// 		items: [
// 			{
// 				name: "Node.js",
// 				icon: <FaNodeJs className="text-2xl text-green-500" />,
// 			},
// 			{
// 				name: "Flask",
// 				icon: <SiFlask className="text-2xl text-teal-400" />,
// 			},
// 		],
// 	},
// 	{
// 		category: "AI/ML",
// 		items: [
// 			{
// 				name: "Python",
// 				icon: <FaPython className="text-2xl text-yellow-400" />,
// 			},
// 			{
// 				name: "TensorFlow",
// 				icon: <SiTensorflow className="text-2xl text-orange-400" />,
// 			},
// 			{
// 				name: "LangChain",
// 				icon: <SiLangchain className="text-2xl text-blue-400" />,
// 			},
// 		],
// 	},
// 	{
// 		category: "Databases",
// 		items: [
// 			{
// 				name: "PostgreSQL",
// 				icon: <SiPostgresql className="text-2xl text-blue-500" />,
// 			},
// 			{
// 				name: "MySQL",
// 				icon: <SiMysql className="text-2xl text-green-400" />,
// 			},
// 			{
// 				name: "MongoDB",
// 				icon: <SiMongodb className="text-2xl text-green-400" />,
// 			},
// 		],
// 	},
// 	{
// 		category: "Cloud & DevOps",
// 		items: [
// 			{ name: "AWS", icon: <FaAws className="text-2xl text-orange-500" /> },
// 			{ name: "Docker", icon: <SiDocker className="text-2xl text-blue-500" /> },
// 			{
// 				name: "Kubernetes",
// 				icon: <SiKubernetes className="text-2xl text-blue-400" />,
// 			},
// 		],
// 	},
// ];

// const Skills = () => {
// 	return (
// 		<section
// 			id="skills"
// 			className="mx-auto w-full py-12 px-4 md:px-8 backdrop-blur-sm">
// 			<div className="max-w-6xl mx-auto">
// 				<h1 className="text-base md:text-lg uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-bold text-center tracking-wider">
// 					[ Tools & Technologies ]
// 				</h1>

// 				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
// 					{skills.map((category) => (
// 						<div
// 							key={category.category}
// 							className="p-6 rounded-xl bg-gray-800/40 border border-gray-700/30 hover:border-cyan-400/30 transition-all">
// 							<h3 className="text-xl font-semibold text-cyan-400 mb-4">
// 								{category.category}
// 							</h3>
// 							<div className="space-y-4">
// 								{category.items.map((skill) => (
// 									<div
// 										key={skill.name}
// 										className="flex items-center gap-4 p-3 rounded-lg bg-gray-700/20 hover:bg-gray-700/40 transition-colors">
// 										<span className="shrink-0">{skill.icon}</span>
// 										<span className="text-gray-200 font-medium">
// 											{skill.name}
// 										</span>
// 									</div>
// 								))}
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Skills;
"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaNodeJs, FaAws } from "react-icons/fa";
import {
	SiNextdotjs,
	SiTensorflow,
	SiFlask,
	SiMongodb,
	SiPostgresql,
	SiLangchain,
	SiMysql,
	SiTypescript,
} from "react-icons/si";

const skills = [
	{
		category: "Frontend",
		items: [
			{ name: "React", icon: <FaReact className="text-2xl text-blue-400" /> },
			{
				name: "Next.js",
				icon: <SiNextdotjs className="text-2xl text-gray-100" />,
			},
			{
				name: "TypeScript",
				icon: <SiTypescript className="text-2xl text-blue-400" />,
			},
		],
	},
	{
		category: "Backend",
		items: [
			{
				name: "Node.js",
				icon: <FaNodeJs className="text-2xl text-green-500" />,
			},
			{
				name: "Flask",
				icon: <SiFlask className="text-2xl text-teal-400" />,
			},
		],
	},
	{
		category: "AI/ML",
		items: [
			{
				name: "Python",
				icon: <FaPython className="text-2xl text-yellow-400" />,
			},
			{
				name: "TensorFlow",
				icon: <SiTensorflow className="text-2xl text-orange-400" />,
			},
			{
				name: "LangChain",
				icon: <SiLangchain className="text-2xl text-blue-400" />,
			},
		],
	},
	{
		category: "Databases",
		items: [
			{
				name: "PostgreSQL",
				icon: <SiPostgresql className="text-2xl text-blue-500" />,
			},
			{
				name: "MySQL",
				icon: <SiMysql className="text-2xl text-green-400" />,
			},
			{
				name: "MongoDB",
				icon: <SiMongodb className="text-2xl text-green-400" />,
			},
		],
	},
];

const Skills = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	const skillItemVariants = {
		hidden: { opacity: 0, x: -10 },
		visible: { opacity: 1, x: 0 },
	};

	return (
		<section
			id="skills"
			className="mx-auto w-full py-12 px-4 md:px-8 backdrop-blur-sm">
			<div className="max-w-6xl mx-auto">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-base md:text-lg uppercase text-white/30 font-bold text-center tracking-widest mb-12">
					[ Tools & Technologies ]
				</motion.h1>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{skills.map((category, index) => (
						<motion.div
							key={category.category}
							variants={itemVariants}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500"
							whileHover={{
								y: -5,
								backgroundColor: "rgba(255, 255, 255, 0.04)",
							}}>
							<h3 className="text-xl font-bold text-white mb-6 tracking-tight">
								{category.category}
							</h3>
							<motion.div className="grid grid-cols-1 gap-4" variants={containerVariants}>
								{category.items.map((skill, skillIndex) => (
									<motion.div
										key={skill.name}
										variants={skillItemVariants}
										transition={{ delay: skillIndex * 0.05 }}
										className="flex items-center gap-5 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300">
										<span className="shrink-0 grayscale opacity-40 group-hover:opacity-100 transition-opacity">
											{skill.icon}
										</span>
										<span className="text-white/60 font-medium tracking-wide">
											{skill.name}
										</span>
									</motion.div>
								))}
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Skills;
