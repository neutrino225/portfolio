const capabilities = [
	{ name: "Product", detail: "React, Next.js, TypeScript, responsive UI" },
	{ name: "Backend", detail: "Node.js, Express, Flask, REST, GraphQL" },
	{ name: "AI systems", detail: "AI agents, RAG, LangChain, Gemini, OpenAI APIs" },
	{
		name: "ML and vision",
		detail: "Computer vision, deep learning, multimodal models, PyTorch, TensorFlow",
	},
	{ name: "Delivery", detail: "PostgreSQL, MongoDB, Docker, CI/CD, monitoring" },
];

function CapabilityList() {
	return (
		<div className="grid gap-x-8 gap-y-6 md:grid-cols-2 xl:grid-cols-5">
			{capabilities.map((capability) => (
				<div
					key={capability.name}
					className="py-2 md:last:col-span-2 xl:last:col-span-1">
					<h3 className="text-sm font-bold text-cream">{capability.name}</h3>
					<p className="mt-2 text-sm leading-6 text-primary/68">{capability.detail}</p>
				</div>
			))}
		</div>
	);
}

export default function Skills() {
	return (
		<section id="skills">
			<div className="hidden md:block">
				<p className="section-label mb-4">Capabilities</p>
				<CapabilityList />
			</div>

			<details className="group md:hidden">
				<summary className="focus-ring flex min-h-12 cursor-pointer list-none items-center justify-between border-b border-primary/12 py-3 text-sm font-bold text-cream">
					Capabilities
					<span className="text-lg font-normal text-primary/62 transition-transform group-open:rotate-45">+</span>
				</summary>
				<div className="pt-2">
					<CapabilityList />
				</div>
			</details>
		</section>
	);
}
