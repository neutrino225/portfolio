import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
	return (
		<div className="min-h-screen w-full bg-[#050505] flex items-center justify-center px-6">
			<div className="text-center max-w-2xl">
				<h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-6">
					404
				</h1>
				<p className="text-xl md:text-2xl text-white/40 mb-12 font-light">
					Project not found
				</p>
				<Link
					href="/#projects"
					className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-white/90 transition-all">
					<FiArrowLeft />
					<span>Back to Projects</span>
				</Link>
			</div>
		</div>
	);
}
