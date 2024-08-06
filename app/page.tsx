/** @format */
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-start justify-start p-10 md:p-24 gap-16 md:gap-28 overflow-hidden">
			{/* main section */}
			<Main />

			{/* about section */}
			<About />

			{/* projects section */}
			<Projects />

			{/* skills section */}
			<Skills />

			{/* contact section */}
			<Contact />
		</main>
	);
}
