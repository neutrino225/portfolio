"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";
import type { Project } from "@/lib/projects";

interface ProjectDetailProps {
	project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
	return (
		<main className="min-h-screen bg-black text-cream">
			<header className="px-5 pb-16 pt-8 sm:px-8 md:px-10 md:pb-24">
				<div className="mx-auto max-w-7xl">
					<Link href="/#projects" className="text-link"><FiArrowLeft /> Back to work</Link>
					<div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-10">
						<div>
							<h1 className="max-w-5xl text-5xl font-normal leading-[0.94] text-cream sm:text-6xl md:text-8xl">{project.title}</h1>
						</div>
						<div>
							<p className="text-sm leading-7 text-primary/74 sm:text-base">{project.description}</p>
							<div className="mt-7 flex flex-wrap gap-3">
								{project.demo && <a className="primary-link" href={project.demo} target="_blank" rel="noreferrer">Open live app <FiExternalLink /></a>}
								{project.github && <a className="secondary-link" href={project.github} target="_blank" rel="noreferrer"><FiGithub /> View source</a>}
							</div>
						</div>
					</div>
				</div>
			</header>

			{project.imagePaths.length > 0 && (
				<section aria-label={`${project.title} gallery`} className="px-5 py-8 sm:px-8 md:px-10 md:py-12">
					<div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
						{project.imagePaths.map((path, index) => (
							<motion.figure
								key={path}
								initial={{ y: 16 }}
								whileInView={{ y: 0 }}
								viewport={{ once: true }}
								className={`relative overflow-hidden rounded-lg bg-[#111] ${index === 0 ? "aspect-[16/9] md:col-span-2" : "aspect-[16/10]"}`}>
								<Image src={path} alt={`${project.title} interface`} fill sizes={index === 0 ? "100vw" : "(min-width: 768px) 50vw, 100vw"} className="object-cover" />
							</motion.figure>
						))}
					</div>
				</section>
			)}

			<section className="px-5 py-14 sm:px-8 md:px-10 md:py-20">
				<div className="mx-auto grid max-w-7xl gap-12 border-t border-primary/[0.08] pt-8 md:grid-cols-[0.72fr_1.28fr] md:gap-16 md:pt-10">
					<div className="max-w-md">
						<p className="section-label">What stayed with me</p>
						<p className="mt-5 text-sm leading-7 text-primary/70 sm:text-base">{project.reflection}</p>
					</div>

					<div>
						<p className="section-label">Core behavior</p>
						<ol className="mt-5 space-y-1">
							{project.keyFeatures.map((feature, index) => (
								<li key={feature} className="grid grid-cols-[2rem_1fr] gap-3 py-3 text-sm leading-6 text-primary/76 sm:grid-cols-[2.5rem_1fr] sm:text-base sm:leading-7">
									<span className="text-xs text-primary/44">0{index + 1}</span>
									<span>{feature}</span>
								</li>
							))}
						</ol>

						<div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-primary/60" aria-label="Built with">
							{project.techStack.map((technology) => <span key={technology}>{technology}</span>)}
						</div>
					</div>
				</div>
			</section>

			<footer className="border-t border-primary/[0.08] px-5 py-10 sm:px-8 md:px-10">
				<div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
					<p className="text-sm text-primary/68">Faizan Karamat</p>
					<Link href="/#projects" className="text-link">More work <FiArrowLeft className="rotate-180" /></Link>
				</div>
			</footer>
		</main>
	);
}
