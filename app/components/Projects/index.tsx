/** @format */

import React from "react";
import ProjectCard from "../ProjectCard";
import Image from "next/image";

const conversa = [
	"/pixel_arrays_ss/1.png",
	"/pixel_arrays_ss/2.png",
	"/pixel_arrays_ss/3.png",
	"/pixel_arrays_ss/4.png",
];

const Projects = () => {
	return (
		<section
			id="work"
			className="mx-auto w-full md:w-2/4  flex flex-col justify-center items-center gap-7">
			<div className="flex gap-2 items-center">
				<h1 className="text-base md:text-lg uppercase text-blue-400 font-bold">
					[ Projects ]
				</h1>
			</div>

			<div className="w-full grid grid-cols-1 md:grid-cols-1 gap-5">
				<ProjectCard
					title="Pixel Arrays"
					description="This is a personal hobby website where I showcase the images I've captured."
					github="https://github.com/neutrino225/pixelarrays"
					demo="https://pixelarrays.vercel.app/"
					imagePaths={conversa}
				/>

				<ProjectCard
					title="BTC Conversa"
					description="BTC Conversa uses conversational AI to simplify your banking experience. Manage your account, view transactions, and get personalized insights—effortlessly."
					github="https://github.com/neutrino225/BTCConversa.git"
					imagePaths={[
						"/btc_conversa_ss/1.png",
						"/btc_conversa_ss/2.png",
						"/btc_conversa_ss/3.png",
						"/btc_conversa_ss/4.png",
						"/btc_conversa_ss/5.png",
						"/btc_conversa_ss/6.png",
					]}
				/>

				<ProjectCard
					title="Context-Aware PDF Question Answering"
					description="RAG system using LangChain, Chroma, and Gemini Flash for PDF-based Q&A."
					github="https://github.com/neutrino225/RAG-System"
				/>

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
			</div>
		</section>
	);
};

export default Projects;
