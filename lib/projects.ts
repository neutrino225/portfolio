export interface Project {
	title: string;
	slug: string;
	description: string;
	role: string;
	status: string;
	projectType: "Product" | "System" | "Study";
	techStack: string[];
	keyFeatures: string[];
	decisions: string[];
	proof: string[];
	reflection: string;
	github?: string;
	demo?: string;
	imagePaths: string[];
	imageFit?: "cover" | "contain";
}

export const projects: Project[] = [
	{
		title: "Briefly",
		slug: "briefly",
		description:
			"Reading papers was starting to feel like a tax on curiosity. Before I could decide whether a paper deserved an hour, I had to decode the abstract, skim the method, and hunt for the actual finding. I built Briefly to make that first pass faster.",
		role: "Independent product and engineering",
		status: "Live product",
		projectType: "Product",
		techStack: ["Next.js", "Gemini", "Research UX", "Summarization"],
		keyFeatures: [
			"Turns research material into a structured first-pass brief",
			"Surfaces methods, findings, and useful follow-up questions",
			"Keeps the workflow focused on deciding what deserves a deeper read",
		],
		decisions: [
			"Designed the output around a researcher's reading decision instead of a generic chat response",
			"Kept the interface quiet so the paper and its findings remain the focus",
			"Used a constrained brief format to make different papers easier to compare",
		],
		proof: [
			"Working deployment available to inspect",
			"Built from a recurring problem in my own paper-reading workflow",
			"End-to-end product covering interface, prompt flow, and deployment",
		],
		reflection:
			"The useful part is not summarization by itself. It is deciding what information someone needs before they commit to reading deeply. That distinction shaped the product more than the model choice did.",
		demo: "https://briefly.neutrinolab.dev/",
		imagePaths: ["/briefly_ss/1.png"],
	},
	{
		title: "CampusHive",
		slug: "campushive",
		description:
			"University information was scattered across portals, handbooks, faculty pages, and files that students only found after asking the right person. For my final-year project, I built CampusHive: a multi-agent university assistant that routes each question to the part of the system equipped to answer it.",
		role: "System architecture, AI engineering, backend, and product development",
		status: "University final-year project",
		projectType: "System",
		techStack: ["LangGraph", "FastAPI", "RAG", "ChromaDB", "Next.js"],
		keyFeatures: [
			"Supervisor graph that routes requests across student, faculty, exam, timetable, degree-advising, and OBE agents",
			"Grounded university answers using Chroma, BM25, and MMR retrieval",
			"Role-based authentication, persistent conversations, file uploads, and administrative controls",
		],
		decisions: [
			"Split university tasks into specialized agents instead of forcing one prompt to understand every academic workflow",
			"Used a supervisor graph with explicit routes and fallbacks so agent selection remained inspectable",
			"Combined semantic and keyword retrieval because university documents contain both natural-language questions and exact institutional terms",
		],
		proof: [
			"Working multi-agent graph with dedicated student, faculty, exam, timetable, degree-advising, and OBE paths",
			"End-to-end FastAPI and Next.js system with JWT roles and persistent chat sessions",
			"Real university documents, faculty data, vector stores, ingestion tools, and automated tests",
		],
		reflection:
			"CampusHive changed how I think about agentic systems. The difficult part was not adding more agents; it was defining clear ownership, routing, retrieval, and fallback behavior so the whole system remained understandable when one path failed.",
		imagePaths: ["/campushive_ss/interface.png"],
	},
	{
		title: "Pixel Arrays",
		slug: "pixel-arrays",
		description:
			"I take photos too, and I wanted a small place for them that did not behave like a social feed. Pixel Arrays is intentionally quiet: the interface steps back and lets the photographs carry the page.",
		role: "Design and full-stack development",
		status: "Live project",
		projectType: "Product",
		techStack: ["Next.js", "Tailwind CSS", "Vercel"],
		keyFeatures: [
			"Minimal image-first browsing",
			"Responsive gallery layouts",
			"Optimized and lazy-loaded image delivery",
		],
		decisions: [
			"Removed social mechanics so the work is viewed without counters or feed pressure",
			"Used restrained typography and navigation to keep attention on the images",
			"Prioritized responsive image behavior because the photographs are the product",
		],
		proof: [
			"Working deployment and public source available",
			"Multiple responsive gallery views",
			"Built around my own photography rather than placeholder content",
		],
		reflection:
			"This project taught me that a good interface can be defined by what it refuses to compete with. The work was mostly subtraction, image behavior, and pacing.",
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
			"I wanted to see what banking would feel like if the interface was a conversation instead of a maze of tables. BTC Conversa explores chat as a way to explain transactions, patterns, and next steps.",
		role: "Frontend development and backend integration",
		status: "Completed build",
		projectType: "Product",
		techStack: ["Next.js", "Flask", "Rasa", "Tailwind CSS"],
		keyFeatures: [
			"Conversational interface for banking questions",
			"Responsive product UI built in Next.js",
			"Integration with an existing Flask and Rasa backend",
		],
		decisions: [
			"Changed Rasa responses from raw HTML to structured JSON for predictable rendering",
			"Separated conversational state from presentation so the interface could handle response types cleanly",
			"Designed transaction information for scanning inside a chat flow",
		],
		proof: [
			"Complete frontend and backend integration",
			"Structured response contract between Rasa and Next.js",
			"Public source and multi-screen product walkthrough",
		],
		reflection:
			"The important engineering decision was not the chat surface. It was replacing presentation-heavy backend responses with a data contract the frontend could reason about.",
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
		title: "AI-Enabled Blockchain",
		slug: "ai-enabled-blockchain",
		description:
			"I wanted to understand what changes when blockchain transactions carry executable ML work instead of only values. I built a Go master-peer network where peers run Python models, validate their outputs, compete on proof of work, and broadcast the winning block.",
		role: "Distributed systems and protocol implementation",
		status: "Technical project",
		projectType: "System",
		techStack: ["Go", "TCP", "Proof of Work", "Python", "Docker"],
		keyFeatures: [
			"Master-peer network that exchanges transactions and blocks over TCP",
			"ML-backed transactions whose Python outputs are recomputed and validated before mining",
			"Concurrent, cancellable miners that stop when a valid peer block arrives",
		],
		decisions: [
			"Implemented blocks, SHA-256 hashing, nonce search, and chain validation directly to keep the protocol mechanics visible",
			"Used Go channels and goroutines to separate incoming transactions, peer blocks, and mining work",
			"Packaged a master and two connected peers with Docker Compose for repeatable network simulation",
		],
		proof: [
			"Public source with the complete master-peer implementation",
			"Peer coordination, transaction pooling, output validation, and block propagation",
			"Dockerized three-node network with linear regression, KNN, and K-means workloads",
		],
		reflection:
			"The useful lesson was not that AI makes a blockchain better. It was seeing where computation, validation, consensus, and cancellation meet when several peers can finish the same work at different times.",
		github: "https://github.com/neutrino225/golang-ai-blockchain",
		imagePaths: [],
	},
	{
		title: "Context-Aware PDF Question Answering",
		slug: "pdf-qa-system",
		description:
			"PDFs hold useful information, but asking them direct questions is awkward. I built the retrieval path myself so answers could be generated from the document rather than from an unconstrained prompt.",
		role: "AI engineering",
		status: "Technical project",
		projectType: "System",
		techStack: ["Python", "LangChain", "ChromaDB", "Gemini Flash"],
		keyFeatures: ["PDF ingestion and chunking", "Vector retrieval", "Context-grounded answers"],
		decisions: [
			"Separated ingestion, retrieval, and generation so each stage could be inspected independently",
			"Used vector search to narrow context before generation",
			"Kept the answer path tied to retrieved document sections",
		],
		proof: ["Public source available", "End-to-end RAG pipeline", "Document-based question answering"],
		reflection:
			"Building the retrieval path made the limits clearer: answer quality depends as much on chunking and context selection as it does on the model.",
		github: "https://github.com/neutrino225/RAG-System",
		imagePaths: [],
	},
	{
		title: "DNS Client",
		slug: "dns-client",
		description:
			"I built this because I did not want DNS to stay a black box. The point was to construct the packets, send them over sockets, and inspect what a resolver is actually doing.",
		role: "Protocol implementation",
		status: "Technical study",
		projectType: "System",
		techStack: ["Python", "Sockets", "DNS Protocol"],
		keyFeatures: ["Manual packet construction", "A, AAAA, and CNAME lookups", "Raw response parsing"],
		decisions: [
			"Constructed DNS queries directly instead of calling a resolver library",
			"Parsed response bytes into records to understand the wire format",
			"Kept the command-line surface small so the protocol remained the focus",
		],
		proof: ["Public source available", "Socket-level implementation", "Multiple record types supported"],
		reflection:
			"The project replaced an API-shaped understanding of DNS with a packet-shaped one. That was the entire reason to build it.",
		github: "https://github.com/neutrino225/dns-client",
		imagePaths: [],
	},
	{
		title: "Forth Interpreter",
		slug: "forth-interpreter",
		description:
			"I wanted to understand interpreters by making one small enough to hold in my head. Forth was a good fit because its stack model is simple but still forces careful thinking about parsing and execution.",
		role: "Language implementation",
		status: "Technical study",
		projectType: "Study",
		techStack: ["Python", "Interpreters", "Stack-based Languages"],
		keyFeatures: ["Stack execution model", "Parser and evaluator", "Interactive REPL"],
		decisions: [
			"Used a compact stack model to make execution state visible",
			"Separated parsing from primitive operations",
			"Added a REPL so behavior could be explored one operation at a time",
		],
		proof: ["Public source available", "Working parser and evaluator", "Interactive execution loop"],
		reflection:
			"A deliberately small language was more useful for learning than a larger parser project because every execution step remained understandable.",
		github: "https://github.com/neutrino225/Forth-Interpreter",
		imagePaths: [],
	},
];

export const getProjectBySlug = (slug: string): Project | undefined =>
	projects.find((project) => project.slug === slug);
