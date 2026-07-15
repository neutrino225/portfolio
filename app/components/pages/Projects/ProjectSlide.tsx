"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiCpu, FiExternalLink, FiGithub, FiServer } from "react-icons/fi";
import type { Project } from "@/lib/projects";

interface ProjectSlideProps {
	project: Project;
	index?: number;
}

export default function ProjectSlide({ project, index = 0 }: ProjectSlideProps) {
	const isReversed = index % 2 === 1;

	return (
		<article className="grid overflow-hidden bg-[#0b0b0b] md:grid-cols-2">
			<div className={`order-2 flex flex-col justify-between p-5 sm:p-7 md:min-h-[390px] md:p-10 ${isReversed ? "md:order-2" : "md:order-1"}`}>
				<div>
					<div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-primary/70">
						<span>{project.projectType}</span>
						<span aria-hidden="true">/</span>
						<span>{project.status}</span>
					</div>
					<h3 className="mt-4 text-3xl font-normal leading-tight text-cream sm:text-4xl md:mt-6 md:text-5xl">{project.title}</h3>
					<p className="mt-4 line-clamp-4 max-w-xl text-sm leading-6 text-primary/72 sm:line-clamp-none md:mt-6 md:text-base md:leading-7">{project.description}</p>
				</div>

				<div className="mt-6 md:mt-10">
					<ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-primary/70" aria-label={`${project.title} technology`}>
						{project.techStack.slice(0, 4).map((tech) => <li key={tech}>{tech}</li>)}
					</ul>
					<div className="mt-5 flex items-center gap-3 md:mt-7">
						<Link className="primary-link flex-1 sm:flex-none" href={`/projects/${project.slug}`}>
							Read the build <FiArrowRight />
						</Link>
						{project.demo && (
							<a className="icon-link" href={project.demo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live`}>
								<FiExternalLink />
							</a>
						)}
						{project.github && (
							<a className="icon-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source`}>
								<FiGithub />
							</a>
						)}
					</div>
				</div>
			</div>

			<div className={`order-1 relative aspect-[16/10] overflow-hidden bg-[#141414] p-2 sm:p-3 md:aspect-auto md:min-h-[500px] md:p-4 ${isReversed ? "md:order-1" : "md:order-2"}`}>
				{project.imagePaths.length > 0 ? (
					<motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.4 }} className={`relative h-full min-h-0 overflow-hidden rounded-md md:rounded-lg ${project.imageFit === "contain" ? "bg-[#f7f7f3]" : "bg-black"}`}>
						<Image
							src={project.imagePaths[0]}
							alt={`${project.title} interface`}
							fill
							priority={index === 0}
							sizes="(min-width: 768px) 50vw, 100vw"
							className={project.imageFit === "contain" ? "object-contain p-3 sm:p-5" : "object-cover"}
						/>
					</motion.div>
				) : project.slug === "ai-enabled-blockchain" ? (
					<BlockchainPreview />
				) : (
					<div className="flex h-full min-h-0 flex-col justify-between p-5 sm:p-7">
						<p className="max-w-sm text-sm leading-6 text-primary/62">The interface is not the artifact here. The decisions are.</p>
						<div className="space-y-4">
							{project.decisions.slice(0, 3).map((decision) => (
								<p key={decision} className="text-sm leading-6 text-primary/74">{decision}</p>
							))}
						</div>
					</div>
				)}
			</div>
		</article>
	);
}

function BlockchainPreview() {
	return (
		<div className="flex h-full min-h-0 flex-col justify-between p-5 sm:p-7 md:p-9">
			<div className="flex items-center justify-between gap-4 text-xs text-primary/52">
				<span>Distributed mining trace</span>
				<span>3 nodes</span>
			</div>

			<div className="grid grid-cols-[minmax(0,0.9fr)_auto_minmax(0,1.1fr)] items-center gap-3 sm:gap-5">
				<div className="bg-black/50 p-4 sm:p-5">
					<FiServer className="text-lg text-primary/70" />
					<p className="mt-3 text-sm font-bold text-cream">Master</p>
					<p className="mt-1 hidden text-xs leading-5 text-primary/52 sm:block">Dispatch ML transactions</p>
				</div>

				<FiArrowRight className="text-primary/34" aria-hidden="true" />

				<div className="space-y-2 sm:space-y-3">
					{["Peer 01", "Peer 02"].map((peer) => (
						<div key={peer} className="flex items-center gap-3 bg-black/50 p-3 sm:p-4">
							<FiCpu className="shrink-0 text-base text-primary/62" />
							<div>
								<p className="text-xs font-bold text-cream sm:text-sm">{peer}</p>
								<p className="mt-1 hidden text-xs text-primary/48 sm:block">Execute · validate · mine</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<p className="text-xs leading-5 text-primary/52 sm:text-sm sm:leading-6">
				The first valid block propagates. Competing mining work is cancelled.
			</p>
		</div>
	);
}
