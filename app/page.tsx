/** @format */
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
	return (
		<main className="relative flex min-h-screen flex-col items-start justify-start p-10 md:p-24 gap-16 md:gap-28 overflow-hidden">
			{/* CSS-based Gradient Backgrounds */}
			<div className="gradient-background" />
			<div className="static-gradient" />

			{/* Content Sections */}
			<div className="relative z-10 w-full">
				<Main />
			</div>

			<div className="relative z-10 w-full">
				<About />
			</div>

			<div className="relative z-10 w-full">
				<Projects />
			</div>

			<div className="relative z-10 w-full">
				<Skills />
			</div>

			<div className="relative z-10 w-full">
				<Contact />
			</div>
		</main>
	);
}
