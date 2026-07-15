"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import About from "../../About";
import Skills from "../../Skills";
import Contact from "../../Contact";
import Footer from "../../Footer";
import ProjectSlide from "../Projects/ProjectSlide";
import { projects } from "@/lib/projects";

const ease = [0.16, 1, 0.3, 1] as const;
const featuredProjectSlugs = ["briefly", "campushive", "pixel-arrays", "ai-enabled-blockchain"] as const;

function WordsPullUp({ text }: { text: string }) {
	const ref = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true });

	return (
		<span ref={ref} className="inline-flex flex-wrap">
			{text.split(" ").map((word, index) => (
				<span key={`${word}-${index}`} className="overflow-hidden pb-[0.06em]">
					<motion.span
						initial={{ y: 26 }}
						animate={isInView ? { y: 0 } : undefined}
						transition={{ duration: 0.85, delay: index * 0.08, ease }}
						className="mr-[0.12em] inline-block">
						{word}
					</motion.span>
				</span>
			))}
		</span>
	);
}

export default function Home() {
	const [resumeNotice, setResumeNotice] = useState(false);
	const featuredProjects = featuredProjectSlugs.flatMap((slug) => {
		const project = projects.find((candidate) => candidate.slug === slug);
		return project ? [project] : [];
	});
	const technicalProjects = projects.filter(
		(project) => !featuredProjectSlugs.some((slug) => slug === project.slug),
	);

	useEffect(() => {
		if (!resumeNotice) return;
		const timer = window.setTimeout(() => setResumeNotice(false), 2400);
		return () => window.clearTimeout(timer);
	}, [resumeNotice]);

	const scrollToSection = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};

	const downloadResume = () => {
		const link = document.createElement("a");
		link.href = "/resume/faizan-karamat-full-stack.pdf";
		link.download = "Faizan-Karamat-Resume.pdf";
		link.click();
		setResumeNotice(true);
	};

	return (
		<div className="portfolio-shell relative w-full overflow-hidden">
			<section id="landing" className="cinematic-frame relative min-h-screen">
				<div className="noise-overlay" />
				<div className="relative z-10 flex min-h-screen flex-col justify-end px-5 pb-8 pt-24 sm:px-8 md:px-10 md:pb-10 lg:px-12">
					<div className="grid gap-10 lg:grid-cols-12 lg:items-end">
						<h1
							aria-label="Faizan Karamat"
							className="text-[23vw] font-normal leading-[0.82] tracking-normal text-cream sm:text-[20vw] md:text-[17vw] lg:col-span-8 lg:text-[12.4vw] xl:text-[11.2vw]">
							<WordsPullUp text="Faizan Karamat" />
						</h1>

						<motion.div
							initial={{ y: 18 }}
							animate={{ y: 0 }}
							transition={{ duration: 0.75, delay: 0.45, ease }}
							className="flex flex-col gap-6 lg:col-span-4 lg:pb-5">
							<p className="max-w-md text-sm leading-6 text-primary/76 sm:text-base">
								I like turning small annoyances into usable software. These days I
								build production software at CarbonTeq; outside work, I keep following
								questions into web products, AI workflows, and small systems projects.
							</p>
							<div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
								<motion.button
									type="button"
									whileHover={{ y: -2 }}
									whileTap={{ scale: 0.98 }}
									onClick={() => scrollToSection("projects")}
									className="focus-ring group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-black transition-colors hover:bg-cream sm:text-base">
									See what I built
									<span className="grid h-8 w-8 place-items-center rounded-full bg-black text-primary">
										<FiArrowRight />
									</span>
								</motion.button>
								<motion.button
									type="button"
									whileHover={{ y: -2 }}
									whileTap={{ scale: 0.98 }}
									onClick={downloadResume}
									className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-primary/24 bg-black/30 px-5 py-3 text-sm font-bold text-primary/84 transition-colors hover:border-primary/44 hover:text-primary">
									<FiDownload /> Resume
								</motion.button>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			<section id="about" className="section-surface border-t border-primary/[0.08] px-5 pb-8 pt-14 sm:px-8 md:px-10 md:pb-10 md:pt-20">
				<div className="mx-auto flex max-w-6xl flex-col gap-8 md:gap-14">
					<About />
					<Skills />
				</div>
			</section>

			<section id="projects" className="section-surface border-t border-primary/[0.08] px-5 pb-14 pt-8 sm:px-8 md:px-10 md:pb-20 md:pt-10">
				<div className="mx-auto max-w-7xl">
					<div className="mb-8 md:mb-10">
						<p className="section-label">Selected work</p>
					</div>

					<div className="flex flex-col gap-6 md:gap-10">
						{featuredProjects.map((project, index) => (
							<motion.div
								key={project.slug}
								initial={{ y: 26 }}
								whileInView={{ y: 0 }}
								viewport={{ once: true, margin: "-80px" }}
								transition={{ duration: 0.65, delay: index * 0.06, ease }}>
								<ProjectSlide project={project} index={index} />
							</motion.div>
						))}
					</div>

					<div className="mt-16 border-t border-primary/[0.08] pt-8 md:mt-24 md:pt-10">
						<p className="section-label">More projects</p>
						<div className="mt-5 space-y-2 md:mt-7">
							{technicalProjects.map((project, index) => (
								<Link
									key={project.slug}
									href={`/projects/${project.slug}`}
									className="focus-ring group grid gap-4 px-3 py-7 transition-colors hover:bg-primary/[0.035] sm:grid-cols-[2.5rem_1fr_auto] sm:gap-6 sm:py-9 md:items-start">
									<span className="pt-1 text-xs text-primary/40">0{index + 1}</span>
									<div>
										<h3 className="text-2xl font-normal leading-tight text-cream transition-colors group-hover:text-primary sm:text-3xl">{project.title}</h3>
										<p className="mt-3 max-w-3xl text-sm leading-6 text-primary/68 sm:text-base sm:leading-7">{project.description}</p>
										<ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-primary/48" aria-label={`${project.title} technology`}>
											{project.techStack.slice(0, 4).map((technology) => <li key={technology}>{technology}</li>)}
										</ul>
									</div>
									<span className="flex items-center gap-2 text-sm font-bold text-primary/70 transition-colors group-hover:text-primary sm:mt-1">
										View project <FiArrowRight className="transition-transform group-hover:translate-x-1" />
									</span>
								</Link>
							))}
						</div>
					</div>
				</div>
			</section>

			<section id="contact" className="section-surface border-t border-primary/[0.08] px-5 py-20 sm:px-8 md:px-10 md:py-28">
				<Contact />
			</section>

			{resumeNotice && (
				<motion.div
					role="status"
					initial={{ y: 16 }}
					animate={{ y: 0 }}
					className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-black">
					Resume downloaded
				</motion.div>
			)}

			<Footer />
		</div>
	);
}
