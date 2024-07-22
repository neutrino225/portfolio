/** @format */
import Tools from "./components/Tools";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-start justify-start p-10 md:p-24 gap-16 md:gap-36 overflow-hidden">
			<section
				id="home"
				className="mx-auto w-full md:w-3/4 h-full flex flex-col gap-10 mt-28 md:mt-16">
				<div className="w-min flex flex-col justify-start items-start gap-5">
					{/* Color Bars */}
					<div className="w-full flex gap-1">
						<span className="w-24 h-3 md:h-4 rounded-3xl bg-blue-300/70"></span>
						<span className="w-40 md:w-96 h-3 md:h-4 rounded-3xl bg-red-300/70"></span>
						<span className="w-20 h-3 md:h-4 rounded-3xl bg-green-300/70"></span>
						<span className="w-5 h-3 md:h-4 rounded-3xl bg-purple-300/70"></span>
					</div>

					<div className="w-full flex gap-1">
						<span className="w-5 h-3 md:h-4 rounded-full bg-transparent"></span>
						<span className="w-32 h-3 md:h-4 rounded-full bg-yellow-300/70"></span>
						<span className="w-14 h-3 md:h-4 rounded-full bg-blue-300/70"></span>
						<span className="w-28 h-3 md:h-4 rounded-full bg-teal-300/70"></span>
					</div>

					<div className="w-full flex gap-1">
						<span className="w-20 h-3 md:h-4 rounded-full bg-green-300/70"></span>
						<span className="w-24 h-3 md:h-4 rounded-full bg-red-300/70"></span>
						<span className="w-16 h-3 md:h-4 rounded-full bg-blue-300/70"></span>
						<span className="w-20 h-3 md:h-4 rounded-full bg-purple-300/70"></span>
					</div>

					<div className="w-full flex gap-1">
						<span className="w-10 h-3 md:h-4 rounded-full bg-transparent"></span>
						<span className="w-64 md:w-96 h-3 md:h-4 rounded-full bg-red-300/70"></span>
						<span className="w-10 h-3 md:h-4 rounded-full bg-purple-300/70"></span>
					</div>
				</div>

				<div className="w-full flex flex-col justify-start items-start ml-5 md:ml-10">
					<h1 className="text-4xl md:text-5xl text-slate-200 font-bold">
						Faizan Karamat
					</h1>
					<h2 className="text-3xl md:text-2xl text-slate-200 font-light">
						FullStack Developer
					</h2>
				</div>

				{/* Color Bars */}
				<div className="w-min flex flex-col justify-start items-start gap-5">
					<div className="w-full flex gap-1">
						<span className="w-24 md:w-24 h-3 md:h-4 rounded-3xl bg-blue-300/70"></span>
						<span className="w-5 md:w-5 h-3 md:h-4 rounded-3xl bg-purple-300/70"></span>
						<span className="w-40 md:w-80 h-3 md:h-4 rounded-3xl bg-red-300/70"></span>
						<span className="w-10 md:w-20 h-3 md:h-4 rounded-3xl bg-green-300/70"></span>
					</div>
					<div className="w-full flex gap-1">
						<span className="w-10 h-3 md:h-4 rounded-full bg-transparent"></span>
						<span className="w-64 md:w-96 h-3 md:h-4 rounded-full bg-red-300/70"></span>
						<span className="w-10 h-3 md:h-4 rounded-full bg-purple-300/70"></span>
					</div>
					<div className="w-full flex gap-1">
						<span className="w-5 h-3 md:h-4 rounded-full bg-transparent"></span>
						<span className="w-32 h-3 md:h-4 rounded-full bg-yellow-300/70"></span>
						<span className="w-14 h-3 md:h-4 rounded-full bg-blue-300/70"></span>
						<span className="w-28 h-3 md:h-4 rounded-full bg-teal-300/70"></span>
					</div>
					<div className="w-full flex gap-1">
						<span className="w-20 h-3 md:h-4 rounded-full bg-green-300/70"></span>
						<span className="w-24 h-3 md:h-4 rounded-full bg-red-300/70"></span>
						<span className="w-16 h-3 md:h-4 rounded-full bg-blue-300/70"></span>
						<span className="w-20 h-3 md:h-4 rounded-full bg-purple-300/70"></span>
					</div>
				</div>
			</section>

			{/* about section */}
			<section
				id="aboutme"
				className="mx-auto w-full md:w-3/4  flex flex-col justify-start items-start gap-5">
				<h1 className="text-xl uppercase text-blue-400 font-bold flex justify-center items-center gap-2">
					About Me <span className="w-4 h-1 bg-blue-400 rounded-2xl"></span>
				</h1>

				<div className="w-full flex flex-col justify-center items-start gap-3">
					<h1 className="text-2xl text-slate-100 font-semibold">
						Hi I&apos;m Faizan Karamat
					</h1>
					<p className="text-pretty text-lg md:text-xl font-medium text-slate-200">
						I&apos;m a self-taught Full Stack Developer with a focus on the MERN
						stack (that&apos;s fancy talk for MongoDB, Express, React, and
						Node.js). I&apos;ve been at it for over 2 years now, and I&apos;m
						especially pumped about building user interfaces with tools like
						Next.js and Svelte. My code isn&apos;t just functional, it&apos;s
						fun to use! Beyond web development, I&apos;m diving into the world
						of AI – machine learning and deep learning specifically. I&apos;m
						passionate about using technology to make things not just new, but
						better, more efficient, and way more user-friendly.
					</p>
				</div>
			</section>

			{/* projects section */}
			<section
				id="work"
				className="mx-auto w-full md:w-3/4  flex flex-col justify-start items-start gap-3">
				<h1 className="text-xl uppercase text-blue-400 font-bold flex justify-center items-center gap-2">
					Projects <span className="w-4 h-1 bg-blue-400 rounded-2xl"></span>
				</h1>

				<div className="w-full grid grid-cols-4 gap-5"></div>
			</section>

			{/* skills section */}
			<section
				id="skills"
				className="mx-auto w-full md:w-3/4  flex flex-col justify-start items-start gap-5">
				<h1 className="text-xl uppercase text-blue-400 font-bold flex justify-center items-center gap-2">
					Tools i use <span className="w-4 h-1 bg-blue-400 rounded-2xl"></span>
				</h1>
				<Tools />
			</section>

			{/* contact section */}
			<section
				id="contact"
				className="mx-auto w-full md:w-3/4 flex flex-col justify-start items-start gap-3">
				<h1 className="text-xl uppercase text-blue-400 font-bold flex justify-center items-center gap-2">
					Contact <span className="w-4 h-1 bg-blue-400 rounded-2xl"></span>
				</h1>

				<div className="w-full flex max-md:flex-col justify-start items-start gap-10">
					<div className="w-full flex flex-col justify-start items-start gap-4">
						<p className="text-lg text-slate-200">
							Got a question, proposal, project, or want to work together on
							something?
						</p>
						<a
							href="mailto:fznkrmt22503@gmail.com"
							className="inline-block bg-blue-500/50 text-white rounded px-3 py-2 hover:bg-blue-600/50 text-center font-bold">
							Send me an email
						</a>
					</div>
				</div>
			</section>
		</main>
	);
}
