export interface Project {
	title: string;
	slug: string;
	description: string;
	techStack: string[];
	keyFeatures: string[];
	github: string;
	demo?: string;
	imagePaths: string[];
}

export const projects: Project[] = [
	{
		title: "Pixel Arrays",
		slug: "pixel-arrays",
		description:
			"This is a personal hobby website where I showcase images I've captured. Built with minimal UI philosophy focusing on the imagery itself, the site provides a clean, distraction-free experience for viewing photography.",
		techStack: ["Next.js", "Tailwind CSS", "Vercel"],
		keyFeatures: [
			"Minimal UI for pure image showcasing",
			"Optimized image loading with Next.js Image component",
			"Fully responsive design across all devices",
			"Fast page loads with static generation",
		],
		github: "https://github.com/neutrino225/pixelarrays",
		demo: "https://pixelarrays.vercel.app/",
		imagePaths: [
			"/pixel_arrays_ss/1.png",
			"/pixel_arrays_ss/2.png",
			"/pixel_arrays_ss/3.png",
			"/pixel_arrays_ss/4.png",
		],
	},
	{
		title: "BTC Conversa",
		slug: "btc-conversa",
		description:
			"BTC Conversa uses conversational AI to simplify your banking experience. The application provides an intelligent chat interface that helps users understand their transactions, get insights about their spending patterns, and receive personalized financial advice.",
		techStack: ["React", "Node.js", "Express", "MongoDB"],
		keyFeatures: [
			"Conversational AI-powered banking assistant",
			"Secure authentication and user management system",
			"Banking transaction insights and categorization",
			"Real-time chat with context awareness",
			"Personalized financial recommendations",
		],
		github: "https://github.com/neutrino225/BTCConversa.git",
		imagePaths: [
			"/btc_conversa_ss/1.png",
			"/btc_conversa_ss/2.png",
			"/btc_conversa_ss/3.png",
			"/btc_conversa_ss/4.png",
			"/btc_conversa_ss/5.png",
			"/btc_conversa_ss/6.png",
		],
	},
	{
		title: "Context-Aware PDF Question Answering",
		slug: "pdf-qa-system",
		description:
			"A sophisticated Retrieval-Augmented Generation (RAG) system using LangChain, ChromaDB, and Google's Gemini Flash model. This system enables intelligent Q&A over PDF documents with minimal hallucination and high accuracy in responses.",
		techStack: ["Python", "LangChain", "ChromaDB", "Gemini Flash"],
		keyFeatures: [
			"Retrieval-Augmented Generation for better context awareness",
			"Handles large PDF documents efficiently",
			"Accurate responses with minimal hallucination",
			"Vector-based semantic search",
			"Document chunking and intelligent retrieval",
		],
		github: "https://github.com/neutrino225/RAG-System",
		imagePaths: [],
	},
	{
		title: "DNS Client",
		slug: "dns-client",
		description:
			"A powerful command-line application that parses domain names into A (IPv4), AAAA (IPv6), and CNAME records. Built from scratch using Python sockets, this lightweight tool demonstrates deep understanding of the DNS protocol.",
		techStack: ["Python", "Sockets", "DNS Protocol"],
		keyFeatures: [
			"Resolves A, AAAA, and CNAME records accurately",
			"Lightweight and fast query processing",
			"Command-line interface for ease of use",
			"Custom DNS packet construction and parsing",
			"Caching support for improved performance",
		],
		github: "https://github.com/neutrino225/dns-client",
		imagePaths: [],
	},
	{
		title: "Forth Interpreter",
		slug: "forth-interpreter",
		description:
			"A hobby project where I created an interpreter for a small subset of the Forth programming language. Forth is a stack-based language known for its simplicity and efficiency in embedded systems.",
		techStack: ["Python", "Interpreters", "Stack-based Languages"],
		keyFeatures: [
			"Custom interpreter for a subset of Forth language",
			"Supports stack-based operations",
			"Implements basic arithmetic operations",
			"Supports control flow structures",
			"Interactive REPL for immediate execution",
		],
		github: "https://github.com/neutrino225/Forth-Interpreter",
		imagePaths: [],
	},
];

export const getProjectBySlug = (slug: string): Project | undefined => {
	return projects.find((project) => project.slug === slug);
};
