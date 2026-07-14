const experience = [
	{
		period: "Now",
		company: "CarbonTeq",
		role: "Software Engineer",
		place: "Lahore",
		detail:
			"Building production software across product interfaces, backend systems, and practical AI workflows.",
	},
	{
		period: "2025",
		company: "IVY Interactive Solutions",
		role: "Software Developer",
		place: "Islamabad",
		detail:
			"Worked on automated project planning, real-time analytics for early risk detection, deployments, and technical documentation.",
	},
	{
		period: "2024",
		company: "CarbonTeq",
		role: "AI Intern",
		place: "Lahore",
		detail:
			"Built RAG and predictive-analytics work, then automated model delivery through CI/CD.",
	},
	{
		period: "2022",
		company: "CarbonTeq",
		role: "Full-stack Development Intern",
		place: "Lahore",
		detail:
			"Developed authenticated REST APIs with JWT and MongoDB, and built a DNS client to work directly with the protocol.",
	},
];

function ExperienceTimeline({ compact = false }: { compact?: boolean }) {
	return (
		<ol className="relative ml-1 border-l border-primary/20" aria-label="Experience timeline">
			{experience.map((item) => (
				<li
					key={`${item.company}-${item.role}`}
					className={`relative pl-6 last:pb-0 ${compact ? "pb-6" : "pb-7"}`}>
					<span
						aria-hidden="true"
						className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-primary shadow-[0_0_0_4px_rgba(222,219,200,0.08)]"
					/>
					<div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
						<p className="text-xs font-bold text-primary/58">{item.period}</p>
						<p className="text-xs text-primary/62">{item.place}</p>
					</div>
					<div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
						<h3 className="text-sm font-bold text-cream">{item.role}</h3>
						<p className="text-sm text-primary/68">{item.company}</p>
					</div>
					<p className="mt-2 max-w-2xl text-sm leading-6 text-primary/68">{item.detail}</p>
				</li>
			))}
		</ol>
	);
}

export default function About() {
	return (
		<section className="grid gap-10 md:grid-cols-[0.82fr_1.18fr] md:items-start md:gap-16">
			<div className="md:sticky md:top-28">
				<p className="section-label">About</p>
				<h2 className="mt-4 max-w-2xl text-3xl font-normal leading-[1.04] text-cream sm:text-4xl lg:text-5xl">
					I build things to understand them better.
				</h2>
				<p className="mt-5 max-w-xl text-sm leading-7 text-primary/72 sm:text-base">
					A paper, a confusing workflow, or a protocol I have only met through a
					library is usually enough to send me into the system. I follow the
					friction until I can make something useful from it.
				</p>
			</div>

			<div className="hidden md:block" aria-label="Experience">
				<ExperienceTimeline />
			</div>

			<details className="group md:hidden">
				<summary className="focus-ring flex min-h-12 cursor-pointer list-none items-center justify-between border-b border-primary/12 py-3 text-sm font-bold text-cream">
					Experience
					<span className="text-lg font-normal text-primary/62 transition-transform group-open:rotate-45">+</span>
				</summary>
				<div className="pt-6">
					<ExperienceTimeline compact />
				</div>
			</details>
		</section>
	);
}
