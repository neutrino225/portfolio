"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiCopy, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const links = [
	{ label: "LinkedIn", href: "https://www.linkedin.com/in/faizan-karamat/", icon: FiLinkedin },
	{ label: "GitHub", href: "https://github.com/neutrino225/", icon: FiGithub },
];

export default function Contact() {
	const [notice, setNotice] = useState<"copied" | "error" | null>(null);
	const email = "fznkrmt22503@gmail.com";

	useEffect(() => {
		if (!notice) return;
		const timer = window.setTimeout(() => setNotice(null), 2200);
		return () => window.clearTimeout(timer);
	}, [notice]);

	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText(email);
			setNotice("copied");
		} catch {
			setNotice("error");
		}
	};

	return (
		<section className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-20">
			<div>
				<p className="section-label">Contact</p>
				<h2 className="mt-5 max-w-3xl text-5xl font-normal leading-[0.96] text-cream sm:text-6xl md:text-7xl">Send me the messy version.</h2>
				<p className="mt-7 max-w-xl text-sm leading-7 text-primary/70 sm:text-base">
					I am most useful when a product has a real problem behind it: a workflow that is too slow, information that is hard to reach, or a system that needs to become easier to trust. Send the rough context first.
				</p>
			</div>

			<div className="space-y-1">
				<button type="button" onClick={copyEmail} className="focus-ring group flex min-h-16 w-full items-center justify-between gap-4 rounded-md px-3 py-4 text-left text-primary/76 transition-colors hover:bg-primary/[0.035] hover:text-cream">
					<span className="flex items-center gap-4"><FiMail /><span><span className="block text-sm font-bold">Copy email</span><span className="mt-1 block text-xs text-primary/68">{email}</span></span></span>
					<FiCopy className="transition-transform group-hover:-translate-y-0.5" />
				</button>
				{links.map(({ label, href, icon: Icon }) => (
					<a key={label} href={href} target="_blank" rel="noreferrer" className="focus-ring group flex min-h-16 items-center justify-between gap-4 rounded-md px-3 py-4 text-primary/76 transition-colors hover:bg-primary/[0.035] hover:text-cream">
						<span className="flex items-center gap-4"><Icon /><span className="text-sm font-bold">{label}</span></span>
						<FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
					</a>
				))}
			</div>

			<AnimatePresence>
				{notice && (
					<motion.div role="status" initial={{ y: 16 }} animate={{ y: 0 }} exit={{ y: 16 }} className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-black">
						{notice === "copied" ? "Email copied" : `Copy failed - email ${email}`}
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
