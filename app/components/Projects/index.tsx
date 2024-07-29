/** @format */

import React from "react";
import ProjectCard from "../ProjectCard";

const Projects = () => {
	return (
		<section
			id="work"
			className="mx-auto w-full md:w-3/4  flex flex-col justify-center items-center gap-5">
			<h1 className="text-lg md:text-xl uppercase text-blue-400 font-bold flex justify-center items-center gap-2">
				Projects <span className="w-4 h-1 bg-blue-400 rounded-2xl"></span>
			</h1>

			<div className="w-full grid grid-cols-1 md:grid-cols-1 gap-5">
				<ProjectCard
					title="DNS Client"
					description="This powerful application parses domain names into A, AAAA, and CNAME
				records, providing you with essential IP addresses and aliases."
					github="https://github.com/neutrino225/dns-client"
				/>

				<ProjectCard
					title="Forth Interpreter"
					description="This was a hobby project. I created an interpreter for a small subset of Forth (a stack VM based language)"
					github="https://github.com/neutrino225/Forth-Interpreter"
				/>

				<ProjectCard
					title="Pixel Arrays"
					description="This is a personal hobby website where I showcase the images I've captured."
					github="https://github.com/neutrino225/pixelarrays"
					demo="https://pixelarrays.vercel.app/"
				/>
			</div>
		</section>
	);
};

export default Projects;
